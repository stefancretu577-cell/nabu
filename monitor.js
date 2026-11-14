/*!
 * Nabu · Monitor de fond pentru testul psiho-cognitiv (PERCLOS + calitatea datelor + raport structurat)
 * --------------------------------------------------------------------------------------------------
 * Ce face:
 *   - pornește camera frontală ASCUNS când începe testul și o oprește când testul se termină;
 *   - măsoară oboseala obiectiv (PERCLOS: cât timp ochii stau închiși lent), pe minute și pe etape ale testului;
 *   - urmărește calitatea măsurătorii (față vizibilă, lumină, poziția camerei);
 *   - la final întoarce un RAPORT STRUCTURAT (JSON) + o variantă HTML gata de afișat.
 * Ce NU face: nu salvează și nu trimite imagini; nu detectează emoții, stres sau „minciuni”.
 * Singurul element vizibil cât rulează: un indicator mic „Cameră activă” (obligatoriu pentru transparență).
 *
 * Utilizare (vezi și exemplul integrat în ASTRO-PSY):
 *   <script src="nabu-background-monitor.js"><\/script>
 *   const mon = NabuBackgroundMonitor.create({ astronaut: 'Ana' });
 *   if (await mon.requestConsent()) await mon.start({ test: 'ASTRO-PSY' });   // la „Începe testul”
 *   mon.mark('PVT');                                                         // opțional: etapa curentă
 *   const raport = await mon.stop({ selfReport: { kss: 6, sp: 4 }, testResults: { ... } }); // la final
 *   container.innerHTML = NabuBackgroundMonitor.renderReportHTML(raport);
 *
 * Fără cod de integrare (doar evenimente):
 *   window.dispatchEvent(new CustomEvent('nabu:test-start', { detail: { astronaut: 'Ana' } }));
 *   window.dispatchEvent(new CustomEvent('nabu:test-mark',  { detail: { phase: 'PVT' } }));
 *   window.dispatchEvent(new CustomEvent('nabu:test-end',   { detail: { selfReport: {...}, testResults: {...} } }));
 *   window.addEventListener('nabu:report', e => console.log(e.detail));     // raportul final
 *
 * Dependențe: niciuna de instalat. MediaPipe Face Landmarker 0.10.14 se încarcă de pe CDN la primul start.
 * Camera funcționează doar pe https:// sau http://localhost (nu din file://).
 */
