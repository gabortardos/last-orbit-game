# LAST ORBIT: SOLAR SYSTEM SHOWDOWN

## Full Development Plan

Status: pre-production concept stage  
Project type: independent browser-multiplayer game validated through tabletop/text prototypes  
Relationship to Solar System Explorer: thematic sibling; separate project and codebase  
Working title: provisional

Intended product: an online multiplayer app/website with cool graphics, character animation, cinematic space events, and a rules system that remains readable beneath the spectacle.

## 1. Outcome and development philosophy

The project will first prove that its rules create tension, laughter, bluffing, tactical choices, and a desire to play again. Expensive work—finished illustration, 3D animation, online multiplayer, backend services, and possible engine reuse—comes only after the relevant cheaper tests pass.

The plan follows six broad layers:

1. Understand the design problem.
2. Prove the core card game.
3. Add originality and planetary identity.
4. Prove the presentation with a digital vertical slice.
5. Build the production game and multiplayer.
6. Evaluate release, growth, and optional connection to the Explorer ecosystem.

Each phase ends with an explicit gate. A phase is not complete merely because documents or code exist.

---

## PHASE 0 — Project foundation and separation

### Purpose

Establish an independent project identity and prevent accidental mixing with Solar System Explorer.

### Work

- Confirm a working title and internal codename.
- Define the project's one-sentence pitch.
- Create a separate project space and, later, a separate repository.
- Establish the documentation set and decision-log format.
- Prepare model-continuity instructions so a new development model can resume from repository state alone.
- Prepare the repository bootstrap structure while the owner creates the GitHub repository.
- Define what information may be borrowed from the Explorer and what may not.
- Record ownership and provenance for future art, audio, fonts, scientific data, and code.

### Documents

