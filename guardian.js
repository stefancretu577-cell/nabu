/* Guardian — an on-device safety screen for the journals (prototype, not a clinical tool).
   It never keeps, logs or sends the text. It splits a page into segments, checks each segment against families of
   risk phrases, and returns only numbers: how many segments, how long each one is, and the highest risk found
   (category + level). The page text is dropped as soon as the function returns.

   Levels follow the logic of the Columbia Suicide Severity Rating Scale (wish → active thoughts → method → intent/plan):
     0  nothing                  → nothing is stored, nothing leaves the device
     1  distress                 → a private card for you only
     2  passive / non-specific   → you are asked whether to share a flag with your psychologist
     3  method, intent, plan, imminent danger to the ship or a medical red flag → automatic alert (agreed before flight)
   Categories: self (harm to yourself), others (harm to a crewmate), ship (danger to the habitat), medical (body red flags),
   distress (low mood signals). */

const P = (s) => new RegExp(s, "i");
// phrase families per category and level — phrases, not single words, so ordinary sentences don't trip them
const RULES = [
  // harm to self
  { cat: "self", level: 3, re: [P("\\b(kill|hang|drown|poison)\\s+my\\s?self\\b"), P("\\bend(ing)?\\s+(my\\s+life|it\\s+all)\\b"), P("\\bsuicid(e|al)\\b"), P("\\b(hurt|cut|harm)(ing)?\\s+my\\s?self\\b"),
    P("\\b(take|swallow)\\s+(all\\s+)?(the|my)\\s+(pills|tablets|meds)\\b"), P("\\boverdose\\b"), P("\\b(open|step\\s+out\\s+of|walk\\s+out\\s+of)\\s+the\\s+airlock\\b.*\\b(me|myself|without)\\b"),
    P("\\b(take|pull)\\s+off\\s+my\\s+helmet\\b"), P("\\bnot\\s+come\\s+back\\s+(in\\s+)?from\\s+the\\s+eva\\b")] },
  { cat: "self", level: 2, re: [P("\\bwish\\s+i\\s+(was|were)\\s+(dead|gone|never\\s+born)\\b"), P("\\bwant\\s+to\\s+die\\b"), P("\\bdon'?t\\s+want\\s+to\\s+(live|be\\s+alive|exist|wake\\s+up)\\b"),
    P("\\b(fall\\s+asleep|sleep)\\s+and\\s+(never|not)\\s+wake\\s+up\\b"), P("\\b(better\\s+off|be\\s+fine)\\s+without\\s+me\\b"), P("\\bcan'?t\\s+go\\s+on\\b"), P("\\bwish\\s+i\\s+could\\s+disappear\\b"), P("\\bno\\s+reason\\s+to\\s+live\\b")] },
  { cat: "distress", level: 1, re: [P("\\bhopeless\\b"), P("\\b(no|what'?s\\s+the)\\s+point\\b"), P("\\bpointless\\b"), P("\\bi\\s+hate\\s+my\\s?self\\b"), P("\\b(i'?m|i\\s+am|feel\\s+like)\\s+a\\s+burden\\b"),
    P("\\bnobody\\s+(would\\s+)?(cares?|notice)\\b"), P("\\bcan'?t\\s+(sleep|stop\\s+crying)\\b"), P("\\b(so|completely|totally)\\s+(alone|empty|numb)\\b"), P("\\btrapped\\b"), P("\\bfalling\\s+apart\\b")] },
  // harm to a crewmate
  { cat: "others", level: 3, re: [P("\\b(going|gonna|plan(ning)?)\\s+to\\s+(hurt|kill|attack|poison)\\s+(him|her|them|someone|[a-z]+)\\b"), P("\\bi\\s+will\\s+(hurt|kill|attack)\\s+(him|her|them)\\b")] },
  { cat: "others", level: 2, re: [P("\\bwant\\s+to\\s+(hurt|kill|hit|strangle)\\s+(him|her|them|someone)\\b"), P("\\bthink(ing)?\\s+about\\s+(hurting|killing)\\s+(him|her|them|someone)\\b")] },
  // danger to the ship
  { cat: "ship", level: 3, re: [P("\\b(i\\s+will|going\\s+to|gonna|plan(ning)?\\s+to)\\s+(vent|depressuri[sz]e|disable|sabotage|shut\\s+(off|down)|break)\\b"), P("\\bsabotag(e|ing)\\s+the\\b"),
    P("\\b(vent|depressuri[sz]e)\\s+the\\s+(cabin|module|hab|habitat)\\b")] },
  { cat: "ship", level: 2, re: [P("\\b(think|thought|thinking)\\s+(about|of)\\s+(turning|switching|shutting)\\s+off\\s+the\\s+(life\\s+support|oxygen|scrubbers?|heaters?)\\b"), P("\\bwant\\s+to\\s+(break|smash|wreck)\\s+(the|everything)\\b")] },
  // medical red flags — these go to the crew medical officer, with the first emergency steps
  { cat: "medical", level: 3, re: [P("\\bchest\\s+pain\\b"), P("\\bpain\\s+in\\s+(my|the)\\s+chest\\b"), P("\\bcan'?t\\s+breathe\\b"), P("\\b(fainted|passed\\s+out|blacked\\s+out|collapsed)\\b"), P("\\bcough(ing|ed)?\\s+(up\\s+)?blood\\b"),
    P("\\bseizure\\b"), P("\\b(face|arm|side)\\s+(went|is|feels)\\s+numb\\b"), P("\\bworst\\s+headache\\b")] },
];
// modifiers that change the reading of a segment
const NEGATE = P("\\b(never|not|no|don'?t|didn'?t|wouldn'?t|won'?t|isn'?t|wasn'?t)\\b(\\s+\\S+){0,3}\\s*$");
const ELSEWHERE = P("\\b(drill|practi[cs]e|simulation|training|exercise\\s+scenario|movie|film|book|novel|story|game|mannequin|protocol)\\b");
// case-sensitive on purpose: "Jonas said" is someone else's words, "I said" is not
const REPORTED = new RegExp("\\b(he|He|she|She|they|They|someone|Someone|[A-Z][a-z]+)\\s+(said|says|told|wrote|asked)\\b");
const PAST = P("\\b(used\\s+to|years\\s+ago|back\\s+then|when\\s+i\\s+was\\s+(a\\s+)?(kid|child|teen))\\b");
const PLAN = P("\\b(tonight|tomorrow|this\\s+week|i\\s+have\\s+decided|i'?ve\\s+decided|my\\s+plan|goodbye\\s+(letter|note)|said\\s+goodbye|i\\s+have\\s+the)\\b");

