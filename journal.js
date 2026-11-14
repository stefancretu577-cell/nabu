/* Crews and their books for the Community Journal — demo content written for the prototype.
   Every base on Nabu has a small crew; each astronaut writes a public book, one chapter at a time. */
export const AVATAR_COUNT = 16;
// avatar = cell index in assets/crew.webp (4 x 4 grid)
export const PEOPLE = [
  // your base
  { id: "alexander", name: "Alexander", sym: "LYR", avatar: 0, role: "Flight engineer", title: "Notes from the Hub", chapters: [
    { day: 0, t: "The checklist is a handrail", x: "On the first morning I didn't know what to do with my hands. Then I ticked the life-support check and the training block, and the day had edges again. The list is boring on purpose. It holds you when nothing else does." },
    { day: 3, t: "Ana's rule", x: "Ana says we don't skip the ARED, even on the bad days, because the bad days are exactly when your bones are listening. I tried to argue. I lost. My calves thank her." },
    { day: 8, t: "Drill day", x: "We practised the collapse drill today: one of us goes down, the other runs the steps on the big screen. My hands shook the first time. The second time I knew where the defibrillator was without looking. That is the whole point." },
  ]},
  { id: "ana", name: "Ana", sym: "LYR", avatar: 1, role: "Medical officer", title: "Not a Doctor, Just Prepared", chapters: [
    { day: 1, t: "What I'm here for", x: "I'm the closest thing we have to a doctor and I'm not one. My job is to notice early: a value that drifts, a crewmate who stops joking. The health screen helps, but I still ask every evening: how did you sleep?" },
    { day: 5, t: "Numbers that look wrong", x: "Alexander's reaction time was 15% slower three days running. No drama, no diagnosis. We moved his sleep window, dimmed the screens, and on day five it came back. Small trends, small fixes." },
    { day: 11, t: "Twenty minutes to Earth", x: "When the delay is twenty minutes, Mission Control can't hold your hand. You read the protocol, you act, you report. We train for that silence." },
  ]},
  // Vega-2
  { id: "amara", name: "Amara", sym: "VGA", avatar: 2, role: "Geologist", title: "Letters from the Canyon", lead: true, chapters: [
    { day: 0, t: "The first night", x: "It is never fully dark here. The canyon light climbs the walls like green water. I sat at the window for an hour and thought that nobody back home will ever see this colour. So I am writing it down for you." },
    { day: 4, t: "The day I didn't speak", x: "Today I noticed I hadn't said a word out loud until lunch. Not out of sadness, it just happened. I started reading your chapters out loud in the gym. It helps more than I expected." },
    { day: 9, t: "What I would take with me", x: "If I had to leave tomorrow, I would take three things: this notebook, the smell of basil in the greenhouse, and the feeling after a good set, when your arms shake a little and you know you showed up." },
  ]},
  { id: "luca", name: "Luca", sym: "VGA", avatar: 3, role: "Pilot", title: "Bread at 0.38 g", chapters: [
    { day: 2, t: "Dough doesn't care", x: "I baked bread in the galley. It rose slowly, lazily, like it knew it was far from home. We ate it warm and nobody spoke. Food is the best mood test we have." },
    { day: 7, t: "My knees", x: "Low gravity is kind to your knees and cruel to your bones. I log every squat now. Amara laughs, but my numbers on the health screen are the best on the ship." },
  ]},
  // Orion-1
  { id: "teodor", name: "Teodor", sym: "ORN", avatar: 4, role: "Commander", title: "How to Sleep Without Night", lead: true, chapters: [
    { day: 0, t: "The 30-minute rule", x: "I lost the first week trying to sleep whenever I felt tired. It doesn't work. Now I go to bed at the same time, sleepy or not, and turn the screens off 30 minutes before. The rest follows." },
    { day: 6, t: "When the test tells you what you don't want to hear", x: "Three days in a row my reactions were slower than my Earth average. My first instinct was to blame the app. Then I looked at my sleep hours. It wasn't the app." },
  ]},
  { id: "sofia", name: "Sofia", sym: "ORN", avatar: 5, role: "Biologist", title: "Small Things That Grow", chapters: [
    { day: 3, t: "The dosimeter on my sleeve", x: "Every evening I read the radiation log like a weather report. It's not scary when you understand it: the shielded bunk, the storm shelter, the dose that adds up slowly. Knowing is calmer than guessing." },
    { day: 10, t: "Calling home", x: "The delay turns every call into a letter. I record mine in the morning and listen to the answers at night. My mother now ends every message with 'and drink water', which is medically correct." },
  ]},
  // Kestrel
  { id: "mina", name: "Mina", sym: "KST", avatar: 6, role: "Botanist", title: "The Garden on Shelf Three", lead: true, chapters: [
    { day: 0, t: "Lettuce doesn't know it's in space", x: "The seedlings grow towards the violet light as if it were the sun. It calms me to look after something that needs no explanations. Ten minutes a day in the greenhouse fixes a lot." },
    { day: 5, t: "Harvest", x: "The first leaves. I shared them at dinner and everyone went quiet for a minute. I think we were actually eating the idea of Earth." },
  ]},
  { id: "hiro", name: "Hiro", sym: "KST", avatar: 7, role: "Systems engineer", title: "Fixing Things at 3 a.m.", chapters: [
    { day: 4, t: "The alarm that wasn't", x: "A CO₂ sensor screamed at 3 a.m. Not an emergency, just a dirty filter. But my heart rate said otherwise for an hour. Now I log stress too, not just pressure." },
    { day: 12, t: "Memory games", x: "I hate losing, so the 'Fix the panel' game became my morning coffee. My span went from 6 to 8. I don't know if I'm smarter or just stubborn." },
  ]},
  // Halley-4
  { id: "jonas", name: "Jonas", sym: "HLY", avatar: 8, role: "Physician assistant", title: "A Hundred Days of Running in Place", lead: true, chapters: [
    { day: 2, t: "The green counter", x: "The camera only counts the correct reps. At first it annoyed me. Now it's a game: ten greens in a row. Yesterday I got 9 out of 10 and felt prouder than when I defended my thesis." },
    { day: 9, t: "Chest pain, practice run", x: "We ran the emergency drill with a mannequin: sharp chest pain, collapse. Check, call, compress, shock. Nobody in our crew is a cardiologist. All of us can do the first four minutes now." },
  ]},
  { id: "elena", name: "Elena", sym: "HLY", avatar: 9, role: "Navigator", title: "Maps of a Quiet Mind", chapters: [
    { day: 5, t: "Isolation is a skill", x: "Nobody told me loneliness would come in waves. I learned to see them coming: shorter sleep, fewer words at dinner. When I see the wave, I write here, and I ask Jonas for a game of chess." },
  ]},
  // Tycho-3
  { id: "ilinca", name: "Ilinca", sym: "TYC", avatar: 10, role: "Commander", title: "Letters to My Younger Self", lead: true, chapters: [
    { day: 1, t: "You will be bored", x: "Dear me at twenty: space is mostly maintenance. Filters, logs, inventory. The magic is in the five minutes at the window after. Don't skip those." },
    { day: 8, t: "About being strong", x: "Being strong here means telling the crew 'I slept four hours, watch me today'. Saying it out loud is the safety system." },
  ]},
  { id: "paul", name: "Paul", sym: "TYC", avatar: 11, role: "Engineer", title: "The Repair Diaries", chapters: [
    { day: 6, t: "Hands", x: "My grip strength dropped a little after a month. The ARED pull-downs fixed it. Funny how you only notice a muscle when a bolt won't turn." },
  ]},
  // Nova-5
  { id: "elvira", name: "Elvira", sym: "NOV", avatar: 12, role: "Commander", title: "Five Heartbeats a Morning", lead: true, chapters: [
    { day: 0, t: "Five heartbeats", x: "We landed in dust and silence. The first thing I did was check everyone's pulse, then my own. Habit from Earth, ritual here. Every morning starts with five heartbeats counted in silence." },
    { day: 3, t: "Values that don't look normal", x: "Maria's blood pressure was high after the EVA. We didn't panic: we rested her, rechecked in an hour, logged it, sent it to Earth. Normal again by evening. The point is to look every day." },
    { day: 10, t: "Our remote community", x: "Seven bases, seven small families. Reading your chapters at night makes the planet feel inhabited. We are a village spread over a desert." },
  ]},
  { id: "maria", name: "Maria", sym: "NOV", avatar: 13, role: "Scientist", title: "Field Notes, Nova-5", chapters: [
    { day: 2, t: "Suit days", x: "EVA days are long and dry. I forget to drink, then my head hurts and my reaction test is terrible. Now the bottle comes with me like a second helmet." },
    { day: 7, t: "After the scare", x: "Elvira caught my high blood pressure early. Nothing serious, but I learned to read my own numbers. You don't need to be a doctor to notice that something changed." },
  ]},
];
export const YOU_AVATAR = 14;
