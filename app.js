// Nabu — prototype. All data stays in this browser (localStorage).
import { PEOPLE, YOU_AVATAR } from "./journal.js";
import { scan as guardScan, trendLevel, CAT_LABEL } from "./guardian.js";

/* ───────────────────────── helpers ───────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const words = (t) => (String(t).trim().match(/\S+/g) || []).length;
const reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
function rng(seed) { // mulberry32
  let a = 0; for (const ch of String(seed)) a = (a * 31 + ch.charCodeAt(0)) | 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/* ───────────────────────── world data ───────────────────────── */
const MISSION_DAYS = 180;
const PHASES = [
  { from: 1, name: "Launch & adaptation" },
  { from: 15, name: "Transit" },
  { from: 60, name: "Mid-mission" },
  { from: 120, name: "Arrival & exploration" },
  { from: 170, name: "Return" },
];
const phaseOf = (d) => [...PHASES].reverse().find((p) => d >= p.from).name;

const ME = { sym: "LYR", ship: "Lyra-1", base: "Lyra Base", x: 40.9, y: 36.6 };
const STATIONS = [
  { sym: "VGA", ship: "Vega-2", crew: "Amara", x: 13.0, y: 14.4, mean: 0.74, color: "#c49bf0" },
  { sym: "ORN", ship: "Orion-1", crew: "Teodor", x: 83.3, y: 14.0, mean: 0.62, color: "#f2a65e" },
  { sym: "KST", ship: "Kestrel", crew: "Mina", x: 79.2, y: 51.9, mean: 0.8, color: "#7fb2ff" },
  { sym: "HLY", ship: "Halley-4", crew: "Jonas", x: 19.3, y: 62.8, mean: 0.57, color: "#e8798a" },
  { sym: "TYC", ship: "Tycho-3", crew: "Ilinca", x: 49.5, y: 85.1, mean: 0.69, color: "#9bd6a0" },
  { sym: "NOV", ship: "Nova-5", crew: "Elvira", x: 83.0, y: 87.1, mean: 0.65, color: "#e7d27a" },
];

/* The base map: a central hub (4 rooms, open from day 1) and five modules you discover by building. */
const MODULES = [
  { id: "hub", name: "Central hub", x: 49.7, y: 48.3, size: 34, cost: 0, day: 1, room: "command" },
  { id: "gym", name: "Plant lounge", x: 49.8, y: 15.7, size: 21, cost: 120, day: 3, room: "gym" },
  { id: "lab", name: "Medical lab", x: 33.3, y: 38.7, size: 21, cost: 200, day: 7, room: "lab" },
  { id: "green", name: "Greenhouse", x: 66.5, y: 38.9, size: 21, cost: 260, day: 14, room: "green" },
  { id: "lounge", name: "Observation lounge", x: 39.8, y: 72.3, size: 21, cost: 350, day: 30, room: "lounge" },
  { id: "comms", name: "Comms workshop", x: 60.0, y: 72.3, size: 21, cost: 500, day: 60, room: "comms" },
];
const modById = (id) => MODULES.find((m) => m.id === id);
/* Rooms, walked in order through their doors. "slots" mark where furniture goes in an empty room. */
const ROOMS = [
  { id: "bedroom", module: "hub", name: "Bedroom", img: "room-bedroom", empty: true, doors: { left: [11.2, 52], right: [88.3, 52] }, hotspots: [],
    slots: [{ id: "bed", x: 38, y: 86, items: ["bed"] }, { id: "ward", x: 70, y: 68, items: ["wardrobe", "bookshelf"] }, { id: "night", x: 58, y: 77, items: ["nightstand", "lamp"] }, { id: "wall", x: 30, y: 46, items: ["painting", "poster", "wallshelf"] }, { id: "floor", x: 50, y: 95, items: ["rug"] }] },
  { id: "living", module: "hub", name: "Living quarters", img: "room-living", hotspots: [{ x: 9, y: 30, label: "Health console", act: "console", ic: "check" }, { x: 15, y: 57, label: "Desk · Write", act: "desk", ic: "pen" }, { x: 83.4, y: 52, label: "Wall sheets · Tasks", act: "sheets", ic: "check" }, { x: 49.8, y: 40, label: "Window · Planet", act: "planet", ic: "globe" }],
    slots: [{ id: "center", x: 52, y: 86, items: ["sofa", "armchair", "beanbag"] }, { id: "low", x: 38, y: 92, items: ["coffeetable", "rug"] }] },
  { id: "command", module: "hub", name: "Health console", img: "room-command", command: true, noDrift: true, hotspots: [], slots: [] },
  { id: "mess", module: "hub", name: "Mess hall", img: "room-mess", empty: true, doors: { left: [10.3, 52], right: [90, 52] }, hotspots: [],
    slots: [{ id: "kitchen", x: 38, y: 66, items: ["kitchen"] }, { id: "fridge", x: 69, y: 66, items: ["fridge"] }, { id: "table", x: 50, y: 90, items: ["dining"] }, { id: "plant", x: 80, y: 74, items: ["fern", "holoplant"] }] },
  { id: "gym", module: "gym", name: "Plant lounge", img: "room-plants", empty: true, hotspots: [], slots: [] },
  { id: "lab", module: "lab", name: "Medical lab", img: "room-lab", hotspots: [{ x: 70, y: 58, label: "Medical results", act: "analyses", ic: "flask" }, { x: 50, y: 30, label: "Nabu Health", act: "healthapp", ic: "check" }, { x: 32, y: 38, label: "Cognitive tests", act: "tests", ic: "brain" }], slots: [] },
  { id: "green", module: "green", name: "Greenhouse", img: "room-green", hotspots: [{ x: 82, y: 70, label: "Bench · Breathing", act: "breath", ic: "moon" }, { x: 45, y: 57, label: "Mood check-in", act: "mood", ic: "brain" }], slots: [] },
  { id: "lounge", module: "lounge", name: "Observation lounge", img: "room-lounge", hotspots: [{ x: 19, y: 40, label: "Shelf · Library", act: "library", ic: "book" }, { x: 80, y: 56, label: "Telescope · Planet", act: "planet", ic: "globe" }], slots: [] },
  { id: "comms", module: "comms", name: "Comms workshop", img: "room-comms", hotspots: [{ x: 44, y: 62, label: "Desk · My book", act: "book", ic: "pen" }, { x: 68, y: 39, label: "Board · Community", act: "library", ic: "book" }, { x: 17, y: 52, label: "Radio · Planet", act: "planet", ic: "globe" }], slots: [] },
];
const roomById = (id) => ROOMS.find((r) => r.id === id);
const imgUrl = (r) => `assets/${r.img}.webp`;
// Wall screen glass above the desk in the living quarters (percent of the room frame, measured from the image)
const WALLSCREEN = { left: 6.75, top: 21.6, width: 15.35, height: 21.6 };
// TV glass in the health room
const TVGLASS = { left: 22.1, top: 12.5, width: 54.47, height: 53.33 };

const NORMA_FIXED = [
  { id: "eclss", t: "Life support check", d: "Pressure, CO₂, water recycling" },
  { id: "train", t: "Mandatory training (2 hours)", d: "Resistive device, treadmill, cycle" },
  { id: "conf", t: "Daily conference with mission control", d: "Day plan and report" },
];
const NORMA_POOL = [
  "Experiment: blood and saliva samples", "Maintenance: air filters", "Food inventory",
  "Geology observations of the canyon", "Long-range comms test", "Greenhouse harvest",
  "Radiation sensor calibration", "Common module clean-up", "EVA suit inspection",
];
const NORMA_COIN = 8, NORMA_BONUS = 20;
function normaFor(day) {
  const r = rng("norma" + day); const pool = [...NORMA_POOL];
  const pick = []; for (let i = 0; i < 2; i++) pick.push(pool.splice(Math.floor(r() * pool.length), 1)[0]);
  return [...NORMA_FIXED, ...pick.map((t, i) => ({ id: "p" + i, t, d: "From today's plan" }))];
}

const REWARD = { astro: 40, journal: 10, journalStreak: 5, chapter: 25, read: 3, readCap: 5, pvt: 15, memory: 15, mood: 10, sleepQuest: 15, breath: 5, analysis: 20, rep: 2, goodSet: 10, exerciseCap: 120 };

/* Market. Items unlock along the mission; until then they show as silhouettes. */
const TIERS = { common: { name: "Common", color: "#a59cb8" }, uncommon: { name: "Uncommon", color: "#6fd38f" }, rare: { name: "Rare", color: "#7fb2ff" }, epic: { name: "Epic", color: "#c49bf0" }, legendary: { name: "Legendary", color: "#f2c14e" } };
const ITEMS = {
  bed: { name: "Bunk bed with drawers", price: 60, tier: "common", day: 1, w: 22, desc: "Two cosy berths with reading lights and drawers that never float away." },
  wardrobe: { name: "Rounded wardrobe", price: 55, tier: "common", day: 1, w: 11, desc: "Sliding doors and a teal night-light. Fits a whole mission of socks." },
  nightstand: { name: "Glow nightstand", price: 25, tier: "common", day: 1, w: 8, desc: "A drawer, a little lamp and a spot for your morning coffee." },
  sofa: { name: "Curved teal sofa", price: 70, tier: "common", day: 1, w: 24, desc: "Seats the whole crew for movie night. Cushions included." },
  armchair: { name: "Orbit armchair", price: 45, tier: "common", day: 1, w: 11, desc: "Deep, round and wrapped in a knit throw. The reading chair." },
  coffeetable: { name: "Glass coffee table", price: 30, tier: "common", day: 1, w: 13, desc: "Oval glass top, a shelf for books and a tiny plant." },
  kitchen: { name: "Galley kitchen", price: 85, tier: "common", day: 1, w: 21, desc: "Induction hob, sink and an herb shelf that actually grows." },
  fridge: { name: "Smart fridge", price: 50, tier: "common", day: 1, w: 8, desc: "Knows what's inside and shows it on the door." },
  dining: { name: "Round dining set", price: 65, tier: "common", day: 1, w: 19, desc: "A table for two and chairs that hug you back." },
  painting: { name: "Canyon at two moons", price: 35, tier: "uncommon", day: 1, w: 12, layer: "wall", desc: "The violet canyon outside, painted by Amara on Vega-2." },
  wallshelf: { name: "Floating shelf", price: 25, tier: "common", day: 1, w: 13, layer: "wall", desc: "Books, a candle and a plant that trails all the way down." },
  poster: { name: "Earth from orbit", price: 20, tier: "common", day: 1, w: 8, layer: "wall", desc: "Home, framed. Good for the long weeks." },
  clock: { name: "Orbit clock", price: 30, tier: "common", day: 1, w: 7, layer: "wall", desc: "Every planet is an hour. Nabu is never late." },
  fern: { name: "Potted fern", price: 20, tier: "common", day: 1, w: 8, desc: "Real green, real oxygen, real calm." },
  photo: { name: "Family photo", price: 20, tier: "common", day: 1, w: 6, desc: "The faces you'll see first when you land back home." },
  flag: { name: "Mission flag", price: 15, tier: "common", day: 1, w: 6, desc: "Lyra-1's ringed-planet emblem, standing proud." },
  rug: { name: "Woven oval rug", price: 25, tier: "common", day: 1, w: 26, layer: "floor", desc: "Soft underfoot, cold floors are history." },
  lamp: { name: "Arc floor lamp", price: 35, tier: "common", day: 1, w: 8, desc: "A warm moon on a brass arc. Instant evening." },
  beanbag: { name: "Mustard beanbag", price: 45, tier: "common", day: 2, w: 12, desc: "Drop into it after a hard set. Comes with a teal throw." },
  plush: { name: "Plush Nabu alien", price: 25, tier: "common", day: 2, w: 6, desc: "Soft, round, and it judges no one." },
  neon: { name: "Planet neon sign", price: 80, tier: "rare", day: 3, w: 11, layer: "wall", desc: "Teal and pink neon. Your room, at 2 a.m., somewhere cool." },
  bookshelf: { name: "Curved bookshelf", price: 60, tier: "uncommon", day: 5, w: 11, desc: "Paper books, a model rocket and a vine that keeps growing." },
  wallplanter: { name: "Glowing wall garden", price: 60, tier: "uncommon", day: 6, w: 11, layer: "wall", desc: "Tiny alien plants that glow when the lights go down." },
  guitar: { name: "Acoustic guitar", price: 70, tier: "uncommon", day: 8, w: 6, desc: "Three chords and the whole base sings along." },
  globe: { name: "Desk globe", price: 55, tier: "uncommon", day: 10, w: 7, desc: "Spin it, point, promise yourself a trip." },
  lavalamp: { name: "Lava lamp", price: 65, tier: "uncommon", day: 12, w: 5, desc: "Violet and teal blobs in low gravity. Hypnotic." },
  aquarium: { name: "Bubble aquarium", price: 120, tier: "rare", day: 15, w: 13, desc: "Little fish, coral and a blue glow that slows your heartbeat." },
  holoplant: { name: "Glowing Nabu plant", price: 110, tier: "rare", day: 20, w: 9, desc: "Bioluminescent leaves from the greenhouse. It breathes light." },
  telescope: { name: "Brass telescope", price: 150, tier: "rare", day: 30, w: 12, desc: "Find Earth in the night sky. It's the blue one." },
  arcade: { name: "Arcade cabinet", price: 220, tier: "epic", day: 45, w: 11, desc: "One more round of Asteroid Run before lights out." },
  geode: { name: "Nabu crystal geode", price: 200, tier: "epic", day: 60, w: 10, desc: "Cracked open in the canyon. It glows from the inside." },
  jukebox: { name: "Jukebox", price: 260, tier: "epic", day: 75, w: 11, desc: "Warm tubes, chrome and every song from home." },
  monstera: { name: "Big monstera", price: 30, tier: "common", day: 1, w: 9, desc: "Huge split leaves that make any corner feel like a jungle." },
  cacti: { name: "Cactus trio", price: 20, tier: "common", day: 1, w: 9, desc: "Three tiny cacti on a tray. They forgive you if you forget to water." },
  succulents: { name: "Succulent bowl", price: 25, tier: "common", day: 1, w: 9, desc: "Rosettes in every colour, grown from seeds brought from Earth." },
  herbs: { name: "Herb trough", price: 30, tier: "common", day: 2, w: 12, desc: "Basil, mint and chives. Fresh taste for the mess hall." },
  ivy: { name: "Hanging ivy", price: 30, tier: "common", day: 2, w: 7, layer: "wall", desc: "A macrame planter with ivy trailing down towards the floor." },
  palm: { name: "Fan palm", price: 45, tier: "uncommon", day: 4, w: 10, desc: "A tall palm in a woven basket. Sunday afternoon, every day." },
  orchid: { name: "Violet orchid", price: 50, tier: "uncommon", day: 6, w: 6, desc: "Patient, elegant, and it blooms when you least expect it." },
  bonsai: { name: "Bonsai tree", price: 90, tier: "rare", day: 10, w: 9, desc: "Ten minutes of trimming a day. The calmest habit on the base." },
  terrarium: { name: "Glow terrarium", price: 140, tier: "rare", day: 18, w: 8, desc: "A glass dome with mushrooms that glow softly at night." },
  hologram: { name: "Planet hologram", price: 300, tier: "legendary", day: 90, w: 11, desc: "A ringed world turning above your floor. The crown of any room." },
};
const itemImg = (k) => `assets/items/${k}.webp`;

/* Community books — demo content written for the prototype. */
const COMMUNITY_BOOKS = [
  { sym: "VGA", author: "Amara", title: "Letters from the Canyon", cover: "#7a5c9c", chapters: [
    { day: 0, t: "The first night", x: "It is never fully dark here. The canyon light climbs the walls like green water. I sat at the window for an hour and thought that nobody back home will ever see this colour. So I am writing it down. Maybe you will see it." },
    { day: 4, t: "The day I didn't speak", x: "Today I noticed I hadn't said a word out loud until lunch. Not out of sadness, it just happened. I started reading your chapters out loud in the gym. Teodor, your line about sleep made me laugh on the treadmill." },
    { day: 9, t: "What I would take with me", x: "If I had to leave tomorrow, I would take three things: this notebook, the smell of basil in the greenhouse, and the feeling after a good set, when your arms shake a little and you know you showed up for yourself." },
  ]},
  { sym: "ORN", author: "Teodor", title: "How to Sleep Without Night", cover: "#a8643a", chapters: [
    { day: 0, t: "The 30-minute rule", x: "I lost the first week trying to sleep whenever I felt tired. It doesn't work. Now I go to bed at the same time, sleepy or not, and turn the screens off 30 minutes before. The reaction test in the app showed me the difference before I felt it." },
    { day: 6, t: "When the test tells you what you don't want to hear", x: "Three days in a row my reactions were slower than my Earth average. My first instinct was to blame the app. Then I looked at my sleep hours. It was right. I took the sleep quest and honestly, my base looks brighter since." },
  ]},
  { sym: "KST", author: "Mina", title: "The Garden on Shelf Three", cover: "#2f6f66", chapters: [
    { day: 0, t: "Lettuce doesn't know it's in space", x: "The seedlings grow towards the violet light as if it were the sun. It calms me to look after something that needs no explanations. Ten minutes a day in the greenhouse and the whole day settles differently." },
    { day: 5, t: "Harvest", x: "The first leaves. I shared them at dinner and everyone went quiet for a minute. I think we were actually eating the idea of Earth." },
  ]},
  { sym: "HLY", author: "Jonas", title: "A Hundred Days of Running in Place", cover: "#8a3a4a", chapters: [
    { day: 2, t: "The green counter", x: "The camera only counts the correct reps. At first it annoyed me. Now it's a game: ten greens in a row. Yesterday I got 9 out of 10 and felt prouder than when I defended my PhD." },
  ]},
];

/* Medical results — demo values generated for the prototype. */
const ANALYSIS_TYPES = {
  cbc: { name: "Complete blood count", rows: [["Haemoglobin", "g/dL", 13.5, 17.5, 15.1], ["White cells", "10³/µL", 4, 10, 6.4], ["Platelets", "10³/µL", 150, 400, 245]] },
  chem: { name: "Blood chemistry", rows: [["Glucose", "mg/dL", 70, 100, 88], ["Serum calcium", "mg/dL", 8.6, 10.3, 9.6], ["Creatinine", "mg/dL", 0.7, 1.3, 0.95], ["Vitamin D", "ng/mL", 30, 100, 41]] },
  cort: { name: "Salivary cortisol (morning)", rows: [["Cortisol", "µg/dL", 0.1, 0.75, 0.42]] },
  us: { name: "Muscle ultrasound", rows: [["Calf volume vs pre-flight", "%", -5, 100, 0], ["Quadriceps thickness", "mm", 20, 40, 27]] },
  dxa: { name: "Bone density (DXA)", rows: [["Hip T-score", "", -1, 3, 0.4], ["Change vs pre-flight", "%", -2, 100, 0]] },
};
const ANALYSIS_SCHEDULE = [[3, "cort"], [7, "chem"], [10, "us"], [14, "dxa"]];
function analysisDueOn(day) {
  const fixed = ANALYSIS_SCHEDULE.find(([d]) => d === day);
  if (fixed) return fixed[1];
  if (day > 14 && day % 5 === 0) return ["cbc", "chem", "cort", "us", "dxa"][(day / 5) % 5];
  return null;
}
function makeAnalysis(type, day) {
  const r = rng("an" + type + day); const def = ANALYSIS_TYPES[type];
  const weeks = Math.max(0, day) / 7;
  const rows = def.rows.map(([n, u, lo, hi, base]) => {
    let v = base * (1 + (r() - 0.5) * 0.08);
    if (n.startsWith("Calf volume")) v = -0.55 * weeks + (r() - 0.5) * 0.6;
    if (n.startsWith("Change vs")) v = -0.12 * weeks + (r() - 0.5) * 0.2;
    if (n === "Hip T-score") v = 0.4 - 0.012 * weeks;
    if (n === "Vitamin D") v = base - 0.6 * weeks + (r() - 0.5) * 3;
    if (n === "Cortisol") v = base + (r() - 0.4) * 0.2;
    return { n, u, lo, hi, v: Math.round(v * 100) / 100 };
  });
  return { id: type + "-" + day, type, day, rows, claimed: false };
}

/* ───────────────────────── state ───────────────────────── */
const KEY = "nabu.en.v2";
function freshState() {
  const s = {
    day: 1, coins: 80,
    built: { hub: true },
    decor: {}, light: {},
    daily: null,
    streak: { journal: 0, journalLast: 0, exercise: 0, exerciseLast: 0 },
    journal: [], consent: false,
    book: { title: "Logbook for Those Who Come After Us", chapters: [] },
    read: {}, reacted: {},
    pvt: [{ day: -14, ms: 284, pre: true }, { day: -10, ms: 279, pre: true }, { day: -7, ms: 287, pre: true }],
    memory: [{ day: -10, span: 6, pre: true }],
    mood: [], quests: {}, lowDays: 0,
    analyses: [{ ...makeAnalysis("cbc", -3), claimed: true, pre: true }, { ...makeAnalysis("chem", -3), claimed: true, pre: true }],
    exerciseLog: [],
    seenItems: {},
  };
  s.daily = newDaily(1);
  return s;
}
function newDaily(day) { return { day, norma: {}, normaBonus: false, got: {}, exerciseCoins: 0, readCoins: 0, goodSets: 0 }; }
function load() { try { const raw = localStorage.getItem(KEY); if (raw) return JSON.parse(raw); } catch {} return null; }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} }
let S = load() || freshState();
// older saves: drop the removed trading data and any decor whose item no longer exists
delete S.token; delete S.others; delete S.podium;
for (const k in S.decor) S.decor[k] = (S.decor[k] || []).filter((d) => ITEMS[d.item]).map((d) => { if (d.r != null) { d.a = [0, 1, 7, 4][d.r] || 0; delete d.r; } return d; });

/* ───────────────────────── wellness (only the astronaut sees this) ───────────────────────── */
function wellness() {
  const base = avg(S.pvt.filter((p) => p.pre).map((p) => p.ms));
  const recentPvt = S.pvt.filter((p) => !p.pre && p.day > S.day - 3).map((p) => p.ms);
  const recentMood = S.mood.filter((m) => m.day > S.day - 3);
  const pvtDelta = recentPvt.length ? (avg(recentPvt) - base) / base : null;
  const sleep = recentMood.length ? avg(recentMood.map((m) => m.sleep)) : null;
  const stress = recentMood.length ? avg(recentMood.map((m) => m.stress)) : null;
  const energy = recentMood.length ? avg(recentMood.map((m) => m.energy)) : null;
  const flags = [];
  if (pvtDelta !== null && pvtDelta > 0.12) flags.push(`Your reactions are ${Math.round(pvtDelta * 100)}% slower than your pre-flight average.`);
  if (sleep !== null && sleep < 6) flags.push(`You've slept ${sleep.toFixed(1)} hours a night on average lately.`);
  if (stress !== null && stress >= 7) flags.push(`You reported high stress (${stress.toFixed(1)} out of 10).`);
  if (energy !== null && energy <= 4) flags.push(`Your reported energy is low (${energy.toFixed(1)} out of 10).`);
  let level = flags.length === 0 ? 0 : flags.length === 1 ? 1 : 2;
  if (S.lowDays >= 5 && flags.length) level = 3;
  return { level, flags, hasData: recentPvt.length || recentMood.length, brightness: clamp(1 - 0.07 * flags.length, 0.72, 1) };
}
function wellnessHTML(compact) {
  const w = wellness();
  let head, body;
  if (!w.hasData) { head = "How you're doing"; body = `<p>Take a short test or the mood check-in to see how you compare with your own baseline.</p>`; }
  else if (w.level === 0) { head = "How you're doing: steady"; body = `<p>The last few days look like your usual self. Your base has full light.</p>`; }
  else {
    head = w.level === 3 ? "How you're doing: this has lasted a while" : "How you're doing: a harder day";
    body = `<p>${w.flags.map(esc).join(" ")}</p>` +
      (compact ? "" : `<p class="muted small">It's a state, not a label. Only you see this.</p>
      <div class="row"><button class="secondary" data-act="sleepquest">Sleep quest (+${REWARD.sleepQuest})</button><button class="secondary" data-act="breath">1-minute breathing (+${REWARD.breath})</button></div>`) +
      (w.level === 3 && !compact ? `<div class="card"><p>This trend has lasted ${S.lowDays} days. Would you like to talk to the psychologist on Earth? The conversation is private and never reaches the crew.</p><div><button class="primary" data-act="talk">Book a private talk</button></div></div>` : "");
  }
  return `<span class="pill private">Only you see this</span><h3>${head}</h3>${body}`;
}

/* ───────────────────────── coins & toasts ───────────────────────── */
function toast(msg, amt) {
  const t = document.createElement("div"); t.className = "toast";
  t.innerHTML = (amt ? `<span class="coin"></span><span class="amt">+${amt}</span>` : "") + `<span>${esc(msg)}</span>`;
  $("#toasts").append(t); setTimeout(() => t.remove(), 3300);
}
function addCoins(n, why) {
  if (n <= 0) return; S.coins += n; save(); renderHUD();
  if (why && !/journal|chapter/i.test(why) && typeof logAct === "function") logAct("earn", `${why} · +${n} coins`, "ok");
  const el = $("#hud-coins"); el.classList.remove("coin-pop"); void el.offsetWidth; el.classList.add("coin-pop");
  flyCoins(Math.min(6, 2 + Math.floor(n / 10)));
  toast(why, n);
}
// A few coins fly from the middle of the screen into the balance.
let lastPointer = null;
document.addEventListener("pointerdown", (e) => (lastPointer = [e.clientX, e.clientY]), true);
function flyCoins(k) {
  if (reducedMotion()) return;
  const to = $("#hud-coins .coin").getBoundingClientRect();
  const [sx, sy] = lastPointer || [innerWidth / 2, innerHeight / 2];
  for (let i = 0; i < k; i++) {
    const c = document.createElement("span"); c.className = "coin flycoin";
    c.style.left = sx + "px"; c.style.top = sy + "px"; document.body.append(c);
    const dx = to.left - sx, dy = to.top - sy, mx = (Math.random() - 0.5) * 160, my = -80 - Math.random() * 80;
    c.animate([{ transform: "translate(0,0) scale(.6)", opacity: 0 }, { transform: `translate(${mx}px,${my}px) scale(1.15)`, opacity: 1, offset: 0.35 }, { transform: `translate(${dx}px,${dy}px) scale(.7)`, opacity: 0.9 }],
      { duration: 850 + i * 70, delay: i * 60, easing: "cubic-bezier(.3,.1,.3,1)", fill: "forwards" }).onfinish = () => c.remove();
  }
}
function spend(n) { if (S.coins < n) return false; S.coins -= n; save(); renderHUD(); return true; }

/* ───────────────────────── HUD ───────────────────────── */
function renderHUD() {
  if (typeof renderWall === "function" && view === "room" && currentRoom === "command" && $("#panel").hidden) queueMicrotask(() => renderWall(roomById("command"), true));
  $("#hud-day").textContent = `Day ${S.day} of ${MISSION_DAYS}`;
  $("#hud-phase").textContent = phaseOf(S.day);
  $("#hud-coins-val").textContent = S.coins;
  renderWallScreen();
}

/* ───────────────────────── cinematic transitions ───────────────────────── */
let cineBusy = false;
// Clips are fetched once into memory so they start on the first frame with no buffering.
const clipCache = new Map();
function warmClip(name) {
  if (clipCache.has(name)) return clipCache.get(name);
  const p = fetch(`assets/fx/${name}.mp4`).then((r) => (r.ok ? r.blob() : null)).then((b) => (b ? URL.createObjectURL(b) : null)).catch(() => null);
  clipCache.set(name, p); return p;
}
// Plays a Higgsfield clip over the screen. Its first frame matches the current view and its last frame matches
// the next one, so the clip appears without a fade from black and the next view is swapped in underneath before it fades out.
async function cinematic(clip, title, frameSel, point, onSwitch, { rate = 1 } = {}) {
  if (cineBusy) return; if (reducedMotion()) { onSwitch(); return; }
  cineBusy = true;
  const cine = $("#cine"), v = $("#cine-v"); let done = false, timer;
  const finish = () => setTimeout(() => { cine.hidden = true; cine.classList.remove("in", "out"); v.pause(); v.removeAttribute("src"); v.load(); cineBusy = false; }, 650);
  const end = () => {
    if (done) return; done = true; clearTimeout(timer);
    onSwitch(); arriveAnim();
    requestAnimationFrame(() => cine.classList.add("out")); finish();
  };
  const fallback = () => {
    if (done) return; done = true; clearTimeout(timer);
    cine.hidden = true; cine.classList.remove("in");
    const scene = $(frameSel + " .scene");
    if (!scene) { cineBusy = false; onSwitch(); return; }
    scene.style.transformOrigin = `${point[0]}% ${point[1]}%`;
    scene.classList.add("dive"); requestAnimationFrame(() => (scene.style.transform = "scale(2.6)"));
    setTimeout(() => { scene.classList.remove("dive"); scene.style.transform = ""; scene.style.transformOrigin = ""; onSwitch(); arriveAnim(); cineBusy = false; }, 850);
  };
  $("#cine-title").innerHTML = title;
  $("#cine-skip").onclick = (e) => { e.stopPropagation(); end(); };
  cine.onclick = end;
  timer = setTimeout(() => { if (v.readyState < 2) fallback(); }, 2500);
  const src = await warmClip(clip);
  if (done) return;
  if (!src) return fallback();
  v.muted = true; v.src = src; v.playbackRate = rate;
  v.onerror = fallback;
  // swap the view in just before the last frame so the fade-out lands on the matching image
  v.ontimeupdate = () => { if (v.duration && v.currentTime >= v.duration - 0.3 / rate) end(); };
  v.onended = end;
  cine.classList.remove("in", "out"); cine.hidden = false;
  try { await v.play(); } catch { return fallback(); }
  const show = () => cine.classList.add("in");
  if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(show); else requestAnimationFrame(show);
}
function arriveAnim() { const s = $(`#view-${view} .scene`); if (!s) return; s.classList.remove("arrive"); void s.offsetWidth; s.classList.add("arrive"); }
/* ── portals ──
   Every move is a circle opening onto the next space: your base on the map, a module's skylight, a hatch in the tube.
   The circle shows the real next view (a copy of it) and grows until it IS that view, so there is never a jump.
   Leaving a room is the reverse: the room shrinks back into its hatch. Only transform, clip-path and opacity animate. */
