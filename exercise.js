// Camera workout: MediaPipe Pose runs locally in the browser.
// A rep only counts if it goes through every phase of the pattern and respects the form rules.
// We use angles between joints, which don't depend on body orientation (they work without an "up" or "down").

const MP_VER = "0.10.14";
const MP_URL = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MP_VER}`;
const MODEL = "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";

export const EXERCISES = {
  squat: {
    name: "Squats",
    how: "Place your laptop or phone 2–3 metres away so your whole body is visible, from the side or the front. Go down until your knees pass 90°, back straight, then come up with control.",
  },
  press: {
    name: "Arm raises",
    how: "Face the camera with your shoulders and hands in frame. Start with arms down, raise them fully overhead with straight elbows, then lower them with control.",
  },
};

let landmarkerPromise = null;
async function getLandmarker() {
  if (!landmarkerPromise) {
    landmarkerPromise = (async () => {
      const mp = await import(MP_URL);
      const fileset = await mp.FilesetResolver.forVisionTasks(`${MP_URL}/wasm`);
      const opts = (delegate) => ({ baseOptions: { modelAssetPath: MODEL, delegate }, runningMode: "VIDEO", numPoses: 1 });
      try { return await mp.PoseLandmarker.createFromOptions(fileset, opts("GPU")); }
      catch { return await mp.PoseLandmarker.createFromOptions(fileset, opts("CPU")); }
    })();
    landmarkerPromise.catch(() => (landmarkerPromise = null));
  }
  return landmarkerPromise;
}

const L = { sh: [11, 12], el: [13, 14], wr: [15, 16], hip: [23, 24], kn: [25, 26], an: [27, 28] };
const BONES = [[11, 12], [11, 13], [13, 15], [12, 14], [14, 16], [11, 23], [12, 24], [23, 24], [23, 25], [25, 27], [24, 26], [26, 28]];

function angle(a, b, c, w, h) {
  const v1 = [(a.x - b.x) * w, (a.y - b.y) * h], v2 = [(c.x - b.x) * w, (c.y - b.y) * h];
  const dot = v1[0] * v2[0] + v1[1] * v2[1];
  const m = Math.hypot(...v1) * Math.hypot(...v2) || 1;
  return (Math.acos(Math.max(-1, Math.min(1, dot / m))) * 180) / Math.PI;
}
const visible = (lm, ids) => ids.every((i) => (lm[i]?.visibility ?? 0) > 0.5);

/* State machines for each exercise. They get the angles every frame and report reps. */
function squatTracker(report, tip) {
  let phase = "up", minKnee = 180, minHip = 180, maxDiff = 0, startT = 0, deepest = 180;
  return (lm, w, h, t) => {
    if (!visible(lm, [...L.hip, ...L.kn, ...L.an])) { tip("Get fully in frame: hips, knees and ankles."); return "idle"; }
    const kL = angle(lm[23], lm[25], lm[27], w, h), kR = angle(lm[24], lm[26], lm[28], w, h);
    const knee = (kL + kR) / 2;
    const hip = (angle(lm[11], lm[23], lm[25], w, h) + angle(lm[12], lm[24], lm[26], w, h)) / 2;
    if (phase === "up") {
      if (knee < 150) { phase = "going"; startT = t; minKnee = knee; minHip = hip; maxDiff = 0; deepest = knee; }
      return "ready";
    }
    minKnee = Math.min(minKnee, knee); minHip = Math.min(minHip, hip); maxDiff = Math.max(maxDiff, Math.abs(kL - kR)); deepest = Math.min(deepest, knee);
    if (knee > 160) {
      phase = "up";
      const dur = (t - startT) / 1000;
      if (deepest > 140) return "ready"; // just a small bend, not a rep attempt
      let fault = null;
      if (minKnee > 100) fault = "Go lower: your knees need to pass 90°.";
      else if (minHip < 45) fault = "Your back is leaning too far forward. Keep your chest up.";
      else if (maxDiff > 25) fault = "Your knees are uneven. Spread your weight over both legs.";
      else if (dur < 1.0) fault = "Too fast. Control the way down and up.";
      report({ ok: !fault, fault });
      return "rep";
    }
    return minKnee <= 100 ? "deep" : "going";
  };
}
function pressTracker(report, tip) {
  let phase = "down", maxSh = 0, maxElbow = 0, maxDiff = 0, startT = 0;
  return (lm, w, h, t) => {
    if (!visible(lm, [...L.sh, ...L.el, ...L.wr, ...L.hip])) { tip("Get your shoulders, elbows, hands and hips in frame."); return "idle"; }
    const sL = angle(lm[23], lm[11], lm[15], w, h), sR = angle(lm[24], lm[12], lm[16], w, h);
    const sh = (sL + sR) / 2;
    const elbow = Math.min(angle(lm[11], lm[13], lm[15], w, h), angle(lm[12], lm[14], lm[16], w, h));
    if (phase === "down") {
      if (sh > 80) { phase = "rising"; startT = t; maxSh = sh; maxElbow = elbow; maxDiff = 0; }
      return "ready";
    }
    maxSh = Math.max(maxSh, sh); maxDiff = Math.max(maxDiff, Math.abs(sL - sR));
    if (sh > 140) maxElbow = Math.max(maxElbow, elbow);
    if (sh < 60) {
      phase = "down";
      const dur = (t - startT) / 1000;
      if (maxSh < 105) return "ready";
      let fault = null;
      if (maxSh < 150) fault = "Raise your arms all the way overhead.";
      else if (maxElbow < 150) fault = "Straighten your elbows at the top.";
      else if (maxDiff > 22) fault = "Your arms rise unevenly. Lift them together.";
      else if (dur < 0.8) fault = "Too fast. Lower them with control.";
      report({ ok: !fault, fault });
      return "rep";
    }
    return maxSh >= 150 ? "deep" : "going";
  };
}

export async function createExerciseSession({ video, canvas, exercise, onRep, onTip }) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error("This browser gives no camera access. Open the app through start.bat (localhost).");
  const stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" }, audio: false });
  let stopped = false;
  try {
    video.srcObject = stream; await video.play();
    const landmarker = await getLandmarker();
    const ctx = canvas.getContext("2d");
    let lastRep = { ok: true }, flashUntil = 0, lastTipAt = 0;
    const tip = (t) => { const now = performance.now(); if (now - lastTipAt > 900) { lastTipAt = now; onTip(t); } };
    const report = (r) => { lastRep = r; flashUntil = performance.now() + 500; onRep(r); };
    const track = exercise === "press" ? pressTracker(report, tip) : squatTracker(report, tip);
    let lastVideoTime = -1;
    const loop = () => {
      if (stopped) return;
      if (video.readyState >= 2 && video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;
        const w = video.videoWidth, h = video.videoHeight;
        if (canvas.width !== w) { canvas.width = w; canvas.height = h; }
        const t = performance.now();
        const res = landmarker.detectForVideo(video, t);
        ctx.clearRect(0, 0, w, h);
        const lm = res.landmarks?.[0];
        if (lm) {
          const state = track(lm, w, h, t);
          if (state === "ready") tip(exercise === "press" ? "Ready. Raise your arms." : "Ready. Go down.");
          if (state === "going") tip(exercise === "press" ? "Higher…" : "Lower…");
          if (state === "deep") tip(exercise === "press" ? "Good. Now lower with control." : "Good. Now come up with control.");
          const flashing = performance.now() < flashUntil;
          const color = flashing ? (lastRep.ok ? "#6fd38f" : "#e8798a") : "#3fc7b5";
          ctx.lineWidth = Math.max(3, w / 160); ctx.strokeStyle = color; ctx.lineCap = "round";
          for (const [a, b] of BONES) {
            if ((lm[a].visibility ?? 0) < 0.4 || (lm[b].visibility ?? 0) < 0.4) continue;
            ctx.beginPath(); ctx.moveTo(lm[a].x * w, lm[a].y * h); ctx.lineTo(lm[b].x * w, lm[b].y * h); ctx.stroke();
          }
          ctx.fillStyle = "#efe9f7";
          for (const i of [11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28]) {
            if ((lm[i].visibility ?? 0) < 0.4) continue;
            ctx.beginPath(); ctx.arc(lm[i].x * w, lm[i].y * h, Math.max(4, w / 110), 0, Math.PI * 2); ctx.fill();
          }
        } else tip("I can't see you. Step into frame.");
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  } catch (e) {
    stream.getTracks().forEach((tr) => tr.stop());
    throw e;
  }
  return { stop() { stopped = true; stream.getTracks().forEach((tr) => tr.stop()); video.srcObject = null; } };
}