- `PROJECT_BRIEF.md`
- `AGENTS.md`
- `README.md`
- `PROJECT_STATE.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `IDEA_LOG.md`
- `KNOWN_ISSUES.md`
- `PLAYTEST_LOG.md`
- `IP_AND_ASSET_PROVENANCE.md`
- `ARCHITECTURE.md` once coding begins
- root `CHANGELOG.md`

### Exit gate

- The game has a clear independent identity.
- No game code or documentation lives inside the Explorer project.
- The owner approves the initial pitch and design principles.
- A future model can identify the exact current status, constraints, confirmed decisions, and next action without reading this chat.

---

## PHASE 1 — Reference mechanics and market understanding

### Purpose

Understand why the inspiration works, where it fails, and how this game will become recognizably original.

### Work

- Verify the official base rules of Exploding Kittens from authoritative sources.
- Map setup, card types, turn obligations, interrupts, combinations, elimination, and edge cases.
- Separate functional mechanics from protected expression and branding.
- Study a small relevant comparison set of light interactive games, focusing on pacing, player agency, elimination, and replayability.
- Identify common player complaints: randomness, kingmaking, long elimination waits, weak two-player play, confusing stacking, or excessive reaction interruptions.
- Produce an originality map showing what is retained as a general design function, what is transformed, what is removed, and what is newly invented.

### Deliverables

- Reference mechanics ledger.
- Competitor comparison matrix.
- Originality and differentiation statement.
- Initial design-risk register.

### Exit gate

- Every reference mechanic has a documented reason for retention, transformation, or rejection.
- At least one promising signature system differentiates Last Orbit from a reskin.
- The planned theme supports the mechanics rather than merely decorating them.

---

## PHASE 2 — Creative foundation

### Purpose

Define the game fantasy, humour, audience, universe, and eight civilizations before detailed content expands.

### Decisions

- Intended age range and content rating.
- Family-friendly, adult, or dual-layer humour.
- Competitive cruelty level.
- Target match length.
- Base player count and future maximum.
- Degree of scientific grounding.
- Whether players control one captain, one flagship, or a broader planetary delegation.
- Why the contest exists and why only one flagship wins.
- What defeat means within the fiction.

### Civilization work

For Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune, define:

- species concept;
- captain;
- flagship;
- shape language and silhouette;
- personality and comic contradiction;
- homeworld connection;
- strategic identity;
- strength and weakness;
- colour and material palette;
- animation and sound personality;
- prohibited clichés and sensitivities.

### Deliverables

- Creative pillars.
- World premise.
- Tone guide.
- Civilization bible version 0.1.
- Naming shortlist for the game and central competition.

### Exit gate

- All eight civilizations are visually and conceptually distinguishable without labels.
- The humour has a coherent voice.
- The owner approves the overall tone and at least four strong faction concepts; weaker factions may remain flagged for revision.

---

## PHASE 3 — Core rules version 0.1

### Purpose

Create the smallest complete game capable of testing the central tension loop.

### Included

- 2–5 players.
- Hidden hands.
- One shared draw deck and public discard pile.
- Catastrophes scaled to player count.
- Survival and secret hazard relocation.
- Extra-turn attack.
- skip/escape action.
- deck inspection.
- deck shuffle.
- forced transfer or theft.
- action cancellation and counter-cancellation.
- exact timing and priority rules.
- last operational flagship victory.

### Deliberately excluded

- Faction powers.
- Reactor Charge.
- Finished character art.
- Campaign progression.
- Monetization.
- Online multiplayer.
- Explorer-engine reuse.
- Large expansion card pool.

### Rules questions to resolve

- Exact starting hand size.
- Whether attacks stack, pass, replace, or accumulate.
- Whether targeted redirection belongs in the minimal deck.
- Which actions can be cancelled.
- Reaction priority when several players respond.
- Which cards can be recovered from discard.
- How combo cards work.
- Whether two-player rules need special card counts.
- Whether eliminated players simply observe.
- Maximum hand size, if any.
- What happens when the deck or a required card pool is exhausted.

### Deliverables

- Rules v0.1.
- Card catalogue v0.1 with unique IDs.
- Exact deck recipes for 2, 3, 4, and 5 players.
- Timing and interaction reference.
- Setup reference card.

### Exit gate

- A complete game can be played without inventing rules during the match.
- Every card has unambiguous text.
- The deck can be reproduced exactly.

---

## PHASE 4 — Text-only prototype

### Purpose

Make the rules playable at negligible cost.

### Format options

- Printable paper cards.
- Simple browser prototype with flat cards.
- Chat-managed prototype in which the system maintains hidden state.

The first version should avoid polished illustration. Plain cards make it easier to remove bad ideas without emotional or financial attachment.

### Prototype requirements

- Large card title.
- One-sentence effect.
- Card type and reaction timing.
- Unique card ID.
- Clear targeting requirements.
- Reminder text where necessary.
- Distinct catastrophe and survival states.

### Internal validation

- Check deck construction for every player count.
- Verify that every required state can be represented.
- Walk through attack chains, cancellation chains, catastrophe survival, elimination, and final-two-player states.
- Test invalid actions and empty-deck conditions.

### Exit gate

- Prototype can run five complete scripted example rounds without contradiction.
- Setup takes no more than a few minutes.
- No card requires designer interpretation to resolve.

---

## PHASE 5 — Human playtest cycle A: core fun

### Purpose

Determine whether the unadorned game is fun before adding faction complexity.

### First five tests

1. Designer walkthrough with open hands to find rule failures.
2. Two-player closed-hand test for duel viability.
3. Three-player test for interaction and targeting.
4. Four-player test for the expected primary experience.
5. Five-player test for downtime, interruption overload, and elimination waiting.

### Record after every match

- player count;
- match duration;
- total turns;
- time of first elimination;
- longest eliminated-player wait;
- winning hand and remaining resources;
- cards never played;
- confusing moments;
- attack and cancellation chains;
- perceived control versus luck;
- funniest moment;
- most frustrating moment;
- desire to play again, rated 1–10.

### Core success targets

- Rules teachable in about five minutes after refinement.
- Typical match approximately 10–20 minutes.
- Average fun and replay-interest ratings of at least 7/10 among target players.
- No repeated unresolved timing confusion.
- No card or simple strategy dominates the small sample.
- Eliminated-player wait remains acceptable.
- Players remember at least one dramatic decision, not only a random draw.

### Exit gate

Choose one:

- **PASS:** core loop is promising; continue.
- **REVISE:** fun is visible but specific mechanics require another test cycle.
- **REBUILD:** central loop is not producing sufficient agency or tension.
- **STOP:** concept is not worth additional production.

---

## PHASE 6 — Balance model and simulation

### Purpose

Use data to support—not replace—human judgment.

### Build

- A deterministic rules engine or lightweight simulator separate from the future visual client.
- Seeded random generation so matches can be reproduced.
- Automated agents ranging from random play to simple heuristic strategies.
- Event logs suitable for debugging.

### Measure

- average and distribution of match length;
- turns by player position;
- first-player advantage;
- catastrophe timing;
- survival-card availability;
- attack-debt size;
- card draw and usage rates;
- hand-size growth;
- frequency of impossible or degenerate states;
- two-player versus multiplayer differences.

### Limitations

Simulation cannot measure humour, bluffing, table talk, perceived betrayal, clarity, animation satisfaction, or emotional tension. Any mathematically balanced version must return to human playtesting.

### Exit gate

- No obvious structural bias or infinite/degenerate loop.
- Expected match length remains within target across supported player counts.
- Revised card counts are returned to human tests and remain fun.

---

## PHASE 7 — Original systems: factions and Reactor Charge

### Purpose

Add planetary identity and meaningful originality only after the base loop works.

### Test modules separately

#### Module A: civilization abilities

- Begin with one simple once-per-game power per civilization.
- Avoid permanent passive rules during the first faction test.
- Ensure powers reinforce planetary identity.
- Test mirrored matches where possible.

#### Module B: Reactor Charge

- Define exactly how cards become charge.
- Decide whether sacrificed cards are public, private, discarded, or exiled.
- Define charge limits and costs.
- Test whether charge creates decisions or merely extra bookkeeping.
- Check whether players hoard cards rather than interacting.

#### Module C: alternative signature systems

Potential alternatives may include a moving planetary environment, orbit lanes, ship modules, shared solar-weather states, or visible trajectory commitments. Test only one major additional system at a time.

### Faction balance targets

- No civilization should consistently exceed a reasonable win-rate band after accounting for sample size and player skill.
- Every power must offer a recognizable decision.
- Powers must not erase the fundamental deck tension.
- Players must be able to understand an opponent's power without reading a manual mid-turn.

### Exit gate

- At least four factions are both fun and balanced enough for a vertical slice.
- The signature mechanic materially improves originality and decision-making.
- Added complexity remains compatible with the five-minute teaching target, or the target is consciously revised.

---

## PHASE 8 — Content and rules version 1.0 candidate

### Purpose

Turn the validated system into a coherent base-game content set.

### Work

- Finalize base card families.
- Remove redundant or low-use cards.
- Tune humour and card names.
- Add flavour text only where it does not harm readability.
- Finalize faction powers selected for launch or demo.
- Write glossary, examples, FAQ, and edge-case rulings.
- Define expansion boundaries so the base game is complete without them.

### Deliverables

- Rules candidate 1.0.
- Card catalogue candidate 1.0.
- Faction set candidate 1.0.
- FAQ and examples.
- Updated balance report.

### Exit gate

- Blind testers can learn and complete a match using only the provided rules.
- No designer intervention is needed.
- Content quantity supports replay without bloating the deck.

---

## PHASE 9 — Visual development

### Purpose

Create a distinctive appearance after the cast and rules are stable enough to justify art investment.

### Sequence

1. Mood and style exploration.
2. Three comparable visual directions.
3. One approved art direction.
4. Shape-language sheet for all factions.
5. Captain silhouettes.
6. Flagship silhouettes.
7. Colour and material system.
8. Card frame and icon system.
9. Expression and reaction sheets.
10. Key art and animation tests.

### Visual requirements

- Readable at mobile size.
- Strong silhouette separation.
- Planet-derived materials and environmental cues.
- Cinematic but comic.
- Avoid generic neon science-fiction interfaces.
- Avoid visual similarity to Exploding Kittens.
- Colour is reinforced by icons, shapes, and labels.
- Cards remain understandable without animation.

### Exit gate

- Users can identify factions and major card types rapidly.
- The game looks original at a glance.
- A representative card, captain, ship, and catastrophe scene work together as one visual system.

---

## PHASE 10 — UX and digital interaction prototype

### Purpose

Prove that the tabletop logic translates into a clear digital experience.

### Prototype screens

- title/lobby;
- faction selection;
- match table;
- hand interaction;
- target selection;
- reaction/override window;
- deck scan view;
- catastrophe resolution;
- faction-power activation;
- elimination/spectator state;
- results screen.

### UX requirements

- Current player and turn direction are unmistakable.
- Outstanding turn debt is always visible.
- Targets are confirmed before irreversible actions.
- Reaction timing is fair and accessible.
- Players can inspect card details without blocking play.
- Animations explain results rather than delaying them.
- Reduced motion, scalable text, colour-safe icons, subtitles, and volume separation are planned from the start.

### Exit gate

- Users can complete representative turns without verbal guidance.
- No essential state depends only on memory or animation.
- Mobile layout remains readable without covering the central action.

---

## PHASE 11 — Independent technical architecture

### Purpose

Build a maintainable game project without coupling it to the Explorer.

### Architectural principles

- Rules engine independent from rendering.
- Authoritative, deterministic state transitions.
- Seeded randomness where appropriate.
- Event log/replay support.
- Data-driven cards and factions.
- Tests for every card effect and interaction.
- UI clients consume game state; they do not invent rules.
- Networking can be added around the same core engine.

### Initial modules

- game state;
- deck and hand management;
- turn/priority system;
- action validation;
- effect resolution;
- reaction stack;
- faction abilities;
- seeded random service;
- event log and replay;
- save/resume;
- local AI opponents;
- presentation adapter.

### Documents

- architecture specification;
- game-state schema;
- card/faction data schema;
- interaction state machine;
- test strategy;
- security/threat notes for multiplayer.

### Exit gate

- Core rules run without the 3D presentation.
- Automated tests cover ordinary and adversarial edge cases.
- A saved event log can reproduce the same match outcome.

---

## PHASE 12 — Digital vertical slice

### Purpose

Build one polished portion that demonstrates the actual product promise.

### Recommended scope

- 2–4 local players and/or AI opponents.
- Four polished civilizations.
- One complete base deck recipe.
- One planetary arena or solar route.
- Essential character reactions.
- Representative attack, cancellation, survival, and elimination animations.
- Functional settings and accessibility basics.
- No account system or monetization.

### Questions answered

- Is the game still fun on screen?
- Do animations improve comprehension and humour?
- Does the planetary setting feel essential?
- Can non-gamers understand the interface?
- Does a match remain quick once presentation time is included?
- Is 3D justified, or would a lighter 2D/2.5D treatment be stronger?

### Exit gate

- External testers understand and enjoy the slice.
- Performance is acceptable on target desktop and iPhone hardware.
- The owner approves the product direction before multiplayer investment.

---

## PHASE 13 — Solar System Explorer reuse evaluation

### Purpose

Decide whether selected Explorer technology creates real value.

### Candidate areas

- planet materials and rendering;
- scientific body data;
- camera transitions;
- orbital visualization;
- lighting and star field;
- detail/LOD techniques;
- selected audio or accessibility infrastructure where licenses and architecture allow.

### Evaluation criteria

- technical compatibility;
- performance cost;
- visual fit with the comic art direction;
- licensing and asset provenance;
- maintenance coupling;
- risk to the Explorer;
- effort compared with an independent implementation.

### Hard rule

The game may copy or adapt approved components into its own repository only through a documented process. The Explorer must not become the game's development branch or be destabilized by game requirements.

### Exit gate

- Each candidate is marked reuse, adapt, recreate, or reject.
- No integration begins without an approved migration plan.

---

## PHASE 14 — Multiplayer foundation

### Purpose

Add reliable online play after the local game is stable.

### Requirements

- Authoritative match host/server.
- Private rooms and invite codes.
- Reconnection and state recovery.
- Turn and reaction timers.
- Protection against invalid actions and client manipulation.
- Deterministic event reconciliation.
- Graceful handling of disconnection and abandonment.
- Safe display names and communication controls.
- Spectator behaviour that cannot influence competitive state.

### Development order

1. Local hot-seat.
2. AI opponents.
3. Two-client private room.
4. Reconnection.
5. Three-to-five-player rooms.
6. Matchmaking only if demand justifies it.

### Exit gate

- Full matches survive ordinary disconnect/reconnect scenarios.
- Clients cannot perform illegal actions.
- Reaction timing remains fair under realistic latency.

---

## PHASE 15 — Production content, audio, and polish

### Work

- Complete all eight launch civilizations if approved.
- Final captain and flagship art.
- Card illustrations and effects.
- Music and adaptive ambience.
- Separate controls for music, effects, voices, and accessibility narration.
- Localization-ready text architecture.
- Tutorial and first-match guidance.
- Performance profiles for mobile and desktop.
- Save, resume, reconnect, and results polish.
- Credits and asset provenance.

### Audio principle

Audio should communicate actions and personality without becoming repetitive. Every recurring line needs variation, frequency limits, subtitle support, and a mute path.

### Exit gate

- Content is complete for the defined launch scope.
- Performance and usability pass on supported devices.
- No unresolved high-severity gameplay, state, or accessibility defect remains.

---

## PHASE 16 — Release strategy and post-launch options

### Decisions postponed until evidence exists

- Free portfolio demo versus commercial product.
- Browser-only versus packaged mobile/desktop app.
- Account requirement.
- Cosmetic monetization.
- Expansion factions and cards.
- Cross-promotion inside Solar System Explorer.
- Community features and public matchmaking.

### Sensible first release

A free, highly polished browser demo with private/local play is likely the lowest-risk way to validate interest and strengthen Gábor's AI portfolio. Commercialization should be considered only after retention, replay, and sharing behaviour are observed.

### Post-launch metrics

- tutorial completion;
- match completion;
- rematch rate;
- return rate;
- average match duration;
- faction selection and win rates;
- disconnection rate;
- rule-confusion points;
- animation skips;
- accessibility-setting usage;
- player reports and moderation needs.

### Exit gate

- Release form matches proven demand and operating capacity.
- Ongoing costs and maintenance obligations are understood.
- Expansion does not compromise the simplicity of the base game.

---

## Recommended immediate work sequence

The next concrete steps for this chat should be:

1. Confirm or revise the creative pillars and central fiction.
2. Decide the target audience, tone, base player count, and desired match length.
3. Produce the reference mechanics ledger and originality map.
4. Create the exact rules v0.1 and deck recipes.
5. Play one open-hand tutorial match in chat.
6. Play closed-hand matches at two, three, four, and five players.
7. Record results and revise the core before faction abilities.
8. Develop the eight civilizations in greater depth.
9. Test once-per-game faction powers.
10. Test Reactor Charge against at least one alternative signature system.

## First owner decisions

The following decisions should be made before Rules v0.1 is frozen:

1. **Audience:** family-accessible with adult-friendly layered humour, or explicitly adult?
2. **Elimination tone:** ship disabled and towed home, or a more destructive comic outcome?
3. **Primary player count:** optimize first for 3–5, while supporting 2; or make 2-player equality a hard requirement?
4. **Match target:** approximately 10–15 minutes or 15–25 minutes?
5. **Scientific balance:** science-inspired fantasy, or stricter scientific plausibility?
6. **Faction asymmetry:** launch with distinct powers, or treat powers as an advanced mode?
7. **Working title:** keep Last Orbit during development or explore a naming round now?

## Overall completion definition

The project is not considered successful merely because a game has been coded. Success means:

- the game is understandable;
- repeated human tests show genuine fun and replay interest;
- it has a distinct identity beyond its inspiration;
- planetary factions matter mechanically and emotionally;
- digital presentation strengthens rather than slows the game;
- the independent architecture is reliable and maintainable;
- any Explorer reuse is deliberate, isolated, and safe;
- the final scope matches the owner's budget, time, and portfolio goals.