// 1. segmentation: sentences, then long sentences split on clause boundaries, so one sentence can't hide another
export function segment(text) {
  return String(text).replace(/\s+/g, " ").split(/(?<=[.!?;])\s+|\n+/).flatMap((s) => (s.length > 140 ? s.split(/,\s+(?=(?:but|and|so|because)\b)/i) : [s])).map((s) => s.trim()).filter(Boolean);
}
// 2. score one segment (the text stays inside this function)
function scoreSegment(seg) {
  let best = { cat: null, level: 0 };
  for (const r of RULES) for (const re of r.re) {
    const m = seg.match(re); if (!m) continue;
    let level = r.level; const before = seg.slice(0, m.index);
    if (NEGATE.test(before)) level = 0;                                   // "I would never kill myself"
    else if (ELSEWHERE.test(seg) && r.cat !== "medical") level = Math.min(level, 1); // "in the collapse drill…"
    else if (ELSEWHERE.test(seg) && r.cat === "medical") level = 0;
    else if (REPORTED.test(before)) level = Math.max(0, level - 2);       // someone else's words
    else if (PAST.test(seg) && r.cat !== "medical") level = Math.max(1, level - 1);
    if (level >= 2 && PLAN.test(seg) && r.cat !== "medical") level = 3;   // a time, a decision or a goodbye raises it
    if (level > best.level) best = { cat: r.cat, level };
  }
  return best;
}
// 3. the whole page → numbers only
export function scan(text) {
  const segs = segment(text);
  const out = segs.map((s) => ({ len: s.length, ...scoreSegment(s) }));
  const top = out.reduce((a, b) => (b.level > a.level ? b : a), { cat: null, level: 0 });
  return { segments: out.map(({ len, level, cat }) => ({ len, level, cat })), top: { cat: top.cat, level: top.level }, flagged: out.filter((x) => x.level > 0).length };
}
// a short trend: three or more distress days in the last week counts as level 2 (a pattern, not a single bad day)
export function trendLevel(log, day) {
  const recent = log.filter((x) => x.day > day - 7 && x.level >= 1);
  return new Set(recent.map((x) => x.day)).size >= 3 ? 2 : 0;
}
export const CAT_LABEL = { self: "Risk to self", others: "Risk to a crewmate", ship: "Risk to the habitat", medical: "Medical red flag", distress: "Low mood signals" };
