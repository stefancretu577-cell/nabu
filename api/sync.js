// Live link between the astronaut's Nabu and the psychologist's console, across devices.
// A "room" is a short link code. Each side ("a" astronaut, "d" doctor) posts its keys; the other side polls them.
// Storage: Upstash Redis when its env vars exist (set up from the Vercel Marketplace), otherwise this function's memory,
// which is enough for a demo because one warm instance serves the requests.
const TTL = 60 * 60 * 24; // a room lives one day after its last write
const mem = (globalThis.__nabuRooms ||= new Map());

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
async function redis(cmd) {
  const r = await fetch(URL_, { method: "POST", headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" }, body: JSON.stringify(cmd) });
  if (!r.ok) throw new Error("redis " + r.status);
  return (await r.json()).result;
}
async function load(key) {
  if (URL_ && TOKEN) { const v = await redis(["GET", key]); return v ? JSON.parse(v) : null; }
  const e = mem.get(key); return e && e.exp > Date.now() ? e.val : null;
}
async function store(key, val) {
  if (URL_ && TOKEN) return redis(["SET", key, JSON.stringify(val), "EX", TTL]);
  mem.set(key, { val, exp: Date.now() + TTL * 1000 });
  if (mem.size > 500) for (const [k, e] of mem) if (e.exp < Date.now()) mem.delete(k);
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const room = String(req.query.room || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
  const side = req.query.side === "d" ? "d" : req.query.side === "a" ? "a" : "";
  if (!room || !side) return res.status(400).json({ error: "room and side are required" });
  const key = `nabu:${room}:${side}`;
  try {
    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const raw = JSON.stringify(body);
      if (raw.length > 400000) return res.status(413).json({ error: "too large" });
      const prev = await load(key);
      const v = (prev ? prev.v : 0) + 1;
      await store(key, { v, at: Date.now(), keys: body.keys || {} });
      return res.status(200).json({ v });
    }
    const since = Number(req.query.since || 0);
    const cur = await load(key);
    const where = URL_ && TOKEN ? "redis" : "memory";
    if (!cur || cur.v <= since) return res.status(200).json({ v: cur ? cur.v : 0, same: true, store: where });
    return res.status(200).json({ ...cur, store: where });
  } catch (e) {
    return res.status(500).json({ error: String(e.message || e) });
  }
};