const E_IO = "cubic-bezier(.62,0,.24,1)", E_OUT = "cubic-bezier(.16,1,.3,1)", E_IN = "cubic-bezier(.55,0,.8,.25)";
const EASE_IO = E_IO;
const rectOf = (el) => { const r = el.getBoundingClientRect(); return { left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px" }; };
let moving = false;
function freeze(root) {
  root.removeAttribute("id"); root.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id"));
  root.querySelectorAll("iframe,video,canvas,.infocard,.room-banner").forEach((e) => e.remove());
  return root;
}
function ghostOf(frame) {
  const r = frame.getBoundingClientRect(); const g = freeze(frame.cloneNode(true));
  Object.assign(g.style, { position: "fixed", left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px", margin: 0, zIndex: 58, pointerEvents: "none" });
  g.classList.add("ghost"); document.body.append(g); return g;
}
// a light snapshot for crossfades: just the frame's picture (already decoded), no cloned DOM
function ghostLite(frame) {
  const r = frame.getBoundingClientRect(); const g = document.createElement("div"); g.className = "ghost-lite";
  const src = frame.querySelector(".scene img")?.currentSrc || frame.querySelector(".scene img")?.src;
  Object.assign(g.style, { position: "fixed", left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px", zIndex: 58, pointerEvents: "none",
    borderRadius: getComputedStyle(frame).borderRadius, overflow: "hidden", background: `center / cover no-repeat url("${src}")`, willChange: "opacity, transform" });
  document.body.append(g); return g;
}
function portalBox(R, frame) {
  const p = document.createElement("div"); p.className = "portal";
  Object.assign(p.style, { left: R.left + "px", top: R.top + "px", width: R.width + "px", height: R.height + "px" });
  const sc = freeze(frame.querySelector(".scene").cloneNode(true));
  sc.querySelectorAll('[style*="opacity: 0"]').forEach((e) => e.remove());
  sc.classList.remove("arrive", "enter", "tvzoom", "dive", "push"); sc.style.cssText = "";
  p.append(sc); document.body.append(p); return p;
}
const settle = (ms) => new Promise((res) => setTimeout(res, ms));
// hole: {x, y, r} in viewport px. k = how big the next view looks inside the hole (2 = it exactly fills the hole).
async function openPortal({ fromFrame, hole, show, toFrameSel, dur = 900, k = 2.7, iris = true, after }) {
  if (moving) return; moving = true; dur *= window.__nabuSlow || 1;
  if (reducedMotion()) { show(); moving = false; after?.(); return; }
  const ghost = ghostOf(fromFrame);
  show();
  const to = $(toFrameSel); to.classList.add("await-flight");
  const R = to.getBoundingClientRect();
  const p = portalBox(R, to);
  const s0 = Math.min(1, (hole.r * k) / R.width);
  const dx = hole.x - (R.left + R.width / 2), dy = hole.y - (R.top + R.height / 2);
  const rIn = hole.r / s0, rEnd = Math.hypot(R.width, R.height) / 2 + 4;
  const start = `translate(${dx}px,${dy}px) scale(${s0})`;
  const frames = iris
    ? [{ transform: start, clipPath: `circle(0px at 50% 50%)` }, { transform: start, clipPath: `circle(${rIn}px at 50% 50%)`, offset: 0.25 }, { transform: "none", clipPath: `circle(${rEnd}px at 50% 50%)` }]
    : [{ transform: start, clipPath: `circle(${rIn}px at 50% 50%)` }, { transform: "none", clipPath: `circle(${rEnd}px at 50% 50%)` }];
  p.animate(frames, { duration: dur, easing: E_IO, fill: "forwards" });
  // the place you leave moves past you toward the hole, then fades
  const G = ghost.getBoundingClientRect(); const gs = ghost.querySelector(".scene") || ghost;
  gs.style.transformOrigin = `${hole.x - G.left}px ${hole.y - G.top}px`;
  gs.animate([{ transform: "scale(1)" }, { transform: `scale(${Math.max(2, (R.width / (hole.r * k)) * 1.05)})` }], { duration: dur, easing: E_IO, fill: "forwards" });
  ghost.animate([{ opacity: 1 }, { opacity: 1, offset: 0.6 }, { opacity: 0 }], { duration: dur, fill: "forwards" });
  await settle(dur);
  to.classList.remove("await-flight"); ghost.remove();
  p.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, fill: "forwards" }).onfinish = () => p.remove();
  moving = false; after?.();
}
async function closePortal({ fromFrame, show, toFrameSel, holeOf, dur = 800, k = 2.7, after }) {
  if (moving) return; moving = true; dur *= window.__nabuSlow || 1;
  if (reducedMotion()) { show(); moving = false; after?.(); return; }
  const F = fromFrame.getBoundingClientRect();
  const p = portalBox(F, fromFrame);
  show();
  const to = $(toFrameSel), T = to.getBoundingClientRect(), hole = holeOf(T);
  const s1 = Math.min(1, (hole.r * k) / F.width);
  const dx = hole.x - (F.left + F.width / 2), dy = hole.y - (F.top + F.height / 2);
  const end = `translate(${dx}px,${dy}px) scale(${s1})`;
  p.animate([{ transform: "none", clipPath: `circle(${Math.hypot(F.width, F.height) / 2 + 4}px at 50% 50%)` },
    { transform: end, clipPath: `circle(${hole.r / s1}px at 50% 50%)`, offset: 0.75 },
    { transform: end, clipPath: `circle(0px at 50% 50%)` }], { duration: dur, easing: E_IO, fill: "forwards" });
  const sc = to.querySelector(".scene");
  sc.style.transformOrigin = `${hole.x - T.left}px ${hole.y - T.top}px`;
  sc.animate([{ transform: `scale(${Math.max(2, F.width / (hole.r * k))})`, opacity: 0.4 }, { transform: "scale(1)", opacity: 1 }], { duration: dur * 0.85, easing: E_IO });
  await settle(dur);
  p.remove(); sc.style.transformOrigin = ""; moving = false; after?.();
}
const holeOfEl = (el, f = 1) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, r: (r.width / 2) * f }; };
// the hatch door in corridor.webp: centre (50%, 47.7%), door radius 11.5% of the frame width
const hatchHole = (R) => ({ x: R.left + R.width * 0.5, y: R.top + R.height * 0.477, r: R.width * 0.115 });
/* ── video transitions ──
   Every move plays a Higgsfield clip on top of the view you are looking at. The clip starts on that exact picture and ends
   on the exact picture you arrive at, it plays sped up and trimmed, the next view is swapped in underneath and the clip
   dissolves into it. If a clip is missing, the portal animation above is used instead. */
// A few clips are kept decoded and parked on their first frame, so a click starts them instantly.
const primed = new Map();
async function primeClip(name, trimIn = 0.02) {
  if (reducedMotion() || primed.has(name)) return;
  primed.set(name, null);
  // never load a decoder while something is moving: wait for a quiet moment
  while (moving) await new Promise((r) => setTimeout(r, 250));
  await new Promise((r) => (window.requestIdleCallback ? requestIdleCallback(r, { timeout: 1500 }) : setTimeout(r, 300)));
  const src = await warmClip(name); if (!src) { primed.delete(name); return; }
  const v = document.createElement("video"); v.muted = true; v.playsInline = true; v.preload = "auto"; v.src = src;
  await new Promise((r) => (v.readyState >= 2 ? r() : (v.onloadeddata = r)));
  await new Promise((r) => { v.onseeked = r; v.currentTime = trimIn; });
  primed.set(name, v);
  // keep at most two decoded clips parked
  while (primed.size > 2) { const [k, old] = primed.entries().next().value; primed.delete(k); if (old) { old.removeAttribute("src"); old.load(); } }
}
async function playClip({ clip, fromFrame, show, toFrameSel, rate = 1, trimIn = 0.02, trimOut = 0.04, title = "" }) {
  if (moving) return false;
  const src = reducedMotion() ? null : await warmClip(clip);
  if (!src) return false;
  moving = true; const T0 = performance.now(); const mark = (k) => window.__nabuDebug && (window.__clipT ||= []).push(k + ":" + Math.round(performance.now() - T0));
  const box = $("#flight");
  box.getAnimations().forEach((a) => a.cancel());
  const r0 = rectOf(fromFrame);
  Object.assign(box.style, r0, { opacity: 0 });
  $("#flight-title").innerHTML = title; box.classList.remove("titled");
  let v = primed.get(clip);
  if (v) { primed.delete(clip); const old = box.querySelector("video"); old.replaceWith(v); }
  else {
    v = box.querySelector("video"); v.muted = true; v.src = src;
    await new Promise((r) => (v.readyState >= 2 ? r() : (v.onloadeddata = r)));
    try { v.currentTime = trimIn; } catch {}
  }
  box.hidden = false; mark("loaded");
  v.playbackRate = rate;
  try { await v.play(); } catch { box.hidden = true; moving = false; return false; }
  await new Promise((r) => (v.requestVideoFrameCallback ? v.requestVideoFrameCallback(r) : requestAnimationFrame(r)));
  await box.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 110, easing: "ease-out", fill: "forwards" }).finished;
  mark("visible"); show(); mark("shown");
  const to = $(toFrameSel); to.classList.add("await-flight");
  // decode the next view's pictures while the clip plays, so it appears without a hitch
  const decoding = Promise.all([...to.querySelectorAll("img")].map((i) => (i.decode ? i.decode().catch(() => {}) : null)));
  const r1 = rectOf(to);
  const playMs = Math.max(400, ((v.duration - trimIn - trimOut) / rate) * 1000);
  if (r1.left !== r0.left || r1.top !== r0.top || r1.width !== r0.width || r1.height !== r0.height) {
    const px = (v) => parseFloat(v);
    const dx = px(r0.left) - px(r1.left), dy = px(r0.top) - px(r1.top), sx = px(r0.width) / px(r1.width), sy = px(r0.height) / px(r1.height);
    Object.assign(box.style, r1, { transformOrigin: "0 0" });
    box.animate([{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: "none" }], { duration: playMs * 0.85, easing: E_IO, fill: "forwards" });
  }
  if (title) setTimeout(() => box.classList.add("titled"), 250);
  await new Promise((res) => {
    let done = false; const end = () => { if (done) return; done = true; v.ontimeupdate = v.onended = null; res(); };
    v.ontimeupdate = () => { if (v.duration && v.currentTime >= v.duration - trimOut) end(); };
    v.onended = end; $("#flight-skip").onclick = end; setTimeout(end, playMs + 1500);
  });
  await decoding; mark("ended"); to.classList.remove("await-flight");
  await box.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, easing: "ease-out", fill: "forwards" }).finished;
  box.hidden = true; box.getAnimations().forEach((a) => a.cancel()); v.pause();
  mark("done"); moving = false; return true;
}
// The map crop the base-descent clip starts from (fractions of the map image), centred on your base.
const MAP_CROP = { l: 0.289, t: 0.2455, w: 0.24 };
async function enterBase() {
  if (moving) return;
  const map = $("#map"), scene = $("#map .scene");
  map.classList.add("zooming"); warmClip("planet-base");
  const s = 1 / MAP_CROP.w;
  scene.style.animation = "none"; scene.style.transformOrigin = "0 0";
  const zoom = scene.animate([{ transform: "none" }, { transform: `translate(${-MAP_CROP.l * s * 100}%, ${-MAP_CROP.t * s * 100}%) scale(${s})` }],
    { duration: reducedMotion() ? 0 : 420, easing: E_IO, fill: "forwards" });
  await zoom.finished;
  const reset = () => { zoom.cancel(); scene.style.animation = ""; scene.style.transformOrigin = ""; map.classList.remove("zooming"); };
  const ok = await playClip({ clip: "planet-base", fromFrame: map, title: `<div class="ey">Landing · ${esc(ME.ship)}</div><div class="nm">${esc(ME.base)}</div>`,
    show: () => { go("base"); $("#base-markers").style.opacity = 0; }, toFrameSel: "#base" });
  reset();
  if (!ok) { go("base"); }
  const bm = $("#base-markers"); bm.style.opacity = ""; bm.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, easing: "ease-out" });
}
// Base -> room. The hub has a clip that dives through its big central skylight. For the outer modules the camera
// dives straight into that module's own dome on the base picture and you land in the room, in the same frame.
async function enterRoom(id) {
  if (moving) return;
  const m = modById(id); const r = roomById(m.room);
  if (view !== "base") { go("room", r.id); arriveAnim(); return; }
  if (id === "hub") {
    const title = `<div class="ey">${esc(m.name)} · ${esc(ME.base)}</div><div class="nm">${esc(r.name)}</div>`;
    // down through the skylight of the hub, then the laptop is set on the desk and opens
    if (!reducedMotion()) { const sc = $("#base .scene"); $("#base-markers").style.opacity = 0; sc.style.animation = "none"; sc.style.transformOrigin = `${m.x}% ${m.y}%`;
      await sc.animate([{ transform: "scale(1)", filter: "brightness(1)" }, { transform: "scale(4.5)", filter: "brightness(1.5)" }], { duration: 520, easing: "cubic-bezier(.55,0,.8,.3)", fill: "forwards" }).finished;
      const ok = await playClip({ clip: "console-in", fromFrame: $("#base"), rate: 1, title, show: () => { go("room", "command"); sc.getAnimations().forEach((a) => a.cancel()); sc.style.animation = ""; sc.style.transformOrigin = ""; $("#base-markers").style.opacity = ""; }, toFrameSel: "#room" });
      if (ok) return; sc.getAnimations().forEach((a) => a.cancel()); sc.style.animation = ""; sc.style.transformOrigin = ""; $("#base-markers").style.opacity = ""; }
  }
  if (reducedMotion()) { go("room", r.id); return; }
  moving = true;
  const sc = $("#base .scene"); $("#base-markers").style.opacity = 0; $("#base").classList.add("zooming");
  sc.style.animation = "none"; sc.style.transformOrigin = `${m.x}% ${m.y}%`;
  await sc.animate([{ transform: "scale(1)", filter: "brightness(1)" }, { transform: "scale(5.5)", filter: "brightness(1.35)" }], { duration: 430, easing: "cubic-bezier(.55,0,.8,.3)", fill: "forwards" }).finished;
  const g = ghostOf($("#base"));
  sc.getAnimations().forEach((x) => x.cancel()); sc.style.animation = ""; sc.style.transformOrigin = ""; $("#base-markers").style.opacity = ""; $("#base").classList.remove("zooming");
  go("room", r.id);
  g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: "ease-out", fill: "forwards" }).onfinish = () => g.remove();
  await $("#room .scene").animate([{ transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 420, easing: E_OUT }).finished;
  moving = false;
}

/* Hover info cards, like an architecture showcase. */
function bindCard(cardSel, btn, html, x, y) {
  const card = $(cardSel);
  const show = () => { card.innerHTML = html(); card.hidden = false; card.style.left = x < 58 ? `calc(${x}% + 7%)` : ""; card.style.right = x >= 58 ? `calc(${100 - x}% + 7%)` : ""; card.style.top = `clamp(8px, calc(${y}% - 60px), calc(100% - 190px))`; };
  const hide = () => (card.hidden = true);
  btn.addEventListener("pointerenter", show); btn.addEventListener("focus", show);
  btn.addEventListener("pointerleave", hide); btn.addEventListener("blur", hide); btn.addEventListener("click", hide);
}

/* ───────────────────────── views ───────────────────────── */
let view = "planet", currentRoom = "command";
function go(v, room, focus, quiet) {
  setTimeout(() => typeof heartbeat === "function" && heartbeat(), 0);
  view = v; if (room) currentRoom = room; if (!roomById(currentRoom)) currentRoom = "command";
  $$(".view").forEach((el) => (el.hidden = true));
  $("#view-" + v).hidden = false;
  if (v === "planet") { renderPlanet(); primeClip("planet-base"); }
  if (v === "base") { renderBase(); primeClip("console-in"); }
  if (v === "room") { renderRoom(); if (currentRoom === "command") { primeClip("door-command-living"); primeClip("console-out"); } else primeClip(currentRoom === "living" ? "door-living-command" : "console-in"); const i = HUB.indexOf(currentRoom); if (i >= 0) { primeClip(`door-${currentRoom}-${HUB[(i + 1) % HUB.length]}`); primeClip(`door-${currentRoom}-${HUB[(i + HUB.length - 1) % HUB.length]}`); } }
  if (v === "corridor") { openCorridorView(focus, quiet); primeClip("hatch-" + ROOMS[corrIdx].id); }
  $("#stage").scrollTop = 0;
}

function renderPlanet() {
  const box = $("#map-markers");
  const others = STATIONS.map((st) => `<button class="base-marker" style="left:${st.x}%;top:${st.y}%" data-station="${st.sym}" aria-label="${esc(st.ship)} base">
      <span class="base-tag">${esc(st.ship)}</span></button>`).join("");
  box.innerHTML = others + `<button class="base-marker mine" style="left:${ME.x}%;top:${ME.y}%" data-mine aria-label="Enter your base"><span class="base-tag">Your base · Lyra</span></button>`;
  const mine = $("[data-mine]", box);
  mine.onclick = enterBase;
  bindCard("#map-card", mine, () => {
    const built = MODULES.filter((m) => S.built[m.id]).length;
    return `<div class="ey">Your base · ${esc(ME.ship)}</div><div class="nm">${esc(ME.base)}</div>
      <div class="kv"><div><b>${S.day}</b><span>day</span></div><div><b>${built}/6</b><span>modules</span></div><div><b>${S.journal.length}</b><span>journal pages</span></div></div>
      <div class="cta">Click to descend into your base ▸</div>`;
  }, ME.x, ME.y);
  $$("[data-station]", box).forEach((b) => {
    b.onclick = () => openStation(b.dataset.station);
    const st = STATIONS.find((s) => s.sym === b.dataset.station);
    bindCard("#map-card", b, () => {
      const crew = PEOPLE.filter((x) => x.sym === st.sym), chs = crew.reduce((n, x) => n + relCh(x).length, 0);
      return `<div class="ey">${esc(st.crew)}'s crew</div><div class="nm">${esc(st.ship)}</div>
        <div class="kv"><div><b>${crew.length}</b><span>writers</span></div><div><b>${chs}</b><span>chapters</span></div><div><b>${crew.reduce((n, x) => n + unreadOf(x), 0)}</b><span>new</span></div></div>
        <div>Click to see their journal and send a message.</div>`;
    }, st.x, st.y);
  });
}

function moduleState(m) { if (S.built[m.id]) return "open"; if (S.day >= m.day) return "available"; return "locked"; }
function renderBase() {
  const w = wellness();
  $("#base-img").style.filter = `brightness(${w.brightness}) saturate(${0.75 + 0.25 * w.brightness})`;
  // Unbuilt modules stay hidden under construction pads: you only find out what's inside by building.
  $("#base-markers").innerHTML = MODULES.map((m) => {
    const st = moduleState(m);
    const label = st === "open" ? esc(m.name) : `Unknown module<small>${st === "available" ? `${m.cost} coins` : `from day ${m.day}`}</small>`;
    return `<button class="module ${st === "open" ? "" : "locked"} ${st}" style="left:${m.x}%;top:${m.y}%;width:${(m.size + (st === "open" ? 0 : 3)) * 0.52}%;height:${(m.size + (st === "open" ? 0 : 3)) * 0.92}%" data-mod="${m.id}">
      ${st === "open" ? "" : `<img class="pad" src="assets/pad.webp" alt="">`}<span class="module-label">${label}</span></button>`;
  }).join("");
  $$("#base-markers [data-mod]").forEach((b) => {
    const m = modById(b.dataset.mod);
    b.onclick = () => { if (S.built[m.id]) enterRoom(m.id); else openBuild(m); };
    bindCard("#base-card", b, () => {
      const st = moduleState(m); const n = MODULES.indexOf(m) + 1;
      if (st !== "open") return `<div class="ey">Module ${n}</div><div class="nm">Undiscovered</div>
        <div>What's inside stays a mystery until you build it.</div>
        <div class="kv"><div><b>${m.cost}</b><span>coins</span></div><div><b>${m.day}</b><span>from day</span></div><div><b>${S.coins}</b><span>you have</span></div></div>
        <div class="cta">${st === "available" ? (S.coins >= m.cost ? "Ready to build ▸" : `You need ${m.cost - S.coins} more coins`) : `Unlocks on day ${m.day}`}</div>`;
      const rooms = ROOMS.filter((r) => r.module === m.id);
      return `<div class="ey">Module ${n}</div><div class="nm">${esc(m.name)}</div>
        <div>${rooms.length > 1 ? rooms.map((r) => esc(r.name)).join(" · ") : rooms[0].hotspots.map((h) => esc(h.label.split(" · ").pop())).join(" · ")}</div>
        <div class="cta" style="margin-top:6px">Click to go inside ▸</div>`;
    }, m.x, m.y);
  });
  $("#module-list").innerHTML = MODULES.map((m) => {
    const st = moduleState(m);
    return `<li class="${st}"><span>${st === "open" ? esc(m.name) : "Unknown module"}</span><span class="st">${st === "open" ? "built" : st === "available" ? m.cost + " coins" : "day " + m.day}</span></li>`;
  }).join("");
  $("#wellness-card").innerHTML = wellnessHTML(true);
}

/* Rooms: walk between them through doors (or arrows, keys, swipe, filmstrip). */
const builtRooms = () => ROOMS.filter((r) => S.built[r.module]);
const doorPos = (r, side) => r.doors?.[side] || (side === "left" ? [2.2, 60] : [97.8, 60]);
function renderRoom(arrive) {
  const r = roomById(currentRoom);
  $("#room-name").textContent = r.name;
  const frame = $("#room"), scene = $("#room .scene");
  frame.classList.toggle("tvroom", !!r.tv); frame.classList.toggle("cmdroom", !!r.command); scene.classList.toggle("still", !!r.noDrift);
  const img = $("#room-img"); img.src = imgUrl(r); img.alt = "Inside the " + r.name;
  img.style.filter = `brightness(${wellness().brightness})`;
  const light = S.light[r.id] || "warm";
  $("#room-tint").style.background = { warm: "rgba(255,170,90,.14)", neutral: "transparent", cool: "rgba(90,200,255,.18)" }[light];
  $$("#light-seg button").forEach((b) => b.classList.toggle("on", b.dataset.light === light));
  const m = modById(r.module);
  $("#room-caption").innerHTML = `<div class="ey">${esc(m.name)} · ${esc(ME.base)}</div><div class="nm">${esc(r.name)}</div>`;
  // Inside the central hub the four rooms open into each other through doors. Modules are separate buildings:
  // you reach them from the base and leave them back to the base.
  const inHub = HUB.includes(r.id);
  const nb = (d) => roomById(HUB[(HUB.indexOf(r.id) + d + HUB.length) % HUB.length]);
  const door = (side) => { const to = nb(side === "left" ? -1 : 1); const [x, y] = doorPos(r, side);
    return r.doors ? `<button class="door ${side} real" style="left:${x}%;top:${y}%" data-door="${side}"><span class="door-ic"></span><span class="door-t"><small>Door to</small>${esc(to.name)}</span></button>`
      : `<button class="door-edge ${side}" data-door="${side}"><b>${side === "left" ? "‹" : "›"}</b><span><small>Door to</small>${esc(to.name)}</span></button>`; };
  const exitBtn = `<button class="exit-btn" data-base="1"><span class="exit-ic">${ICON.globe}</span><span><small>${r.module === "hub" ? "Leave the hub" : "Leave the module"}</small>Back to base</span><b>↑</b></button>`;
  const filled = new Set((S.decor[r.id] || []).map((d) => d.slot).filter(Boolean));
  const openSlots = []; void filled; // furniture goes anywhere on the floor now; no fixed spots
  $("#room-hotspots").innerHTML =
    r.hotspots.map((h, k) => `<button class="hotspot" style="left:${h.x}%;top:${h.y}%;--d:${k * 90}ms" data-i="${k}"><span class="hs-ic">${ICON[h.ic] || ""}</span>${esc(h.label)}</button>`).join("") +
    openSlots.map((s, k) => `<button class="slot" style="left:${s.x}%;top:${s.y}%;--d:${k * 70}ms" data-slot="${s.id}" aria-label="Place ${esc(ITEMS[s.items[0]].name)} here"><span>+</span><em>${esc(ITEMS[s.items[0]].name)}</em></button>`).join("") +
    (inHub && r.doors ? door("left") + door("right") : "") +
    (r.id === "living" ? `<button class="wallscreen" id="wallscreen" aria-label="Mission clock, open the health screen"></button>` : "");
  // rooms without drawn doors get doorways on the frame edge, outside the moving image
  $("#room-ui").innerHTML = (inHub && !r.doors ? door("left") + door("right") : "") + exitBtn +
    (r.command ? `<button class="console-leave" id="console-leave"><b>‹</b><span><small>Close the laptop</small>Living quarters</span></button>` : "") +
    (r.command ? `<button class="wall-back screen-back" id="screen-back"><b>‹</b><span>Back to the room</span></button>` : "") +
    (r.tv && !r.wall ? `<button class="tv-toggle" id="tv-toggle">${tvZoom ? "Room view" : "Screen view"}</button>` : "");
  $$("#room-hotspots .hotspot").forEach((b) => (b.onclick = () => hotspot(r.hotspots[+b.dataset.i].act)));
  $$("#room-hotspots .slot").forEach((b) => (b.onclick = () => openShop(false, (r.slots || []).find((s) => s.id === b.dataset.slot))));
  $$("#room-hotspots [data-door], #room-ui [data-door]").forEach((b) => (b.onclick = () => hubStep(b.dataset.door === "left" ? -1 : 1)));
  $$("#room-ui [data-base]").forEach((b) => (b.onclick = leaveToBase));
  const ws = $("#wallscreen"); if (ws) { ws.onclick = () => travelTo("command"); renderWallScreen(); placeWallScreen(); }
  $("#tv-toggle")?.addEventListener("click", () => setTvZoom(!tvZoom));
  // empty-room banner
  const nDecor = (S.decor[r.id] || []).length;
  $("#room-banner").innerHTML = r.empty && !nDecor ? `<b>This room is empty.</b> Open the <b>Market</b> and make it yours.` : "";
  $("#room-banner").hidden = !$("#room-banner").innerHTML;
  renderDecor(); renderTV(r); renderWall(r);
  $("#screen-back")?.addEventListener("click", () => setScreenZoom(false));
  $("#console-leave")?.addEventListener("click", () => travelTo("living"));
  $("#room-prev").hidden = $("#room-next").hidden = true;
  $("#filmstrip").innerHTML = ROOMS.map((x) => S.built[x.module]
    ? `<button class="film ${x.id === r.id ? "on" : ""}" data-room="${x.id}" style="background-image:url(assets/thumbs/${x.img}.webp)"><span>${esc(x.name)}</span></button>`
    : `<button class="film locked" data-locked="${x.module}" aria-label="Undiscovered room"><span>?</span></button>`).join("");
  $$("#filmstrip [data-room]").forEach((b) => (b.onclick = () => travelTo(b.dataset.room)));
  $$("#filmstrip [data-locked]").forEach((b) => (b.onclick = () => openBuild(modById(b.dataset.locked))));
  renderRoomLine();
  if (arrive) { scene.classList.remove("enter"); void scene.offsetWidth; scene.classList.add("enter"); }
}
function stepRoom(d) { if (HUB.includes(currentRoom)) hubStep(d); }
/* ── moving around ──
   Hub rooms: walk through the door into the neighbouring room (a clip per door). Modules: back to the base and in again. */
