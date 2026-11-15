/* Live link across devices. The astronaut's Nabu and the psychologist's console share a short link code (a "room").
   Each side posts its own keys to /api/sync and polls the other side's. Only what the console is allowed to see leaves
   the astronaut's device: mission day, test and assessment results, activity, Guardian category flags, mood scores and
   fatigue readings. Never journal text, questionnaire answers or camera images.
   Without the server (e.g. a local python server) it switches itself off and the same-browser link keeps working. */
(function () {
  const SIDE = window.NABU_SIDE === "d" ? "d" : "a", OTHER = SIDE === "a" ? "d" : "a";
  const get = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  const qs = new URLSearchParams(location.search);
  let room = (qs.get("room") || localStorage.getItem("nabu.room") || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!room && SIDE === "a") { const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; room = Array.from({ length: 5 }, () => A[Math.floor(Math.random() * A.length)]).join(""); }
  if (room) try { localStorage.setItem("nabu.room", room); } catch {}

  const safeState = (S) => S && ({
    day: S.day, pvt: S.pvt, psy: S.psy, activity: (S.activity || []).slice(-200), mood: S.mood,
    bgFatigue: (S.bgFatigue || []).slice(-120), guard: S.guard ? { sent: S.guard.sent || [], scans: S.guard.scans || [] } : undefined,
  });
  const OUT = SIDE === "a"
    ? { "nabu.en.v2": safeState, "nabu.live": (x) => x, "nabu.inbox.replies": (x) => x, "nabu.crew.msg": (x) => x }
    : { "nabu.inbox": (x) => x };

  let on = false, fails = 0, lastSent = "", ver = 0, busy = false;
  const bc = (() => { try { return new BroadcastChannel("nabu-link"); } catch { return null; } })();
  const bcCrew = (() => { try { return new BroadcastChannel("nabu-crew"); } catch { return null; } })();
  const api = (q) => `api/sync?room=${encodeURIComponent(room)}&${q}`;

  function apply(keys) {
    if (SIDE === "d") {
      // the console reads these mirrors whenever they are fresher than anything in this browser
      if (keys["nabu.en.v2"]) set("nabu.sync.en", keys["nabu.en.v2"]);
      if (keys["nabu.inbox.replies"]) set("nabu.sync.replies", keys["nabu.inbox.replies"]);
      if (keys["nabu.live"]) { set("nabu.sync.live", keys["nabu.live"]); bc && bc.postMessage({ type: "hb", hb: keys["nabu.live"] }); }
      const sos = keys["nabu.crew.msg"], seen = get("nabu.sync.sosAt");
      if (sos && sos.t && sos.t !== seen) { set("nabu.sync.sosAt", sos.t); bcCrew && bcCrew.postMessage(sos); }
      bc && bc.postMessage({ type: "act" });
      window.dispatchEvent(new StorageEvent("storage", { key: "nabu.en.v2" }));
    } else if (keys["nabu.inbox"]) {
      // messages from the psychologist: merge by id with anything already here
      const mine = get("nabu.inbox") || [], ids = new Set(mine.map((m) => m.id));
      const add = keys["nabu.inbox"].filter((m) => !ids.has(m.id));
      if (add.length) { set("nabu.inbox", [...mine, ...add].slice(-100)); window.dispatchEvent(new StorageEvent("storage", { key: "nabu.inbox" })); }
    }
  }
  async function tick() {
    if (!room || busy || document.hidden && SIDE === "d") return;
    busy = true;
    try {
      const keys = {}; for (const k in OUT) { const v = get(k); if (v != null) keys[k] = OUT[k](v); }
      const body = JSON.stringify({ keys });
      if (body !== lastSent) {
        const r = await fetch(api(`side=${SIDE}`), { method: "POST", headers: { "Content-Type": "application/json" }, body });
        if (!r.ok) throw new Error(r.status); lastSent = body;
      }
      const r = await fetch(api(`side=${OTHER}&since=${ver}`), { cache: "no-store" });
      if (!r.ok) throw new Error(r.status);
      const j = await r.json(); if (!j.same && j.keys) { ver = j.v; apply(j.keys); } else if (j.v < ver) ver = 0;
      fails = 0; if (!on) { on = true; window.dispatchEvent(new CustomEvent("nabu:sync", { detail: { room, on } })); }
    } catch {
      if (++fails >= 4 && !on) { clearInterval(timer); }
    } finally { busy = false; }
  }
  const timer = setInterval(tick, 1500); setTimeout(tick, 300);
  window.NABU_SYNC = {
    get room() { return room; }, get on() { return on; },
    setRoom(code) { room = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); try { localStorage.setItem("nabu.room", room); } catch {} ver = 0; lastSent = ""; tick(); },
  };
})();