(function (root) {
'use strict';

/* ======================= 1. CONFIGURARE ======================= */
const VERSION = '1.3.0';
const CFG = {
  closedThr: 0.80, reopenThr: 0.70, slowMs: 400, winMs: 60000, minValidFrac: 0.70, minWinMs: 20000,
  maxAngle: 25, maxDt: 250, warmupMs: 3000, closedRatio: 0.30, openQ: 0.60, closedQ: 0.02, blinkW: 0.20,
  refFrames: 1800, fps: 15, perclosAbs: 15, zFlag: 1.5, minBaseline: 3, sdFloor: 1.0,
  // încadrarea ochilor (coordonate ale imaginii, 0..1): ochii trebuie să stea în acest chenar
  frame: { xMin: 0.28, xMax: 0.72, yMin: 0.30, yMax: 0.72, wMin: 0.15, wMax: 0.65 },
  frameOutMs: 1000,                   // ochii în afara chenarului atât timp → pop-up
  frameBackMs: 500,                   // înapoi în chenar atât timp → pop-up-ul dispare
  suspendAfterMs: 10000,              // pop-up-ul „Revino în încadrare” afișat atât timp → test suspendat, „Ești OK?”
  suspendAnswerMs: 15000,
  promptCooldownMs: 120000,           // Nabu (fundal): cel puțin 2 minute între două mesaje către astronaut             // timp de răspuns la „Ești OK?”; apoi echipa e notificată de urgență
  qualityIssueFrac: 0.20,             // o problemă de cameră apare în raport dacă e prezentă în ≥ 20% din cadre
  MP_VER: '0.10.14',
  MODEL: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
  KEY_HIST: 'nabu.bgmon.v1.history', KEY_CONSENT: 'nabu.bgmon.v1.consent', SCHEMA: 'nabu.cognitive-report/1'
};
const T = (ro, en) => (root.NABU_EMBED ? en : ro);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const r1 = x => Math.round(x * 10) / 10;
function quantile(arr, q){ if (!arr.length) return null; const a = [...arr].sort((x, y) => x - y); return a[clamp(Math.round(q * (a.length - 1)), 0, a.length - 1)]; }
const ls = {
  get(k, d){ try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e){} }
};

/* ======================= 2. MOTORUL PERCLOS (pe minute și pe etape) ======================= */
class Engine {
  constructor(){
    this.t0 = null; this.prevT = null; this.ref = []; this.openRef = null; this.closedRef = null; this.refTick = 0;
    this.blinkRef = []; this.blinkBase = 0; this.warmMs = 0;
    this.windows = []; this.win = this.newWin(0);
    this.phases = []; this.setPhase('Început');
    this.closed = false; this.closeStart = 0; this.pend = []; this.slowDurs = [];
    this.lastClosure = 0; this.frames = 0; this.faceFrames = 0;
  }
  newWin(i){ return { i, totalMs: 0, validMs: 0, closedMs: 0, blinks: 0, slow: 0 }; }
  setPhase(name){ this.phase = { name, totalMs: 0, validMs: 0, closedMs: 0, blinks: 0, slow: 0 }; this.phases.push(this.phase); }
  /** f = { t, face, ear (deschiderea ochiului), blink (0..1|null), yaw, pitch } */
  push(f){
    this.frames++;
    if (this.t0 === null){ this.t0 = f.t; this.prevT = f.t; return; }
    const rawDt = f.t - this.prevT; this.prevT = f.t; if (rawDt <= 0) return;
    while (f.t - this.t0 >= (this.win.i + 1) * CFG.winMs){ this.windows.push(this.win); this.win = this.newWin(this.win.i + 1); }
    const span = Math.min(rawDt, CFG.winMs); this.win.totalMs += span; this.phase.totalMs += span;
    const dt = Math.min(rawDt, CFG.maxDt);
    const valid = f.face && f.ear != null && isFinite(f.ear) && Math.abs(f.yaw || 0) <= CFG.maxAngle && Math.abs(f.pitch || 0) <= CFG.maxAngle;
    if (f.face) this.faceFrames++;
    if (!valid) return;
    // autocalibrare personală: „deschis” = deschiderea obișnuită; „închis” = învățat din clipiri
    this.ref.push(f.ear); if (this.ref.length > CFG.refFrames) this.ref.shift();
    if (f.blink != null){ this.blinkRef.push(f.blink); if (this.blinkRef.length > CFG.refFrames) this.blinkRef.shift(); }
    if (this.openRef === null || ++this.refTick % 15 === 0){
      this.openRef = quantile(this.ref, CFG.openQ);
      const lo = quantile(this.ref, CFG.closedQ);
      this.closedRef = lo < this.openRef * 0.5 ? lo : this.openRef * CFG.closedRatio;
      if (this.blinkRef.length) this.blinkBase = quantile(this.blinkRef, 0.5);
    }
    this.warmMs += dt; if (this.warmMs < CFG.warmupMs) return;
    const open = this.openRef, closedRef = Math.min(this.closedRef, open * 0.6);
    const earClos = clamp((open - f.ear) / (open - closedRef), 0, 1);
    const bl = f.blink != null ? clamp((f.blink - this.blinkBase) / Math.max(0.2, 1 - this.blinkBase), 0, 1) : null;
    const closure = bl != null ? (1 - CFG.blinkW) * earClos + CFG.blinkW * bl : earClos;
    this.lastClosure = closure; this.win.validMs += dt; this.phase.validMs += dt;
    if (!this.closed && closure >= CFG.closedThr){ this.closed = true; this.closeStart = f.t; this.pend = [[this.win, this.phase, dt]]; }
    else if (this.closed && closure >= CFG.reopenThr) this.pend.push([this.win, this.phase, dt]);
    else if (this.closed) this.endClosure(f.t);
  }
  endClosure(t){
    this.closed = false; const dur = t - this.closeStart;
    if (dur >= CFG.slowMs){ for (const [w, p, d] of this.pend){ w.closedMs += d; p.closedMs += d; } this.win.slow++; this.phase.slow++; this.slowDurs.push(dur); }
    else { this.win.blinks++; this.phase.blinks++; }
    this.pend = [];
  }
  static stat(o, minMs){
    const frac = o.totalMs ? o.validMs / o.totalMs : 0, ok = frac >= CFG.minValidFrac && o.validMs >= minMs;
    return { durS: r1(o.totalMs / 1000), validPct: Math.round(frac * 100), valid: ok,
             perclos: ok ? r1(100 * o.closedMs / o.validMs) : null,
             blinksPerMin: o.validMs > 0 ? r1(o.blinks / (o.validMs / 60000)) : null, slowClosures: o.slow };
  }
  finish(){
    if (this.closed) this.endClosure(this.prevT);
    const all = [...this.windows, this.win].filter(w => w.totalMs > 0);
    const perMinute = all.map(w => ({ minute: w.i + 1, ...Engine.stat(w, CFG.minWinMs * CFG.minValidFrac) }));
    const merged = {};                                            // etapele cu același nume se adună
    for (const p of this.phases){ if (!p.totalMs) continue; const m = merged[p.name] || (merged[p.name] = { name: p.name, totalMs: 0, validMs: 0, closedMs: 0, blinks: 0, slow: 0 });
      ['totalMs', 'validMs', 'closedMs', 'blinks', 'slow'].forEach(k => m[k] += p[k]); }
    const perPhase = Object.values(merged).map(p => ({ phase: p.name, ...Engine.stat(p, 15000) }));
    const good = all.filter((w, k) => perMinute[k].valid);
    const vMs = good.reduce((s, w) => s + w.validMs, 0), tMs = all.reduce((s, w) => s + w.totalMs, 0);
    return {
      perclos: vMs ? r1(100 * good.reduce((s, w) => s + w.closedMs, 0) / vMs) : null,
      perclosMax: perMinute.some(m => m.valid) ? Math.max(...perMinute.filter(m => m.valid).map(m => m.perclos)) : null,
      blinksPerMin: vMs ? r1(good.reduce((s, w) => s + w.blinks, 0) / (vMs / 60000)) : null,
      slowClosures: all.reduce((s, w) => s + w.slow, 0),
      meanSlowMs: this.slowDurs.length ? Math.round(this.slowDurs.reduce((a, b) => a + b, 0) / this.slowDurs.length) : null,
      validPct: tMs ? Math.round(100 * all.reduce((s, w) => s + w.validMs, 0) / tMs) : 0,
      facePct: this.frames ? Math.round(100 * this.faceFrames / this.frames) : 0,
      validMinutes: perMinute.filter(m => m.valid).length, totalMinutes: perMinute.length,
      perMinute, perPhase
    };
  }
}

/* ======================= 3. CALITATEA CAMEREI ======================= */
function adviseCamera(g){
  const a = [];
  if (!g || !g.face) return [{ k: 'face', msg: 'fața nu a fost vizibilă' }];
  if (g.lum != null && g.lum < 50) a.push({ k: 'dark', msg: 'lumină prea slabă' });
  else if (g.lum != null && g.faceLum != null && g.faceLum < 0.65 * g.lum) a.push({ k: 'back', msg: 'lumină în spatele astronautului (contralumină)' });
  if (g.w < 0.15) a.push({ k: 'far', msg: 'astronautul prea departe de cameră' });
  else if (g.w > 0.65) a.push({ k: 'near', msg: 'astronautul prea aproape de cameră' });
  if (g.cx < 0.3 || g.cx > 0.7) a.push({ k: 'side', msg: 'fața la marginea cadrului' });
  if (g.cy < 0.22 || g.cy > 0.68) a.push({ k: 'vert', msg: 'camera înclinată prea sus sau prea jos' });
  if (Math.abs(g.yaw || 0) > 20) a.push({ k: 'yaw', msg: 'capul întors față de cameră' });
  if (g.lookDown != null && g.lookDown > 0.45) a.push({ k: 'gazeDown', msg: 'privirea în jos față de cameră (camera deasupra ochilor), pleoapele par mai închise' });
  else if (g.lookUp != null && g.lookUp > 0.45) a.push({ k: 'gazeUp', msg: 'camera sub nivelul ochilor' });
  if (g.irisPx != null && g.irisPx < 10) a.push({ k: 'small', msg: 'ochii prea mici în imagine (rezoluție sau distanță)' });
  return a;
}
const QUALITY_TIPS = {
  face: 'Așezați dispozitivul astfel încât fața să rămână în cadru pe toată durata testului.',
  dark: 'Aprindeți o lumină în fața astronautului.', back: 'Evitați fereastra sau lampa din spatele astronautului.',
  far: 'Apropiați dispozitivul (40–70 cm).', near: 'Depărtați puțin dispozitivul.', side: 'Centrați fața în cadru.',
  vert: 'Înclinați camera spre față.', yaw: 'Camera trebuie să fie în fața astronautului, nu lateral.',
  gazeDown: 'Puneți camera la nivelul ochilor sau fereastra testului chiar sub cameră.', gazeUp: 'Ridicați camera la nivelul ochilor.',
  small: 'Apropiați dispozitivul sau folosiți o cameră cu rezoluție mai mare.'
};

/* ======================= 4. SURSE: camera (MediaPipe) și simulare ======================= */
const R_EYE = [33, 160, 158, 133, 153, 144], L_EYE = [362, 385, 387, 263, 373, 380];
const LID_R = [[159, 145], [158, 153]], LID_L = [[386, 374], [385, 380]], IRIS_R = [469, 470, 471, 472], IRIS_L = [474, 475, 476, 477];
function ear(L, idx, W, H){ const p = idx.map(i => ({ x: L[i].x * W, y: L[i].y * H })), d = (a, b) => Math.hypot(a.x - b.x, a.y - b.y); const h = d(p[0], p[3]); return h < 1e-6 ? null : (d(p[1], p[5]) + d(p[2], p[4])) / (2 * h); }
function irisOpen(L, lids, iris, W, H){
  const P = i => ({ x: L[i].x * W, y: L[i].y * H }), d = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const diam = (d(P(iris[0]), P(iris[2])) + d(P(iris[1]), P(iris[3]))) / 2;
  if (diam < 2) return { open: null, diam };
  return { open: lids.reduce((s, [u, l]) => s + d(P(u), P(l)), 0) / lids.length / diam, diam };
}
function headAngles(m){
  if (!m || !m.data) return { yaw: 0, pitch: 0 };
  const r = (i, j) => m.data[j * 4 + i];
  let pitch = Math.atan2(r(2, 1), r(2, 2)) * 180 / Math.PI; if (pitch > 90) pitch -= 180; if (pitch < -90) pitch += 180;
  return { yaw: Math.asin(clamp(-r(2, 0), -1, 1)) * 180 / Math.PI, pitch };
}
let landmarkerP = null;
function loadLandmarker(){
  if (landmarkerP) return landmarkerP;
  landmarkerP = (async () => {
    const base = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${CFG.MP_VER}`;
    const vision = await import(base + '/vision_bundle.mjs');
    const files = await vision.FilesetResolver.forVisionTasks(base + '/wasm');
    const o = d => ({ baseOptions: { modelAssetPath: CFG.MODEL, delegate: d }, runningMode: 'VIDEO', numFaces: 1, outputFaceBlendshapes: true, outputFacialTransformationMatrixes: true });
    try { return await vision.FaceLandmarker.createFromOptions(files, o('GPU')); } catch (e){ return await vision.FaceLandmarker.createFromOptions(files, o('CPU')); }
  })();
  landmarkerP.catch(() => { landmarkerP = null; });
  return landmarkerP;
}
class CameraSource {
  constructor(){ this.stream = null; this.timer = null; this.video = null; this.cv = null; this.n = 0; this.lum = null; this.faceLum = null; }
  async start(onFrame){
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error('Camera nu e disponibilă aici (pagina trebuie deschisă prin https sau http://localhost).');
    this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
    const v = this.video = document.createElement('video');
    v.playsInline = true; v.muted = true; v.setAttribute('aria-hidden', 'true');
    v.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;left:-10px;top:-10px';
    document.body.appendChild(v); v.srcObject = this.stream; await v.play().catch(() => {});
    this.focusOnEyes = this.setupFocus(this.stream.getVideoTracks()[0]);
    let lm;
    try { lm = await loadLandmarker(); }
    catch (e){ const err = new Error('Modelul de urmărire a feței nu s-a putut descărca. Verifică conexiunea la internet.'); err.name = 'ModelError'; throw err; }
    if (!this.stream) return;                                     // oprit între timp
    let lastTs = -1;
    const tick = () => {
      if (!this.stream) return;
      const now = performance.now();
      if (window.__nabuBusy){ this.timer = setTimeout(tick, 250); return; }   // Nabu is animating: skip this frame
      if (v.readyState >= 2 && v.videoWidth){
        const ts = Math.max(now, lastTs + 1); lastTs = ts;
        let f = { t: now, face: false, ear: null, blink: null, yaw: 0, pitch: 0, geo: { face: false, lum: this.lum } };
        try {
          const res = lm.detectForVideo(v, ts);
          if (res.faceLandmarks && res.faceLandmarks.length){
            const L = res.faceLandmarks[0], W = v.videoWidth, H = v.videoHeight;
            let open = null, irisPx = null;
            if (L.length >= 478){ const a = irisOpen(L, LID_R, IRIS_R, W, H), b = irisOpen(L, LID_L, IRIS_L, W, H);
              const vals = [a.open, b.open].filter(x => x != null); open = vals.length ? vals.reduce((s, x) => s + x, 0) / vals.length : null; irisPx = (a.diam + b.diam) / 2; }
            if (open == null){ const e1 = ear(L, R_EYE, W, H), e2 = ear(L, L_EYE, W, H); open = (e1 != null && e2 != null) ? (e1 + e2) / 2 : (e1 ?? e2); }
            const cats = (res.faceBlendshapes && res.faceBlendshapes[0] && res.faceBlendshapes[0].categories) || [];
            const g = n => { const c = cats.find(c => c.categoryName === n); return c ? c.score : null; };
            const avg = (a, b) => (a != null && b != null) ? (a + b) / 2 : (a ?? b ?? null);
            const ang = headAngles(res.facialTransformationMatrixes && res.facialTransformationMatrixes[0]);
            let x0 = 1, x1 = 0, y0 = 1, y1 = 0; for (const p of L){ if (p.x < x0) x0 = p.x; if (p.x > x1) x1 = p.x; if (p.y < y0) y0 = p.y; if (p.y > y1) y1 = p.y; }
            const ei = L.length >= 478 ? [468, 473] : [33, 263], eyeX = (L[ei[0]].x + L[ei[1]].x) / 2, eyeY = (L[ei[0]].y + L[ei[1]].y) / 2;
            if (++this.n % 10 === 0) this.sampleLight(x0, y0, x1, y1);
            f = { t: now, face: true, ear: open, blink: avg(g('eyeBlinkLeft'), g('eyeBlinkRight')), yaw: ang.yaw, pitch: ang.pitch,
                  geo: { face: true, cx: (x0 + x1) / 2, cy: eyeY, w: x1 - x0, eyeX, eyeY, eyes: [{ x: L[ei[0]].x, y: L[ei[0]].y }, { x: L[ei[1]].x, y: L[ei[1]].y }], yaw: ang.yaw, irisPx,
                         lookDown: avg(g('eyeLookDownLeft'), g('eyeLookDownRight')), lookUp: avg(g('eyeLookUpLeft'), g('eyeLookUpRight')), lum: this.lum, faceLum: this.faceLum } };
            if (this.focusOnEyes) this.focusOnEyes(eyeX, eyeY);
          }
        } catch (e){ /* un cadru ratat nu oprește monitorul */ }
        onFrame(f);
      }
      this.timer = setTimeout(tick, 1000 / CFG.fps);
    };
    tick();
  }
  /** Focus și expunere pe ochi, doar dacă dispozitivul permite (de ex. Chrome pe Android). */
  setupFocus(track){
    let caps = {}; try { caps = track.getCapabilities ? track.getCapabilities() : {}; } catch (e){}
    const adv = {};
    if (Array.isArray(caps.focusMode) && caps.focusMode.includes('continuous')) adv.focusMode = 'continuous';
    if (Array.isArray(caps.exposureMode) && caps.exposureMode.includes('continuous')) adv.exposureMode = 'continuous';
    if (Object.keys(adv).length) track.applyConstraints({ advanced: [adv] }).catch(() => {});
    if (caps.pointsOfInterest === undefined) return null;
    let last = 0;
    return (x, y) => { const n = performance.now(); if (n - last < 1500) return; last = n; track.applyConstraints({ advanced: [{ pointsOfInterest: [{ x: clamp(x, 0, 1), y: clamp(y, 0, 1) }] }] }).catch(() => {}); };
  }
  sampleLight(x0, y0, x1, y1){
    try {
      const c = this.cv || (this.cv = Object.assign(document.createElement('canvas'), { width: 64, height: 36 }));
      const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(this.video, 0, 0, 64, 36);
      const d = g.getImageData(0, 0, 64, 36).data; let s = 0, n = 0, fs = 0, fn = 0;
      for (let y = 0; y < 36; y++) for (let x = 0; x < 64; x++){ const i = (y * 64 + x) * 4, Y = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]; s += Y; n++;
        const u = x / 64, w = y / 36; if (u >= x0 && u <= x1 && w >= y0 && w <= y1){ fs += Y; fn++; } }
      this.lum = s / n; this.faceLum = fn ? fs / fn : null;
    } catch (e){}
  }
  stop(){
    clearTimeout(this.timer); this.timer = null;
    if (this.stream){ this.stream.getTracks().forEach(t => t.stop()); this.stream = null; }
    if (this.video){ this.video.srcObject = null; this.video.remove(); this.video = null; }
  }
}
function* synthSignal(tired, seed){
  let s = seed || 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const dt = 1000 / CFG.fps; let t = 0, nextBlink = 1500, nextSlow = tired ? 6000 : Infinity, closeUntil = -1;
  const awayFrom = tired ? 25000 : Infinity, awayTo = awayFrom + 20000;  // demo: ochii ies din chenar ~20 s (pop-up, apoi test suspendat)
  while (true){
    if (t >= nextBlink && closeUntil < t){ closeUntil = t + 120 + rnd() * 80; nextBlink = t + (tired ? 2000 : 3000) + rnd() * 2500; }
    if (t >= nextSlow && closeUntil < t){ closeUntil = t + 600 + rnd() * 1600; nextSlow = t + 5000 + rnd() * 7000; }
    const c = t < closeUntil;
    yield { t, face: true, ear: c ? 0.12 + rnd() * 0.03 : 0.85 + (rnd() - 0.5) * 0.06, blink: c ? 0.9 : 0.3, yaw: (rnd() - 0.5) * 8, pitch: (rnd() - 0.5) * 8,
            geo: (() => { const away = t >= awayFrom && t < awayTo, cx = away ? 0.84 : 0.5 + (rnd() - 0.5) * 0.02, cy = 0.40 + (rnd() - 0.5) * 0.02;
                          return { face: true, cx, cy, w: 0.33, eyeX: cx, eyeY: cy, eyes: [{ x: cx - 0.06, y: cy }, { x: cx + 0.06, y: cy }], yaw: 0, irisPx: 22, lookDown: 0.1, lookUp: 0.1, lum: 120, faceLum: 118 }; })() };
    t += dt;
  }
}
class SimSource {
  constructor(tired){ this.tired = tired; this.timer = null; }
  async start(onFrame){ const g = synthSignal(this.tired, (Date.now() % 100000) + 1), t0 = performance.now();
    this.timer = setInterval(() => { const f = g.next().value; f.t += t0; onFrame(f); }, 1000 / CFG.fps); }
  stop(){ clearInterval(this.timer); this.timer = null; }
}

/* ======================= 5. RAPORTUL STRUCTURAT ======================= */
function buildReport({ meta, fatigue, quality, selfReport, testResults, history, error, framing = null }){
  const real = meta.source === 'camera';
  const prev = history.filter(h => h.astronaut === meta.astronaut && h.perclos != null).map(h => h.perclos);
  let baseline = { sessions: prev.length, mean: null, sd: null, z: null, basis: null };
  let objTired = null;
  if (fatigue && fatigue.perclos != null){
    if (prev.length >= CFG.minBaseline){
      const m = prev.reduce((a, b) => a + b, 0) / prev.length;
      const sd = Math.max(Math.sqrt(prev.reduce((a, b) => a + (b - m) ** 2, 0) / (prev.length - 1)), CFG.sdFloor, 0.05 * m);
      baseline = { sessions: prev.length, mean: r1(m), sd: r1(sd), z: Math.round((fatigue.perclos - m) / sd * 100) / 100, basis: 'baseline personal' };
      objTired = baseline.z >= CFG.zFlag;
    } else { baseline.basis = `reper orientativ ${CFG.perclosAbs}%; baseline personal în construcție, ${prev.length}/${CFG.minBaseline} sesiuni`; objTired = fatigue.perclos >= CFG.perclosAbs; }
  }
  const kss = selfReport && selfReport.kss != null ? +selfReport.kss : null, sp = selfReport && selfReport.sp != null ? +selfReport.sp : null;
  const selfTired = (kss == null && sp == null) ? null : ((kss ?? 0) >= 7 || (sp ?? 0) >= 5);

  let status, headline, level;
  if (objTired == null){ status = 'date insuficiente'; level = 'info';
    headline = error ? 'Măsurarea cu camera nu a fost posibilă. Raportul conține doar autoevaluarea și rezultatele testului.' : 'Nu s-au strâns destule cadre valide pentru PERCLOS.'; }
  else if (objTired && selfTired){ status = 'odihnă recomandată'; level = 'bad'; headline = 'Oboseala declarată este confirmată și de măsurători. Odihna are prioritate.'; }
  else if (objTired && !selfTired){ status = 'atenție'; level = 'warn'; headline = 'Măsurătorile arată semne de oboseală. O pauză sau mai mult somn ar putea ajuta.'; }
  else if (!objTired && selfTired){ status = 'atenție'; level = 'warn'; headline = 'Te simți obosit, deși măsurătorile sunt normale. Senzația ta contează: ia-o în considerare.'; }
  else { status = 'în regulă'; level = 'ok'; headline = 'Nu apar semne obiective de oboseală, iar autoevaluarea e în concordanță.'; }

  const points = [];
  if (fatigue && fatigue.perclos != null){
    points.push(`PERCLOS ${fatigue.perclos}% pe ${fatigue.validMinutes} ${fatigue.validMinutes === 1 ? 'minut valid' : 'minute valide'}` +
      (baseline.z != null ? ` (z ${baseline.z >= 0 ? '+' : ''}${baseline.z} față de media ta de ${baseline.mean}%)` : ` (${baseline.basis})`) + '.');
    const hi = fatigue.perPhase.filter(p => p.valid).sort((a, b) => b.perclos - a.perclos)[0];
    if (hi && fatigue.perPhase.filter(p => p.valid).length > 1) points.push(`Cele mai multe închideri lente ale ochilor au apărut în etapa „${hi.phase}” (PERCLOS ${hi.perclos}%).`);
    points.push(`${fatigue.slowClosures} închideri lente ale ochilor` + (fatigue.meanSlowMs ? `, cu durata medie de ${fatigue.meanSlowMs} ms` : '') + `; ${fatigue.blinksPerMin ?? '–'} clipiri pe minut.`);
  }
  if (selfTired != null) points.push(`Autoevaluare: ${selfTired ? 'obosit' : 'bine'} (KSS ${kss ?? '–'}, Samn-Perelli ${sp ?? '–'}).`);
  if (framing && framing.outCount) points.push(`Ochii au ieșit din încadrare de ${framing.outCount} ${framing.outCount === 1 ? 'dată' : 'ori'}, în total ${framing.outS} s.`);
  const susp = (framing && framing.suspensions) || [], notified = susp.filter(x => x.teamNotified);
  if (susp.length) points.push(`Testul a fost suspendat de ${susp.length} ${susp.length === 1 ? 'dată' : 'ori'} („Ești OK?”): ` +
    susp.map(x => `la ${x.atS} s, ${x.answer ? 'răspuns după ' + (x.rtMs / 1000).toFixed(1) + ' s' : 'fără răspuns, echipa notificată de urgență'}`).join('; ') + '.');
  if (notified.length){ level = 'bad'; status = 'urgență'; headline = 'Astronautul nu a răspuns la verificarea „Ești OK?”. Echipa a fost notificată de urgență.'; }
  if (quality.issues.length) points.push('Calitatea măsurătorii: ' + quality.issues.map(i => `${i.msg} (${i.pct}% din timp)`).join('; ') + '.');
  if (!real) points.push('Semnal SIMULAT (demo): valorile nu provin de la o persoană și nu intră în baseline.');

  const recommendations = [];
  if (level === 'bad') recommendations.push('Amână sarcinile critice și prioritizează somnul.');
  if (level === 'warn' && objTired) recommendations.push('O pauză scurtă și o verificare a somnului din ultimele nopți.');
  if (objTired) recommendations.push('Dacă rezultatul se repetă în mai multe zile, discută cu medicul de zbor.');
  quality.issues.forEach(i => recommendations.push(QUALITY_TIPS[i.k]));

  return {
    schema: CFG.SCHEMA, generatedAt: new Date().toISOString(),
    astronaut: meta.astronaut, test: { name: meta.test, startedAt: meta.startedAt, endedAt: meta.endedAt, durationS: meta.durationS },
    source: { type: meta.source, simulated: !real, error: error || null },
    summary: { status, level, headline, points, recommendations: [...new Set(recommendations)] },
    selfReport: { kss, samnPerelli: sp, ...(selfReport || {}) },
    fatigue: fatigue ? { perclos: fatigue.perclos, perclosMax: fatigue.perclosMax, blinksPerMin: fatigue.blinksPerMin, slowClosures: fatigue.slowClosures,
                         meanSlowMs: fatigue.meanSlowMs, validMinutes: fatigue.validMinutes, totalMinutes: fatigue.totalMinutes,
                         perMinute: fatigue.perMinute, perPhase: fatigue.perPhase, baseline, objectiveTired: objTired } : null,
    concordance: { selfTired, objectiveTired: objTired, message: headline },
    dataQuality: { validPct: fatigue ? fatigue.validPct : 0, facePct: fatigue ? fatigue.facePct : 0, hiddenS: meta.hiddenS, issues: quality.issues, framing },
    testResults: testResults || null,
    limits: ['PERCLOS e un indicator de vigilență, nu un diagnostic.', 'Nu se detectează emoții, stres sau sinceritatea răspunsurilor.',
             'Valorile depind de lumină, ochelari și poziția camerei; minutele cu sub 70% cadre valide nu primesc valoare.',
             'Pragurile sunt orientative; decizia aparține echipajului și medicului de zbor.'],
    privacy: 'Procesare locală. Nu s-au salvat și nu s-au trimis imagini; raportul conține doar numere.'
  };
}

/* ======================= 6. AFIȘAREA RAPORTULUI (HTML) ======================= */
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
function renderReportHTML(r){
  const col = { ok: ['#DFF2E7', '#1E7F4E'], warn: ['#FFF2CC', '#9A6B00'], bad: ['#FBE0E0', '#B42323'], info: ['#E9EDF4', '#5B6782'] }[r.summary.level] || ['#E9EDF4', '#5B6782'];
  const F = r.fatigue, T = r.testResults;
  const td = 'style="padding:5px 8px;border-bottom:1px solid #D5DBE6;text-align:left"';
  const tbl = (head, rows) => `<table style="border-collapse:collapse;width:100%;font-size:13px"><thead><tr>${head.map(h => `<th ${td}>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(rw => `<tr>${rw.map(c => `<td ${td}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const tag = ok => ok ? '<span style="color:#1E7F4E">valid</span>' : '<span style="color:#B42323">nevalid</span>';
  const sec = (title, body) => `<section style="display:grid;gap:8px"><h3 style="margin:0;font-size:15px">${esc(title)}</h3>${body}</section>`;
  const parts = [];
  parts.push(`<div style="background:${col[0]};border-left:5px solid ${col[1]};border-radius:8px;padding:12px 14px">
    <div style="font:600 12px ui-monospace,monospace;color:${col[1]};text-transform:uppercase">${esc(r.summary.status)}</div>
    <div style="font-size:17px;font-weight:600;margin-top:4px">${esc(r.summary.headline)}</div></div>`);
  parts.push(sec('Pe scurt', `<ul style="margin:0;padding-left:20px;line-height:1.6">${r.summary.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`));
  if (r.summary.recommendations.length) parts.push(sec('Recomandări', `<ul style="margin:0;padding-left:20px;line-height:1.6">${r.summary.recommendations.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`));
  if (F){
    parts.push(sec('Oboseală pe etapele testului', tbl(['Etapă', 'Durată', 'PERCLOS', 'Închideri lente', 'Clipiri/min', 'Cadre valide', ''],
      F.perPhase.map(p => [esc(p.phase), p.durS + ' s', p.perclos != null ? p.perclos + '%' : '–', p.slowClosures, p.blinksPerMin ?? '–', p.validPct + '%', tag(p.valid)]))));
    parts.push(sec('Oboseală pe minute', tbl(['Minut', 'PERCLOS', 'Închideri lente', 'Clipiri/min', 'Cadre valide', ''],
      F.perMinute.map(m => [m.minute, m.perclos != null ? m.perclos + '%' : '–', m.slowClosures, m.blinksPerMin ?? '–', m.validPct + '%', tag(m.valid)]))));
  }
  if (T){
    const rows = (T.rows || []).map(([k, v]) => [esc(k), esc(v)]);
    if (T.index != null) rows.push(['Indice ASTRO-PSY', esc(T.index) + ' / 100']);
    if (T.verdict) rows.push(['Verdict ASTRO-PSY', esc(T.verdict)]);
    if (T.pvt) rows.push(['PVT', `timp mediu ${esc(Math.round(T.pvt.meanRT))} ms · ${esc(T.pvt.lapses500 ?? T.pvt.lapses)} lapsusuri · ${esc(T.pvt.falseStarts)} starturi false`]);
    if (T.cog) rows.push(['Teste cognitive', Object.entries(T.cog).map(([k, v]) => `${esc(k)}: ${esc(v)}`).join(' · ')]);
    if (rows.length) parts.push(sec('Rezultatele testului', tbl(['Măsură', 'Valoare'], rows)));
  }
  parts.push(sec('Calitatea datelor', `<p style="margin:0;font-size:13px">Cadre valide: ${r.dataQuality.validPct}% · față vizibilă: ${r.dataQuality.facePct}%` +
    (r.dataQuality.hiddenS ? ` · aplicația a stat în fundal ${r.dataQuality.hiddenS} s` : '') + ` · sursă: ${r.source.simulated ? 'simulare' : 'camera frontală'}${r.source.error ? ' · ' + esc(r.source.error) : ''}</p>`));
  parts.push(`<p style="margin:0;font-size:12px;color:#5B6782">${r.limits.map(esc).join(' ')} ${esc(r.privacy)}</p>`);
  return `<div class="nabu-report" style="display:grid;gap:14px;font:14px/1.5 system-ui,sans-serif;color:inherit">${parts.join('')}</div>`;
}
function downloadReport(r, kind = 'json'){
  const name = `nabu-raport-${(r.astronaut || 'astronaut').replace(/\W+/g, '_')}-${r.generatedAt.slice(0, 16).replace(/[:T]/g, '-')}`;
  const blob = kind === 'html'
    ? new Blob([`<!DOCTYPE html><html lang="ro"><head><meta charset="utf-8"><title>Raport Nabu</title></head><body style="max-width:860px;margin:24px auto;padding:0 16px"><h1 style="font:600 22px system-ui">Raport Nabu · ${esc(r.astronaut)} · ${esc(new Date(r.generatedAt).toLocaleString('ro-RO'))}</h1>${renderReportHTML(r)}</body></html>`], { type: 'text/html' })
    : new Blob([JSON.stringify(r, null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name + (kind === 'html' ? '.html' : '.json'); a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ======================= 7. ACORD ȘI INDICATOR ======================= */
function consentDialog(){
  return new Promise(resolve => {
    const w = document.createElement('div');
    w.style.cssText = 'position:fixed;inset:0;background:rgba(11,31,58,.6);display:flex;align-items:center;justify-content:center;padding:16px;z-index:2147483000;font:14px/1.5 system-ui,sans-serif';
    w.innerHTML = `<div role="dialog" aria-modal="true" style="background:#fff;color:#16213A;border-radius:14px;max-width:500px;padding:22px">
      <h2 style="margin:0 0 8px;font-size:18px">Măsurarea oboselii în timpul testului</h2>
      <p style="margin:0 0 8px">Cât durează testul, Nabu poate folosi camera frontală ca să măsoare cât timp ochii stau închiși lent (PERCLOS), un semn obiectiv de oboseală.</p>
      <ul style="margin:0 0 14px;padding-left:18px"><li>Camera pornește doar în timpul testului și se oprește la final.</li>
      <li>Nu se salvează și nu se trimite nicio imagine. Rămân doar numere, pe acest dispozitiv.</li>
      <li>Nu se detectează emoții, stres sau „minciuni”.</li><li>Poți retrage acordul oricând.</li></ul>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button data-a="1" style="font:600 14px system-ui;border:0;border-radius:8px;padding:9px 14px;background:#D9581A;color:#fff;cursor:pointer">Sunt de acord</button>
      <button data-a="0" style="font:600 14px system-ui;border:1px solid #D5DBE6;border-radius:8px;padding:9px 14px;background:#E9EDF4;color:#16213A;cursor:pointer">Nu acum</button></div></div>`;
    w.addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (!b) return; w.remove(); resolve(b.dataset.a === '1'); });
    document.body.appendChild(w);
  });
}
/** Explică pe înțeles de ce nu a pornit camera. */
function friendlyError(e){
  const n = e && e.name, m = (e && e.message) || String(e);
  if (n === 'NotAllowedError' || n === 'PermissionDeniedError') return 'accesul la cameră e blocat. Apasă pe pictograma camerei (sau a lacătului) din bara de adrese, alege „Permite”, reîncarcă pagina și pornește din nou testul.';
  if (n === 'NotFoundError' || n === 'OverconstrainedError') return 'nu s-a găsit nicio cameră pe acest dispozitiv.';
  if (n === 'NotReadableError' || n === 'TrackStartError') return 'camera e folosită de altă aplicație (de ex. Zoom, Teams, alt tab). Închide-o și pornește din nou testul.';
  if (n === 'SecurityError') return 'pagina nu are voie să folosească camera aici (de ex. în versiunea găzduită). Deschide fișierul pe calculator prin http://localhost.';
  if (n === 'ModelError') return m;
  if (!window.isSecureContext) return 'camera merge doar pe https:// sau http://localhost.';
  return m;
}
/** Mesaj vizibil câteva secunde, deasupra indicatorului. */
function notice(text, ms){
  if (window.NABU_EMBED) return;
  let el = document.getElementById('nabu-bgmon-notice');
  if (!el){ el = document.createElement('div'); el.id = 'nabu-bgmon-notice'; el.setAttribute('role', 'alert');
    el.style.cssText = 'position:fixed;left:12px;bottom:48px;max-width:min(460px,calc(100vw - 24px));z-index:2147482001;background:#16213A;color:#fff;font:13px/1.45 system-ui,sans-serif;padding:10px 14px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.25);cursor:pointer';
    el.addEventListener('click', () => el.remove()); document.body.appendChild(el); }
  el.textContent = text; clearTimeout(notice._t); notice._t = setTimeout(() => el.remove(), ms || 6000);
}
/** Verifică încadrarea ochilor. Întoarce { ok, msg }. Mesajele sunt pentru imaginea în oglindă (ca la un selfie). */
function frameCheck(g, F = CFG.frame){
  if (root.NABU_EMBED) return frameCheckEN(g, F);
  if (!g || !g.face || g.eyeX == null) return { ok: false, msg: 'Nu îți văd ochii. Așază-te cu fața spre cameră.' };
  const mx = 1 - g.eyeX, y = g.eyeY, m = [];
  if (g.w != null && g.w < F.wMin) m.push('apropie-te de cameră');
  else if (g.w != null && g.w > F.wMax) m.push('depărtează-te puțin de cameră');
  if (mx < F.xMin) m.push('mută-te spre dreapta →');
  else if (mx > F.xMax) m.push('← mută-te spre stânga');
  if (y < F.yMin) m.push('coboară puțin capul sau înclină camera în sus ↑');
  else if (y > F.yMax) m.push('ridică puțin capul sau înclină camera în jos ↓');
  return m.length ? { ok: false, msg: 'Ochii au ieșit din încadrare: ' + m.join(', ') + '.' } : { ok: true, msg: '' };
}
function frameCheckEN(g, F){
  if (!g || !g.face || g.eyeX == null) return { ok: false, msg: "I can't see your eyes. Face the screen." };
  const mx = 1 - g.eyeX, y = g.eyeY, m = [];
  if (g.w != null && g.w < F.wMin) m.push('come a little closer'); else if (g.w != null && g.w > F.wMax) m.push('move back a little');
  if (mx < F.xMin) m.push('move to your right →'); else if (mx > F.xMax) m.push('← move to your left');
  if (y < F.yMin) m.push('lower your head a little ↑'); else if (y > F.yMax) m.push('raise your head a little ↓');
  return m.length ? { ok: false, msg: 'Your eyes left the camera view: ' + m.join(', ') + '.' } : { ok: true, msg: '' };
}
/** Chenarul din stânga sus: zona țintă și poziția ochilor (fără imagine video). */
const FrameUI = {
  el: null, cv: null, pop: null,
  show(){
    if (window.NABU_EMBED) return;
    if (this.el) return;
    const el = this.el = document.createElement('div'); el.id = 'nabu-bgmon-frame'; el.setAttribute('aria-hidden', 'true');
    el.style.cssText = 'position:fixed;left:12px;top:12px;z-index:2147482002;background:rgba(11,31,58,.92);color:#fff;border-radius:12px;padding:8px;font:11px system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25);pointer-events:none';
    el.innerHTML = '<div style="margin:0 0 5px 2px;opacity:.85">Încadrarea ochilor</div>';
    const cv = this.cv = document.createElement('canvas'); cv.width = 176; cv.height = 99; cv.style.cssText = 'display:block;width:176px;height:99px;border-radius:7px;background:#0B1020';
    el.appendChild(cv);
    const st = this.st = document.createElement('div'); st.style.cssText = 'margin:5px 2px 0;display:flex;justify-content:space-between;gap:8px'; el.appendChild(st);
    document.body.appendChild(el); this.draw(null, false);
  },
  hide(){ if (this.el){ this.el.remove(); this.el = null; this.cv = null; this.st = null; } this.popup(false); },
  draw(g, ok){
    if (!this.cv) return;
    const c = this.cv.getContext('2d'), W = this.cv.width, H = this.cv.height, F = CFG.frame;
    c.clearRect(0, 0, W, H);
    if (this.st) this.st.innerHTML = `<span style="color:${ok ? '#5BD08F' : '#FF9A9A'}">${ok ? 'în chenar' : (g && g.face ? 'în afara chenarului' : 'ochii nu se văd')}</span><span style="opacity:.6">v${VERSION}</span>`;
    c.strokeStyle = ok ? '#5BD08F' : '#FF7A7A'; c.lineWidth = 2; c.setLineDash([5, 4]);
    c.strokeRect(F.xMin * W, F.yMin * H, (F.xMax - F.xMin) * W, (F.yMax - F.yMin) * H); c.setLineDash([]);
    if (g && g.face && g.eyes){
      c.fillStyle = ok ? '#5BD08F' : '#FF7A7A';
      for (const e of g.eyes){ c.beginPath(); c.arc((1 - e.x) * W, e.y * H, 4, 0, Math.PI * 2); c.fill(); }   // în oglindă
    } else { c.fillStyle = '#FF9A9A'; c.font = '11px system-ui'; c.textAlign = 'center'; c.fillText('ochii nu se văd', W / 2, H / 2 + 4); }
  },
  popup(on, msg){
    if (!on){ if (this.pop){ this.pop.remove(); this.pop = null; } return; }
    if (!this.pop){
      const p = this.pop = document.createElement('div'); p.id = 'nabu-bgmon-framepop'; p.setAttribute('role', 'alert');
      p.style.cssText = 'position:fixed;left:50%;top:18%;transform:translateX(-50%);z-index:2147483001;max-width:min(460px,calc(100vw - 24px));background:#fff;color:#16213A;border:4px solid #D9581A;border-radius:16px;padding:18px 20px;text-align:center;font:15px/1.5 system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.3);pointer-events:none';
      document.body.appendChild(p);
    }
    if (root.NABU_EMBED){ this.pop.innerHTML = `<div style="font-size:20px;font-weight:700;margin-bottom:6px">Back in view, please</div><div>${esc(msg)}</div><div style="font-size:12px;color:#5B6782;margin-top:6px">Nabu checks for fatigue in the background. You can carry on.</div>`; return; }
    this.pop.innerHTML = `<div style="font-size:20px;font-weight:700;margin-bottom:6px">Revino în încadrare</div><div>${esc(msg)}</div><div style="font-size:12px;color:#5B6782;margin-top:6px">Ochii trebuie să stea în chenarul din stânga sus. Testul continuă.</div>`;
  }
};
/** Ecran complet „Ești OK? Test suspendat”: blochează testul, sună continuu, așteaptă răspunsul. */
const SuspendUI = {
  w: null, timers: [], keyBlock: null,
  close(){ this.timers.forEach(t => clearTimeout(t) || clearInterval(t)); this.timers = []; if (this.keyBlock){ window.removeEventListener('keydown', this.keyBlock, true); window.removeEventListener('keyup', this.keyBlock, true); this.keyBlock = null; } if (this.w){ this.w.remove(); this.w = null; } }
};
function suspendOverlay(answerMs, onNoAnswer){
  return new Promise(resolve => {
    SuspendUI.close();
    const w = SuspendUI.w = document.createElement('div'); w.id = 'nabu-bgmon-suspend';
    w.style.cssText = 'position:fixed;inset:0;z-index:2147483600;background:rgba(120,14,14,.94);color:#fff;display:flex;align-items:center;justify-content:center;padding:20px;font:16px/1.5 system-ui,sans-serif;text-align:center';
    w.innerHTML = `<div role="alertdialog" aria-modal="true" aria-labelledby="nbm-sus" style="max-width:560px;width:100%">
      <div style="font:700 13px ui-monospace,monospace;letter-spacing:.12em;opacity:.85">${T('TEST SUSPENDAT', 'CHECK-IN')}</div>
      <h1 id="nbm-sus" style="margin:8px 0 10px;font-size:44px;line-height:1.1">${T('Ești OK?', 'Are you OK?')}</h1>
      <p data-m style="margin:0 0 22px;font-size:18px">${T('Răspunde, altfel echipa va fi notificată de urgență.', 'Please answer, otherwise the crew will be alerted.')}</p>
      <button data-ok style="font:700 22px system-ui;border:0;border-radius:14px;padding:18px 34px;background:#fff;color:#8C1414;cursor:pointer;min-width:260px">${T('Sunt OK', "I'm OK")}</button>
      <div data-c style="margin-top:16px;font:600 15px ui-monospace,monospace"></div></div>`;
    document.body.appendChild(w);
    // testul e blocat: tastele nu ajung la pagină (în afară de Enter/Spațiu pe buton)
    SuspendUI.keyBlock = e => { if (!w.contains(e.target) || !['Enter', ' '].includes(e.key)) { e.stopImmediatePropagation(); e.preventDefault(); } };
    window.addEventListener('keydown', SuspendUI.keyBlock, true); window.addEventListener('keyup', SuspendUI.keyBlock, true);
    const btn = w.querySelector('[data-ok]'); setTimeout(() => btn.focus(), 50);
    const t0 = performance.now(); let notified = false, settled = false;
    const alarm = setInterval(() => { beep(notified ? 520 : 880, 0.18); setTimeout(() => beep(notified ? 520 : 880, 0.18), 260); }, 700);   // beep continuu
    SuspendUI.timers.push(alarm);
    const tick = setInterval(() => {
      const left = Math.max(0, answerMs - (performance.now() - t0));
      const c = w.querySelector('[data-c]');
      if (!notified){
        c.textContent = T(`Echipa va fi notificată în ${Math.ceil(left / 1000)} s`, `The crew will be alerted in ${Math.ceil(left / 1000)} s`);
        if (left <= 0){
          notified = true; onNoAnswer();
          w.querySelector('[data-m]').textContent = T('Echipa a fost notificată de urgență. Dacă ești bine, apasă butonul.', 'The crew has been alerted. If you are fine, press the button.');
          c.textContent = T('Notificare trimisă · ', 'Alert sent · ') + new Date().toLocaleTimeString(root.NABU_EMBED ? 'en-GB' : 'ro-RO');
          w.style.background = 'rgba(70,0,0,.97)';
        }
      }
    }, 250);
    SuspendUI.timers.push(tick);
    btn.onclick = () => {
      if (settled) return; settled = true;
      const rtMs = Math.round(performance.now() - t0);
      SuspendUI.close();
      resolve({ answer: 'ok', rtMs, teamNotified: notified });
    };
  });
}
let audioCtx = null;
function beep(freq, dur){
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain(), t = audioCtx.currentTime;
    o.frequency.value = freq; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(audioCtx.destination); o.start(t); o.stop(t + dur + 0.02);
  } catch (e){}
}
function indicator(on, text){
  if (window.NABU_EMBED){ try { parent.postMessage({ src: 'psy', type: 'camera', on: !!on }, '*'); } catch (e){} return; }
  let el = document.getElementById('nabu-bgmon-indicator');
  if (!on){ if (el) el.remove(); return; }
  if (!el){ el = document.createElement('div'); el.id = 'nabu-bgmon-indicator'; el.setAttribute('role', 'status');
    el.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:2147482000;background:rgba(11,31,58,.85);color:#fff;font:12px system-ui,sans-serif;padding:5px 10px 5px 8px;border-radius:99px;display:flex;align-items:center;gap:6px;pointer-events:none';
    document.body.appendChild(el); }
  el.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#ff4d4d;box-shadow:0 0 6px #ff4d4d"></span>${esc(text)}`;
}

/* ======================= 8. MONITORUL ======================= */
function create(opts = {}){
  const o = Object.assign({ astronaut: 'Astronaut', source: 'camera', showIndicator: true, onStatus: null }, opts);
  let run = null;
  const status = s => { try { o.onStatus && o.onStatus(s); } catch (e){} };
  const onVis = () => { if (!run) return; if (document.hidden) run.hiddenAt = performance.now(); else if (run.hiddenAt){ run.hiddenMs += performance.now() - run.hiddenAt; run.hiddenAt = 0; } };

  const api = {
    get running(){ return !!run; },
    consent(){ return ls.get(CFG.KEY_CONSENT, null); },
    async requestConsent(){
      const c = ls.get(CFG.KEY_CONSENT, null); if (c && c.accepted) return true;          // „Nu acum” = întreabă din nou data viitoare
      const ok = await consentDialog(); ls.set(CFG.KEY_CONSENT, { accepted: ok, date: new Date().toISOString() }); return ok;
    },
    revokeConsent(){ ls.set(CFG.KEY_CONSENT, { accepted: false, date: new Date().toISOString() }); if (run) api.cancel(); },
    /** Pornește monitorul ascuns. Întoarce { ok, reason }. Testul trebuie să meargă oricum, chiar dacă ok = false. */
    async start(s = {}){
      if (run) api.cancel();
      const source = s.source || o.source;
      if (source === 'camera'){ const c = ls.get(CFG.KEY_CONSENT, null); if (!c || !c.accepted) return { ok: false, reason: 'fără acord pentru cameră' }; }
      const src = source === 'camera' ? new CameraSource() : new SimSource(source === 'simulated-tired');
      run = { meta: { astronaut: s.astronaut || o.astronaut, test: s.test || 'test psiho-cognitiv', source, startedAt: new Date().toISOString() },
              t0: performance.now(), engine: new Engine(), src, quality: {}, qFrames: 0, hiddenMs: 0, hiddenAt: 0, error: null,
              fr: { out: false, outSince: null, inSince: null, cur: null, events: [], lastDraw: 0, popSince: null }, susp: [], suspOpen: false };
      const r = run;
      document.addEventListener('visibilitychange', onVis);
      if (source === 'camera') indicator(true, 'Se pornește camera…');
      try {
        await src.start(f => {
          if (run !== r) return;
          r.engine.push(f); r.lastFrame = { t: f.t, face: !!f.face };
          if (o.showFrame !== false){
            const fc = frameCheck(f.geo), fr = r.fr, now = f.t;
            if (now - fr.lastDraw > 100){ fr.lastDraw = now; FrameUI.draw(f.geo, fc.ok); }
            if (!fc.ok){
              fr.inSince = null; if (fr.outSince == null) fr.outSince = now;
              // in Nabu: the event is still logged, but the astronaut is spoken to at most once every 2 minutes,
              // never while Nabu is in the background, and a prompt already on screen is always finished
              const quiet = !!window.NABU_EMBED && fr.popSince == null && !r.suspOpen &&
                (document.hidden || performance.now() - (root.__nbmLastPrompt || -1e12) < CFG.promptCooldownMs);
              if (!fr.out && now - fr.outSince >= CFG.frameOutMs){
                fr.out = true; fr.cur = { atS: Math.round((performance.now() - r.t0) / 1000), startT: fr.outSince, reason: fc.msg, phase: r.engine.phase ? r.engine.phase.name : null, silent: quiet };
                if (!quiet) beep(660, 0.25);
              }
              if (fr.out && !quiet){
                if (fr.popSince == null) root.__nbmLastPrompt = performance.now();
                if (!r.suspOpen) FrameUI.popup(true, fc.msg);
                if (fr.popSince == null) fr.popSince = now;
                if (!r.suspOpen && now - fr.popSince >= (o.suspendAfterMs || CFG.suspendAfterMs)){
                  r.suspOpen = true; FrameUI.popup(false);
                  const atS = Math.round((performance.now() - r.t0) / 1000), phase = r.engine.phase ? r.engine.phase.name : null;
                  suspendOverlay(o.suspendAnswerMs || CFG.suspendAnswerMs, () => {
                    // fără răspuns: notificare de urgență către echipaj
                    const msg = { kind: 'incap', reason: `Nu răspunde în testul ${r.meta.test}: ochii au ieșit din încadrare și testul a fost suspendat.`,
                                  from: r.meta.astronaut, module: o.module || '–', t: Date.now(), id: Math.random().toString(36).slice(2) + Date.now(), fromId: 'bgmon' };
                    try { new BroadcastChannel('nabu-crew').postMessage(msg); } catch (e){}
                    try { localStorage.setItem('nabu.crew.msg', JSON.stringify(msg)); } catch (e){}
                    try { window.dispatchEvent(new CustomEvent('nabu:emergency', { detail: msg })); } catch (e){}
                    try { o.onEmergency && o.onEmergency(msg); } catch (e){}
                  }).then(res => {
                    r.susp.push({ atS, phase, answer: res.answer, rtMs: res.rtMs, teamNotified: res.teamNotified });
                    try { window.dispatchEvent(new CustomEvent("nabu:checkin", { detail: { answer: res.answer, rtMs: res.rtMs, teamNotified: res.teamNotified, test: r.meta.test } })); } catch (e){}
                    if (res.teamNotified){                                  // anunță echipajul că astronautul a răspuns
                      const c = { kind: 'cancel', reason: 'A răspuns după alertă', from: r.meta.astronaut, module: o.module || '–', t: Date.now(), id: Math.random().toString(36).slice(2) + Date.now(), fromId: 'bgmon' };
                      try { new BroadcastChannel('nabu-crew').postMessage(c); } catch (e){}
                      try { localStorage.setItem('nabu.crew.msg', JSON.stringify(c)); } catch (e){}
                    }
                    r.suspOpen = false; fr.popSince = null; fr.outSince = null; FrameUI.popup(false); root.__nbmLastPrompt = performance.now();   // dacă ochii tot nu sunt în chenar, ciclul reîncepe (în Nabu după pauza de 2 min)
                  });
                }
              }
            } else {
              fr.outSince = null; if (fr.inSince == null) fr.inSince = now;
              if (fr.out && now - fr.inSince >= CFG.frameBackMs){
                fr.out = false; fr.popSince = null; if (!r.suspOpen) FrameUI.popup(false);
                if (fr.cur){ fr.cur.durS = Math.round((now - fr.cur.startT) / 100) / 10; delete fr.cur.startT; fr.events.push(fr.cur); fr.cur = null; }
              }
            }
          }
          if (f.geo){ r.qFrames++; for (const a of adviseCamera(f.geo)) r.quality[a.k] = (r.quality[a.k] || { k: a.k, msg: a.msg, n: 0 }), r.quality[a.k].n++; }
        });
        if (run !== r) return { ok: false, reason: 'oprit' };
        if (o.showIndicator || source === 'camera') indicator(true, source === 'camera' ? 'Cameră activă · măsurare oboseală' : 'Monitor activ (simulare)');
        if (o.showFrame !== false) FrameUI.show();
        if (source === 'camera' && !window.NABU_EMBED) notice('Camera a pornit. Ține ochii în chenarul din stânga sus.', 5000);
        status('running'); return { ok: true };
      } catch (e){
        r.error = friendlyError(e); if (window.NABU_EMBED) try { parent.postMessage({ src: 'psy', type: 'camera-error', name: e && e.name }, '*'); } catch (_){}
        try { src.stop(); } catch (_){} indicator(false); FrameUI.hide(); notice('Camera nu a pornit: ' + r.error, 12000); status('error'); return { ok: false, reason: r.error };
      }
    },
    /** Starea de acum, pentru afișare live (Nabu): minutul curent, fața, cât de închiși sunt ochii. */
    live(){ if (!run) return null; const e = run.engine, w = e.win, lf = run.lastFrame || {};
      return { face: !!lf.face && performance.now() - (lf.t || 0) < 1500, closure: Math.round((e.lastClosure || 0) * 100) / 100,
        minutePerclos: w.validMs > 5000 ? Math.round(1000 * w.closedMs / w.validMs) / 10 : null, minuteValidPct: w.totalMs ? Math.round(100 * w.validMs / w.totalMs) : 0,
        slowThisMinute: w.slow, blinksThisMinute: w.blinks, minuteSec: Math.round(w.totalMs / 1000) }; },
    /** Marchează etapa curentă a testului (ex. „Chestionare”, „PVT”, „Sarcini cognitive”). */
    mark(phase){ if (run) run.engine.setPhase(String(phase)); },
    /** Oprește camera și întoarce raportul structurat. */
    async stop(extra = {}){
      if (!run) return null;
      const r = run; run = null; document.removeEventListener('visibilitychange', onVis);
      try { r.src.stop(); } catch (e){} indicator(false); FrameUI.hide(); status('stopped');
      if (r.fr.cur){ r.fr.cur.durS = Math.round((performance.now() - r.fr.cur.startT) / 100) / 10; delete r.fr.cur.startT; r.fr.events.push(r.fr.cur); }
      const framing = { outCount: r.fr.events.length, outS: Math.round(r.fr.events.reduce((a, e) => a + (e.durS || 0), 0) * 10) / 10, events: r.fr.events, suspensions: r.susp };
      SuspendUI.close();
      if (r.hiddenAt) r.hiddenMs += performance.now() - r.hiddenAt;
      const fatigue = r.error ? null : r.engine.finish();
      const issues = Object.values(r.quality).map(q => ({ k: q.k, msg: q.msg, pct: r.qFrames ? Math.round(100 * q.n / r.qFrames) : 0 }))
        .filter(q => q.pct >= CFG.qualityIssueFrac * 100).sort((a, b) => b.pct - a.pct);
      const meta = { ...r.meta, endedAt: new Date().toISOString(), durationS: Math.round((performance.now() - r.t0) / 1000), hiddenS: Math.round(r.hiddenMs / 1000) };
      const history = ls.get(CFG.KEY_HIST, []);
      const report = buildReport({ meta, fatigue, quality: { issues }, selfReport: extra.selfReport, testResults: extra.testResults, history, error: r.error, framing });
      if (meta.source === 'camera' && fatigue && fatigue.perclos != null){ history.push({ astronaut: meta.astronaut, date: meta.endedAt, perclos: fatigue.perclos, blinksPerMin: fatigue.blinksPerMin }); while (history.length > 200) history.shift(); ls.set(CFG.KEY_HIST, history); }
      try { window.dispatchEvent(new CustomEvent('nabu:report', { detail: report })); } catch (e){}
      return report;
    },
    /** Raport fără oprirea camerei (Nabu): închide măsurarea curentă și o reia imediat pe același flux video. */
    async snapshot(extra = {}){
      if (!run) return null;
      const r = run;
      if (r.fr.cur){ r.fr.cur.durS = Math.round((performance.now() - r.fr.cur.startT) / 100) / 10; delete r.fr.cur.startT; r.fr.events.push(r.fr.cur); }
      const framing = { outCount: r.fr.events.length, outS: Math.round(r.fr.events.reduce((a, e) => a + (e.durS || 0), 0) * 10) / 10, events: r.fr.events, suspensions: r.susp };
      if (r.hiddenAt){ r.hiddenMs += performance.now() - r.hiddenAt; r.hiddenAt = performance.now(); }
      const fatigue = r.error ? null : r.engine.finish();
      const issues = Object.values(r.quality).map(q => ({ k: q.k, msg: q.msg, pct: r.qFrames ? Math.round(100 * q.n / r.qFrames) : 0 }))
        .filter(q => q.pct >= CFG.qualityIssueFrac * 100).sort((a, b) => b.pct - a.pct);
      const meta = { ...r.meta, endedAt: new Date().toISOString(), durationS: Math.round((performance.now() - r.t0) / 1000), hiddenS: Math.round(r.hiddenMs / 1000) };
      const history = ls.get(CFG.KEY_HIST, []);
      const report = buildReport({ meta, fatigue, quality: { issues }, selfReport: extra.selfReport, testResults: extra.testResults, history, error: r.error, framing });
      if (meta.source === 'camera' && fatigue && fatigue.perclos != null){ history.push({ astronaut: meta.astronaut, date: meta.endedAt, perclos: fatigue.perclos, blinksPerMin: fatigue.blinksPerMin }); while (history.length > 200) history.shift(); ls.set(CFG.KEY_HIST, history); }
      // fresh measurement on the same camera stream
      Object.assign(r, { t0: performance.now(), engine: new Engine(), quality: {}, qFrames: 0, hiddenMs: 0,
        fr: { out: false, outSince: null, inSince: null, cur: null, events: [], lastDraw: 0, popSince: null }, susp: [] });
      r.meta = { ...r.meta, startedAt: new Date().toISOString() };
      try { window.dispatchEvent(new CustomEvent('nabu:report', { detail: report })); } catch (e){}
      return report;
    },
    /** Oprește fără raport (test abandonat). */
    cancel(){ if (!run) return; const r = run; run = null; document.removeEventListener('visibilitychange', onVis); try { r.src.stop(); } catch (e){} indicator(false); FrameUI.hide(); SuspendUI.close(); status('cancelled'); },
    history(){ return ls.get(CFG.KEY_HIST, []).filter(h => h.astronaut === o.astronaut); },
    clearHistory(){ ls.set(CFG.KEY_HIST, []); }
  };
  return api;
}

/* ======================= 9. INTEGRARE PRIN EVENIMENTE ======================= */
let evMon = null;
if (typeof window !== 'undefined'){
  window.addEventListener('nabu:test-start', async e => { const d = e.detail || {}; evMon = evMon || create(d); if (await evMon.requestConsent()) evMon.start(d); });
  window.addEventListener('nabu:test-mark', e => { if (evMon) evMon.mark((e.detail || {}).phase); });
  window.addEventListener('nabu:test-end', e => { if (evMon) evMon.stop(e.detail || {}); });
  window.addEventListener('pagehide', () => { if (evMon) evMon.cancel(); });
}

const NabuBackgroundMonitor = { create, renderReportHTML, downloadReport, buildReport, adviseCamera, frameCheck, Engine, synthSignal, CFG, notice, version: VERSION };
root.NabuBackgroundMonitor = NabuBackgroundMonitor;
if (typeof module !== 'undefined' && module.exports) module.exports = NabuBackgroundMonitor;
})(typeof window !== 'undefined' ? window : globalThis);