const HUB = ["bedroom", "living", "mess"];
async function hubStep(d) {
  if (moving) return;
  const i = HUB.indexOf(currentRoom); if (i < 0) return;
  const to = HUB[(i + d + HUB.length) % HUB.length];
  const ok = await playClip({ clip: `door-${currentRoom}-${to}`, fromFrame: $("#room"), show: () => go("room", to), toFrameSel: "#room" });
  if (!ok) slideRooms(to, d);
}
// fallback when a door clip is missing: a quick sideways move, no blur
function slideRooms(to, d) {
  const g = ghostLite($("#room")); go("room", to);
  g.animate([{ transform: "none", opacity: 1 }, { transform: `translateX(${-18 * d}%)`, opacity: 0 }], { duration: 280, easing: E_IN, fill: "forwards" }).onfinish = () => g.remove();
  $("#room .scene").animate([{ transform: `translateX(${18 * d}%)`, opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 340, delay: 40, easing: E_OUT, fill: "backwards" });
}
// Leaving a room or module: the camera pulls back up out of the roof and you are above the base again.
async function leaveToBase() {
  if (moving) return;
  if (currentRoom === "command" && !reducedMotion()) {
    const ok = await playClip({ clip: "console-out", fromFrame: $("#room"), show: () => { go("base"); }, toFrameSel: "#base", rate: 1 });
    if (ok) return;
  }
  const m = modById(roomById(currentRoom).module);
  const g = ghostLite($("#room")); go("base");
  const sc = $("#base .scene");
  sc.style.transformOrigin = `${m.x}% ${m.y}%`;
  sc.animate([{ transform: "scale(2.4)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 460, easing: E_OUT });
  g.animate([{ transform: "scale(1)", opacity: 1 }, { transform: "scale(.6)", opacity: 0 }], { duration: 300, easing: E_IN, fill: "forwards" }).onfinish = () => { g.remove(); sc.style.transformOrigin = ""; };
}
// From one room to another anywhere (filmstrip): through the hub doors, or up to the base and down into the module.
async function travelTo(id) {
  if (moving || id === currentRoom) return;
  const target = roomById(id); if (!S.built[target.module]) return openBuild(modById(target.module));
  if (id === "command" || currentRoom === "command") return consoleSwap(id);
  const a = HUB.indexOf(currentRoom), b = HUB.indexOf(id);
  if (a >= 0 && b >= 0) { const n = HUB.length, fwd = (b - a + n) % n; if (fwd === 1 || fwd === n - 1) return hubStep(fwd === 1 ? 1 : -1); }
  jumpTo(id);
}
// Straight to any room from the room line: the current room fades back, the new one settles in, in the same frame.
async function jumpTo(id) {
  if (reducedMotion()) { go("room", id); return; }
  moving = true;
  // decode the next room's picture first, so the swap never stalls a frame
  try { const im = new Image(); im.src = imgUrl(roomById(id)); await im.decode(); } catch {}
  const g = ghostLite($("#room")); go("room", id);
  g.animate([{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(.97)" }], { duration: 240, easing: "ease-in", fill: "forwards" }).onfinish = () => g.remove();
  $("#room .scene").animate([{ opacity: 0, transform: "scale(1.04)" }, { opacity: 1, transform: "scale(1)" }], { duration: 340, delay: 60, easing: E_OUT, fill: "backwards" }).onfinish = () => (moving = false);
}
/* Into the control room: the room you are in rushes towards you and dissolves into the glow of the monitors,
   which then settle in front of you and power on. Out of it: the screens collapse to a line like an old monitor,
   and the room you go to opens up behind them. */
async function consoleSwap(id) {
  if (moving) return;
  if (id === "command" && !reducedMotion()) {
    const ok = await playClip({ clip: currentRoom === "living" ? "door-living-command" : "console-in", fromFrame: $("#room"), show: () => go("room", "command"), toFrameSel: "#room", rate: 1 });
    if (ok) return;
  }
  if (id !== "command" && currentRoom === "command" && !reducedMotion()) {
    const ok = await playClip({ clip: id === "living" ? "door-command-living" : "console-out", fromFrame: $("#room"), show: () => go("room", id), toFrameSel: "#room", rate: 1 });
    if (ok) return;
  }
  moving = true; const room = $("#room");
  if (reducedMotion()) { go("room", id); moving = false; return; }
  if (id === "command") {
    const g = ghostLite(room); go("room", "command");
    const sc = $("#room .scene");
    g.animate([{ transform: "scale(1)", filter: "brightness(1) blur(0)", opacity: 1 }, { transform: "scale(1.9)", filter: "brightness(1.6) blur(6px)", opacity: 0 }], { duration: 650, easing: "cubic-bezier(.55,0,.75,.3)", fill: "forwards" }).onfinish = () => g.remove();
    await sc.animate([{ transform: "scale(.82)", filter: "brightness(2.2) blur(10px)", opacity: 0 }, { offset: .45, opacity: 1 }, { transform: "scale(1)", filter: "brightness(1) blur(0)", opacity: 1 }], { duration: 900, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" }).finished;
  } else {
    if (screenZoom) setScreenZoom(false);
    const sc = $("#room .scene"); sc.style.transformOrigin = "50% 50%"; $("#wall-ui").style.transformOrigin = "50% 50%";
    $("#wall-ui").animate([{ transform: "scaleY(1)", opacity: 1 }, { offset: .55, transform: "scaleY(.012)", opacity: 1 }, { transform: "scaleY(.012) scaleX(0)", opacity: 0 }], { duration: 520, easing: "cubic-bezier(.5,0,.8,.3)", fill: "forwards" });
    await sc.animate([{ transform: "scaleY(1)", filter: "brightness(1)" }, { offset: .55, transform: "scaleY(.012) scaleX(1)", filter: "brightness(3)" }, { transform: "scaleY(.012) scaleX(0)", filter: "brightness(4)" }], { duration: 520, easing: "cubic-bezier(.5,0,.8,.3)", fill: "forwards" }).finished;
    const flash = document.createElement("div"); flash.className = "crt-line"; room.append(flash);
    go("room", id); sc.getAnimations().forEach((a) => a.cancel()); $("#wall-ui").getAnimations().forEach((a) => a.cancel()); sc.style.transformOrigin = "";
    flash.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: "forwards" }).onfinish = () => flash.remove();
    await $("#room .scene").animate([{ transform: "scale(1.12)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" }).finished;
  }
  moving = false;
}
// The room line: every room of the base on one line, hub rooms first, then the modules.
function renderRoomLine() {
  const box = $("#roomline"); if (!box) return;
  const order = ["command", ...HUB, ...MODULES.filter((m) => m.id !== "hub").map((m) => m.room)];
  box.innerHTML = `<span class="rl-group">Central hub</span>` + order.map((id, k) => {
    const r = roomById(id), m = modById(r.module), st = S.built[m.id] ? "open" : moduleState(m);
    const lab = st === "open" ? r.name : st === "available" ? `${m.cost} coins` : `Day ${m.day}`;
    return `${k === HUB.length + 1 ? `<span class="rl-sep"></span><span class="rl-group">Modules</span>` : ""}<button class="rl-stop ${st} ${id === currentRoom ? "on" : ""}" data-room="${id}" title="${st === "open" ? esc(r.name) : "Undiscovered module"}">
      <i>${st === "open" ? "" : `<img src="assets/lock.webp" alt="">`}</i><span>${esc(lab)}</span></button>`;
  }).join("");
  $$("#roomline .rl-stop").forEach((b) => (b.onclick = () => travelTo(b.dataset.room)));
}

/* ───────────────────────── the connecting tube ─────────────────────────
   Leaving a room puts you in the tube in front of a round hatch. Browse the hatches (arrows, keys, tube map),
   open one to walk into that room. A hatch to an undiscovered module carries a padlock and tells you what it costs. */
const HATCH = { x: 50, y: 47.7, ring: 27 }; // centre and ring diameter (% of frame width), measured from corridor.webp
let corrIdx = 0, corrFrom = null, corrBusy = false;
const destState = (r) => (S.built[r.module] ? "open" : moduleState(modById(r.module)));
// Leaving a room: it shrinks back into its own hatch in the tube; then you slide to the hatch you want.
async function exitToCorridor(side = "right", focus, fast = false) {
  if (moving || corrBusy) return;
  const i = ROOMS.findIndex((r) => r.id === currentRoom);
  const target = focus || ROOMS[(i + (side === "left" ? -1 : 1) + ROOMS.length) % ROOMS.length].id;
  const from = currentRoom;
  const toTube = () => { corrFrom = from; go("corridor", null, from, true); };
  const ok = await playClip({ clip: "exit-" + from, fromFrame: $("#room"), show: toTube, toFrameSel: "#corr", rate: fast ? 1.15 : 1 });
  if (!ok) await closePortal({ fromFrame: $("#room"), show: toTube, toFrameSel: "#corr", holeOf: hatchHole, dur: 750 });
  const k = ROOMS.findIndex((r) => r.id === target);
  if (k >= 0 && k !== corrIdx) await corrGo(k);
}
async function backFromCorridor() {
  if (moving || corrBusy) return;
  if (!corrFrom) { go("base"); arriveAnim(); return; }
  const k = ROOMS.findIndex((r) => r.id === corrFrom);
  if (k !== corrIdx) await corrGo(k);
  await openHatch();
}
function openCorridorView(focus, quiet) {
  if (focus === undefined) { renderCorridor(); return; } // refresh only (e.g. after closing a menu)
  const k = ROOMS.findIndex((r) => r.id === focus); corrIdx = k >= 0 ? k : 0;
  renderCorridor();
  if (quiet) return;
  const s = $("#corr .scene"); s.classList.remove("arrive"); void s.offsetWidth; s.classList.add("arrive");
}
function renderCorridor(anim) {
  const r = ROOMS[corrIdx], m = modById(r.module), st = destState(r);
  const known = st === "open";
  const corr = $("#corr");
  corr.dataset.state = st;
  $("#corr-name").textContent = known ? r.name : "Undiscovered";
  const lock = $("#hatch-lock"); lock.hidden = known; lock.src = "assets/lock.webp"; lock.classList.remove("pop");
  const short = Math.max(0, m.cost - S.coins);
  $("#hatch-plaque").innerHTML = known
    ? `<div class="hp-ey">${r.id === corrFrom ? "You came from here" : `Hatch ${corrIdx + 1} · ${esc(m.name)}`}</div>
       <div class="hp-nm">${esc(r.name)}</div>
       <div class="hp-row"><button class="primary hp-go" id="hatch-open">Open hatch <span>▸</span></button></div>`
    : st === "available"
    ? `<div class="hp-ey warn">Hatch locked · Module ${MODULES.indexOf(m) + 1}</div>
       <div class="hp-nm">Unknown module</div>
       <div class="hp-cost"><span class="coin"></span><b>${m.cost}</b> to unlock · you have <b>${S.coins}</b>${short ? ` · <em>${short} more needed</em>` : ""}</div>
       <div class="hp-row"><button class="primary hp-go" id="hatch-unlock" ${short ? "disabled" : ""}>Unlock hatch</button>${short ? `<button class="secondary" id="hatch-earn">Earn coins</button>` : ""}</div>`
    : `<div class="hp-ey bad">Hatch sealed · Module ${MODULES.indexOf(m) + 1}</div>
       <div class="hp-nm">Unknown module</div>
       <div class="hp-cost">Opens on day <b>${m.day}</b> (${esc(phaseOf(m.day))}) · ${m.day - S.day} days to go · then <b>${m.cost}</b> coins</div>`;
  $("#hatch-open")?.addEventListener("click", () => openHatch());
  $("#hatch-unlock")?.addEventListener("click", unlockHatch);
  $("#hatch-earn")?.addEventListener("click", () => openCoins());
  // tube map
  $("#tubemap").innerHTML = `<div class="tm-line"></div>` + ROOMS.map((x, k) => {
    const s = destState(x);
    return `${k === 4 ? `<span class="tm-gap" aria-hidden="true"></span>` : ""}<button class="tm-stop ${s} ${k === corrIdx ? "on" : ""} ${x.id === corrFrom ? "here" : ""}" data-k="${k}" title="${s === "open" ? esc(x.name) : "Undiscovered module"}">
      <i>${s === "open" ? "" : `<img src="assets/lock.webp" alt="">`}</i><span>${s === "open" ? esc(x.name) : "?"}</span></button>`;
  }).join("") + `<span class="tm-label hub">Central hub</span><span class="tm-label mod">Modules</span>`;
  $$("#tubemap .tm-stop").forEach((b) => (b.onclick = () => corrGo(+b.dataset.k)));
  if (anim) { const p = $("#hatch-plaque"); p.classList.remove("swap"); void p.offsetWidth; p.classList.add("swap"); }
}
// The tube is a ring of hatches: browsing pans you along to the next hatch.
function corrGo(k) {
  if (corrBusy || k === corrIdx || k < 0) return Promise.resolve();
  const dir = k > corrIdx ? 1 : -1; corrBusy = true;
  const scene = $("#corr .scene");
  if (reducedMotion()) { corrIdx = k; renderCorridor(true); corrBusy = false; return Promise.resolve(); }
  const steps = Math.min(3, Math.abs(k - corrIdx)), D = (200 + 60 * steps) * (window.__nabuSlow || 1);
  $("#corr").classList.add("moving");
  return new Promise((res) => {
    scene.animate([{ transform: "none", opacity: 1 }, { transform: `translateX(${-6 * dir}%) scale(1.04)`, opacity: 0.1 }], { duration: D, easing: E_IN, fill: "forwards" }).onfinish = (e) => {
      corrIdx = k; renderCorridor(true); $("#corr").classList.remove("moving"); if (S.built[ROOMS[k].module]) primeClip("hatch-" + ROOMS[k].id);
      const sign = $("#corr-name"); sign.classList.remove("reveal"); void sign.offsetWidth; sign.classList.add("reveal");
      scene.animate([{ transform: `translateX(${6 * dir}%) scale(1.04)`, opacity: 0.1 }, { transform: "none", opacity: 1 }], { duration: D * 1.5, easing: E_OUT }).onfinish = () => { corrBusy = false; res(); };
      e.target.cancel();
    };
  });
}
// Opening a hatch: the door irises open onto the real room behind it, and you go through.
async function openHatch(fast = false) {
  if (corrBusy || moving) return; const r = ROOMS[corrIdx];
  if (destState(r) !== "open") return;
  corrBusy = true; $("#corr").classList.add("opening");
  const ok = await playClip({ clip: "hatch-" + r.id, fromFrame: $("#corr"), show: () => go("room", r.id), toFrameSel: "#room", rate: fast ? 1.15 : 1,
    title: `<div class="ey">Hatch ${corrIdx + 1} · ${esc(modById(r.module).name)}</div><div class="nm">${esc(r.name)}</div>` });
  if (!ok) await openPortal({ fromFrame: $("#corr"), hole: hatchHole($("#corr").getBoundingClientRect()), show: () => go("room", r.id), toFrameSel: "#room", dur: 950 });
  corrBusy = false; $("#corr").classList.remove("opening");
}
function unlockHatch() {
  const r = ROOMS[corrIdx], m = modById(r.module);
  if (!spend(m.cost)) { openCoins(); return; }
  S.built[m.id] = true; save();
  const lock = $("#hatch-lock"); lock.classList.add("shake");
  setTimeout(() => { lock.src = "assets/lock-open.webp"; lock.classList.remove("shake"); lock.classList.add("pop"); $("#corr").dataset.state = "open"; }, 520);
  setTimeout(() => {
    lock.hidden = true; renderCorridor(true);
    $("#corr-name").classList.remove("reveal"); void $("#corr-name").offsetWidth; $("#corr-name").classList.add("reveal");
    toast(`You discovered the ${m.name}!`);
  }, 1350);
}

// The wall screen above the desk: a small mission clock (day, phase, light delay to Earth, next private talk).
function renderWallScreen() {
  const ws = $("#wallscreen"); if (!ws) return;
  const delay = (4 + 16 * (0.5 - 0.5 * Math.cos((S.day / MISSION_DAYS) * Math.PI))).toFixed(1);
  ws.innerHTML = `<div class="ws-in"><div class="ws-title"><span>Mission clock</span><span>${esc(ME.ship)}</span></div>
    <div class="ws-grid"><span class="h">Day</span><span class="h r"></span><span class="h r">${S.day} / ${MISSION_DAYS}</span>
    <span>Phase</span><span class="r"></span><span class="r">${esc(phaseOf(S.day))}</span>
    <span>Delay</span><span class="r"></span><span class="r">${delay} min</span>
    <span>Talk</span><span class="r"></span><span class="r">in ${14 - ((S.day - 1) % 14)} d</span></div>
    <div class="ws-foot">tap for the health screen</div></div><i class="ws-scan"></i><i class="ws-glare"></i>`;
}
// The table is laid out flat (WS_W × WS_H) and projected onto the four corners of the glass in the photo,
// so it follows the wall's perspective instead of floating on top of it.
const WS_W = 400, WS_H = 320;
const WS_QUAD = [[6.64, 21.55], [22.11, 26.38], [22.27, 43.37], [6.56, 43.92]]; // tl, tr, br, bl in % of the room image
function homography(w, h, q) {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q;
  const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2, sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (sx * dy2 - dx2 * sy) / den, k = (dx1 * sy - sx * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + k * x3, d = y1 - y0 + g * y1, e = y3 - y0 + k * y3;
  return `matrix3d(${a / w},${d / w},0,${g / w},${b / h},${e / h},0,${k / h},0,0,1,0,${x0},${y0},0,1)`;
}
function placeWallScreen() {
  const ws = $("#wallscreen"), scene = $("#room .scene"); if (!ws || !scene) return;
  const W = scene.clientWidth, H = scene.clientHeight; if (!W) return;
  ws.style.transform = homography(WS_W, WS_H, WS_QUAD.map(([x, y]) => [(x / 100) * W, (y / 100) * H]));
}

/* ── placement ──
   Floor pieces stand on the floor area of each room (a trapezoid seen in perspective: back edge, front edge) and get
   smaller towards the back. Wall pieces hang only on free wall areas. Nothing climbs walls or floats in the air. */
const ZONES = {
  // m = % of the frame height that one metre takes at the back edge of the floor (measured from floor-to-ceiling, 2.5 m)
  bedroom: { m: 18.5, floor: [66, 22, 78, 91, 7, 93], walls: [[24, 20, 40, 50], [60, 20, 76, 50]] },
  living: { m: 19, floor: [68, 30, 71, 91, 12, 92], walls: [[23, 14, 33, 40]] },
  mess: { m: 18.5, floor: [66, 22, 78, 91, 7, 93], walls: [[25, 53, 75, 63]] },
  command: { m: 23, floor: [77, 14, 86, 91, 8, 92], walls: [] },
  gym: { m: 18.5, floor: [65, 21, 79, 91, 8, 92], walls: [[13, 30, 22, 56], [78, 30, 87, 56]] }, lab: { m: 25, floor: [74, 12, 88, 87, 8, 92], walls: [] },
  green: { m: 25, floor: [76, 18, 84, 90, 10, 90], walls: [] }, lounge: { m: 27, floor: [82, 14, 86, 92, 10, 90], walls: [] },
  comms: { m: 28, floor: [83, 12, 88, 93, 10, 90], walls: [] },
};
// Real sizes in metres: height for everything standing or hanging, width for rugs. The room knows how many
// percent of its height one metre takes at the back wall, and things grow towards the front (perspective).
const SIZE_M = { bed: 1.75, wardrobe: 1.95, nightstand: 0.6, sofa: 0.9, armchair: 0.95, coffeetable: 0.5, kitchen: 2.1, fridge: 1.85, dining: 1.05,
  bookshelf: 1.85, beanbag: 0.75, lamp: 1.7, fern: 0.85, holoplant: 0.95, aquarium: 1.35, telescope: 1.45, arcade: 1.75, jukebox: 1.55,
  geode: 0.7, hologram: 1.0, globe: 0.55, lavalamp: 0.5, guitar: 1.05, flag: 1.3, photo: 0.4, plush: 0.45, rug: 2.2,
  monstera: 1.0, cacti: 0.4, succulents: 0.35, herbs: 0.35, ivy: 0.8, palm: 1.5, orchid: 0.6, bonsai: 0.5, terrarium: 0.5,
  painting: 0.6, poster: 0.75, wallshelf: 0.45, neon: 0.65, clock: 0.45, wallplanter: 0.55 };
const zoneOf = (id) => ZONES[id] || { m: 22, floor: [72, 15, 85, 91, 8, 92], walls: [] };
const isWall = (k) => ITEMS[k].layer === "wall";
function depthK(room, y) { const [by, , , fy] = zoneOf(room).floor; return 1 + 0.38 * clamp((y - by) / (fy - by), 0, 1); }
// height in % of the frame (rugs: width in % of the frame width)
function itemH(room, d) { const z = zoneOf(room); return (SIZE_M[d.item] || 1) * z.m * (d.s || 1) * (isWall(d.item) ? 1.15 : depthK(room, d.y)); }
const ASPECT = {}; // natural width / height of each picture, filled as the pictures load
function itemAspect(d) { return ASPECT[spriteOf(d).src] || 1; }
function itemW(room, d) {
  if (ITEMS[d.item].layer === "floor") return itemH(room, d) * 0.5625; // rug: metres across
  return itemH(room, d) * itemAspect(d) * 0.5625; // % of width from % of height (16:9 frame)
}
// keep a piece inside its zone (returns false when the room has no place for it)
function clampPlace(room, d) {
  const z = zoneOf(room);
  if (isWall(d.item)) {
    if (!z.walls.length) return false;
    let best = null, bd = Infinity;
    for (const [x0, y0, x1, y1] of z.walls) { const cx = clamp(d.x, x0, x1), cy = clamp(d.y, y0, y1), dd = (cx - d.x) ** 2 + (cy - d.y) ** 2; if (dd < bd) { bd = dd; best = [cx, cy]; } }
    [d.x, d.y] = best; return true;
  }
  const [by, bx0, bx1, fy, fx0, fx1] = z.floor;
  const rugH = ITEMS[d.item].layer === "floor" ? itemW(room, d) * 0.3 : 0; // a rug is centred on its spot, keep all of it on the floor
  d.y = clamp(d.y, by + rugH, Math.max(by + rugH, fy - rugH)); const t = (d.y - by) / (fy - by);
  const xl = bx0 + (fx0 - bx0) * t, xr = bx1 + (fx1 - bx1) * t, hw = Math.min(itemW(room, d) / 2, (xr - xl) / 2);
  d.x = clamp(d.x, Math.min(xl + hw, (xl + xr) / 2), Math.max(xr - hw, (xl + xr) / 2)); return true;
}
function zoneHint(room, k) {
  const z = zoneOf(room);
  if (isWall(k)) return z.walls.map(([x0, y0, x1, y1]) => `<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="1" />`).join("");
  const [by, bx0, bx1, fy, fx0, fx1] = z.floor; return `<polygon points="${bx0},${by} ${bx1},${by} ${fx1},${fy} ${fx0},${fy}" />`;
}
function freeSpot(room, k) {
  const z = zoneOf(room), d = { item: k, s: 1 };
  if (isWall(k) && !z.walls.length) return null;
  const others = (S.decor[room] || []).filter((o) => isWall(o.item) === isWall(k));
  let best = null, bestD = -1;
  for (let n = 0; n < 40; n++) {
    const c = { item: k, s: 1 };
    if (isWall(k)) { const [x0, y0, x1, y1] = z.walls[n % z.walls.length]; c.x = x0 + Math.random() * (x1 - x0); c.y = y0 + Math.random() * (y1 - y0); }
    else { const [by, , , fy] = z.floor; c.x = 15 + Math.random() * 70; c.y = by + (fy - by) * (0.35 + Math.random() * 0.6); }
    clampPlace(room, c);
    const dmin = others.length ? Math.min(...others.map((o) => Math.hypot(o.x - c.x, (o.y - c.y) * 1.6))) : 50 - Math.abs(c.x - 50);
    if (dmin > bestD) { bestD = dmin; best = c; }
  }
  Object.assign(d, best); return d;
}
/* ── turning furniture ──
   Pieces with a 3D model turn in 45° steps (0°, 45° … 315°): every angle is a render of the same model with the
   same camera and light, so the piece never changes when you turn it. The others can only be flipped. */
const ROT3D = new Set(["bed", "sofa", "fridge", "armchair", "beanbag", "holoplant", "dining", "telescope", "arcade", "jukebox", "guitar", "lavalamp", "geode", "plush", "bookshelf", "coffeetable"]);
const angleOf = (d) => (d.a || 0) & 7;
function spriteOf(d) {
  if (ROT3D.has(d.item)) return { src: `assets/items/3d/${d.item}_${angleOf(d)}.webp`, mx: 1 };
  return { src: itemImg(d.item), mx: angleOf(d) >= 4 ? -1 : 1 };
}
function preloadTurns(d) { if (ROT3D.has(d.item)) [1, 7].forEach((k) => { const im = new Image(); im.src = `assets/items/3d/${d.item}_${(angleOf(d) + k) & 7}.webp`; }); }
let selDecor = null;
function deselectDecor() { selDecor = null; $$("#room-decor .decor.sel").forEach((x) => x.classList.remove("sel")); $("#room .dtools")?.remove(); }
function selectDecor(el, d) {
  deselectDecor(); selDecor = d; el.classList.add("sel"); preloadTurns(d);
  const box = $("#room"), sc = box.getBoundingClientRect(), r = el.getBoundingClientRect();
  const t = document.createElement("div"); t.className = "dtools";
  t.style.left = ((r.left + r.width / 2 - sc.left) / sc.width) * 100 + "%"; t.style.top = Math.max(2, ((r.top - sc.top) / sc.height) * 100 - 1) + "%";
  const turn = ROT3D.has(d.item)
    ? `<button data-t="ccw" title="Turn left 45° (Shift+R)">⟲</button><span class="dt-ang">${angleOf(d) * 45}°</span><button data-t="cw" title="Turn right 45° (R)">⟳</button>`
    : `<button data-t="cw" title="Flip (R)">⇋<span>Flip</span></button>`;
  t.innerHTML = `<b>${esc(ITEMS[d.item].name)}</b>${turn}<button data-t="small" title="Smaller">−</button><button data-t="big" title="Bigger">+</button><button data-t="del" class="del" title="Put away">✕</button>`;
  t.addEventListener("pointerdown", (e) => e.stopPropagation());
  t.addEventListener("click", (e) => {
    const k = e.target.closest("[data-t]")?.dataset.t; if (!k) return;
    if (k === "cw" || k === "ccw") return turnDecor(el, d, k === "cw" ? 1 : -1);
    if (k === "small" || k === "big") { d.s = clamp((d.s || 1) + (k === "big" ? 0.1 : -0.1), 0.7, 1.4); clampPlace(currentRoom, d); el.style.cssText += ";" + sizeCss(currentRoom, d); save(); return selectDecor(el, d); }
    if (k === "del") { const bt = e.target.closest("[data-t]"); if (!bt.classList.contains("sure")) { bt.classList.add("sure"); bt.innerHTML = "Put away?"; return; }
      const list = S.decor[currentRoom]; list.splice(list.indexOf(d), 1); save(); deselectDecor(); renderDecor(); toast(`${ITEMS[d.item].name} put away.`); }
  });
  box.append(t);
}
function turnDecor(el, d, dir = 1) {
  const img = el.querySelector("img");
  d.a = ROT3D.has(d.item) ? (angleOf(d) + dir + 8) & 7 : (angleOf(d) >= 4 ? 0 : 4);
  const { src, mx } = spriteOf(d); save();
  const pre = new Image(); pre.src = src;
  const swap = () => {
    img.src = src; img.style.setProperty("--mx", mx);
    const f = () => { if (img.naturalWidth) ASPECT[src] = img.naturalWidth / img.naturalHeight; el.style.cssText += ";" + sizeCss(currentRoom, d); clampPlace(currentRoom, d); el.style.left = d.x + "%"; };
    img.complete ? f() : img.addEventListener("load", f, { once: true });
    img.animate([{ opacity: .55, transform: getComputedStyle(img).transform + " scale(.97)" }, { opacity: 1, transform: getComputedStyle(img).transform }], { duration: 160, easing: "ease-out" });
    const ang = $("#room .dtools .dt-ang"); if (ang) ang.textContent = angleOf(d) * 45 + "°";
    preloadTurns(d);
  };
  pre.decode ? pre.decode().then(swap, swap) : swap();
}
function sizeCss(room, d) { return ITEMS[d.item].layer === "floor" ? `width:${itemW(room, d)}%;height:auto;` : `height:${itemH(room, d)}%;width:auto;`; }
function learnAspects(box) { $$("img", box).forEach((im) => { const f = () => { if (im.naturalWidth) ASPECT[im.getAttribute("src")] = im.naturalWidth / im.naturalHeight; }; im.complete ? f() : im.addEventListener("load", f, { once: true }); }); }
function renderDecor() {
  selDecor = null;
  const list = S.decor[currentRoom] || (S.decor[currentRoom] = []);
  const box = $("#room-decor");
  list.forEach((d) => clampPlace(currentRoom, d));
  box.innerHTML = `<svg class="zone-hint" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg>` + list.map((d, i) => `<div class="decor ${isWall(d.item) ? "wl" : ITEMS[d.item].layer === "floor" ? "rg" : "fl"} ${d.fresh ? "drop" : ""}" data-i="${i}" style="left:${d.x}%;top:${d.y}%;${sizeCss(currentRoom, d)}z-index:${decorZ(d)}" title="${esc(ITEMS[d.item].name)}"><img src="${spriteOf(d).src}" style="--mx:${spriteOf(d).mx}" alt="${esc(ITEMS[d.item].name)}" draggable="false"></div>`).join("");
  list.forEach((d) => delete d.fresh); learnAspects(box);
  $$(".decor", box).forEach((el) => dragify(el, list[+el.dataset.i]));
}

// Layering: rugs lie under everything, wall pieces hang behind floor furniture, the rest sorts by depth (lower on screen = closer).
function decorZ(d) { const L = ITEMS[d.item].layer; return L === "floor" ? 1 : L === "wall" ? 2 : 10 + Math.round(d.y * 4); }

/* The health room: the Nabu Health dashboard runs on the TV; on the desk keyboard only Backspace works.
   "Screen view" moves the camera up to the TV so the dashboard fills the frame and is easy to read and use. */
const TV_LOGICAL_W = 1000;
let tvReady = false, osdTimer = null, tvZoom = true, tvZoomTimer = null;
function renderTV(r) {
  const host = $("#tv-layer"), kb = $("#tv-kbwrap");
  clearTimeout(tvZoomTimer);
  $("#room .scene").classList.remove("tvzoom");
  if (!r.tv) { host.hidden = true; kb.hidden = true; return; }
  host.hidden = false; kb.hidden = !!r.wall;
  const glass = $("#tv-glass"), G = r.glass || TVGLASS;
  Object.assign(glass.style, { left: G.left + "%", top: G.top + "%", width: G.width + "%", height: G.height + "%" });
  const app = $("#tv-app");
  if (!app.src) app.src = "tv/app.html";
  fitTV();
  if (!$("#tv-kb").childElementCount) buildKeyboard();
  host.classList.remove("on"); kb.classList.remove("on"); void host.offsetWidth;
  setTimeout(() => { host.classList.add("on"); kb.classList.add("on"); }, 350);
  if (tvZoom && !r.wall) tvZoomTimer = setTimeout(() => setTvZoom(true), reducedMotion() ? 0 : 900);
}
/* ── the command room ──
   The first room of the game. The huge screen in the middle is the health twin (a holographic skeleton with every body
   system around it). On the right wall the camera movement test and the cognitive tests, each with what it pays; on the
   left, today's task sheet hanging on the rail. Click the big screen to zoom the camera onto it. */
// two screens across the wall between the doors: Weekly data (3/4 of the display) and Data of the day (1/4)
// the console: a huge TV with the Nabu Health app (2/3 of the picture), a tall TV with the data of the day, a keyboard on the desk
// the laptop on the desk: its screen is most of the picture, and it shows only the Nabu Health app
const CMD = { screen: { left: 14.807, top: 6.624, width: 70.35, height: 71.875 }, daily: { left: 0, top: 0, width: 0, height: 0 } };
const CHAPTERS = [["today", "Today"], ["vitals", "Vitals"], ["body", "Body systems"], ["sleep", "Sleep & mind"], ["labs", "Labs"], ["environment", "Environment"], ["guidance", "Guidance"], ["tech", "NASA tech"]];
let tvChapter = "today";
const pos = (b) => `left:${b.left}%;top:${b.top}%;width:${b.width}%;${b.height ? `height:${b.height}%;` : ""}`;
let screenZoom = false;
function renderWall(r, refresh) {
  const box = $("#wall-ui"); if (!box) return;
  if (!r || !r.command) { box.hidden = true; box.innerHTML = ""; screenZoom = false; $("#room").classList.remove("screenzoom"); $("#room .scene").style.transform = ""; return; }
  box.hidden = false;
  if (refresh && box.querySelector("#tv-main")) { dailyUpdate(); return; }
  box.innerHTML = `<div class="tv-host laptop" id="tv-host" style="${pos(CMD.screen)}">
      <div class="tv-screen boot" id="tv-screen"><iframe id="tv-main" title="Nabu Health" loading="eager"></iframe></div>
      <div class="tv-osd" id="tv-osd2"></div><i class="tv-glass"></i></div>
    <div class="kb-hint lap" id="kb-hint"><b>← →</b> chapters · <b>↑ ↓</b> scroll · or use the mouse on the screen</div>
    <div class="kb3" id="kb3" hidden></div>`;
  fitHealth(); bootLaptop();
}
function bindWall(box) {
  $$("[data-wtask]", box).forEach((cb) => (cb.onchange = () => {
    S.daily.norma[cb.dataset.wtask] = true; addCoins(NORMA_COIN, "Mandatory task done");
    if (normaFor(S.day).every((t) => S.daily.norma[t.id]) && !S.daily.normaBonus) { S.daily.normaBonus = true; addCoins(NORMA_BONUS, "Daily checklist complete"); }
    save(); const lab = cb.closest(".ws-task"); lab.classList.add("done", "stamp"); setTimeout(() => renderWall(roomById(currentRoom), true), 650);
  }));
}
// camera onto the big screen and back: one transform on the picture, so the screen stays exactly on its wall
function setScreenZoom(on) {
  const room = $("#room"), sc = $("#room .scene"); if (!roomById(currentRoom)?.command) return;
  screenZoom = on;
  const L0 = CMD.screen.left, R0 = CMD.daily.left + CMD.daily.width, k = Math.min(0.985 * 100 / (R0 - L0), 0.95 * 100 / CMD.screen.height), cx = (L0 + R0) / 2, cy = CMD.screen.top + CMD.screen.height / 2;
  sc.style.transformOrigin = "0 0"; sc.style.transition = "transform .8s cubic-bezier(.65,0,.25,1)";
  clearTimeout(sc._zt); sc._zt = setTimeout(() => (sc.style.transition = ""), 850);
  sc.style.transform = on ? `translate(${50 - k * cx}%, ${50 - k * cy}%) scale(${k})` : "translate(0,0) scale(1)";
  room.classList.toggle("screenzoom", on);
  const h = $("#kb-hint"); if (h) h.innerHTML = `<b>← →</b> chapters · <b>↑ ↓</b> scroll · <b>Enter</b> ${on ? "step back" : "look closer"} · or just use the mouse on the screen`;
}
new ResizeObserver(() => fitHealth()).observe($("#room"));
// The app starts after the arrival animation ends (the laptop screen is white at that moment), and only appears once it has drawn.
async function bootLaptop() {
  const f = $("#tv-main"), scr = $("#tv-screen"); if (!f) return;
  while (moving) await new Promise((r) => setTimeout(r, 60));
  if ($("#tv-main") !== f) return;
  const ready = new Promise((r) => { f.onload = r; setTimeout(r, 6000); });
  f.src = `health/index.html#${tvChapter}`;
  await ready; await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise((r) => setTimeout(r, 180));
  scr?.classList.remove("boot"); scr?.classList.add("on");
}
function fitHealth() { const h = $("#hs-host"), hs = $("#hs"); if (h && hs) hs.style.setProperty("--s", (h.clientWidth / HS_W).toFixed(4));
  const th = $("#tv-host"), tf = $("#tv-main"); if (th && tf) { const k = th.clientWidth / TV_APP_W; tf.style.width = TV_APP_W + "px"; tf.style.height = Math.ceil(th.clientHeight / k) + "px"; tf.style.transform = `scale(${k})`; }
  const dh = $("#dy-host"), dy = $("#dy"); if (dh && dy) dy.style.setProperty("--s", (dh.clientWidth / DY_W).toFixed(4)); }

/* ── the console keyboard: only its last three rows are in view. Arrows move through the chapters and scroll the TV,
   Enter looks closer; the physical keyboard lights up the same keys. ── */
function keyboard3() {
  const rows = [
    [["Caps", 1.75], ..."ASDFGHJKL;'".split("").map((k) => [k, 1]), ["Enter", 2.25, "enter"]],
    [["Shift", 2.25], ..."ZXCVBNM,./".split("").map((k) => [k, 1]), ["Shift", 1.75], ["↑", 1, "up"], ["", 1]],
    [["Ctrl", 1.25], ["Win", 1.25], ["Alt", 1.25], ["", 6.25, "space"], ["Alt", 1.25], ["Fn", 1], ["←", 1, "left"], ["↓", 1, "down"], ["→", 1, "right"]],
  ];
  return rows.map((r) => `<div class="kb3-row">${r.map(([k, u, act]) => `<button class="kb3-k ${act ? "on" : ""}" style="--u:${u}" ${act ? `data-kb="${act}"` : ""} tabindex="-1">${esc(k)}</button>`).join("")}</div>`).join("");
}
function tvGo(dir) {
  const i = CHAPTERS.findIndex(([id]) => id === tvChapter), n = CHAPTERS[(i + dir + CHAPTERS.length) % CHAPTERS.length];
  tvChapter = n[0]; const f = $("#tv-main"); try { f.contentWindow.location.hash = "#" + tvChapter; f.contentWindow.scrollTo(0, 0); } catch {}
  tvOsd(`${CHAPTERS.indexOf(n) + 1} / ${CHAPTERS.length} · ${n[1]}`);
}
function tvScroll(dy) {
  const f = $("#tv-main"); try { const w = f.contentWindow, d = w.document, el = [...d.querySelectorAll("main, [class*=overflow-y-auto], [class*=overflow-auto]")].find((x) => x.scrollHeight > x.clientHeight + 10) || d.scrollingElement; el.scrollBy({ top: dy, behavior: "smooth" }); } catch {}
}
function tvOsd(t) { const o = $("#tv-osd2"); if (!o) return; o.textContent = t; o.classList.remove("show"); void o.offsetWidth; o.classList.add("show"); }
function pressKey(act) {
  const k = $(`#kb3 [data-kb="${act}"]`); if (k) { k.classList.remove("down"); void k.offsetWidth; k.classList.add("down"); }
  if (act === "left") tvGo(-1); if (act === "right") tvGo(1);
  if (act === "up") tvScroll(-260); if (act === "down") tvScroll(260);

}
function bindKeyboard() {
  $$("#kb3 .kb3-k").forEach((b) => (b.onclick = () => { if (b.dataset.kb) pressKey(b.dataset.kb); else { b.classList.remove("locked"); void b.offsetWidth; b.classList.add("locked"); } }));
}
document.addEventListener("keydown", (e) => {
  if (view !== "room" || currentRoom !== "command" || !$("#panel").hidden || /input|textarea/i.test(e.target.tagName) || !$("#kb3")) return;
  const map = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", Enter: "enter" };
  if (map[e.key]) { e.preventDefault(); e.stopImmediatePropagation(); pressKey(map[e.key]); }
}, true);

/* ── Data of the day: the daily statuses of the habitat and the crew member, against NASA-STD-3001 limits.
   Values are simulated until Nabu's sensors are connected; environment values breathe live every few seconds. ── */
function drnd(seed) { let s2 = 0; for (const c of String(seed)) s2 = (s2 * 31 + c.charCodeAt(0)) >>> 0; return () => ((s2 = (s2 * 1664525 + 1013904223) >>> 0) / 4294967296); }
const DAILY = [
  { id: "co2", name: "Cabin CO₂", unit: "mmHg", grp: "Habitat", base: 2.4, jit: 0.12, dec: 1, lim: "limit 3.0", st: (v) => (v < 2.7 ? 0 : v < 3 ? 1 : 2), bar: (v) => v / 4 },
  { id: "o2", name: "Oxygen", unit: "%", grp: "Habitat", base: 21.1, jit: 0.15, dec: 1, lim: "19.5–23.5", st: (v) => (v >= 19.5 && v <= 23.5 ? 0 : 2), bar: (v) => (v - 15) / 10 },
  { id: "temp", name: "Cabin temp", unit: "°C", grp: "Habitat", base: 22.4, jit: 0.25, dec: 1, lim: "18–27", st: (v) => (v >= 18 && v <= 27 ? 0 : 1), bar: (v) => (v - 15) / 15 },
  { id: "rh", name: "Humidity", unit: "%", grp: "Habitat", base: 44, jit: 1.5, dec: 0, lim: "25–75", st: (v) => (v >= 25 && v <= 75 ? 0 : 1), bar: (v) => v / 100 },
  { id: "noise", name: "Noise", unit: "dBA", grp: "Habitat", base: 54, jit: 1.2, dec: 0, lim: "≤ 60 work", st: (v) => (v <= 60 ? 0 : v <= 65 ? 1 : 2), bar: (v) => v / 80 },
  { id: "rad", name: "Radiation today", unit: "mSv", grp: "You", base: 0.48, jit: 0.01, dec: 2, lim: "≈ 0.5/day", st: (v) => (v < 0.7 ? 0 : 1), bar: (v) => v / 1 },
  { id: "sleep", name: "Sleep last night", unit: "h", grp: "You", from: () => { const m = S.mood.filter((x) => x.day === S.day || x.day === S.day - 1).slice(-1)[0]; return m ? m.sleep : null; }, base: 7.1, dec: 1, lim: "target 7–8", st: (v) => (v >= 6.5 ? 0 : v >= 5.5 ? 1 : 2), bar: (v) => v / 9 },
  { id: "ex", name: "Exercise", unit: "min", grp: "You", from: () => Math.min(150, S.exerciseLog.filter((l) => l.day === S.day).length * 15), base: 0, dec: 0, lim: "goal 120", st: (v) => (v >= 90 ? 0 : v >= 30 ? 1 : 2), bar: (v) => v / 120 },
  { id: "water", name: "Water", unit: "L", grp: "You", base: 1.9, dec: 1, lim: "goal 2.5", st: (v) => (v >= 2.2 ? 0 : v >= 1.6 ? 1 : 2), bar: (v) => v / 2.5 },
  { id: "hr", name: "Resting heart", unit: "bpm", grp: "You", base: 61, jit: 0.6, dec: 0, lim: "50–80", st: (v) => (v >= 45 && v <= 85 ? 0 : 1), bar: (v) => (v - 40) / 60 },
];
const dyLive = {};
function dailyValue(m, live) {
  if (m.from) { const v = m.from(); if (v != null) return v; }
  const r = drnd(m.id + S.day), base = m.base * (1 + (r() - 0.5) * 0.08);
  return +(base + (live && m.jit ? (Math.random() - 0.5) * 2 * m.jit : 0)).toFixed(m.dec);
}
function dailyHTML() {
  const vals = DAILY.map((m) => ({ m, v: dailyValue(m) })), watch = vals.filter(({ m, v }) => m.st(v) > 0).length;
  const date = new Date(2026, 10, 13 + S.day - 1).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  const tile = ({ m, v }, i) => { const st = m.st(v);
    return `<div class="dt st${st}" data-dt="${m.id}" style="--dl:${200 + i * 70}ms"><div class="dt-h"><span>${m.name}</span><i></i></div>
      <div class="dt-v"><b data-count="${v}" data-dec="${m.dec}">${v}</b><small>${m.unit}</small></div>
      <div class="dt-bar"><i style="--w:${Math.round(clamp(m.bar(v), 0.03, 1) * 100)}%"></i></div><div class="dt-l">${m.lim}</div></div>`; };
  return `<div class="dy-top"><div><b>DATA OF THE DAY</b><small>Day ${S.day} · ${date}</small></div><span class="dy-clock" id="dy-clock">--:--</span></div>
    <div class="dy-status st${watch ? 1 : 0}"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" class="bg"/><circle cx="20" cy="20" r="16" class="fg" style="--p:${Math.round(((DAILY.length - watch) / DAILY.length) * 100)}"/></svg>
      <span><b>${watch ? `${watch} to watch` : "All nominal"}</b><small>${DAILY.length - watch} of ${DAILY.length} in range</small></span></div>
    <div class="dy-grp">Habitat <i></i></div><div class="dy-grid">${vals.filter((x) => x.m.grp === "Habitat").map(tile).join("")}</div>
    <div class="dy-grp">You <i></i></div><div class="dy-grid">${vals.filter((x) => x.m.grp === "You").map((x, i) => tile(x, i + 5)).join("")}</div>
    <button class="dy-app" id="dy-app">Open Nabu Health <b>›</b></button>
    <div class="dy-src">NASA-STD-3001 limits · simulated until sensors connect</div>`;
}
function dailyBind() { const b = $("#dy-app"); if (b) b.onclick = () => openHealthApp(); }
function dailyUpdate() { const dy = $("#dy"); if (!dy) return; dy.innerHTML = dailyHTML(); dailyBind(); countUp(dy); }
// numbers count up when a screen powers on
function countUp(root) {
  if (!root || reducedMotion()) return;
  $$("[data-count]", root).forEach((el) => { const to = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0; if (!isFinite(to)) return;
    const t0 = performance.now(), T = 1100; const f = (t) => { const k = Math.min(1, (t - t0) / T), e = 1 - Math.pow(1 - k, 3); el.textContent = (to * e).toFixed(dec); if (k < 1 && el.isConnected) requestAnimationFrame(f); }; requestAnimationFrame(f); });
}
// the environment breathes: every 3 s a couple of habitat values move a little, with a flicker
let dyTick = null;
function startDailyTicker() {
  clearInterval(dyTick);
  dyTick = setInterval(() => {
    const dy = $("#dy"); if (!dy || !dy.isConnected) { clearInterval(dyTick); return; }
    const c = $("#dy-clock"); if (c) c.textContent = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    if (moving) return;
    DAILY.filter((m) => m.jit).forEach((m) => { if (Math.random() > 0.45) return; const tile = dy.querySelector(`[data-dt="${m.id}"]`); if (!tile) return;
      const v = dailyValue(m, true), st = m.st(v); tile.querySelector("b").textContent = v.toFixed(m.dec); tile.className = `dt st${st} tick`;
      tile.querySelector(".dt-bar i").style.setProperty("--w", Math.round(clamp(m.bar(v), 0.03, 1) * 100) + "%"); });
  }, 3000);
}
// the full Nabu Health app, in the tablet
function openHealthApp() {
  if (screenZoom) setScreenZoom(false);
  openPanel("Nabu Health", (b) => {
    b.innerHTML = `<div class="ha-bar"><span class="pill private">Your health data stays on this tablet</span><span class="small muted">The full Nabu Health app · chapters: Today, Vitals, Body systems, Sleep & mind, Labs, Environment, Guidance, NASA tech</span></div>
      <iframe id="health-frame" class="health-frame" src="health/index.html#${tvChapter}" title="Nabu Health"></iframe>`;
    cleanup = () => { const f = $("#health-frame"); if (f) { f.src = "about:blank"; f.remove(); } };
  }, { wide: true, xl: true });
  $("#panel").classList.add("xl");
}

/* ── the health twin: a holographic skeleton with the body systems around it (all values are a demo model) ── */
const HS_W = 1240, DY_W = 400, TV_APP_W = 1120;
const HAZ = { grav: "Altered gravity", rad: "Space radiation", iso: "Isolation & confinement", far: "Distance from Earth", env: "Hostile closed environment" };
const latestRow = (type, name) => { const a = [...S.analyses].filter((x) => x.type === type).sort((x, y) => y.day - x.day)[0]; return a?.rows.find((r) => r.n === name); };
function exFactor(day) { const days = new Set(S.exerciseLog.filter((l) => l.day <= day).map((l) => l.day)).size; return clamp(0.55 + 0.45 * days / Math.max(1, day - 1), 0, 1); }
// each system: a metric for any mission day, how it's doing, where it sits on the body and what helps
const SYS = [
  { id: "bone", name: "Bones", ic: "🦴", haz: ["grav"], unit: "%", label: "Hip bone density vs pre-flight",
    val: (d) => -(d / 30) * 1.0 * (1.25 - exFactor(d)), fmt: (v) => (v > -0.05 ? "±0.0" : v.toFixed(1)), st: (v) => (v > -1.5 ? 0 : v > -3 ? 1 : 2),
    spots: [[50, 41.5], [50, 30]], glow: [50, 38, 30, 24], rows: () => [["Hip T-score", latestRow("dxa", "Hip T-score")], ["Serum calcium", latestRow("chem", "Serum calcium")], ["Vitamin D", latestRow("chem", "Vitamin D")]],
    tip: "Low gravity unloads the skeleton: about 1% of hip bone a month without exercise. Resistive training slows it down.", act: ["Camera workout", "Up to +120 today", () => openExercise()] },
  { id: "muscle", name: "Muscles", ic: "💪", haz: ["grav"], unit: "%", label: "Calf muscle volume vs pre-flight",
    val: (d) => -(d / 30) * 1.6 * (1.25 - exFactor(d)), fmt: (v) => (v > -0.05 ? "±0.0" : v.toFixed(1)), st: (v) => (v > -2.5 ? 0 : v > -5 ? 1 : 2),
    spots: [[41, 57], [59, 57]], glow: [50, 60, 34, 26], rows: () => [["Calf volume", latestRow("us", "Calf volume vs pre-flight")], ["Quadriceps", latestRow("us", "Quadriceps thickness")]],
    tip: "Leg and back muscles shrink first. Squats and deadlifts on the ARED keep them working.", act: ["Camera workout", "+2 per good rep", () => openExercise()] },
  { id: "heart", name: "Heart & blood", ic: "❤", haz: ["grav", "far"], unit: "%", label: "Aerobic fitness (VO₂max) vs pre-flight",
    val: (d) => -(d / 30) * 1.2 * (1.2 - exFactor(d)), fmt: (v) => (v > -0.05 ? "±0.0" : v.toFixed(1)), st: (v) => (v > -3 ? 0 : v > -6 ? 1 : 2),
    spots: [[53.5, 22.5]], glow: [53, 23, 16, 12], rows: () => [["Haemoglobin", latestRow("cbc", "Haemoglobin")], ["White cells", latestRow("cbc", "White cells")]],
    tip: "Fluids shift to the head and the heart works less. Cardio keeps it in shape; medical help is far away, so trends matter.", act: ["Camera workout", "Cardio counts too", () => openExercise()] },
  { id: "brain", name: "Brain & mood", ic: "🧠", haz: ["iso"], unit: "ms", label: "Reaction time (lower is better)",
    val: (d) => { const p = S.pvt.filter((x) => !x.pre && x.day <= d).slice(-1)[0]; return p ? p.ms : avg(S.pvt.filter((x) => x.pre).map((x) => x.ms)); },
    fmt: (v) => Math.round(v), st: () => Math.min(2, wellness().level), base: () => avg(S.pvt.filter((x) => x.pre).map((x) => x.ms)),
    spots: [[50, 4.5]], glow: [50, 6, 16, 10], rows: () => { const m = S.memory.filter((x) => !x.pre).slice(-1)[0]; const md = S.mood.slice(-1)[0];
      return [["Memory span", m ? { v: m.span, u: "steps" } : null], ["Mood", md ? { v: md.mood, u: "/ 10" } : null], ["Stress", md ? { v: md.stress, u: "/ 10" } : null]]; },
    tip: "Months in a small crew, far from home. The games test reaction and memory against your own baseline.", act: ["Cognitive tests", "Up to +40 today", () => openTests()] },
  { id: "sleep", name: "Sleep", ic: "☾", haz: ["env", "iso"], unit: "h", label: "Average sleep, last 3 days",
    val: (d) => { const m = S.mood.filter((x) => x.day <= d && x.day > d - 3); return m.length ? avg(m.map((x) => x.sleep)) : 7.2; },
    fmt: (v) => v.toFixed(1), st: (v) => (v >= 6.5 ? 0 : v >= 5.5 ? 1 : 2),
    spots: [[58, 3]], glow: [50, 6, 16, 10], rows: () => [["Cortisol (morning)", latestRow("cort", "Cortisol")]],
    tip: "Noise, artificial light and a sealed cabin disturb sleep. A mood check-in tracks it.", act: ["Mood & sleep check-in", "+10 today", () => openMood()] },
  { id: "kidney", name: "Kidneys", ic: "◒", haz: ["grav", "far"], unit: "", label: "Kidney-stone risk",
    val: (d) => -(d / 30) * 1.0 * (1.25 - exFactor(d)), fmt: (v) => (v > -1.5 ? "Low" : v > -3 ? "Raised" : "High"), st: (v) => (v > -1.5 ? 0 : v > -3 ? 1 : 2),
    spots: [[45, 33.5], [55, 33.5]], glow: [50, 34, 18, 9], rows: () => [["Creatinine", latestRow("chem", "Creatinine")], ["Serum calcium", latestRow("chem", "Serum calcium")]],
    tip: "Calcium leaving the bones passes through the kidneys. Water and exercise keep the risk down.", act: ["Medical results", "+20 per new set", () => openAnalyses()] },
  { id: "rad", name: "Radiation", ic: "☢", haz: ["rad"], unit: "mSv", label: "Mission dose so far",
    val: (d) => d * 0.48, fmt: (v) => v.toFixed(0), st: (v) => (v < 200 ? 0 : v < 400 ? 1 : 2),
    spots: [[64, 46]], glow: [50, 50, 60, 100], rows: () => [["Daily dose (habitat)", { v: 0.48, u: "mSv" }], ["Career limit", { v: 600, u: "mSv" }]],
    tip: "Cosmic rays pass through the habitat walls. The dose is logged automatically; sleeping in the shielded bunk lowers it.", act: ["Medical results", "Dosimeter log", () => openAnalyses()] },
];
const ST = ["Steady", "Watch", "Act"];
let hsSel = "overview", hsDay = null;
const sysVal = (x, d) => x.val(d);
const weekDays = (d) => { const a = []; for (let k = Math.max(1, d - 6); k <= d; k++) a.push(k); return a; };
function miniWeek(x, d) {
  const days = weekDays(d), v = days.map((k) => sysVal(x, k)); if (v.length < 2) return `<svg class="hs-mini" viewBox="0 0 60 18"></svg>`;
  const lo = Math.min(...v), hi = Math.max(...v), sp = hi - lo || 1;
  return `<svg class="hs-mini" viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="${v.map((y, i) => `${(i / (v.length - 1)) * 60},${16 - ((y - lo) / sp) * 14}`).join(" ")}"/></svg>`;
}
// the 7 days of the week as bars, today highlighted; bars grow when the card opens
function weekBars(x, d) {
  const days = weekDays(d), v = days.map((k) => sysVal(x, k)), mag = v.map((y) => Math.abs(y)), hi = Math.max(...mag), lo = Math.min(...mag);
  const prev = weekDays(Math.max(1, d - 7)).map((k) => sysVal(x, k)), avgW = avg(v), avgP = d > 7 ? avg(prev) : null;
  const ch = avgP != null ? avgW - avgP : null;
  return `<div class="hs-week">${days.map((k, i) => `<div class="wb ${k === d ? "today" : ""}"><i style="--h:${Math.round(14 + ((mag[i] - lo) / ((hi - lo) || 1)) * 46)}px;--dl:${i * 60}ms"></i><b>${x.fmt(v[i])}</b><span>${k === d ? "today" : "D" + k}</span></div>`).join("")}</div>
    <div class="hs-wsum"><span>Week average <b>${x.fmt(avgW)}${x.unit && x.unit !== "" ? " " + x.unit : ""}</b></span>${ch != null ? `<span>vs last week <b class="${Math.abs(ch) < 0.05 ? "" : "chg"}">${ch >= 0 ? "+" : ""}${x.unit === "" ? (ch > 0 ? "↑" : ch < 0 ? "↓" : "=") : (Math.abs(ch) < 10 ? ch.toFixed(1) : Math.round(ch))}</b></span>` : `<span>first week of the mission</span>`}</div>`;
}
function spark(x) {
  if (S.day < 2) return `<svg class="hs-spark" viewBox="-4 0 308 76" preserveAspectRatio="none"><line x1="0" y1="40" x2="300" y2="40" class="base" /></svg><div class="hs-lab">Trend starts after day 1 · press “Next day” to see it move</div>`;
  const n = Math.min(S.day, 30), days = Array.from({ length: n }, (_, i) => Math.round(1 + (i * (S.day - 1)) / Math.max(1, n - 1)));
  const v = days.map((d) => sysVal(x, d)); const lo = Math.min(...v), hi = Math.max(...v), span = hi - lo || 1;
  const pts = v.map((y, i) => `${(i / Math.max(1, n - 1)) * 300},${70 - ((y - lo) / span) * 60}`).join(" ");
  return `<svg class="hs-spark" viewBox="-4 0 308 76" preserveAspectRatio="none"><polyline points="${pts}" /><polyline class="fill" points="0,76 ${pts} 300,76" /></svg>`;
}
function healthScore(d) {
  const st = SYS.map((x) => x.st(sysVal(x, d))), v = (id) => sysVal(SYS.find((x) => x.id === id), d);
  return clamp(Math.round(100 - st.reduce((a, b) => a + b, 0) * 6 + v("bone") * 2.5 + v("muscle") * 1.5 + v("heart") - v("rad") / 30), 0, 100);
}
function healthHTML() {
  const d = hsDay ?? S.day;
  const marks = SYS.map((x) => x.spots.map(([mx, my]) => `<button class="hs-spot st${x.st(sysVal(x, d))}" data-sys="${x.id}" style="left:${mx}%;top:${my}%" title="${esc(x.name)}"><i></i></button>`).join("")).join("");
  return `
  <div class="hs-top">
    <div class="hs-brand"><span class="hs-logo"></span><div><b>WEEKLY DATA</b><small>Week ${Math.floor((d - 1) / 7) + 1} · days ${weekDays(d)[0]}–${d} · day <span data-hs="day">${d}</span>/${MISSION_DAYS}</small></div></div>
    <button class="hs-app" id="hs-app" title="Open the full Nabu Health app">Nabu Health app <b>›</b></button>
    <div class="hs-haz">${Object.entries(HAZ).map(([k, n]) => { const w = Math.max(...SYS.filter((x) => x.haz.includes(k)).map((x) => x.st(sysVal(x, d))), 0); return `<span class="hz st${w}" data-haz="${k}"><i></i>${n}</span>`; }).join("")}</div>
  </div>
  <nav class="hs-sys">
    <div class="hs-cap">Systems</div>
    <button data-sys="overview" class="${hsSel === "overview" ? "on" : ""}"><i class="dot"></i>Overview</button>
    ${SYS.map((x) => `<button data-sys="${x.id}" class="${hsSel === x.id ? "on" : ""}"><i class="dot st${x.st(sysVal(x, d))}" data-hs-dot="${x.id}"></i><span class="nm">${esc(x.name)}</span>${miniWeek(x, d)}<em data-hs-v="${x.id}">${x.fmt(sysVal(x, d))}${x.unit && x.unit !== "" ? `<small>${x.unit}</small>` : ""}</em></button>`).join("")}
  </nav>
  <div class="hs-body sel-${hsSel}">
    <svg class="hs-orbit" viewBox="0 0 500 200"><ellipse class="o1" cx="250" cy="100" rx="235" ry="70" /><ellipse class="o2" cx="250" cy="100" rx="190" ry="52" /></svg>
    <svg class="hs-floor" viewBox="0 0 500 140"><g>${[40, 80, 120, 160, 200, 240].map((r) => `<ellipse cx="250" cy="70" rx="${r}" ry="${r * 0.26}" />`).join("")}${Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * Math.PI * 2; return `<line x1="250" y1="70" x2="${250 + Math.cos(a) * 240}" y2="${70 + Math.sin(a) * 62}" />`; }).join("")}</g><ellipse class="pulse" cx="250" cy="70" rx="60" ry="15.6" /></svg>
    <div class="hs-man">
      <img src="assets/skeleton.webp" alt="Holographic skeleton" draggable="false">
      <div class="hs-glow" id="hs-glow"></div>
      <div class="hs-scan"></div>
      ${marks}
    </div>
  </div>
  <aside class="hs-card" id="hs-card">${cardHTML(d)}</aside>
  <div class="hs-time">
    <button class="hs-play" id="hs-play" title="Replay the mission from day 1">▶ Day 1 → now</button>
    <div class="hs-track"><i class="hs-fill" style="width:${((d - 1) / (MISSION_DAYS - 1)) * 100}%"></i>
      ${ANALYSIS_SCHEDULE.map(([dd, t]) => `<b class="hs-exam ${dd <= S.day ? "done" : ""}" style="left:${((dd - 1) / (MISSION_DAYS - 1)) * 100}%" title="${esc(ANALYSIS_TYPES[t].name)} · day ${dd}"></b>`).join("")}
      <span class="hs-now" style="left:${((d - 1) / (MISSION_DAYS - 1)) * 100}%"><em>Day <b data-hs="day2">${d}</b></em></span></div>
    <span class="hs-end">Day ${MISSION_DAYS}</span>
  </div>`;
}
function cardHTML(d) {
  if (hsSel === "overview") {
    const sc = healthScore(d);
    const wk = SYS.map((x) => ({ x, now: x.st(sysVal(x, d)), was: x.st(sysVal(x, Math.max(1, d - 7))) }));
    return `<div class="hs-ey">This week · demo model</div>
      <div class="hs-score"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" class="bg"/><circle cx="60" cy="60" r="50" class="fg" style="stroke-dasharray:${(sc / 100) * 314} 314"/></svg><b data-hs="score">${sc}</b><small>health score</small></div>
      <div class="hs-list">${wk.map(({ x, now, was }) => `<button class="hs-li" data-sys="${x.id}"><i class="dot st${now}"></i><span>${esc(x.name)}</span><em>${ST[now]}${now !== was ? (now > was ? " ↓" : " ↑") : ""}</em></button>`).join("")}</div>
      <p class="hs-note">Tap a system or a point on the skeleton. Values are a demo model built from your tests, workouts and lab results.</p>`;
  }
  const x = SYS.find((y) => y.id === hsSel), v = sysVal(x, d), st = x.st(v);
  const base = x.base ? x.base() : null;
  return `<div class="hs-ey">${x.haz.map((h) => `<span class="hz-tag">${HAZ[h]}</span>`).join("")}</div>
    <h3>${esc(x.name)} <span class="hs-st st${st}">${ST[st]}</span></h3>
    <div class="hs-big"><b data-hs="big">${x.fmt(v)}</b><small>${x.unit}</small></div>
    <div class="hs-lab">${esc(x.label)}${base ? ` · baseline ${Math.round(base)} ms` : ""}</div>
    ${weekBars(x, d)}
    <div class="hs-rows">${x.rows().map(([n, r]) => `<div><span>${esc(n)}</span><b>${r ? `${r.v} <small>${esc(r.u || "")}</small>` : "<small>no data yet</small>"}</b></div>`).join("")}</div>
    <p class="hs-tip">${esc(x.tip)}</p>
    <button class="hs-act" id="hs-act"><b>${esc(x.act[0])}</b><small>${esc(x.act[1])}</small><span>›</span></button>`;
}
function healthBind() {
  const hs = $("#hs"); if (!hs) return;
  $$("[data-sys]", hs).forEach((b) => (b.onclick = (e) => { e.stopPropagation(); hsSelect(b.dataset.sys); }));
  $("#hs-cover").onclick = () => setScreenZoom(true);
  $("#hs-play").onclick = (e) => { e.stopPropagation(); hsReplay(); };
  const ap = $("#hs-app"); if (ap) ap.onclick = (e) => { e.stopPropagation(); openHealthApp(); };
  const act = $("#hs-act"); if (act) act.onclick = (e) => { e.stopPropagation(); SYS.find((y) => y.id === hsSel).act[2](); };
}
function hsSelect(id) {
  hsSel = id; const hs = $("#hs"); const d = hsDay ?? S.day;
  $$(".hs-sys [data-sys]", hs).forEach((b) => b.classList.toggle("on", b.dataset.sys === id));
  hs.querySelector(".hs-body").className = "hs-body sel-" + id;
  $$(".hs-spot", hs).forEach((m) => m.classList.toggle("on", m.dataset.sys === id));
  const g = $("#hs-glow"), x = SYS.find((y) => y.id === id);
  if (x) { const [gx, gy, gw, gh] = x.glow; Object.assign(g.style, { left: gx + "%", top: gy + "%", width: gw + "%", height: gh + "%" }); g.className = "hs-glow on st" + x.st(sysVal(x, d)); }
  else g.className = "hs-glow";
  const card = $("#hs-card"); card.classList.remove("swap"); void card.offsetWidth;
  card.innerHTML = cardHTML(d); card.classList.add("swap"); healthBind();
}
function healthUpdate() { const hs = $("#hs"); if (!hs) return; const keep = hsSel; hs.innerHTML = healthHTML(); healthBind(); hsSelect(keep); }
// replay the mission: the day runs from 1 to today and every number on the screen follows it
function hsReplay() {
  const hs = $("#hs"); if (!hs || hs.dataset.playing) return; hs.dataset.playing = "1";
  const T = 2600, t0 = performance.now(), end = S.day;
  const fill = hs.querySelector(".hs-fill"), now = hs.querySelector(".hs-now");
  const step = (t) => {
    const k = Math.min(1, (t - t0) / T), e = 1 - Math.pow(1 - k, 3), d = Math.max(1, Math.round(1 + e * (end - 1)));
    hsDay = d; const pc = ((d - 1) / (MISSION_DAYS - 1)) * 100;
    fill.style.width = pc + "%"; now.style.left = pc + "%";
    hs.querySelectorAll('[data-hs="day"],[data-hs="day2"]').forEach((n) => (n.textContent = d));
    SYS.forEach((x) => { const v = sysVal(x, d), st = x.st(v); const el = hs.querySelector(`[data-hs-v="${x.id}"]`); if (el) el.firstChild.textContent = x.fmt(v);
      const dot = hs.querySelector(`[data-hs-dot="${x.id}"]`); if (dot) dot.className = "dot st" + st;
      hs.querySelectorAll(`.hs-spot[data-sys="${x.id}"]`).forEach((m) => (m.className = `hs-spot st${st}${hsSel === x.id ? " on" : ""}`)); });
    const big = hs.querySelector('[data-hs="big"]'), x = SYS.find((y) => y.id === hsSel); if (big && x) big.textContent = x.fmt(sysVal(x, d));
    const sc = hs.querySelector('[data-hs="score"]'); if (sc) { const v = healthScore(d); sc.textContent = v; hs.querySelector(".hs-score .fg").style.strokeDasharray = `${(v / 100) * 314} 314`; }
    if (k < 1) requestAnimationFrame(step); else { hsDay = null; delete hs.dataset.playing; }
  };
  hsDay = 1; requestAnimationFrame(step);
}
function setTvZoom(on) {
  tvZoom = on;
  const scene = $("#room .scene"); scene.classList.remove("enter");
  scene.classList.toggle("tvzoom", on);
  $("#room").classList.toggle("tvzoomed", on);
  const t = $("#tv-toggle"); if (t) t.textContent = on ? "Room view" : "Screen view";
}
function fitTV() {
  const glass = $("#tv-glass"), app = $("#tv-app"); if (!glass || $("#tv-layer").hidden) return;
  const bw = glass.clientWidth, bh = glass.clientHeight; if (!bw) return;
  const s = bw / TV_LOGICAL_W;
  app.style.width = TV_LOGICAL_W + "px"; app.style.height = Math.ceil(bh / s) + "px"; app.style.transform = `scale(${s})`;
}
new ResizeObserver(() => { fitTV(); placeWallScreen(); }).observe($("#room"));
$("#room").addEventListener("pointerdown", (e) => { if (!e.target.closest(".decor,.dtools")) deselectDecor(); });
document.addEventListener("keydown", (e) => {
  if (!selDecor || view !== "room" || !$("#panel").hidden || /input|textarea/i.test(e.target.tagName)) return;
  const el = $$("#room-decor .decor").find((x) => x.classList.contains("sel")); if (!el) return;
  if (e.key === "r" || e.key === "R") { e.preventDefault(); turnDecor(el, selDecor, e.shiftKey ? -1 : 1); }
  if (e.key === "Escape") deselectDecor();
});
new ResizeObserver(([e]) => $("#corr").style.setProperty("--ui", Math.min(1, e.contentRect.width / 1240).toFixed(3))).observe($("#corr"));
function tvOSD(msg, warn) { const o = $("#tv-osd"); o.textContent = msg; o.classList.toggle("warn", !!warn); o.classList.add("show"); clearTimeout(osdTimer); osdTimer = setTimeout(() => o.classList.remove("show"), 1700); }
function tvBack() {
  const k = $("#key-backspace"); if (k) { k.classList.add("down"); setTimeout(() => k.classList.remove("down"), 140); }
  try { $("#tv-app").contentWindow.postMessage({ src: "tvroom", type: "back" }, "*"); } catch {}
}
function buildKeyboard() {
  const rows = [["` 1 2 3 4 5 6 7 8 9 0 - =", "⌫ Backspace:2"], ["Tab:1.5", "Q W E R T Y U I O P [ ]", "\\:1.5"], ["Caps:1.75", "A S D F G H J K L ; '", "Enter:2.25"], ["Shift:2.25", "Z X C V B N M , . /", "Shift:2.75"], ["Ctrl:1.25", "Win:1.25", "Alt:1.25", " :6.25", "Alt:1.25", "Fn:1.25", "Ctrl:1.25"]];
  const kb = $("#tv-kb");
  rows.forEach((parts) => {
    const row = document.createElement("div"); row.className = "kb-row";
    parts.forEach((p) => {
      const [label, u] = p.includes(":") && !/^[;:]$/.test(p) ? [p.slice(0, p.lastIndexOf(":")), +p.slice(p.lastIndexOf(":") + 1)] : [null, 1];
      const keys = label === null ? p.split(" ") : [label];
      keys.forEach((k) => {
        const b = document.createElement("button"); b.type = "button"; b.className = "kb-k"; b.textContent = k.trim(); b.style.setProperty("--u", label === null ? 1 : u);
        if (k.startsWith("⌫")) { b.classList.add("bksp"); b.id = "key-backspace"; b.setAttribute("aria-label", "Backspace: go back on the TV"); b.onclick = tvBack; }
        else { b.tabIndex = -1; b.setAttribute("aria-disabled", "true"); b.onclick = () => { b.classList.remove("locked"); void b.offsetWidth; b.classList.add("locked"); tvOSD("Key locked · only ⌫ works", true); }; }
        row.append(b);
      });
    });
    kb.append(row);
  });
}
window.addEventListener("message", (e) => {
  const d = e.data; if (!d || d.src !== "tvapp") return;
  if (d.type === "ready") tvReady = true;
  if (d.type === "page") tvOSD("▶ " + d.page);
  if (d.type === "back") tvOSD("⌫ Back · " + d.page);
  if (d.type === "top") tvOSD("⌫ Top · " + d.page);
  if (d.type === "none") tvOSD("⌫ Already at the start");
  if (d.type === "key" && d.down && d.code === "Backspace") { const k = $("#key-backspace"); k?.classList.add("down"); setTimeout(() => k?.classList.remove("down"), 140); }
});
function dragify(el, item) {
  el.addEventListener("pointerdown", (e) => {
    e.preventDefault(); e.stopPropagation(); el.setPointerCapture(e.pointerId); el.classList.add("lift");
    const rect = $("#room .scene").getBoundingClientRect(), room = $("#room");
    const px = (ev) => [((ev.clientX - rect.left) / rect.width) * 100, ((ev.clientY - rect.top) / rect.height) * 100];
    const [sx, sy] = px(e), ox = item.x - sx, oy = item.y - sy; let moved = 0;
    $("#room .dtools")?.remove();
    const hint = $("#room-decor .zone-hint"); if (hint) hint.innerHTML = zoneHint(currentRoom, item.item);
    room.classList.add("placing");
    const move = (ev) => {
      const [x, y] = px(ev); moved = Math.max(moved, Math.hypot(x - sx, y - sy)); item.x = x + ox; item.y = y + oy; clampPlace(currentRoom, item);
      el.style.left = item.x + "%"; el.style.top = item.y + "%"; el.style.cssText += ";" + sizeCss(currentRoom, item); el.style.zIndex = decorZ(item);
    };
    const up = () => { el.classList.remove("lift"); room.classList.remove("placing"); el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); el.removeEventListener("pointercancel", up); delete item.slot; save();
      if (moved < 0.6) selectDecor(el, item); else if (selDecor === item) selectDecor(el, item); };
    el.addEventListener("pointermove", move); el.addEventListener("pointerup", up); el.addEventListener("pointercancel", up);
  });
}

function hotspot(act) {
  const map = { console: () => travelTo("command"), desk: openDesk, sheets: openSheets, planet: () => { go("planet"); arriveAnim(); }, exercise: openExercise, analyses: openAnalyses, tests: openTests,
    breath: openBreath, mood: openMood, library: openLibrary, book: openBook, healthapp: openHealthApp };
  map[act]?.();
}

/* ───────────────────────── panel system ───────────────────────── */
const stack = [];
let cleanup = null;
let current = null;
function showPanel(entry) {
  if (cleanup) { cleanup(); cleanup = null; }
  current = entry;
  $("#panel-title").textContent = entry.title;
  $("#panel-back").hidden = stack.length === 0;
  const body = $("#panel-body"); body.innerHTML = ""; body.scrollTop = 0;
  $("#panel").hidden = false; $("#scrim").hidden = false;
  $("#panel").classList.toggle("wide", !!entry.wide); $("#panel").classList.toggle("xl", !!entry.xl);
  entry.render(body);
}
function openPanel(title, render, opt = {}) { stack.length = 0; showPanel({ title, render, ...opt }); }
function rerender() { if (current && !$("#panel").hidden) { const b = $("#panel-body"); const st = b.scrollTop; if (cleanup) { cleanup(); cleanup = null; } b.innerHTML = ""; current.render(b); b.scrollTop = st; } }
function closePanel() {
  if (cleanup) { cleanup(); cleanup = null; }
  $("#panel").hidden = true; $("#scrim").hidden = true; stack.length = 0; current = null;
  go(view);
}
function backPanel() { const prev = stack.pop(); if (!prev) return closePanel(); showPanel(prev); }
function sub(title, render, opt = {}) { if (current && !$("#panel").hidden) stack.push(current); showPanel({ title, render, ...opt }); }
const opener = (push) => (push === true ? sub : openPanel);

/* ───────────────────────── icons ───────────────────────── */
const ICON = {
  camera: `<svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>`,
  brain: `<svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 9l2 2 4-4M8 15h8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  pen: `<svg viewBox="0 0 24 24"><path d="M4 20l4-1 11-11-3-3L5 16z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 6l3 3" stroke="currentColor" stroke-width="1.7"/></svg>`,
  flask: `<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 15h10" stroke="currentColor" stroke-width="1.7"/></svg>`,
  chart: `<svg viewBox="0 0 24 24"><path d="M4 19h16M5 15l4-4 3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  book: `<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 21V5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  moon: `<svg viewBox="0 0 24 24"><path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  bag: `<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  tube: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="8" fill="none" stroke="currentColor" stroke-width="1.7"/><ellipse cx="12" cy="12" rx="4.5" ry="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 6l3.5 3M19 6l-3.5 3M5 18l3.5-3M19 18l-3.5-3" stroke="currentColor" stroke-width="1.4"/></svg>`,
  globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`,
};

/* ───────────────────────── earn coins ───────────────────────── */
function openCoins(push) { opener(push)("Earn coins", renderCoins); }
function renderCoins(b) {
  const tasks = normaFor(S.day); const done = tasks.filter((t) => S.daily.norma[t.id]).length;
  const newAn = S.analyses.filter((a) => !a.claimed).length;
  const g = S.daily.got;
  const testsLeft = 3 - ["pvt", "memory", "mood"].filter((k) => g[k]).length;
  b.innerHTML = `
    <div class="earn-hero"><div><div class="hud-label">Your balance</div><div class="earn-bal"><span class="coin big"></span>${S.coins}</div></div>
      <p>Short on coins? The quickest ways to earn are a camera workout or a few cognitive tests.</p></div>
    <div class="earn-main">
      <button class="earn-card hot" data-open="exercise"><span class="ic">${ICON.camera}</span><span class="t">Camera workout</span><span class="d">The camera checks your movement pattern. Only correct reps count.</span><span class="r">${S.daily.exerciseCoins} / ${REWARD.exerciseCap} today</span></button>
      <button class="earn-card hot" data-open="tests"><span class="ic">${ICON.brain}</span><span class="t">Cognitive tests</span><span class="d">Reaction, memory and today's mood. 2–3 minutes.</span><span class="r">${testsLeft ? `${testsLeft} left · up to +${REWARD.pvt + REWARD.memory + REWARD.mood}` : "all done today"}</span></button>
    </div>
    <div class="section-label">More ways to earn</div>
    <div class="earn-grid">
      <button class="earn-card" data-open="checklist"><span class="ic">${ICON.check}</span><span class="t">Daily checklist</span><span class="r">${done}/${tasks.length} · +${NORMA_COIN} each</span></button>
      <button class="earn-card" data-open="desk"><span class="ic">${ICON.pen}</span><span class="t">Free writing</span><span class="r">journal +${REWARD.journal} · chapter +${REWARD.chapter}</span></button>
      <button class="earn-card" data-open="analyses"><span class="ic">${ICON.flask}</span><span class="t">Medical results</span><span class="r">${newAn ? `${newAn} new · +${REWARD.analysis} each` : "nothing new"}</span></button>
      <button class="earn-card" data-open="library"><span class="ic">${ICON.book}</span><span class="t">Community library</span><span class="r">+${REWARD.read} per new chapter</span></button>
      <button class="earn-card" data-open="breath"><span class="ic">${ICON.moon}</span><span class="t">Rest & breathing</span><span class="r">+${REWARD.breath} · sleep quest +${REWARD.sleepQuest}</span></button>
    </div>
    <div class="card">${wellnessHTML(false)}</div>
    <div class="section-label">Demo tools</div>
    <div class="card">
      <p class="muted small">For the pitch: move time forward or simulate a few bad nights to see how the game reacts.</p>
      <div class="row"><button class="secondary" data-demo="day">+1 day</button><button class="secondary" data-demo="week">+7 days</button><button class="secondary" data-demo="rich">+300 coins</button><button class="secondary" data-demo="tired">Simulate 3 bad nights</button><button class="ghost" data-demo="reset">Reset</button></div>
      <form class="row code-row" id="code-form" autocomplete="off"><input type="text" id="code-in" placeholder="Enter a code, e.g. NABU5000" aria-label="Coin code" style="max-width:240px;text-transform:uppercase"><button class="primary" type="submit">Redeem</button><span class="muted small" id="code-msg"></span></form>
      <div id="reset-confirm"></div>
    </div>`;
  $$("[data-open]", b).forEach((t) => (t.onclick = () => ({ exercise: openExercise, tests: openTests, checklist: openChecklist, desk: openDesk, analyses: openAnalyses, library: openLibrary, breath: openBreath })[t.dataset.open](true)));
  bindWellnessActions(b);
  // Demo code: NABU followed by a number adds that many coins (up to 100 000), e.g. NABU5000.
  $("#code-form", b).onsubmit = (e) => {
    e.preventDefault();
    const code = $("#code-in", b).value.trim().toUpperCase(), m = code.match(/^NABU(\d{1,6})$/);
    if (!m || +m[1] < 1) { $("#code-msg", b).textContent = "Unknown code. Try NABU followed by a number, like NABU5000."; return; }
    const n = Math.min(100000, +m[1]); addCoins(n, `Code ${code}`); $("#code-in", b).value = ""; rerender();
  };
  $$("[data-demo]", b).forEach((d) => (d.onclick = () => {
    const k = d.dataset.demo;
    if (k === "day") nextDay();
    if (k === "week") { for (let i = 0; i < 7; i++) nextDay(true); toast(`Day ${S.day}. A week has passed.`); }
    if (k === "rich") { addCoins(300, "Demo coins"); }
    if (k === "tired") simulateTired();
    if (k === "reset") {
      $("#reset-confirm", b).innerHTML = `<div class="row" style="margin-top:8px"><span class="small">Erase all progress on this device?</span><button class="primary" id="reset-yes">Yes, reset</button></div>`;
      $("#reset-yes", b).onclick = () => { S = freshState(); save(); closePanel(); renderHUD(); go("planet"); toast("Progress has been reset."); };
      return;
    }
    rerender(); renderHUD();
  }));
}
function bindWellnessActions(b) {
  $$("[data-act]", b).forEach((x) => (x.onclick = () => {
    const a = x.dataset.act;
    if (a === "sleepquest") { S.quests.sleep = S.day; save(); toast("Quest active: go to bed 30 minutes earlier. Report your sleep tomorrow in the mood check-in."); }
    if (a === "breath") openBreath(true);
    if (a === "talk") toast("Request sent to the mission psychologist. The reply arrives in ~14 minutes.");
  }));
}

/* ───────────────────────── wall sheets: checklist · camera workout · cognitive tests ───────────────────────── */
function openSheets() {
  openPanel("Wall sheets", (b) => {
    const tasks = normaFor(S.day); const g = S.daily.got;
    const sheet = (id, title, lines, rot) => `<button class="sheet" data-sheet="${id}" style="--rot:${rot}deg"><span class="clip"></span><span class="sh-t">${title}</span>
      ${lines.map(([done, txt]) => `<span class="sh-l"><i class="${done ? "on" : ""}"></i>${esc(txt)}</span>`).join("")}</button>`;
    b.innerHTML = `<div class="wall"><div class="wire"></div><div class="sheets">
      ${sheet("checklist", "Checklist", tasks.map((t) => [S.daily.norma[t.id], t.t]), -2)}
      ${sheet("workout", "Camera workout", [[S.exerciseLog.some((l) => l.day === S.day), "One ARED set"], [S.daily.goodSets > 0, "A good set (80% good form)"], [S.daily.exerciseCoins >= REWARD.exerciseCap, `Coins today: ${S.daily.exerciseCoins}/${REWARD.exerciseCap}`]], 1.5)}
      ${sheet("tests", "Cognitive tests", [[g.pvt, "Catch the meteor"], [g.memory, "Fix the panel"], [g.mood, "Mood check-in"]], -1)}
    </div></div>
    <p class="muted small" style="text-align:center">Pick a sheet off the wall.</p>`;
    $$("[data-sheet]", b).forEach((s) => (s.onclick = () => {
      s.classList.add("pick");
      setTimeout(() => ({ checklist: () => openChecklist(true), workout: () => openExercise(true), tests: () => openTests(true) })[s.dataset.sheet](), reducedMotion() ? 0 : 380);
    }));
  }, { wide: true });
}
function openChecklist(push) {
  opener(push)("Checklist", (b) => {
    const tasks = normaFor(S.day); const done = tasks.filter((t) => S.daily.norma[t.id]).length;
    b.innerHTML = `<div class="paper big"><span class="clip"></span>
      <div class="sh-t">Checklist · Day ${S.day}</div>
      <div class="paper-sub">Mandatory tasks · +${NORMA_COIN} each · +${NORMA_BONUS} when all are done</div>
      ${tasks.map((t) => `<label class="paper-row ${S.daily.norma[t.id] ? "done" : ""}"><input type="checkbox" data-task="${t.id}" ${S.daily.norma[t.id] ? "checked disabled" : ""}><span class="box"></span><span><b>${esc(t.t)}</b><small>${esc(t.d)}</small></span><em>+${NORMA_COIN}</em></label>`).join("")}
      <div class="paper-progress"><span style="width:${(done / tasks.length) * 100}%"></span></div>
      <div class="paper-sub">${done} of ${tasks.length} done. On the ship these are confirmed from the operations log; here you tick them for the demo.</div></div>`;
    $$("[data-task]", b).forEach((cb) => (cb.onchange = () => {
      S.daily.norma[cb.dataset.task] = true; addCoins(NORMA_COIN, "Mandatory task done");
      if (normaFor(S.day).every((t) => S.daily.norma[t.id]) && !S.daily.normaBonus) { S.daily.normaBonus = true; addCoins(NORMA_BONUS, "Daily checklist complete"); }
      save(); rerender();
    }));
  });
}

/* ───────────────────────── day simulation ───────────────────────── */
function nextDay(silent) {
  if (!S.daily.got.journal && S.streak.journalLast < S.day) S.streak.journal = 0;
  const w = wellness(); S.lowDays = w.flags.length >= 1 ? S.lowDays + 1 : 0;
  const prevPhase = phaseOf(S.day);
  S.day = Math.min(MISSION_DAYS, S.day + 1);
  S.daily = newDaily(S.day);
  const due = analysisDueOn(S.day);
  if (due) S.analyses.push(makeAnalysis(due, S.day));
  save(); renderHUD();
  if (!silent) {
    toast(`Day ${S.day} begins.` + (due ? " New medical results uploaded." : ""));
    if (phaseOf(S.day) !== prevPhase) toast(`New phase: ${phaseOf(S.day)}`);
    if (MODULES.some((m) => m.day === S.day)) toast("A new module can be discovered at your base.");
    const fresh = Object.entries(ITEMS).filter(([, it]) => it.day === S.day && !it.reward);
    if (fresh.length) toast(`New in the market: ${fresh.map(([, it]) => it.name).join(", ")}`);
  }
  if ($("#panel").hidden) go(view); else rerender();
}
function simulateTired() {
  for (let i = 0; i < 3; i++) {
    const d = S.day - i;
    S.mood = S.mood.filter((m) => m.day !== d); S.mood.push({ day: d, sleep: 5 - (i % 2) * 0.5, energy: 3, stress: 8, mood: 4, connect: 4 });
    S.pvt = S.pvt.filter((p) => p.pre || p.day !== d); S.pvt.push({ day: d, ms: 336 + i * 9, lapses: 3 });
  }
  S.lowDays = Math.max(S.lowDays, 3); save();
  toast("Added 3 days of short sleep and slower reactions. Look at your base and the “How you're doing” card.");
}

/* ───────────────────────── building & market ───────────────────────── */
function openBuild(m) {
  openPanel("Undiscovered module", (b) => {
    const st = moduleState(m);
    b.innerHTML = `<div class="build-hero"><img src="assets/pad.webp" alt=""></div>
      <div class="card"><h3>Module ${MODULES.indexOf(m) + 1} · Undiscovered</h3>
      <p>${st === "locked" ? `This site opens on day ${m.day} of the mission (${esc(phaseOf(m.day))}). ${m.day - S.day} days to go.` : `The site is ready. Building costs ${m.cost} coins.`}</p>
      <p class="muted small">What's inside stays a mystery until you build it. Health features (workouts, tests, results, journal) are always available from Earn coins; modules add places to your base, they never lock care away.</p>
      <div class="row"><button class="primary" id="do-build" ${st !== "available" || S.coins < m.cost ? "disabled" : ""}>${st !== "available" ? "Still locked" : S.coins < m.cost ? `You need ${m.cost - S.coins} more coins` : `Build & discover (${m.cost} coins)`}</button>
      ${st === "available" && S.coins < m.cost ? `<button class="secondary" id="earn">Earn coins</button>` : ""}</div></div>`;
    $("#earn", b)?.addEventListener("click", () => openCoins(true));
    $("#do-build", b).onclick = () => {
      if (!spend(m.cost)) return; S.built[m.id] = true; save();
      const r = roomById(m.room);
      b.innerHTML = `<div class="reveal"><div class="ey">You discovered</div><div class="nm">${esc(m.name)}</div><img src="${imgUrl(r)}" alt=""><p>${r.hotspots.map((h) => esc(h.label.split(" · ").pop())).join(" · ")}</p><button class="primary" id="go-in">Go inside ▸</button></div>`;
      $("#go-in", b).onclick = () => { closePanel(); enterRoom(m.id); };
    };
  });
}
function openShop(push, slot) {
  let tab = slot ? "spot" : "all", pick = null;
  opener(push)("Market", (b) => {
    const draw = () => {
      const m = roomById(currentRoom), z = zoneOf(currentRoom);
      const all = Object.entries(ITEMS).filter(([, it]) => !it.reward);
      const list = all.filter(([k, it]) => tab === "all" || (tab === "spot" ? slot.items.includes(k) : it.tier === tab));
      const newKeys = all.filter(([k, it]) => S.day >= it.day && !S.seenItems[k]).map(([k]) => k);
      const owned = (k) => Object.values(S.decor).flat().filter((d) => d.item === k).length;
      const fits = (k) => !isWall(k) || z.walls.length > 0;
      if (!pick || !list.some(([k]) => k === pick)) {
        const open = list.filter(([k, it]) => S.day >= it.day);
        const order = Object.keys(TIERS);
        open.sort((x, y) => order.indexOf(y[1].tier) - order.indexOf(x[1].tier) || y[1].price - x[1].price);
        pick = (open.find(([k]) => newKeys.includes(k) && fits(k)) || open.find(([k]) => fits(k)) || list[0])?.[0]; // the best thing you can have right now
      }
      const it = ITEMS[pick], locked = S.day < it.day, short = S.coins < it.price;
      b.innerHTML = `<div class="market-head"><div><div class="hud-label">${slot ? "Furnishing a spot in" : "Decorating"}</div><b>${esc(m.name)}</b></div><div class="earn-bal small"><span class="coin"></span>${S.coins}</div></div>
        <div class="mk-hero" style="--tier:${TIERS[it.tier].color}">
          <div class="mk-stage"><i class="mk-rays"></i><i class="mk-ped"></i><img src="${itemImg(pick)}" alt="" class="${locked ? "sil" : ""}"></div>
          <div class="mk-info"><span class="mk-tier">${TIERS[it.tier].name}${newKeys.includes(pick) ? ` · <b class="mk-newtag">new</b>` : ""}</span>
            <h3>${locked ? "A mystery item" : esc(it.name)}</h3>
            <p>${locked ? `Arrives with the supply drop on day ${it.day}.` : esc(it.desc || "")}</p>
            <div class="mk-facts"><span>${isWall(pick) ? "Hangs on a wall" : it.layer === "floor" ? "Lies on the floor" : "Stands on the floor"}</span>${owned(pick) ? `<span>You own ${owned(pick)}</span>` : ""}</div>
            <button class="mk-buy ${short || locked || !fits(pick) ? "off" : ""}" id="mk-buy">${locked ? `Unlocks day ${it.day}` : !fits(pick) ? "No free wall in this room" : short ? `Need ${it.price - S.coins} more` : `Buy & place`}<b><span class="coin"></span>${it.price}</b></button></div>
        </div>
        <div class="seg tabs" id="mk-tabs">${[...(slot ? ["spot"] : []), "all", ...Object.keys(TIERS)].map((t) => `<button data-tab="${t}" class="${t === tab ? "on" : ""}">${t === "spot" ? "For this spot" : t === "all" ? "All" : TIERS[t].name}</button>`).join("")}</div>
        <div class="market">${list.map(([k, x]) => {
          const lk = S.day < x.day;
          return `<button class="mk ${lk ? "locked" : ""} ${k === pick ? "on" : ""} t-${x.tier}" data-pick="${k}" style="--tier:${TIERS[x.tier].color}">
            ${newKeys.includes(k) ? `<span class="mk-new">new</span>` : ""}${owned(k) ? `<span class="mk-own">×${owned(k)}</span>` : ""}
            <span class="mk-img"><i></i><img src="${itemImg(k)}" alt="" loading="lazy"></span>
            <span class="mk-name">${lk ? "???" : esc(x.name)}</span>
            <span class="mk-meta"><span class="mk-tier">${TIERS[x.tier].name}</span><span class="mk-price ${S.coins < x.price && !lk ? "short" : ""}">${lk ? `day ${x.day}` : x.price}</span></span></button>`;
        }).join("")}</div>
        <div class="card"><h3>In this room</h3>${(S.decor[currentRoom] || []).length ? S.decor[currentRoom].map((d, i) => `<div class="row between"><span class="row"><img src="${itemImg(d.item)}" alt="" style="width:34px;height:34px;object-fit:contain">${esc(ITEMS[d.item].name)}</span><span class="row"><button class="ghost" data-size="${i}|-1">−</button><button class="ghost" data-size="${i}|1">+</button><button class="ghost" data-del="${i}">Remove</button></span></div>`).join("") : `<p class="muted">Nothing yet. Pick something above.</p>`}</div>`;
      newKeys.forEach((k) => (S.seenItems[k] = true)); save();
      $$("[data-tab]", b).forEach((t) => (t.onclick = () => { tab = t.dataset.tab; pick = null; draw(); }));
      $$("[data-pick]", b).forEach((t) => (t.onclick = () => { pick = t.dataset.pick; draw(); const h = $(".mk-hero", b); h.classList.remove("swap"); void h.offsetWidth; h.classList.add("swap"); h.scrollIntoView({ block: "nearest", behavior: "smooth" }); }));
      $("#mk-buy", b).onclick = () => {
        const k = pick, it = ITEMS[k];
        if (S.day < it.day) { toast(`This item is still a mystery. It arrives on day ${it.day}.`); return; }
        if (!fits(k)) { toast("This room has no free wall. Try the Bedroom or the Mess hall."); return; }
        if (S.coins < it.price) { toast(`You need ${it.price - S.coins} more coins.`); openCoins(true); return; }
        spend(it.price);
        const useSlot = slot && slot.items.includes(k) && !(S.decor[currentRoom] || []).some((d) => d.slot === slot.id);
        const d = useSlot ? { item: k, x: slot.x, y: slot.y, s: 1, slot: slot.id } : freeSpot(currentRoom, k);
        d.fresh = true; clampPlace(currentRoom, d); (S.decor[currentRoom] ||= []).push(d); save();
        closePanel(); renderRoom();
        const hint = $("#room-decor .zone-hint"); if (hint) { hint.innerHTML = zoneHint(currentRoom, k); $("#room").classList.add("placing"); setTimeout(() => $("#room").classList.remove("placing"), 2200); }
        toast(`${it.name} is in your ${roomById(currentRoom).name.toLowerCase()}. Drag it where you like.`);
      };
      $$("[data-size]", b).forEach((t) => (t.onclick = () => { const [i, dd] = t.dataset.size.split("|").map(Number); const x = S.decor[currentRoom][i]; x.s = clamp((x.s || 1) + dd * 0.12, 0.7, 1.4); save(); renderDecor(); }));
      $$("[data-del]", b).forEach((t) => (t.onclick = () => { S.decor[currentRoom].splice(+t.dataset.del, 1); save(); renderRoom(); draw(); }));
    };
    draw();
  }, { wide: true });
}

/* ───────────────────────── writing: the desk with two books ───────────────────────── */
/* ───────────────────────── the desk: two journals, opened as real two-page books ─────────────────────────
   Personal Journal: your private chapters, one page each, and today's blank page to write on.
   Community Journal: contents on the left (today's insights, your insights, your base, every other base);
   pick a base and a crewmate and their book opens on the right page. Pages turn like paper. */
const avatar = (i, cls = "") => `<span class="av ${cls}" style="--ax:${i % 4};--ay:${Math.floor(i / 4)}"></span>`;
const shipOf = (sym) => (sym === ME.sym ? ME.base : (STATIONS.find((x) => x.sym === sym)?.ship || sym));
const crewOf = (sym) => PEOPLE.filter((x) => x.sym === sym);
const personById = (id) => PEOPLE.find((x) => x.id === id);
const relCh = (pp) => pp.chapters.filter((c) => c.day <= S.day);
const unreadOf = (pp) => relCh(pp).filter((c, j) => !S.read[pp.id + j]).length;
let BK = { book: null, view: "toc", person: null, spread: -1, ch: null };
function openDesk(push) { opener(push)("Desk", renderDesk, { wide: true }); }
function openJournalBook(state) { BK = { book: "community", view: "toc", person: null, spread: -1, ch: null, ...state }; openPanel(BK.book === "personal" ? "Personal Journal" : "Community Journal", renderOpenBook, { wide: true }); }
function renderDesk(b) {
  const writers = PEOPLE.length + 1, news = PEOPLE.reduce((a, pp) => a + unreadOf(pp), 0);
  b.innerHTML = `<div class="desk2">
      <button class="tome2 personal" data-open="personal" aria-label="Open your personal journal">
        <span class="t2-pages"></span><span class="t2-cover"><span class="t2-title">Personal<br>Journal</span><span class="t2-sub">private · only you</span><i class="t2-clasp"></i></span></button>
      <button class="tome2 community" data-open="community" aria-label="Open the community journal">
        <span class="t2-pages"></span><span class="t2-cover"><span class="t2-title">Community<br>Journal</span><span class="t2-sub">${STATIONS.length + 1} bases · ${writers} writers</span><i class="t2-clasp"></i>${news ? `<b class="t2-new">${news} new</b>` : ""}</span></button>
    </div>
    <div class="desk-legend"><div><b>Personal Journal</b><span>Only you read it. +${REWARD.journal} coins a day, streak bonus.</span></div><div><b>Community Journal</b><span>Read the other crews, write your insights. +${REWARD.chapter} per chapter, +${REWARD.read} per new chapter read.</span></div></div>`;
  $$("[data-open]", b).forEach((t) => (t.onclick = () => {
    if (t.classList.contains("opening")) return;
    t.classList.add("opening"); b.querySelector(".desk2").classList.add("picked");
    const kind = t.dataset.open;
    setTimeout(() => { BK = { book: kind, view: kind === "personal" ? "journal" : "toc", person: null, spread: -1, ch: null }; sub(kind === "personal" ? "Personal Journal" : "Community Journal", renderOpenBook, { wide: true }); }, reducedMotion() ? 0 : 560);
  }));
}
// ── page content ──
const pgHead = (t) => `<div class="pg-h">${esc(t)}</div>`;
function journalPages() {
  const pages = S.journal.map((e, k) => `<div class="pg-ch"><h4>Chapter ${k + 1}</h4><div class="pg-meta">Day ${e.day} · ${esc(dateLabel(e.day))}</div><div class="pg-text" data-entry="${k}">${esc(e.text)}</div>${BK.lastScan?.k === k ? guardianStrip(BK.lastScan.r) : ""}</div>`);
  pages.push(`<div class="pg-ch write"><h4>Chapter ${S.journal.length + 1}</h4><div class="pg-meta">Day ${S.day} · today · only you</div>
    <textarea class="pg-ta" id="pj-text" placeholder="Dear journal, today…" aria-label="Today's journal page"></textarea>
    <div class="pg-foot"><span id="pj-count">0 words · 40 for coins</span><button class="ink-btn" data-act="save-journal">Save page</button></div>
    <label class="pg-consent"><input type="checkbox" data-act="consent" ${S.consent ? "checked" : ""}> analyse my tone on this device</label>
    <button class="gd-seal" data-nav="guardian"><i></i>Guardian on · reads for danger only, keeps no words</button></div>`);
  return pages;
}
function insightList() {
  const fresh = PEOPLE.flatMap((pp) => relCh(pp).map((c, j) => ({ pp, c, j }))).filter((x) => x.c.day >= S.day - 3).sort((a, b) => b.c.day - a.c.day);
  return fresh.length ? fresh : PEOPLE.flatMap((pp) => relCh(pp).map((c, j) => ({ pp, c, j }))).sort((a, b) => b.c.day - a.c.day).slice(0, 4);
}
const insightCard = ({ pp, c, j }) => `<button class="pg-ins" data-nav="person:${pp.id}:${j}">${avatar(pp.avatar)}<span><b>${esc(pp.name)} · ${esc(shipOf(pp.sym))}</b><em>${esc(c.t)}</em><small>${esc(c.x.slice(0, 120))}…</small></span>${S.read[pp.id + j] ? "" : `<i class="pg-dot"></i>`}</button>`;
function personBook(pp, focus) {
  const rel = relCh(pp);
  return `<div class="pg-h">${esc(pp.name)} · ${esc(shipOf(pp.sym))}</div><div class="pg-book-t">“${esc(pp.title)}”</div>` +
    (rel.length ? rel.map((c, j) => { const key = pp.id + j;
      return `<div class="pg-ch ${focus === j ? "focus" : ""}" data-chid="${j}"><h4>Chapter ${j + 1} <small>${esc(c.t)}</small></h4><div class="pg-text" ${S.read[key] ? "" : `data-ink="${key}"`}>${S.read[key] ? esc(c.x) : ""}</div>
        <div class="pg-react">${["Inspired me", "I get it", "Keep going"].map((r) => `<button data-react="${key}|${r}" class="${S.reacted[key + "|" + r] ? "on" : ""}">${r}</button>`).join("")}</div></div>`; }).join("")
      : `<p class="pg-empty">${esc(pp.name)} hasn't published a chapter yet.</p>`) +
    (pp.chapters.some((c) => c.day > S.day) ? `<p class="pg-empty">The next chapter is being written on ${esc(shipOf(pp.sym))}.</p>` : "");
}
function mineList() {
  const ch = S.book.chapters;
  return pgHead("Your insights") + `<p class="pg-note">Chapters for the crews on the other bases. You choose what goes public; nothing comes from your personal journal.</p>` +
    ch.map((c, k) => `<button class="pg-toc ${BK.ch === k ? "on" : ""}" data-nav="minech:${k}"><b>Ch ${k + 1}</b><span>${esc(c.t)}</span><em>${Date.now() >= c.deliverAt ? `${c.reactions} reactions` : "in transit"}</em></button>`).join("") +
    `<button class="pg-toc cont ${BK.ch === null ? "on" : ""}" data-nav="minech:new"><b>Ch ${ch.length + 1}</b><span>Continue writing</span><em>›</em></button>`;
}
function mineRight() {
  const ch = S.book.chapters;
  if (BK.ch !== null && ch[BK.ch]) { const c = ch[BK.ch];
    return `<div class="pg-h">“${esc(S.book.title)}”</div><div class="pg-ch"><h4>Chapter ${BK.ch + 1} <small>${esc(c.t)}</small></h4><div class="pg-meta">day ${c.day} · ${Date.now() >= c.deliverAt ? `delivered · ${c.reactions} reader reactions` : `in transit · ${c.delayMin} min delay`}</div><div class="pg-text" data-mine="${BK.ch}">${esc(c.x)}</div></div>`; }
  return `<div class="pg-h">“<input class="pg-title" id="pb-title" value="${esc(S.book.title)}" style="width:${Math.min(26, S.book.title.length + 1)}ch" aria-label="Book title">”</div>
    <div class="pg-ch write"><h4>Chapter ${ch.length + 1}</h4><input class="pg-line" id="pb-ch" placeholder="Chapter title…" aria-label="Chapter title">
    <textarea class="pg-ta" id="pb-text" placeholder="Write for someone going through the same thing, on another base." aria-label="Chapter text"></textarea>
    <div class="pg-foot"><span id="pb-count">0 words · 60 minimum</span><button class="ink-btn" data-act="publish">Publish</button></div></div>`;
}
// what the two open pages show for the current state
function spreadFor() {
  const v = BK.view;
  if (BK.book === "personal") {
    if (v === "guardian") return guardianSpread();
    const pages = journalPages(), n = Math.ceil(pages.length / 2);
    if (BK.spread < 0 || BK.spread >= n) BK.spread = Math.floor((pages.length - 1) / 2);
    const i = BK.spread * 2;
    return { L: (i === 0 ? pgHead("Personal journal") : "") + (pages[i] || ""), R: pages[i + 1] || `<p class="pg-empty">The next page waits for tomorrow.</p>`,
      pl: i + 1, pr: i + 2, prev: BK.spread > 0 ? { spread: BK.spread - 1 } : null, next: BK.spread < n - 1 ? { spread: BK.spread + 1 } : null };
  }
  const toc = () => pgHead("Community") +
    `<button class="pg-toc big" data-nav="insights"><b>Today's insights</b><em>${insightList().length}</em></button>
     <button class="pg-toc big" data-nav="mine"><b>Your insights</b><em>${S.book.chapters.length} ch</em></button>
     <button class="pg-toc big" data-nav="base:${ME.sym}"><b>Your base</b><span>${esc(ME.base)}</span>${crewOf(ME.sym).map((x) => avatar(x.avatar, "xs")).join("")}</button>
     <div class="pg-sep">Other bases</div>` +
    STATIONS.map((st) => { const cr = crewOf(st.sym), un = cr.reduce((a, x) => a + unreadOf(x), 0);
      return `<button class="pg-toc" data-nav="base:${st.sym}"><b>${esc(st.ship)}</b><span>${cr.map((x) => avatar(x.avatar, "xs")).join("")}</span><em>${un ? `<i class="pg-dot"></i>${un} new` : ""}</em></button>`; }).join("");
  if (v === "toc") return { L: toc(), R: pgHead("Today's insight") + insightList().slice(0, 2).map(insightCard).join("") + `<button class="pg-more" data-nav="insights">All of today's insights ›</button>`, pl: 1, pr: 2 };
  if (v === "insights") { const all = insightList(), n = Math.max(1, Math.ceil(all.length / 4)); BK.spread = clamp(BK.spread, 0, n - 1); const k = BK.spread * 4;
    return { L: pgHead("Today's insight") + all.slice(k, k + 2).map(insightCard).join(""), R: all.slice(k + 2, k + 4).map(insightCard).join("") || `<p class="pg-empty">That's everything for today.</p>`,
      pl: 3 + k / 2, pr: 4 + k / 2, back: { view: "toc" }, prev: BK.spread > 0 ? { spread: BK.spread - 1 } : null, next: BK.spread < n - 1 ? { spread: BK.spread + 1 } : null }; }
  if (v === "mine") return { L: mineList(), R: mineRight(), pl: 5, pr: 6, back: { view: "toc" } };
  if (v.startsWith("base:")) {
    const sym = v.slice(5), cr = crewOf(sym), mine = sym === ME.sym;
    const pp = personById(BK.person) && personById(BK.person).sym === sym ? personById(BK.person) : cr[0];
    const list = pgHead(mine ? "Your base" : shipOf(sym) + " journal") +
      (mine ? `<button class="pg-person" data-nav="mine">${avatar(YOU_AVATAR)}<span><b>You</b><small>Commander · ${S.book.chapters.length} chapters</small></span></button>` : "") +
      cr.map((x) => `<button class="pg-person ${x === pp ? "on" : ""}" data-nav="person:${x.id}">${avatar(x.avatar)}<span><b>${esc(x.name)}</b><small>${esc(x.role)} · ${relCh(x).length} chapters</small></span>${unreadOf(x) ? `<i class="pg-dot"></i>` : ""}</button>`).join("");
    const si = STATIONS.findIndex((x) => x.sym === sym);
    return { L: list, R: pp ? personBook(pp, BK.ch) : "", pl: 7 + 2 * (si + 1), pr: 8 + 2 * (si + 1), back: { view: "toc" }, person: pp,
      prev: si >= 0 ? { view: si === 0 ? "base:" + ME.sym : "base:" + STATIONS[si - 1].sym, person: null, ch: null } : null,
      next: si < STATIONS.length - 1 ? { view: "base:" + STATIONS[si + 1].sym, person: null, ch: null } : null };
  }
  return { L: toc(), R: "", pl: 1, pr: 2 };
}
function renderOpenBook(b) {
  b.innerHTML = `<div class="book2 ${BK.book}" id="book2">
      <div class="spread2" id="spread2"><div class="pg left" id="pgL"></div><div class="pg right" id="pgR"></div><div class="spine2"></div></div>
      ${BK.book === "community" ? `<button class="ribbon" data-nav="toc" title="Contents">Contents</button>` : ""}
    </div>`;
  paintSpread(spreadFor()); bindBook(b);
  $("#book2", b).classList.add("opened");
}
function pageNav(sp) {
  return `<div class="pg-nav">${sp.prev || sp.back ? `<button class="pg-arrow" data-nav="${sp.prev ? "prev" : "back"}" aria-label="Previous page">⇦</button>` : "<span></span>"}<span class="pg-no">${sp.pl}</span></div>`;
}
function paintSpread(sp) {
  const L = $("#pgL"), R = $("#pgR"); if (!L) return;
  L.innerHTML = `<div class="pg-in">${sp.L}</div>${pageNav(sp)}`;
  R.innerHTML = `<div class="pg-in">${sp.R}</div><div class="pg-nav right"><span class="pg-no">${sp.pr}</span>${sp.next ? `<button class="pg-arrow" data-nav="next" aria-label="Next page">⇨</button>` : "<span></span>"}</div>`;
  BK._sp = sp; afterPaint();
}
// ink the chapters you haven't read yet, pay for them, wire the inputs
function afterPaint() {
  const R = $("#pgR"), L = $("#pgL"); if (!R) return;
  let earned = 0;
  $$("[data-ink]", R).forEach((el, k) => {
    const key = el.dataset.ink, pp = PEOPLE.find((x) => key.startsWith(x.id) && /^\d+$/.test(key.slice(x.id.length))), j = +key.slice(pp.id.length);
    setTimeout(() => el.isConnected && inkWrite(el, pp.chapters[j].x, { maxMs: 3200 }), 250 + k * 3500); // one pen at a time
    if (!S.read[key]) { S.read[key] = true; if (S.daily.readCoins < REWARD.readCap) { S.daily.readCoins++; earned += REWARD.read; } }
  });
  if (earned) { save(); addCoins(earned, "New chapters read"); }
  const focus = $(".pg-ch.focus", R); if (focus) setTimeout(() => focus.scrollIntoView({ block: "nearest", behavior: "smooth" }), 300);
  const ta = $("#pj-text"); if (ta) { ta.oninput = () => ($("#pj-count").textContent = `${words(ta.value)} words · 40 for coins`); }
  const tb = $("#pb-text"); if (tb) { tb.oninput = () => ($("#pb-count").textContent = `${words(tb.value)} words · 60 minimum`); }
  const tt = $("#pb-title"); if (tt) tt.onchange = () => { S.book.title = tt.value.trim() || S.book.title; save(); };
  if (BK.inkEntry != null) { const el = $(`[data-entry="${BK.inkEntry}"]`); if (el) inkWrite(el, S.journal[BK.inkEntry].text); BK.inkEntry = null; }
  if (BK.inkMine != null) { const el = $(`[data-mine="${BK.inkMine}"]`); if (el) inkWrite(el, S.book.chapters[BK.inkMine].x); BK.inkMine = null; }
  void L;
}
// the page turn: the old page lifts and swings over the spine, showing the new page on its back
function turnTo(state, dir) {
  const L = $("#pgL"), R = $("#pgR"), spread = $("#spread2"); if (!L || spread.querySelector(".leaf")) return;
  const oldL = L.innerHTML, oldR = R.innerHTML;
  Object.assign(BK, state); const sp = spreadFor();
  if (reducedMotion() || !dir) { paintSpread(sp); return; }
  const nav = pageNav(sp);
  const newL = `<div class="pg-in">${sp.L}</div>${nav}`, newR = `<div class="pg-in">${sp.R}</div><div class="pg-nav right"><span class="pg-no">${sp.pr}</span>${sp.next ? `<button class="pg-arrow" data-nav="next">⇨</button>` : "<span></span>"}</div>`;
  const leaf = document.createElement("div"); leaf.className = "leaf " + (dir > 0 ? "fwd" : "bwd");
  leaf.innerHTML = dir > 0 ? `<div class="lf front pg right">${oldR}</div><div class="lf back pg left">${newL}</div>` : `<div class="lf front pg left">${oldL}</div><div class="lf back pg right">${newR}</div>`;
  if (dir > 0) R.innerHTML = newR; else L.innerHTML = newL;
  spread.append(leaf);
  leaf.animate([{ transform: "rotateY(0deg)" }, { transform: `rotateY(${dir > 0 ? -180 : 180}deg)` }], { duration: 720, easing: "cubic-bezier(.4,.1,.25,1)" }).onfinish = () => { leaf.remove(); paintSpread(sp); };
}
function bindBook(b) {
  const root = $("#book2", b);
  root.addEventListener("click", (e) => {
    const t = e.target.closest("[data-nav],[data-act],[data-react]"); if (!t || !root.contains(t)) return;
    if (t.dataset.react) { const k = t.dataset.react; S.reacted[k] = !S.reacted[k]; t.classList.toggle("on"); save(); if (S.reacted[k]) toast("Your reaction is on its way."); return; }
    const a = t.dataset.act;
    if (a === "consent") { S.consent = t.checked; save(); return; }
    if (a?.startsWith("share2:")) { G().share2 = a.slice(7); save(); $$("#pgR .gd-opt button").forEach((x) => x.classList.toggle("on", x === t)); return; }
    if (a === "save-journal") return saveJournalPage();
    if (a === "publish") return publishChapter();
    const n = t.dataset.nav, sp = BK._sp || {};
    if (n === "next" && sp.next) return turnTo(sp.next, 1);
    if (n === "prev" && sp.prev) return turnTo(sp.prev, -1);
    if (n === "back" && sp.back) return turnTo({ ...sp.back, spread: -1, person: null, ch: null }, -1);
    if (n === "guardian") return turnTo({ view: "guardian" }, 1);
    if (n === "toc") return BK.view === "toc" ? null : turnTo({ view: "toc", spread: -1, person: null, ch: null }, -1);
    if (n === "insights") return turnTo({ view: "insights", spread: 0 }, 1);
    if (n === "mine") return turnTo({ view: "mine", ch: null }, 1);
    if (n?.startsWith("base:")) return turnTo({ view: n, person: null, ch: null }, 1);
    if (n?.startsWith("minech:")) { const v = n.slice(7); BK.ch = v === "new" ? null : +v; $("#pgR .pg-in").innerHTML = mineRight(); $$("#pgL .pg-toc").forEach((x) => x.classList.toggle("on", x === t)); $("#pgR").classList.remove("flash"); void $("#pgR").offsetWidth; $("#pgR").classList.add("flash"); afterPaint(); return; }
    if (n?.startsWith("person:")) { const [, id, ch] = n.split(":"); const pp = personById(id);
      if (BK.view === "base:" + pp.sym) { BK.person = id; BK.ch = ch != null ? +ch : null; $("#pgR .pg-in").innerHTML = personBook(pp, BK.ch); $$("#pgL .pg-person").forEach((x) => x.classList.toggle("on", x === t)); $("#pgR").classList.remove("flash"); void $("#pgR").offsetWidth; $("#pgR").classList.add("flash"); afterPaint(); return; }
      return turnTo({ view: "base:" + pp.sym, person: id, ch: ch != null ? +ch : null }, 1); }
  });
}
/* ───── Guardian: the on-device safety screen of the journals ─────
   The scan returns numbers only; this code never stores or sends the text. Level 0: nothing. 1: a private card.
   2: you decide whether a flag goes to your psychologist. 3: an automatic alert (agreed before flight). */
const PSY = { name: "Dr. Irina Matei", role: "Cognitive psychologist · trained with you for 18 months", avatar: 15 };
const MED = { name: "Ana + flight surgeon", role: "Crew medical officer, Lyra Base" };
const G = () => (S.guard ||= { signals: [], sent: [], share2: "ask" });
const nextPPC = () => 14 - ((S.day - 1) % 14);
function guardianCheck(text, source) {
  const r = guardScan(text); const g = G();
  (g.scans ||= []).push({ day: S.day, at: Date.now(), source, segs: r.segments.length }); g.scans = g.scans.slice(-300);   // a count for the console, never the text
  let { cat, level } = r.top;
  if (level >= 1) g.signals.push({ day: S.day, cat, level });          // a number per day, never the words
  g.signals = g.signals.filter((x) => x.day > S.day - 30);
  if (level < 2 && trendLevel(g.signals, S.day) >= 2) { cat = "distress"; level = 2; r.pattern = true; }
  r.route = { cat, level };
  if (level === 3) r.packet = sendFlag(cat, level, source, r, true);
  else if (level === 2 && g.share2 === "auto") r.packet = sendFlag(cat, level, source, r, false);
  save(); return r;
}
function sendFlag(cat, level, source, r, auto) {
  const to = cat === "medical" ? MED.name : PSY.name;
  const packet = { to, at: Date.now(), category: cat, level, day: S.day, source, flaggedSegments: r.flagged, of: r.segments.length, consent: auto ? "pre-flight agreement (level 3)" : "you shared it", text: "not included" };
  G().sent.push(packet); logAct("flag", `Guardian flag · ${CAT_LABEL[cat] || cat}, level ${level}`, level >= 3 ? "bad" : "warn"); save();
  const delay = 4 + Math.floor(Math.random() * 16);
  setTimeout(() => toast(`Guardian flag delivered to ${to} · ${delay} min light delay · no text was sent.`), 2500);
  return packet;
}
function guardianStrip(r) {
  const tot = r.segments.reduce((a, x) => a + x.len, 0) || 1;
  const sent = r.packet ? `flag sent to ${esc(r.packet.to)} · no text` : "nothing left the base";
  return `<div class="gd-strip ${r.route.level >= 2 ? "hot" : ""}"><div class="gd-bars">${r.segments.map((x) => `<i class="l${x.level}" style="flex:${Math.max(2, (x.len / tot) * 100)}"></i>`).join("")}<b class="gd-sweep"></b></div>
    <span><b>Guardian</b> · ${r.segments.length} segments checked on this device · ${sent}</span></div>`;
}
function guardianSlip(r) {
  const book = $("#book2"); if (!book || r.route.level === 0) return;
  const { cat, level } = r.route;
  let body;
  if (level === 1) body = `<h5>A rough page?</h5><p>This stays between you and the journal. Nobody was told.</p>
      <div class="gd-acts"><button data-gd="breath">1-minute breathing</button><button data-gd="sleep">Sleep quest</button><button data-gd="ppc">Note it for my next talk (${nextPPC()} days)</button></div>`;
  else if (level === 2 && !r.packet) body = `<h5>${r.pattern ? "Several hard days in a row" : "This page sounds heavy"}</h5><p>Guardian can send <b>one flag</b> to ${esc(PSY.name)}: “${esc(CAT_LABEL[cat])}, level ${level}, day ${S.day}”. <b>Not a single word</b> of what you wrote.</p>
      <div class="gd-acts"><button class="pri" data-gd="share">Send the flag</button><button data-gd="talk">Ask for a call instead</button><button data-gd="later">Not now</button></div>`;
  else if (cat === "medical") body = `<h5>Medical red flag</h5><p>${esc(MED.name)} were alerted with the category only. Right now:</p>
      <ol><li>Stop, sit or lie down, don't stay alone.</li><li>Tell a crewmate out loud.</li><li>If someone collapses: check response and breathing, call the crew, start compressions, bring the defibrillator.</li></ol>
      <div class="gd-acts"><button class="pri" data-gd="close">Ana is on her way</button></div>`;
  else body = `<h5>${esc(PSY.name)} has been alerted</h5><p>As agreed before the flight, a level-3 flag (“${esc(CAT_LABEL[cat])}”) went to your psychologist. <b>Your words did not.</b> She will call you; you can also talk now.</p>
      <div class="gd-acts"><button class="pri" data-gd="talk">Talk to her now</button><button data-gd="crew">Tell a crewmate I'm not OK</button><button data-gd="close">Close</button></div>`;
  const el = document.createElement("div"); el.className = "gd-slip l" + level;
  el.innerHTML = `<div class="gd-who">${avatar(cat === "medical" ? 1 : PSY.avatar)}<span><b>Guardian</b><small>${cat === "medical" ? "medical red flag" : "private · on this device"}</small></span></div>${body}`;
  book.append(el);
  el.addEventListener("click", (e) => {
    const k = e.target.closest("[data-gd]")?.dataset.gd; if (!k) return;
    if (k === "share") { r.packet = sendFlag(cat, level, "personal journal", r, false);
      const st = $("#pgL .gd-strip span, #pgR .gd-strip span"); if (st) st.innerHTML = `<b>Guardian</b> · ${r.segments.length} segments checked on this device · flag sent to ${esc(PSY.name)} · no text`; el.querySelector("p").innerHTML = `Flag sent to ${esc(PSY.name)}. Your words stayed here.`; el.querySelector(".gd-acts").innerHTML = `<button data-gd="close">Close</button>`; return; }
    if (k === "talk") toast(`Call requested. ${PSY.name} answers within the light delay (about ${8 + Math.floor(Math.random() * 10)} min).`);
    if (k === "crew") toast("Alexander and Ana got a message: “check on me”. Nothing else.");
    if (k === "ppc") toast(`Noted for your private talk in ${nextPPC()} days. Only you see the note.`);
    if (k === "breath") { el.remove(); return openBreath(); }
    if (k === "sleep") toast("Sleep quest: lights down 30 minutes before bed tonight.");
    el.classList.add("out"); setTimeout(() => el.remove(), 400);
  });
}
function guardianSpread() {
  const g = G(), week = g.signals.filter((x) => x.day > S.day - 7);
  const L = pgHead("Guardian") + `<p class="pg-note">A safety screen that runs on this tablet. It looks for a few kinds of danger, never reads for meaning, and never keeps your words.</p>
    <ol class="gd-steps">
      <li><b>You write.</b> The page is saved here, on the base. Nothing is uploaded.</li>
      <li><b>Cut into segments.</b> Sentences, and long sentences into clauses, so one line can't hide another.</li>
      <li><b>Each segment is checked</b> against families of risk phrases: harm to yourself, to a crewmate, to the habitat, medical red flags, low mood. “Never”, drills, quotes and the past are read as such.</li>
      <li><b>Only numbers come out:</b> a category and a level. The text is dropped right away.</li>
      <li><b>0</b> nothing kept · <b>1</b> a private card · <b>2</b> you choose to send a flag · <b>3</b> automatic alert to your psychologist, or to Ana for a medical red flag.</li>
    </ol>
    <p class="pg-src">Built on: NASA's private psychological conferences (every two weeks, private medical record) · the levels of the Columbia Suicide Severity Rating Scale · journaling tools that process and delete text · and one rule: a flag always comes with a response. <i>Prototype, not a clinical tool.</i></p>`;
  const R = `<div class="gd-psy">${avatar(PSY.avatar)}<span><b>${esc(PSY.name)}</b><small>${esc(PSY.role)}</small><small>Next private talk in ${nextPPC()} days</small></span></div>
    <div class="pg-sep">What has left this tablet</div>
    ${g.sent.length ? g.sent.slice().reverse().map((x) => `<pre class="gd-packet">${esc(JSON.stringify(x, null, 1))}</pre>`).join("") : `<p class="pg-empty">Nothing. Not one flag has ever left this tablet.</p>`}
    <div class="pg-sep">Kept only here</div>
    <p class="pg-note">${week.length ? `${new Set(week.map((x) => x.day)).size} day(s) with signals this week (a number per day, no words).` : "No signals this week."}</p>
    <div class="pg-sep">Level 2 flags</div>
    <div class="gd-opt"><button data-act="share2:ask" class="${g.share2 === "ask" ? "on" : ""}">Always ask me</button><button data-act="share2:auto" class="${g.share2 === "auto" ? "on" : ""}">Send them for me</button></div>
    <p class="pg-note small">Level 3 alerts are always sent: that was agreed with ${esc(PSY.name)} before the flight.</p>
    <a class="gd-seal" href="doctor.html" target="_blank" rel="noopener"><i></i>See exactly what ${esc(PSY.name)} sees ↗</a>`;
  return { L, R, pl: "i", pr: "ii", back: { view: "journal" } };
}
function saveJournalPage() {
  const ta = $("#pj-text"); const text = ta.value.trim(); if (!text) return;
  S.journal.push({ day: S.day, text });
  const gr = guardianCheck(text, "personal journal"); BK.lastScan = { k: S.journal.length - 1, r: gr };
  if (words(text) >= 40 && !S.daily.got.journal) {
    S.daily.got.journal = true;
    S.streak.journal = S.streak.journalLast === S.day - 1 ? S.streak.journal + 1 : 1; S.streak.journalLast = S.day;
    addCoins(REWARD.journal + (S.streak.journal >= 3 ? REWARD.journalStreak : 0), S.streak.journal >= 3 ? `Journal · ${S.streak.journal}-day streak` : "Journal entry");
  } else toast(words(text) < 40 ? "Saved. Write at least 40 words to earn coins." : "Saved. You've already earned today's journal coins.");
  save();
  const k = S.journal.length - 1; BK.inkEntry = k;
  const pages = S.journal.length + 1, target = Math.floor(k / 2), last = Math.floor((pages - 1) / 2);
  if (last > BK.spread) turnTo({ spread: target === BK.spread ? last : target }, 1); else turnTo({ spread: last }, 0);
  setTimeout(() => guardianSlip(gr), reducedMotion() ? 0 : 1600);
}
function publishChapter() {
  const bk = S.book; const t = $("#pb-ch").value.trim() || `Chapter ${bk.chapters.length + 1}`, x = $("#pb-text").value.trim();
  if (words(x) < 60) { toast("A chapter needs at least 60 words."); return; }
  const gr = guardianCheck(x, "community chapter"); setTimeout(() => guardianSlip(gr), 1600);
  const delayMin = 4 + Math.floor(Math.random() * 18);
  bk.chapters.push({ t, x, day: S.day, delayMin, deliverAt: Date.now() + 20000, reactions: 1 + Math.floor(Math.random() * 5), paid: false });
  if (!S.daily.got.chapter) { S.daily.got.chapter = true; addCoins(REWARD.chapter, "Chapter published"); } else toast("Chapter published. You've already earned today's chapter coins.");
  save();
  BK.inkMine = bk.chapters.length - 1; turnTo({ view: "mine", ch: bk.chapters.length - 1 }, 1);
  setTimeout(() => { const c = bk.chapters[bk.chapters.length - 1]; if (c && !c.paid) { c.paid = true; S.coins += c.reactions * 2; save(); renderHUD(); toast(`“${c.t}” arrived. ${c.reactions} astronauts reacted.`, c.reactions * 2); } }, 20000);
}
const POS = ["good", "happy", "grateful", "energ", "rested", "beautiful", "calm", "peace", "glad", "laugh", "motivat", "proud", "hope", "love", "great", "wonderful", "relax"];
const NEG = ["tired", "exhaust", "lonely", "alone", "sad", "stress", "anxious", "hard", "miss", "bored", "angry", "upset", "afraid", "fear", "insomnia", "irritat", "empty", "overwhelm", "worr"];
function toneScore(text) {
  const w = String(text).toLowerCase().match(/[a-z]+/g) || [];
  const p = w.filter((x) => POS.some((k) => x.startsWith(k))).length, n = w.filter((x) => NEG.some((k) => x.startsWith(k))).length;
  return clamp((p - n) / Math.max(3, Math.sqrt(w.length)), -1, 1);
}

/* ── the animated notebook ── */
const PEN_SVG = `<svg viewBox="0 0 60 60"><g transform="rotate(-40 30 30)"><rect x="25" y="-6" width="10" height="44" rx="4" fill="#3b2a6a"/><rect x="25" y="4" width="10" height="5" fill="#d9b45a"/><path d="M25 38h10l-5 16z" fill="#c9a24a"/><path d="M30 42v10" stroke="#233a86" stroke-width="1.5"/></g></svg>`;
// Writes the text letter by letter, with a pen following the line.
function inkWrite(el, text, { maxMs = 5500 } = {}) {
  el.textContent = "";
  if (reducedMotion()) { el.textContent = text; return; }
  const chars = []; const frag = document.createDocumentFragment();
  String(text).split(/(\s+)/).forEach((tok) => {
    if (!tok) return;
    if (/^\s+$/.test(tok)) { frag.append(document.createTextNode(tok)); return; }
    const w = document.createElement("span"); w.className = "w";
    for (const ch of tok) { const c = document.createElement("span"); c.className = "c"; c.textContent = ch; w.append(c); chars.push(c); }
    frag.append(w);
  });
  el.append(frag);
  if (!chars.length) return;
  const per = Math.max(8, Math.min(42, maxMs / chars.length));
  chars.forEach((c, i) => (c.style.animationDelay = `${Math.round(i * per)}ms`));
  const host = el.closest(".notebook") || el.parentElement;
  const pen = document.createElement("div"); pen.className = "nb-pen"; pen.innerHTML = PEN_SVG; host.append(pen);
  const t0 = performance.now();
  const step = () => {
    if (!pen.isConnected) return;
    const i = Math.min(chars.length - 1, Math.floor((performance.now() - t0) / per));
    const r = chars[i].getBoundingClientRect(), hr = host.getBoundingClientRect();
    pen.style.transform = `translate(${r.right - hr.left - 6}px, ${r.bottom - hr.top - 46}px)`;
    if (i < chars.length - 1) requestAnimationFrame(step); else setTimeout(() => { pen.classList.add("gone"); setTimeout(() => pen.remove(), 450); }, 250);
  };
  requestAnimationFrame(step);
}
let coverAt = 0;
const coverHTML = (title, subt, cls = "") => { const show = Date.now() - coverAt > 60000; if (show) coverAt = Date.now(); return show ? `<div class="nb-cover ${cls}"><span>${esc(title)}</span><small>${esc(subt)}</small></div>` : ""; };
const dateLabel = (day) => new Date(2026, 10, 13 + day - 1).toLocaleDateString("en-GB", { day: "numeric", month: "long" });
function entryNode(e) {
  const el = document.createElement("div"); el.className = "notebook nb-entry";
  el.innerHTML = `<div class="nb-head"><span>Day ${e.day} · ${esc(dateLabel(e.day))}</span></div><div class="nb-text"></div>`;
  return el;
}
function renderJournal(b) {
  const entries = [...S.journal].reverse();
  const tones = S.journal.slice(-5).map((e) => toneScore(e.text)); const t = avg(tones);
  b.innerHTML = `
    <div class="notebook" id="nb">
      ${coverHTML("Journal", "private · " + ME.ship)}
      <div class="nb-page" id="nb-page">
        <div class="nb-head"><span>Day ${S.day} · ${esc(dateLabel(S.day))}</span><span class="lock">Only you see this</span></div>
        <textarea id="j-text" class="nb-input" rows="7" placeholder="Dear journal, today…" aria-label="Today's journal entry"></textarea>
      </div>
    </div>
    <div class="nb-actions"><span class="muted small" id="j-count">0 words · 40 for coins</span><button class="primary" id="j-save">Save to journal</button></div>
    <p class="muted small">The journal stays on this device. Your streak: ${S.streak.journal} ${S.streak.journal === 1 ? "day" : "days"} in a row. From 3 days you get +${REWARD.journalStreak} extra.</p>
    <div class="card">
      <label class="check" style="background:none;border:0;padding:0"><input type="checkbox" id="j-consent" ${S.consent ? "checked" : ""}>
      <span><b>Analyse the tone of my writing on this device</b><br><span class="muted small">The analysis runs locally. Only a trend score would ever leave, never the text.</span></span></label>
      ${S.consent && tones.length ? `<p>Tone of your last ${tones.length} entries: <b>${t > 0.15 ? "mostly bright" : t < -0.15 ? "heavier than usual" : "balanced"}</b> <span class="mono muted small">(${t.toFixed(2)})</span></p>` : ""}
    </div>
    <div class="section-label">Your pages</div>
    <div class="nb-entries" id="nb-entries"></div>
    ${entries.length ? "" : `<p class="muted" id="nb-empty">Nothing written yet. Your first page earns coins.</p>`}`;
  const list = $("#nb-entries", b);
  entries.forEach((e) => { const n = entryNode(e); $(".nb-text", n).textContent = e.text; list.append(n); });
  const ta = $("#j-text", b);
  ta.oninput = () => { $("#j-count", b).textContent = `${words(ta.value)} words · 40 for coins`; };
  $("#j-consent", b).onchange = (e) => { S.consent = e.target.checked; save(); rerender(); };
  $("#j-save", b).onclick = () => {
    const text = ta.value.trim(); if (!text) return;
    const entry = { day: S.day, text }; S.journal.push(entry);
    if (words(text) >= 40 && !S.daily.got.journal) {
      S.daily.got.journal = true;
      S.streak.journal = S.streak.journalLast === S.day - 1 ? S.streak.journal + 1 : 1; S.streak.journalLast = S.day;
      addCoins(REWARD.journal + (S.streak.journal >= 3 ? REWARD.journalStreak : 0), S.streak.journal >= 3 ? `Journal · ${S.streak.journal}-day streak` : "Journal entry");
    } else toast(words(text) < 40 ? "Saved. Write at least 40 words to earn coins." : "Saved. You've already earned today's journal coins.");
    save();
    const page = $("#nb-page", b); page.classList.remove("fresh"); page.classList.add("turn");
    setTimeout(() => {
      if (!page.isConnected) return; // the panel was closed meanwhile; the entry is already saved
      ta.value = ""; ta.oninput(); page.classList.remove("turn"); page.classList.add("fresh");
      $("#nb-empty", b)?.remove();
      const n = entryNode(entry); list.prepend(n); n.scrollIntoView({ behavior: "smooth", block: "nearest" });
      inkWrite($(".nb-text", n), entry.text);
    }, 760);
  };
}
let inkNextChapter = false;
function renderBook(b) {
  const bk = S.book; const now = Date.now();
  b.innerHTML = `
    <div class="notebook tome-page">
      ${coverHTML(bk.title.length > 24 ? "Your book" : bk.title, "public · reaches " + STATIONS.length + " ships", "tome")}
      <div class="nb-page" id="nb-page">
        <div class="nb-head"><span>Chapter ${bk.chapters.length + 1}</span><span class="lock" style="color:#b0623c">Public</span></div>
        <input type="text" id="bk-title" class="nb-line" value="${esc(bk.title)}" aria-label="Book title" style="font-size:22px;color:#6a5a8c">
        <input type="text" id="ch-title" class="nb-line" placeholder="Chapter title…" aria-label="Chapter title">
        <textarea id="ch-text" class="nb-input" rows="8" placeholder="Write for someone going through the same thing, on another ship." aria-label="Chapter text"></textarea>
      </div>
    </div>
    <div class="nb-actions"><span class="muted small" id="ch-count">0 words · 60 minimum</span><button class="primary" id="ch-pub">Publish chapter</button></div>
    <p class="muted small">Chapters travel with the real delay between ships. You decide what gets published. Nothing from your private journal reaches this book unless you write it here.</p>
    <div class="section-label">Published chapters</div>
    <div class="nb-entries">
    ${bk.chapters.length ? [...bk.chapters].reverse().map((c, i) => {
      const n = bk.chapters.length - i; const delivered = now >= c.deliverAt;
      return `<div class="notebook nb-entry"><div class="nb-title">${n}. ${esc(c.t)}</div><div class="nb-text" data-ch="${n - 1}">${esc(c.x)}</div>
        <div class="nb-meta"><span class="pill ${delivered ? "good" : "warn"}">${delivered ? `Delivered · ${c.reactions} reader reactions` : `In transit · ${c.delayMin} min delay`}</span><span>day ${c.day}</span></div></div>`;
    }).join("") : `<p class="muted">Your book has no chapters yet.</p>`}</div>`;
  if (inkNextChapter) { inkNextChapter = false; const el = $(`[data-ch="${bk.chapters.length - 1}"]`, b); if (el) inkWrite(el, bk.chapters[bk.chapters.length - 1].x); }
  $("#bk-title", b).onchange = (e) => { bk.title = e.target.value.trim() || bk.title; save(); };
  const ta = $("#ch-text", b); ta.oninput = () => ($("#ch-count", b).textContent = `${words(ta.value)} words · 60 minimum`);
  $("#ch-pub", b).onclick = () => {
    const t = $("#ch-title", b).value.trim() || `Chapter ${bk.chapters.length + 1}`, x = ta.value.trim();
    if (words(x) < 60) { toast("A chapter needs at least 60 words."); return; }
    const delayMin = 4 + Math.floor(Math.random() * 18);
    bk.chapters.push({ t, x, day: S.day, delayMin, deliverAt: Date.now() + 20000, reactions: 1 + Math.floor(Math.random() * 5), paid: false });
    if (!S.daily.got.chapter) { S.daily.got.chapter = true; addCoins(REWARD.chapter, "Chapter published"); } else toast("Chapter published. You've already earned today's chapter coins.");
    save();
    const page = $("#nb-page", b); page.classList.add("turn");
    setTimeout(() => { if (!page.isConnected || current?.render !== renderBook) return; inkNextChapter = true; rerender(); }, 760);
    setTimeout(() => { const c = bk.chapters[bk.chapters.length - 1]; if (c && !c.paid) { c.paid = true; S.coins += c.reactions * 2; save(); renderHUD(); toast(`“${c.t}” arrived. ${c.reactions} astronauts reacted.`, c.reactions * 2); if (current?.render === renderBook) rerender(); } }, 20500);
  };
}
function releasedChapters(book) { return book.chapters.filter((c) => c.day <= S.day); }
function renderLibrary(b) {
  b.innerHTML = `<p class="muted">Books written chapter by chapter by astronauts on the other ships, while they fly. <span class="pill">demo content</span></p>` +
    COMMUNITY_BOOKS.map((bk, i) => {
      const st = STATIONS.find((s) => s.sym === bk.sym); const rel = releasedChapters(bk);
      const unread = rel.filter((c, j) => !S.read[bk.sym + j]).length;
      return `<button class="tile book" data-book="${i}"><span class="book-cover" style="background:${bk.cover}">${esc(st.ship)}</span>
        <span style="display:flex;flex-direction:column;gap:4px;min-width:0"><span class="t">${esc(bk.title)}</span><span class="d">${esc(bk.author)} · ${esc(st.ship)} · ${rel.length} ${rel.length === 1 ? "chapter" : "chapters"}</span>
        ${unread ? `<span class="r">${unread} new ${unread === 1 ? "chapter" : "chapters"}</span>` : `<span class="d">up to date</span>`}</span></button>`;
    }).join("") + `<div class="card"><h3>Your book</h3><p class="muted">“${esc(S.book.title)}” · ${S.book.chapters.length} chapters published.</p><div><button class="secondary" id="lib-mine">Write a chapter</button></div></div>`;
  $$("[data-book]", b).forEach((t) => (t.onclick = () => sub(COMMUNITY_BOOKS[+t.dataset.book].title, (bb) => renderReader(bb, +t.dataset.book))));
  $("#lib-mine", b).onclick = () => sub("Your book", renderBook);
}
function renderReader(b, i) {
  const bk = COMMUNITY_BOOKS[i]; const st = STATIONS.find((s) => s.sym === bk.sym); const rel = releasedChapters(bk);
  const upcoming = bk.chapters.find((c) => c.day > S.day);
  b.innerHTML = `<div class="book"><span class="book-cover" style="background:${bk.cover}">${esc(st.ship)}</span><div><h3>${esc(bk.title)}</h3><p class="muted">${esc(bk.author)} · ${esc(st.ship)}</p></div></div>` +
    `<div class="nb-entries">` + rel.map((c, j) => {
      const key = bk.sym + j; const isNew = !S.read[key];
      return `<div class="notebook nb-entry"><div class="nb-title">${j + 1}. ${esc(c.t)}</div>
        <div class="nb-text" ${isNew ? `data-ink="${j}"` : ""}>${isNew ? "" : esc(c.x)}</div>
        <div class="nb-meta">${isNew ? `<span class="pill warn">new chapter</span>` : ""}<span>written by ${esc(bk.author)} on ${esc(st.ship)}</span></div>
        <div class="nb-react">${["Inspired me", "I get it", "Keep going"].map((r) => `<button data-react="${key}|${r}" class="${S.reacted[key + "|" + r] ? "on" : ""}">${r}</button>`).join("")}</div></div>`;
    }).join("") + `</div>` + (upcoming ? `<p class="muted small">The next chapter is being written on ${esc(st.ship)}.</p>` : "");
  $$("[data-ink]", b).forEach((el, k) => setTimeout(() => inkWrite(el, rel[+el.dataset.ink].x, { maxMs: 4500 }), k * 400));
  let earned = 0;
  rel.forEach((c, j) => { const key = bk.sym + j; if (!S.read[key]) { S.read[key] = true; if (S.daily.readCoins < REWARD.readCap) { S.daily.readCoins++; earned += REWARD.read; } } });
  save(); if (earned) addCoins(earned, "New chapters read");
  $$("[data-react]", b).forEach((x) => (x.onclick = () => { const k = x.dataset.react; S.reacted[k] = !S.reacted[k]; x.classList.toggle("on"); save(); if (S.reacted[k]) toast(`Your reaction is on its way to ${st.ship}.`); }));
}
function openBook() { openJournalBook({ book: "community", view: "mine", ch: null }); }
function openLibrary() { openJournalBook({ book: "community", view: "toc" }); }

function openStation(sym) {
  const st = STATIONS.find((s) => s.sym === sym);
  const lead = PEOPLE.find((x) => x.sym === sym && x.lead), crew = PEOPLE.filter((x) => x.sym === sym);
  const book = lead ? { cover: st.color, title: `${st.ship} journal`, author: crew.map((x) => x.name).join(", "), chapters: crew.flatMap((x) => x.chapters) } : null;
  openPanel(`${st.ship}`, (b) => {
    b.innerHTML = `<div class="card"><div class="row between"><div><div class="hud-label">Crew</div><h3>${crew.map((x) => esc(x.name)).join(" & ")}</h3></div>
      <div class="row">${crew.map((x) => avatar(x.avatar)).join("")}</div></div>
      <p class="muted small">You only see what the crew publishes in the community journal. Everyone's health data stays private.</p></div>
      ${book ? `<button class="tile book" id="st-book"><span class="book-cover" style="background:${book.cover}">${esc(st.ship)}</span><span><span class="t">${esc(book.title)}</span><br><span class="d">${esc(book.author)} · ${crew.reduce((n, x) => n + relCh(x).length, 0)} chapters · open their journal</span></span></button>` : `<div class="card"><p class="muted">The crew of ${esc(st.ship)} hasn't published a book yet.</p></div>`}
      <div class="card"><h3>Send encouragement</h3><div class="row">${["Good luck out there!", "Thinking of you.", "Keep it up!"].map((m) => `<button class="secondary" data-cheer="${esc(m)}">${esc(m)}</button>`).join("")}</div></div>`;
    $("#st-book", b)?.addEventListener("click", () => openJournalBook({ book: "community", view: "base:" + sym }));
    $$("[data-cheer]", b).forEach((x) => (x.onclick = () => toast(`Message on its way to ${st.ship}. It arrives in ~${5 + Math.floor(Math.random() * 15)} minutes.`)));
  });
}

/* ───────────────────────── cognitive tests ───────────────────────── */
function openTests(push) {
  opener(push)("Cognitive tests", (b) => {
    const g = S.daily.got;
    const pre = avg(S.pvt.filter((p) => p.pre).map((p) => p.ms));
    const lastP = S.pvt.filter((p) => !p.pre).slice(-1)[0]; const lastM = S.memory.filter((m) => !m.pre).slice(-1)[0];
    const lastPsy = (S.psy || []).slice(-1)[0];
    b.innerHTML = `<button class="psy-hero" id="t-astro"><span class="psy-ic">${ICON.brain}</span><span><b>ASTRO-PSY · full assessment</b><small>Questionnaires, vigilance (PVT) and 8 cognitive tasks · 15–25 min · fatigue measured in the background</small></span>
        <em>${S.daily.got.astro ? "done today" : `+${REWARD.astro}`}</em></button>
      ${lastPsy ? `<button class="psy-last" id="t-astro-last">Your last assessment · day ${lastPsy.day} · <b>${esc(psyStatus(lastPsy).label)}</b> ›</button>` : ""}
      <p class="muted">Or a quick one. They look like mini-games. Underneath they're reaction, memory and mood tests, compared only with you. The reaction test is modelled on NASA's Reaction Self Test used on the ISS.</p>
      <div class="earn-grid">
        <button class="earn-card ${g.pvt ? "done" : ""}" id="t-pvt"><span class="ic">${ICON.brain}</span><span class="t">Catch the meteor</span><span class="d">Reaction & attention · 1 minute</span><span class="r">${g.pvt ? "done today" : "+" + REWARD.pvt}</span></button>
        <button class="earn-card ${g.memory ? "done" : ""}" id="t-mem"><span class="ic">${ICON.check}</span><span class="t">Fix the panel</span><span class="d">Working memory · 1–2 minutes</span><span class="r">${g.memory ? "done today" : "+" + REWARD.memory}</span></button>
        <button class="earn-card ${g.mood ? "done" : ""}" id="t-mood"><span class="ic">${ICON.moon}</span><span class="t">Mood check-in</span><span class="d">Sleep, energy, stress · 30 seconds</span><span class="r">${g.mood ? "done today" : "+" + REWARD.mood}</span></button>
      </div>
      <div class="card"><h3>Your baseline</h3>
        <p>Pre-flight reaction: <b class="mono">${Math.round(pre)} ms</b>${lastP ? ` · last test (day ${lastP.day}): <b class="mono">${lastP.ms} ms</b>` : ""}</p>
        <p>Pre-flight memory: <b class="mono">${S.memory.find((m) => m.pre)?.span ?? "-"} steps</b>${lastM ? ` · last test: <b class="mono">${lastM.span} steps</b>` : ""}</p></div>
      <div class="card">${wellnessHTML(false)}</div>`;
    $("#t-astro", b).onclick = () => openPsy(true);
    $("#t-astro-last", b)?.addEventListener("click", () => sub("Your assessment", (bb) => renderPsyResult(bb, (S.psy || []).slice(-1)[0]), { wide: true }));
    $("#t-pvt", b).onclick = () => sub("Catch the meteor", renderPVT);
    $("#t-mem", b).onclick = () => sub("Fix the panel", renderMemory);
    $("#t-mood", b).onclick = () => sub("Mood check-in", renderMood);
    bindWellnessActions(b);
  });
}
function openMood() { openPanel("Mood check-in", renderMood); }
function renderPVT(b) {
  const TRIALS = 8; let trial = 0, rts = [], falses = 0, shownAt = 0, timer = null, state = "idle";
  b.innerHTML = `<p class="muted">When the meteor appears, tap it or press Space as fast as you can. ${TRIALS} rounds.</p>
    <div class="arena" id="arena" tabindex="0"><div class="msg" id="pvt-msg">Tap here to start</div></div>
    <div class="row between"><span class="mono" id="pvt-stat">0 / ${TRIALS}</span><span class="muted small">Too early: <span id="pvt-false">0</span></span></div>
    <div id="pvt-result"></div>`;
  const arena = $("#arena", b), msg = $("#pvt-msg", b);
  const wait = () => {
    state = "wait"; msg.textContent = "Wait…"; arena.querySelector(".meteor")?.remove();
    timer = setTimeout(() => {
      state = "show"; msg.textContent = "";
      const m = document.createElement("div"); m.className = "meteor"; m.style.left = 15 + Math.random() * 70 + "%"; m.style.top = 20 + Math.random() * 60 + "%"; arena.append(m);
      shownAt = performance.now();
    }, 1400 + Math.random() * 2400);
  };
  const hit = () => {
    if (state === "idle") { wait(); return; }
    if (state === "wait") { clearTimeout(timer); falses++; $("#pvt-false", b).textContent = falses; msg.textContent = "Too early!"; setTimeout(wait, 700); state = "pause"; return; }
    if (state === "show") {
      const rt = Math.round(performance.now() - shownAt); rts.push(rt); trial++;
      $("#pvt-stat", b).textContent = `${trial} / ${TRIALS} · ${rt} ms`;
      arena.querySelector(".meteor")?.remove();
      if (trial >= TRIALS) return finish();
      state = "pause"; msg.textContent = `${rt} ms`; setTimeout(wait, 600);
    }
  };
  const finish = () => {
    state = "done"; const sorted = [...rts].sort((a, c) => a - c); const med = sorted[Math.floor(sorted.length / 2)];
    const lapses = rts.filter((r) => r > 500).length; const base = avg(S.pvt.filter((p) => p.pre).map((p) => p.ms)); const delta = (med - base) / base;
    S.pvt.push({ day: S.day, ms: med, lapses }); logAct("test", `Reaction test · ${med} ms, ${lapses} lapses`, med > 360 || lapses > 3 ? "warn" : "ok");
    msg.textContent = `Done! ${med} ms`;
    $("#pvt-result", b).innerHTML = `<div class="card"><h3>Your result: ${med} ms</h3>
      <p>${Math.abs(delta) < 0.06 ? "You're right on your pre-flight average." : delta > 0 ? `${Math.round(delta * 100)}% slower than your pre-flight average (${Math.round(base)} ms).` : `${Math.round(-delta * 100)}% faster than your pre-flight average.`}
      ${lapses ? ` ${lapses} ${lapses === 1 ? "reaction was" : "reactions were"} over 500 ms.` : ""}</p>
      <p class="muted small">One test doesn't say much. What matters is the trend over several days.</p></div>`;
    if (!S.daily.got.pvt) { S.daily.got.pvt = true; addCoins(REWARD.pvt, "Reaction test"); }
    save();
  };
  arena.addEventListener("pointerdown", hit);
  const key = (e) => { if (e.code === "Space") { e.preventDefault(); hit(); } };
  window.addEventListener("keydown", key);
  cleanup = () => { clearTimeout(timer); window.removeEventListener("keydown", key); };
}
function renderMemory(b) {
  let len = 3, seq = [], pos = 0, best = 0, busy = true;
  b.innerHTML = `<p class="muted">The panels light up in order. Repeat the order. Each success adds one step.</p>
    <div class="card" style="align-items:center"><div class="panelgrid" id="pg">${Array.from({ length: 9 }, (_, i) => `<button data-p="${i}" aria-label="Panel ${i + 1}"></button>`).join("")}</div>
    <div class="row"><span class="mono" id="mem-stat">Sequence: 3</span></div><button class="primary" id="mem-start">Start</button></div><div id="mem-result"></div>`;
  const cells = $$("[data-p]", b); const timers = [];
  const flash = (i, cls = "lit", ms = 420) => { cells[i].classList.add(cls); timers.push(setTimeout(() => cells[i].classList.remove(cls), ms)); };
  const play = () => {
    busy = true; pos = 0; seq = Array.from({ length: len }, () => Math.floor(Math.random() * 9));
    $("#mem-stat", b).textContent = `Sequence: ${len}`;
    seq.forEach((c, k) => timers.push(setTimeout(() => flash(c), 700 + k * 650)));
    timers.push(setTimeout(() => (busy = false), 700 + len * 650));
  };
  $("#mem-start", b).onclick = (e) => { e.target.hidden = true; play(); };
  cells.forEach((c) => (c.onclick = () => {
    if (busy) return; const i = +c.dataset.p;
    if (i === seq[pos]) { flash(i, "lit", 200); pos++; if (pos === seq.length) { best = len; len++; busy = true; timers.push(setTimeout(play, 700)); } }
    else { flash(i, "bad", 600); busy = true; end(); }
  }));
  const end = () => {
    const pre = S.memory.find((m) => m.pre)?.span ?? 6;
    S.memory.push({ day: S.day, span: best }); logAct("test", `Memory test · span ${best}`, "ok");
    $("#mem-result", b).innerHTML = `<div class="card"><h3>You remembered ${best} steps</h3><p>Your pre-flight average: ${pre} steps. ${best >= pre ? "Right on your baseline." : best >= pre - 1 ? "Close to your baseline." : "Below your baseline today. The trend over several days is what counts."}</p></div>`;
    if (!S.daily.got.memory) { S.daily.got.memory = true; addCoins(REWARD.memory, "Memory test"); }
    save();
  };
  cleanup = () => timers.forEach(clearTimeout);
}
function renderMood(b) {
  const Q = [["sleep", "Sleep last night (hours)", 3, 10, 7, 0.5], ["energy", "Energy", 1, 10, 6, 1], ["stress", "Stress", 1, 10, 4, 1], ["mood", "Mood", 1, 10, 6, 1], ["connect", "Connected to others", 1, 10, 6, 1]];
  b.innerHTML = `<p class="muted">Five quick questions. Your answers stay with you; only the trend leaves.</p>
    <div class="card">${Q.map(([k, l, lo, hi, v, st]) => `<div class="slider-row"><label for="q-${k}">${l}</label><input type="range" id="q-${k}" min="${lo}" max="${hi}" step="${st}" value="${v}"><span class="mono" id="v-${k}">${v}</span></div>`).join("")}
    <div><button class="primary" id="mood-save">Submit</button></div></div><div id="mood-res"></div>`;
  Q.forEach(([k]) => { const i = $("#q-" + k, b); i.oninput = () => ($("#v-" + k, b).textContent = i.value); });
  $("#mood-save", b).onclick = () => {
    const e = { day: S.day }; Q.forEach(([k]) => (e[k] = +$("#q-" + k, b).value));
    S.mood = S.mood.filter((m) => m.day !== S.day); S.mood.push(e); logAct("mood", `Mood check-in · sleep ${e.sleep} h, stress ${e.stress}/10, energy ${e.energy}/10`, e.stress >= 7 || e.sleep < 6 ? "warn" : "ok");
    if (!S.daily.got.mood) { S.daily.got.mood = true; addCoins(REWARD.mood, "Mood check-in"); }
    if (S.quests.sleep && S.quests.sleep < S.day && e.sleep >= 7 && !S.daily.got.sleepQuest) { S.daily.got.sleepQuest = true; delete S.quests.sleep; addCoins(REWARD.sleepQuest, "Sleep quest complete"); }
    save();
    $("#mood-res", b).innerHTML = `<div class="card">${wellnessHTML(false)}</div>`; bindWellnessActions($("#mood-res", b));
  };
}
function openBreath(push) {
  opener(push)("Breathing", (b) => {
    b.innerHTML = `<p class="muted">Breathe in while the circle grows, out while it shrinks. Four rounds of 4 seconds.</p>
      <div class="arena"><div id="breath" style="width:80px;height:80px;border-radius:50%;background:radial-gradient(circle,#7de6d6,#1f6f66);transition:transform 4s ease-in-out"></div><div class="msg" id="br-msg" style="position:absolute;bottom:18px">Press Start</div></div>
      <div class="row"><button class="primary" id="br-go">Start</button><button class="secondary" data-act="sleepquest">Take the sleep quest (+${REWARD.sleepQuest})</button></div>`;
    const timers = [];
    $("#br-go", b).onclick = (e) => {
      e.target.disabled = true; const c = $("#breath", b), m = $("#br-msg", b);
      for (let i = 0; i < 8; i++) timers.push(setTimeout(() => { const inh = i % 2 === 0; c.style.transform = inh ? "scale(2.4)" : "scale(1)"; m.textContent = inh ? "Breathe in…" : "Breathe out…"; }, i * 4000));
      timers.push(setTimeout(() => { m.textContent = "Done. Well done."; if (!S.daily.got.breath) { S.daily.got.breath = true; addCoins(REWARD.breath, "Breathing exercise"); save(); } }, 32000));
    };
    bindWellnessActions(b);
    cleanup = () => timers.forEach(clearTimeout);
  });
}

/* ───────────────────────── medical results ───────────────────────── */
function openAnalyses(push) {
  opener(push)("Medical results", (b) => {
    const list = [...S.analyses].sort((a, x) => x.day - a.day);
    b.innerHTML = `<p class="muted">Results upload automatically from the ship's medical system after you take them. Each new set earns ${REWARD.analysis} coins. <span class="pill">demo values</span></p>` +
      list.map((a) => {
        const out = a.rows.filter((r) => r.v < r.lo || r.v > r.hi).length;
        return `<div class="card"><div class="row between"><div><h3>${esc(ANALYSIS_TYPES[a.type].name)}</h3><span class="muted small">${a.pre ? "Pre-flight" : "Day " + a.day} · uploaded automatically</span></div>
          <div class="row">${out ? `<span class="pill warn">${out} out of range</span>` : `<span class="pill good">in range</span>`}${!a.claimed ? `<button class="primary" data-claim="${a.id}">Collect +${REWARD.analysis}</button>` : ""}</div></div>
          <div class="scroll-x"><table class="data"><thead><tr><th>Parameter</th><th>Value</th><th>Range</th></tr></thead><tbody>
          ${a.rows.map((r) => `<tr><td>${esc(r.n)}</td><td class="n ${r.v < r.lo || r.v > r.hi ? "down" : ""}">${r.v} ${esc(r.u)}</td><td class="n muted">${r.hi === 100 && r.u === "%" ? `≥ ${r.lo}` : `${r.lo}–${r.hi}`}</td></tr>`).join("")}
          </tbody></table></div></div>`;
      }).join("") + `<p class="muted small">The mission doctor interprets the results. Here you only see the values and whether they're in range.</p>`;
    $$("[data-claim]", b).forEach((x) => (x.onclick = () => { const a = S.analyses.find((y) => y.id === x.dataset.claim); a.claimed = true; addCoins(REWARD.analysis, "New medical results"); save(); rerender(); }));
  });
}

/* ───────────────────────── camera workout: the ARED coach ─────────────────────────
   The ARED coach (ared/index.html) runs inside the tablet. It recognises five exercises of the ISS resistive device
   with MediaPipe, counts reps and checks form. Every saved set is reported back here and turns into Nabu coins. */
function setCoins(set) {
  // 2 coins per rep with good form, +10 for a good set (at least 80% of the reps with good form and the target reached)
  const goodSet = set.reps >= Math.min(set.target, 10) && set.good / set.reps >= 0.8;
  const want = set.good * REWARD.rep + (goodSet ? REWARD.goodSet : 0);
  return { goodSet, coins: Math.max(0, Math.min(want, REWARD.exerciseCap - S.daily.exerciseCoins)), want };
}
window.addEventListener("message", (e) => {
  if (e.origin !== location.origin) return;
  const d = e.data || {}; if (d.src !== "ared") return;
  const frame = $("#ared-frame");
  if (d.type === "size" && frame) frame.style.height = Math.max(640, d.h + 4) + "px";
  if (d.type === "set") {
    const { goodSet, coins, want } = setCoins(d);
    S.daily.exerciseCoins += coins; if (goodSet) S.daily.goodSets++;
    logAct("exercise", `ARED · ${d.name || d.exercise} · ${d.good}/${d.reps} good reps`, "ok");
    S.exerciseLog.push({ day: S.day, ex: d.exercise, name: d.name, ok: d.good, total: d.reps, goodSets: goodSet ? 1 : 0, loadKg: d.loadKg, volumeKg: d.volumeKg });
    if (S.streak.exerciseLast !== S.day) { S.streak.exercise = S.streak.exerciseLast === S.day - 1 ? S.streak.exercise + 1 : 1; S.streak.exerciseLast = S.day; }
    save();
    if (coins) addCoins(coins, `${d.name}: ${d.good}/${d.reps} good reps${goodSet ? " · good set" : ""}`);
    else toast(want ? `Daily workout coins reached (${REWARD.exerciseCap}). Set logged.` : `${d.name}: set logged. Reps with good form earn coins.`);
    const text = coins ? `Set saved: ${d.reps} reps, ${d.volumeKg} kg volume · +${coins} coins in Nabu.` : `Set saved: ${d.reps} reps, ${d.volumeKg} kg volume.`;
    try { frame?.contentWindow.postMessage({ src: "nabu", type: "coins", text }, location.origin); } catch {}
    const t = $("#ex-today"); if (t) t.textContent = S.daily.exerciseCoins;
  }
});
function openExercise(push) {
  bgPause();
  opener(push)("Camera workout · ARED coach", (b) => {
    b.innerHTML = `<div class="ared-bar"><span class="pill private">Video stays on this device</span>
        <span class="mono small" style="color:var(--coin)">+${REWARD.rep} per good rep · +${REWARD.goodSet} per good set · <span id="ex-today">${S.daily.exerciseCoins}</span>/${REWARD.exerciseCap} today</span></div>
      <iframe id="ared-frame" class="ared-frame" src="ared/index.html" title="ARED coach" allow="camera; fullscreen"></iframe>`;
    cleanup = () => { try { $("#ared-frame")?.contentWindow.postMessage({ src: "nabu", type: "stop" }, location.origin); } catch {} const f = $("#ared-frame"); if (f) { f.src = "about:blank"; f.remove(); } bgResume(); };
  }, { wide: true });
}

/* ───────────────────────── ASTRO-PSY: the full psychocognitive assessment ─────────────────────────
   The test (psy/index.html) runs on the tablet. While it is open, the front camera measures fatigue in the background
   (PERCLOS: how long the eyes stay slowly closed). No video is shown, stored or sent; only numbers come back.
   The camera starts when the test opens and stops when the tablet closes. Results: renderPsyResult (you) and
   doctor.html (what your psychologist sees). */
const PSY_STATUS = { "în regulă": ["All good", "ok"], "atenție": ["Worth watching", "warn"], "odihnă recomandată": ["Rest recommended", "bad"], "urgență": ["Urgent", "bad"], "date insuficiente": ["Not enough camera data", "info"] };
const psyStatus = (r) => { const [label, level] = PSY_STATUS[r.status] || ["Assessment saved", "info"]; return { label, level }; };
const PSY_HEAD = {
  ok: "No objective signs of fatigue, and how you feel matches the measurements.",
  warn: "One signal says you are more tired than usual. A break or more sleep would help.",
  bad: "Fatigue shows both in how you feel and in the measurements. Rest comes first today.",
  info: "The camera could not collect enough good frames. Your test results are still saved.",
};
function compactReport(r) {
  const F = r.fatigue || {}, T = r.testResults || {};
  return { day: S.day, at: r.generatedAt, status: r.summary?.status, level: r.summary?.level, simulated: !!r.source?.simulated,
    perclos: F.perclos ?? null, perclosMax: F.perclosMax ?? null, blinks: F.blinksPerMin ?? null, slow: F.slowClosures ?? 0, baseline: F.baseline || null,
    perPhase: (F.perPhase || []).map((x) => ({ phase: x.phase, perclos: x.perclos, valid: x.valid, durS: x.durS })),
    kss: r.selfReport?.kss ?? null, sp: r.selfReport?.samnPerelli ?? null, tlx: r.selfReport?.tlxMean ?? null,
    index: T.index ?? null, verdict: T.verdict || null, incomplete: !!T.incomplete, pvt: T.pvt || null, cog: T.cog || null, rows: T.rows || null,
    selfTired: r.concordance?.selfTired ?? null, objTired: r.concordance?.objectiveTired ?? null,
    validPct: r.dataQuality?.validPct ?? 0, issues: (r.dataQuality?.issues || []).map((i) => i.k),
    framing: { out: r.dataQuality?.framing?.outCount || 0, suspensions: (r.dataQuality?.framing?.suspensions || []).map((x) => ({ atS: x.atS, rtMs: x.rtMs, teamNotified: x.teamNotified })) },
    durationS: r.test?.durationS || 0 };
}
function openPsy(push) {
  bgPause();
  opener(push)("ASTRO-PSY · psychocognitive assessment", (b) => {
    b.innerHTML = `<div class="ared-bar psy-bar"><span class="pill private">Only numbers leave this tablet</span>
        <span class="small muted">Fatigue is measured in the background while the test is open. No video is shown or saved.</span>
        <span class="psy-cam" id="psy-cam" title="Camera measuring fatigue" hidden><i></i>measuring</span></div>
      <div class="psy-ready" id="psy-ready" hidden></div>
      <iframe id="psy-frame" class="ared-frame psy-frame" src="psy/index.html?who=Commander" title="ASTRO-PSY" allow="camera"></iframe>`;
    cleanup = () => { const f = $("#psy-frame"); if (f) { try { f.contentWindow.postMessage({ src: "nabu", type: "stop" }, location.origin); } catch {} f.src = "about:blank"; f.remove(); } bgResume(); };
  }, { wide: true });
}
window.addEventListener("message", (e) => {
  if (e.origin !== location.origin) return;
  const d = e.data || {}; if (d.src !== "psy") return;
  if (d.type === "camera") { const c = $("#psy-cam"); if (c) c.hidden = !d.on; camDot(d.on || !!BG.mon?.running); }
  if (d.type === "camera-error") { const box = $("#psy-ready"); if (box) { box.hidden = false; box.className = "psy-ready l-warn"; box.innerHTML = d.name === "NotAllowedError" ? `<b>Camera blocked</b><span>Click the camera icon in the address bar, choose <b>Allow</b> for localhost, then open the test again.</span>` : d.name === "NotReadableError" ? `<b>Camera busy</b><span>Another app (Teams, Zoom, another tab) is using it. Close it and open the test again.</span>` : `<b>Camera did not start</b><span>The test still works; fatigue just isn't measured this time.</span>`; } }
  if (d.type === "cssrs-flag") sendFlag("self", d.level >= 3 ? 3 : 2, "ASTRO-PSY · C-SSRS screen", { flagged: 1, segments: [1] }, true);
  if (d.type === "report" && d.report) {
    const c = compactReport(d.report); (S.psy ||= []).push(c); S.psy = S.psy.slice(-60);
    logAct("assessment", `ASTRO-PSY finished · ${psyStatus(c).label}${c.index != null ? ` · index ${c.index}` : ""}`, c.level === "bad" ? "bad" : c.level === "warn" ? "warn" : "ok");
    if (!S.daily.got.astro && !c.incomplete) { S.daily.got.astro = true; addCoins(REWARD.astro, "ASTRO-PSY assessment"); }
    save();
    const box = $("#psy-ready"); const st = psyStatus(c);
    if (box) { box.hidden = false; box.className = "psy-ready l-" + st.level;
      box.innerHTML = `<b>Your results are ready</b><span>${esc(st.label)}${c.index != null ? ` · index ${c.index}/100` : ""}</span><button class="primary" id="psy-see">See results</button>`;
      $("#psy-see").onclick = () => sub("Your assessment", (bb) => renderPsyResult(bb, c), { wide: true }); }
  }
});
// what the astronaut sees after the test, in Nabu's own words
function renderPsyResult(b, c) {
  if (!c) { b.innerHTML = `<p class="muted">No assessment yet.</p>`; return; }
  const st = psyStatus(c), prev = (S.psy || []).filter((x) => x !== c && x.index != null).slice(-6);
  const trend = [...prev, c].filter((x) => x.index != null);
  const bars = (c.perPhase || []).filter((x) => x.perclos != null);
  const maxP = Math.max(15, ...bars.map((x) => x.perclos));
  const phaseName = (s) => s.replace("Siguranță și oboseală", "Safety & fatigue").replace("Chestionare", "Questionnaires").replace("Somn", "Sleep").replace("Volum de muncă", "Workload")
    .replace("Vigilență", "Vigilance").replace("Teste cognitive", "Cognitive tasks").replace("Început", "Start").replace("Secțiunea", "Section").replace("Verificarea răspunsurilor", "Checking answers");
  const cogName = { "Viteză motorie": "Motor speed", "Substituție de cod": "Code substitution", "Memorie asociativă": "Associative memory", "Potrivire vizuală": "Visual matching", "Orientare spațială": "Spatial orientation", "Raționament abstract": "Abstract reasoning", "Asumarea riscului": "Risk taking", "Memorie de cod amânată": "Delayed code memory" };
  const VERD = { "Apt": "Fit for duty", "Apt cu recomandări": "Fit, with recommendations", "Neapt": "Not fit today", "Admis cu recomandări": "Admitted, with recommendations" };
  const verdict = c.verdict ? (VERD[c.verdict] || c.verdict) : "";
  const conc = c.selfTired == null || c.objTired == null ? null : c.selfTired === c.objTired ? "match" : "differ";
  b.innerHTML = `<div class="psy-res">
    <div class="pr-head l-${st.level}"><span class="pr-pill">${esc(st.label)}</span><h3>${esc(PSY_HEAD[st.level])}</h3><small>Day ${c.day} · ${Math.round(c.durationS / 60)} min${c.simulated ? " · simulated camera (demo)" : ""}</small></div>
    <div class="pr-kpis">
      <div><b>${c.index ?? "–"}</b><span>ASTRO-PSY index<small>${esc(verdict) || "/ 100"}</small></span></div>
      <div><b>${c.perclos ?? "–"}<small>%</small></b><span>Eyes slowly closed (PERCLOS)<small>${c.baseline?.mean != null ? `your usual ${c.baseline.mean}%` : "baseline after 3 sessions"}</small></span></div>
      <div><b>${c.pvt ? c.pvt.meanRT : "–"}<small>ms</small></b><span>Reaction time (PVT)<small>${c.pvt ? `${c.pvt.lapses} lapses` : "not done"}</small></span></div>
      <div><b>${c.kss ?? "–"}<small>/9</small></b><span>How sleepy you felt (KSS)<small>${c.sp != null ? `Samn-Perelli ${c.sp}/7` : ""}</small></span></div>
    </div>
    ${conc ? `<div class="pr-conc ${conc}"><i></i><span><b>${conc === "match" ? "How you feel matches the camera" : "How you feel and the camera disagree"}</b>${conc === "match" ? "" : c.selfTired ? " · you feel tired, the eyes look rested: your feeling counts too." : " · you feel fine, but the eyes closed slowly more often than usual."}</span></div>` : ""}
    ${bars.length ? `<div class="card"><h3>Fatigue through the test</h3><div class="pr-bars">${bars.map((x) => `<div class="pr-bar"><span>${esc(phaseName(x.phase))}</span><i style="--w:${(x.perclos / maxP) * 100}%" class="${x.perclos >= 15 ? "hi" : ""}"></i><b>${x.perclos}%</b></div>`).join("")}</div><p class="muted small">Share of time the eyes were slowly closing, in each part of the test. Above ~15% is a sign of fatigue.</p></div>` : ""}
    ${c.cog ? `<div class="card"><h3>Cognitive tasks</h3><div class="pr-cog">${Object.entries(c.cog).map(([k, v]) => `<div><span>${esc(cogName[k] || k)}</span><b>${esc(String(v).replace("ms/țintă", "ms/target"))}</b></div>`).join("")}</div></div>` : ""}
    ${trend.length > 1 ? `<div class="card"><h3>Your index over time</h3>${sparkSVG(trend.map((x) => x.index))}<p class="muted small">${trend.map((x) => "day " + x.day).join(" · ")}</p></div>` : ""}
    <div class="card pr-who"><h3>Who sees what</h3>
      <p><b>You</b> see everything on this page. <b>${esc(PSY.name)}</b> sees these numbers in her dashboard, plus any Guardian flags. <b>Nobody</b> sees your questionnaire answers, your journal or any image from the camera: the camera only counted how long your eyes stayed closed.</p>
      <a class="secondary" href="doctor.html" target="_blank" rel="noopener">See what ${esc(PSY.name.split(" ").slice(-1)[0] === "Matei" ? "Dr. Matei" : PSY.name)} sees ↗</a></div>
  </div>`;
}
function sparkSVG(v) {
  const W = 600, H = 90, lo = Math.min(...v) - 5, hi = Math.max(...v) + 5, x = (i) => 10 + (i / (v.length - 1)) * (W - 20), y = (n) => H - 10 - ((n - lo) / (hi - lo)) * (H - 20);
  return `<svg class="pr-spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><polyline points="${v.map((n, i) => `${x(i)},${y(n)}`).join(" ")}"/>${v.map((n, i) => `<circle cx="${x(i)}" cy="${y(n)}" r="4"/>`).join("")}</svg>`;
}

/* ───────────────────────── fatigue in the background, the whole time Nabu is open ─────────────────────────
   monitor.js (the PERCLOS engine from ASTRO-PSY) starts the front camera when Nabu opens and stops it when Nabu
   closes. No video is shown or kept; only numbers. The engine skips frames while Nabu animates, pauses while
   another test needs the camera (ARED, ASTRO-PSY), and writes a fatigue reading every 5 minutes. */
const BG = { mon: null, timer: null, paused: 0, starting: null };
Object.defineProperty(window, "__nabuBusy", { get: () => moving });
function camDot(on) { const d = $("#cam-dot"); if (d) d.hidden = !on; }
async function bgStart() {
  if (!window.NabuBackgroundMonitor || BG.paused || BG.mon?.running || BG.starting) return;
  try { localStorage.setItem("nabu.bgmon.v1.consent", JSON.stringify({ accepted: true, date: new Date().toISOString(), via: "Nabu pre-flight agreement" })); } catch {}
  NabuBackgroundMonitor.CFG.fps = 15;  // 15 fps: a slow closure (>= 400 ms) spans 6 frames; frames are skipped only during animations
  BG.mon ||= NabuBackgroundMonitor.create({ astronaut: "Commander", showFrame: true, showIndicator: false, module: "Lyra Base" });
  BG.starting = BG.mon.start({ astronaut: "Commander", test: "Nabu · background", source: "camera" });
  const r = await BG.starting; BG.starting = null;
  if (BG.paused) { if (BG.mon.running) BG.mon.cancel(); return; }
  if (!r.ok) { camDot(false); toast(/blocat|Permite|allow/i.test(r.reason || "") ? "Camera is blocked: click the camera icon in the address bar and choose Allow, then reload." : "The camera did not start, so fatigue isn't measured right now."); return; }
  camDot(true);
  clearInterval(BG.timer); BG.timer = setInterval(bgSnap, 5 * 60 * 1000);
}
function logBg(rep) {
  const F = rep && rep.fatigue; if (!F || F.perclos == null) return;
  (S.bgFatigue ||= []).push({ day: S.day, at: rep.generatedAt, perclos: F.perclos, blinks: F.blinksPerMin, slow: F.slowClosures, minutes: F.validMinutes });
  S.bgFatigue = S.bgFatigue.slice(-300); save();
}
async function bgSnap() { if (BG.mon?.running) logBg(await BG.mon.snapshot({})); }
async function bgPause() {
  BG.paused++; clearInterval(BG.timer);
  if (BG.starting) await BG.starting;
  if (BG.mon?.running) { logBg(await BG.mon.snapshot({})); BG.mon.cancel(); }
  camDot(false);
}
function bgResume() { BG.paused = Math.max(0, BG.paused - 1); if (!BG.paused) setTimeout(bgStart, 700); }
window.addEventListener("pagehide", () => { if (BG.mon?.running) { BG.mon.cancel(); } try { localStorage.setItem("nabu.live", JSON.stringify({ at: 0, camera: false })); } catch {} });

/* ───────────────────────── the link to Earth: what the psychologist's console sees live ─────────────────────────
   Same mission data (localStorage "nabu.en.v2") plus a heartbeat ("nabu.live") and an inbox both ways
   ("nabu.inbox" from the psychologist, "nabu.inbox.replies" back). Every save() reaches the console instantly. */
function logAct(kind, text, lv = "ok") { const a = { day: S.day, at: Date.now(), kind, text, lv }; (S.activity ||= []).push(a); S.activity = S.activity.slice(-200); save(); try { linkCh && linkCh.postMessage({ type: "act", a }); } catch {} }
window.addEventListener("nabu:checkin", (e) => { const d = e.detail || {};
  logAct("checkin", d.teamNotified ? `No answer to “Are you OK?” in time · crew alerted · answered after ${(d.rtMs / 1000).toFixed(1)} s` : `“Are you OK?” · answered after ${(d.rtMs / 1000).toFixed(1)} s`, d.teamNotified ? "bad" : "warn"); });
let astronautOn = false;
let linkCh = null; try { linkCh = new BroadcastChannel("nabu-link"); } catch {}
function heartbeat() {
  if (!astronautOn) return;
  const where = view === "room" ? roomById(currentRoom)?.name : view === "base" ? "Base overview" : view === "planet" ? "Planet map" : view;
  const hb = { at: Date.now(), camera: !!BG.mon?.running, where, day: S.day, coins: S.coins, panel: $("#panel").hidden ? null : $("#panel-title").textContent, eyes: BG.mon?.running ? BG.mon.live() : null };
  try { localStorage.setItem("nabu.live", JSON.stringify(hb)); } catch {}
  try { linkCh && linkCh.postMessage({ type: "hb", hb }); } catch {}
}
setInterval(heartbeat, 1500);
function readJSON(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }
function checkInbox() {
  if (!astronautOn || $(".dm")) return;
  const seen = new Set(S.inboxSeen || []), m = readJSON("nabu.inbox", []).find((x) => !seen.has(x.id)); if (!m) return;
  const el = document.createElement("div"); el.className = "dm";
  el.innerHTML = `<div class="dm-h">${avatar(PSY.avatar)}<span><b>${esc(PSY.name)}</b><small>${m.kind === "call" ? "asks for a private call" : "sent you a note"} · via Earth link</small></span></div>
    <p>${esc(m.text)}</p><div class="dm-a">${m.kind === "call" ? `<button class="primary" data-r="accepted">Accept the call</button><button class="secondary" data-r="later">Later today</button>` : `<button class="primary" data-r="read">Thanks</button>`}</div>`;
  document.body.append(el);
  el.addEventListener("click", (e) => { const r = e.target.closest("[data-r]")?.dataset.r; if (!r) return;
    (S.inboxSeen ||= []).push(m.id); save();
    const rep = readJSON("nabu.inbox.replies", []); rep.push({ id: m.id, reply: r, at: Date.now() }); try { localStorage.setItem("nabu.inbox.replies", JSON.stringify(rep.slice(-100))); } catch {}
    logAct("contact", m.kind === "call" ? (r === "accepted" ? "Accepted a private call with Dr. Matei" : "Asked Dr. Matei to call later today") : "Read a note from Dr. Matei", "ok");
    el.classList.add("out"); setTimeout(() => { el.remove(); checkInbox(); }, 380); });
}
window.addEventListener("storage", (e) => { if (e.key === "nabu.inbox") checkInbox(); });
setInterval(checkInbox, 5000);

/* ───────────────────────── the account gate ───────────────────────── */
(() => {
  const gate = $("#gate"); if (!gate) return;
  const enterAstronaut = () => {
    astronautOn = true; gate.hidden = true; heartbeat(); setTimeout(bgStart, 900); setTimeout(checkInbox, 2500);
  };
  if (new URLSearchParams(location.search).get("as") === "astronaut") { enterAstronaut(); return; }
  const pick = (card, after, ms) => { if (gate.classList.contains("leaving")) return; card.classList.add("picked"); gate.classList.add("leaving");
    setTimeout(() => gate.classList.add("out"), reducedMotion() ? 0 : 380); setTimeout(after, reducedMotion() ? 0 : ms); };
  $("#gate-astro").onclick = (e) => pick(e.currentTarget, enterAstronaut, 850);
  $("#gate-psy").onclick = (e) => pick(e.currentTarget, () => { location.href = "doctor.html"; }, 650);
  $("#gate-both").onclick = () => { const w = window.open("doctor.html", "nabu-psy", "width=1440,height=900"); if (!w) toast("Allow pop-ups to open the console next to Nabu."); pick($("#gate-astro"), enterAstronaut, 850); };
  addEventListener("keydown", (e) => { if (!gate.hidden && !gate.classList.contains("leaving") && (e.key === "1" || e.key === "2")) $(e.key === "1" ? "#gate-astro" : "#gate-psy").click(); });
})();

/* ───────────────────────── wiring ───────────────────────── */
$("#brand").onclick = () => { if (!$("#panel").hidden) closePanel(); go("planet"); arriveAnim(); };
$("#hud-coins").onclick = () => openCoins();
$("#btn-next-day").onclick = () => nextDay();
$("#panel-close").onclick = closePanel;
$("#scrim").onclick = closePanel;
$("#panel-back").onclick = backPanel;
$$("[data-go]").forEach((x) => (x.onclick = () => { go(x.dataset.go); arriveAnim(); }));
$("#btn-shop").onclick = () => openShop();
$("#btn-earn").onclick = () => openCoins();
$("#room-prev").onclick = () => stepRoom(-1);
$("#room-next").onclick = () => stepRoom(1);
$$("#light-seg button").forEach((x) => (x.onclick = () => { S.light[currentRoom] = x.dataset.light; save(); renderRoom(); }));
$("#corr-prev").onclick = () => corrGo((corrIdx - 1 + ROOMS.length) % ROOMS.length);
$("#corr-next").onclick = () => corrGo((corrIdx + 1) % ROOMS.length);
$("#corr-back").onclick = backFromCorridor;
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("#panel").hidden) closePanel();
  if (view === "corridor" && $("#panel").hidden && !e.target.closest?.("input,textarea")) {
    if (e.key === "ArrowLeft") $("#corr-prev").click();
    if (e.key === "ArrowRight") $("#corr-next").click();
    if (e.key === "Enter") ($("#hatch-open") || $("#hatch-unlock"))?.click();
    if (e.key === "Escape") $("#corr-back").click();
  }
  if (view === "room" && $("#panel").hidden && !e.target.closest?.("input,textarea")) {
    if (e.key === "ArrowLeft") stepRoom(-1); if (e.key === "ArrowRight") stepRoom(1);
    if (false) { e.preventDefault(); tvBack(); }
  }
});
// swipe between rooms
(() => {
  let sx = null, sy = 0;
  const room = $("#room");
  room.addEventListener("pointerdown", (e) => { if (e.target.closest(".decor,.hotspot,.slot,.door,.wallscreen,.room-nav,#tv-layer,#tv-kbwrap,.tv-toggle")) return; sx = e.clientX; sy = e.clientY; });
  room.addEventListener("pointerup", (e) => { if (sx === null) return; const dx = e.clientX - sx, dy = e.clientY - sy; sx = null; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) stepRoom(dx < 0 ? 1 : -1); });
})();
// preload room images so moving between rooms is instant
ROOMS.forEach((r) => { const i = new Image(); i.src = imgUrl(r); });
// dust motes drifting through the room light
(() => {
  const c = $("#dust"); if (!c || reducedMotion()) return;
  const x = c.getContext("2d"); const motes = Array.from({ length: 40 }, () => ({ x: Math.random(), y: Math.random(), r: 0.4 + Math.random() * 1.3, vx: (Math.random() - 0.5) * 0.00012, vy: -0.00005 - Math.random() * 0.00012, p: Math.random() * 6.28 }));
  const tick = (t) => {
    if (view === "room") {
      const w = c.clientWidth, h = c.clientHeight; if (c.width !== w || c.height !== h) { c.width = w; c.height = h; }
      x.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.x += m.vx + Math.sin(t / 2600 + m.p) * 0.00006; m.y += m.vy; if (m.y < -0.02) { m.y = 1.02; m.x = Math.random(); } if (m.x < 0) m.x = 1; if (m.x > 1) m.x = 0;
        const a = 0.16 + 0.2 * Math.sin(t / 900 + m.p);
        x.fillStyle = `rgba(255,214,160,${a})`; x.beginPath(); x.arc(m.x * w, m.y * h, (m.r * w) / 1300, 0, 6.28); x.fill();
      }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();

if (!S.daily || S.daily.day !== S.day) S.daily = newDaily(S.day);
renderHUD();
go("planet");

/* ───────────────────────── intro ───────────────────────── */
(() => {
  const intro = $("#intro");
  warmClip("intro");
  // drifting starfield with a little parallax
  const c = $("#intro-stars"), x = c.getContext("2d");
  const stars = Array.from({ length: 220 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random(), t: Math.random() * 6.28 }));
  let mx = 0, my = 0, alive = true;
  intro.addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });
  const draw = (t) => {
    if (!alive) return;
    const w = (c.width = c.clientWidth), h = (c.height = c.clientHeight);
    for (const s of stars) {
      const px = ((s.x + t * 0.000004 * (0.3 + s.z) + mx * 0.02 * s.z) % 1 + 1) % 1, py = s.y + my * 0.02 * s.z;
      x.globalAlpha = 0.35 + 0.45 * Math.sin(t / 700 + s.t) * s.z + 0.2;
      x.fillStyle = s.z > 0.85 ? "#cfe9ff" : "#fff"; x.beginPath(); x.arc(px * w, py * h, 0.4 + s.z * 1.3, 0, 6.28); x.fill();
    }
    if (!reducedMotion()) requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
  $("#intro-planet").style.setProperty("--mx", 0);
  intro.addEventListener("pointermove", () => { $("#intro-planet").style.transform = `scale(1.06) translate(${-mx * 14}px, ${-my * 10}px)`; });
  const begin = () => {
    if (intro.classList.contains("leaving")) return;
    intro.classList.add("leaving");
    warmClip("planet-base");
    cinematic("intro", `<div class="ey">Mission Lyra-1 · Day ${S.day}</div><div class="nm">Entering the atmosphere</div>`, "#intro", [62, 48], () => {
      alive = false; intro.hidden = true; cloudGate();
    }, { rate: 1.75 });
  };
  // The clip ends inside the clouds. The cloud layer then parts over the planet surface,
  // and the surface settles into the map frame, so there is no jump from a planet to a flat card.
  function cloudGate() {
    const gate = $("#cloudgate"), surf = $("#cg-map");
    go("planet"); const map = $("#map"); map.classList.add("await-flight");
    gate.hidden = false;
    if (reducedMotion()) { gate.hidden = true; map.classList.remove("await-flight"); return; }
    const sea = $("#cg-sea"), L = $("#cg-left"), R = $("#cg-right"), M = $("#cg-mist");
    const E = "cubic-bezier(.45,0,.2,1)";
    surf.animate([{ transform: "scale(1.35)" }, { transform: "scale(1)" }], { duration: 1400, easing: "cubic-bezier(.2,.6,.2,1)", fill: "forwards" });
    sea.animate([{ opacity: 1, transform: "scale(1)" }, { opacity: 0.85, transform: "scale(1.25)", offset: 0.4 }, { opacity: 0, transform: "scale(1.9)" }], { duration: 1100, easing: E, fill: "forwards" });
    L.animate([{ transform: "translate(-10%, 5%) scale(1.3)", opacity: 1 }, { transform: "translate(-95%, 25%) scale(1.9)", opacity: 0 }], { duration: 1200, easing: E, fill: "forwards" });
    R.animate([{ transform: "translate(10%, -5%) scale(1.3) scaleX(-1)", opacity: 1 }, { transform: "translate(95%, -25%) scale(1.9) scaleX(-1)", opacity: 0 }], { duration: 1200, easing: E, fill: "forwards" });
    M.animate([{ opacity: 0.9, transform: "scale(1)" }, { opacity: 0, transform: "scale(2.2)" }], { duration: 900, delay: 150, easing: E, fill: "forwards" });
    setTimeout(() => {
      // glide the surface into the map's place on the page
      const r1 = rectOf(map);
      surf.animate([rectOf(surf), { ...r1, borderRadius: "14px" }], { duration: 750, easing: EASE_IO, fill: "forwards" }).onfinish = () => {
        map.classList.remove("await-flight");
        gate.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, fill: "forwards" }).onfinish = () => { gate.hidden = true; gate.getAnimations({ subtree: true }).forEach((a) => a.cancel()); };
      };
    }, 1150);
  }
  $("#intro-go").onclick = begin;
  $("#intro-skip").onclick = () => { alive = false; intro.classList.add("leaving", "fade"); setTimeout(() => { intro.hidden = true; }, 600); arriveAnim(); };
  addEventListener("keydown", (e) => { if (!intro.hidden && $("#gate").hidden && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); begin(); } });
})();

/* idle warm-up: decode furniture sprites and the hub room pictures in quiet moments, one at a time */
(function warmUp() {
  const urls = ["assets/skeleton.webp", ...ROOMS.filter((r) => r.module === "hub").map(imgUrl), ...Object.keys(ITEMS).map(itemImg)];
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 200));
  const next = () => { const u = urls.shift(); if (!u) return; idle(() => { if (moving) { urls.unshift(u); return setTimeout(next, 600); } const im = new Image(); im.src = u; (im.decode ? im.decode() : Promise.resolve()).catch(() => {}).then(() => setTimeout(next, 60)); }, { timeout: 2000 }); };
  setTimeout(next, 2500);
  setTimeout(() => idle(() => { if (moving) return; const w = document.createElement("div"); w.className = "hs"; w.style.cssText = "position:fixed;left:-4000px;top:0;visibility:hidden;pointer-events:none";
    w.innerHTML = healthHTML(); document.body.append(w); void w.offsetHeight; setTimeout(() => w.remove(), 1500); }, { timeout: 3000 }), 1200);
})();
