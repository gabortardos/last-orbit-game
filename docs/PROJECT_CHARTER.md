# LAST ORBIT

## Project Charter and Continuity Protocol

Status: canonical pre-repository charter  
Date: 25 October 2026  
Owner: Gábor Tardos  
Working title: Last Orbit

## 1. Mission

Create an original, accessible, highly replayable online multiplayer game set in a comic-cinematic Solar System populated by distinctive planetary civilizations.

The game should combine:

- escalating shared risk;
- bluffing and social interference;
- quick, understandable turns;
- memorable planetary characters;
- strong graphics and animation;
- enough strategy that victory does not feel purely random;
- short sessions that encourage immediate rematches.

The tabletop/text-card format is a prototype method. The intended product is a browser-accessible multiplayer app or website.

## 2. Owner requirements

The following are project requirements, not optional suggestions:

1. The design process must remain creative and willing to replace early draft ideas.
2. The master prompt is rough guidance, not a fixed specification.
3. The eventual game must support online multiplayer access.
4. The final experience should include cool graphics and animations.
5. The project may selectively reuse Solar System Explorer technology or build a completely new world; the decision must be evidence-based.
6. Last Orbit remains a separate project, repository, documentation set, and deployment.
7. The project must be maintainable by different capable models over time.
8. Development ideas, decisions, tests, rejected concepts, and next steps must be logged.
9. Gábor should not be required to perform manual code edits.
10. Gábor will create the GitHub repository; the development agent will prepare, structure, document, code, test, and maintain it afterward.

## 3. Creative authority

The development agent has permission to:

- propose entirely new mechanics;
- replace provisional names and world concepts;
- redesign or remove earlier card ideas;
- introduce multiple natural, technological, temporal, biological, or absurd hazards;
- recommend a new visual world instead of reusing the Explorer presentation;
- challenge assumptions when they harm fun, originality, clarity, performance, or maintainability.

The agent must ask the owner when a choice materially changes:

- the intended audience or content rating;
- the business/release model;
- the fundamental tone;
- the relationship to Solar System Explorer;
- the amount of work, expense, or external service dependency;
- a previously confirmed owner requirement;
- public deployment, repository visibility, or data collection.

## 4. Confirmed current direction

- Cool and cinematic first; humour comes largely through characters, malfunctions, consequences, and occasional absurdity.
- Strange cosmic creatures are allowed.
- Multiple Crisis identities are preferred.
- Crisis identities may be visible at setup while positions remain hidden in Rules v0.1.
- Base play supports 2–5 players, with 3–5 as the primary social experience.
- Target match duration begins at 10–15 minutes.
- Flagships are disabled, embarrassed, impounded, or towed home; planetary populations are not destroyed.
- Faction powers and Reactor Charge are excluded from the first rules test.
- The first prototype tests a maximum of two Commands per normal turn.
- Rules v0.1 uses multiple Crisis identities with a shared mechanical resolution.

All gameplay details remain subject to playtest evidence.

## 5. Intended digital product

The intended product is a responsive browser game supporting:

- private online multiplayer rooms;
- local/hot-seat or AI testing modes;
- reconnection and match recovery;
- readable card and turn state on desktop and mobile;
- animated planetary captains and flagships;
- cinematic Crisis, attack, escape, and defeat sequences;
- clear reaction windows;
- accessible settings, reduced motion, subtitles, scalable text, and colour-safe communication;
- event logs and deterministic replays for debugging;
- future expansion without rewriting the core rules.

Public matchmaking, accounts, monetization, chat, ranking, and persistent progression are not yet approved requirements.

## 6. Architecture direction

The future codebase must separate five layers:

1. **Rules engine** — deterministic game state, validation, effects, turns, reactions, and seeded randomness.
2. **Multiplayer authority** — rooms, player identity, synchronization, reconnection, timers, and protection against illegal actions.
3. **Content data** — cards, Crises, factions, dialogue, animation references, and balance values.
4. **Interface** — hand, deck, targets, reactions, history, settings, lobby, and results.
5. **Presentation world** — 2D/3D planets, captains, ships, effects, camera, lighting, animation, and sound.

Optional Solar System Explorer components must enter only through a documented adaptation boundary. Last Orbit must never become a branch or mode developed inside the Explorer's canonical repository.

## 7. Explorer reuse decision gate

No decision is made yet between reuse and a new world.

The comparison will occur after the digital interaction prototype clarifies actual needs. Evaluate:

- visual suitability;
- performance on target desktop and iPhone hardware;
- multiplayer scene requirements;
- mobile UI integration;
- licensing and asset provenance;
- development speed;
- long-term coupling and maintenance risk;
- whether realistic planetary rendering supports or fights the comic character direction.

Possible outcomes:

- reuse selected rendering components;
- adapt selected concepts but recreate the code;
- use Explorer data only;
- build a fully independent visual engine;
- use a hybrid 2D/3D presentation.

## 8. Canonical documentation system

Once the GitHub repository exists, it becomes the canonical project record. Every substantial task must update the relevant documents in the same commit.

Required structure:

```text
AGENTS.md
README.md
CHANGELOG.md
docs/
  PROJECT_CHARTER.md
  PROJECT_STATE.md
  ROADMAP.md
  DECISIONS.md
  IDEA_LOG.md
  KNOWN_ISSUES.md
  PLAYTEST_LOG.md
  RULES.md
  CARD_CATALOGUE.md
  CIVILIZATION_BIBLE.md
  VISUAL_DIRECTION.md
  ARCHITECTURE.md
  TEST_STRATEGY.md
  IP_AND_ASSET_PROVENANCE.md
  handoffs/
  phases/
```

## 9. Continuity rules for every development model

Before working:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_STATE.md`.
3. Read documents directly relevant to the requested phase.
4. Inspect repository and test status.
5. Distinguish confirmed decisions from provisional ideas.

While working:

1. Preserve unrelated owner changes.
2. Do not silently change confirmed requirements.
3. Keep rules logic separate from presentation logic.
4. Give cards, effects, factions, and tests stable identifiers.
5. Record new ideas even when deferred.
6. Document rejected approaches and the reason for rejection.
7. Add or update tests when mechanics or code change.

Before finishing:

1. Run relevant validation.
2. Update `PROJECT_STATE.md` with exact current status.
3. Update `DECISIONS.md`, `IDEA_LOG.md`, `KNOWN_ISSUES.md`, and `CHANGELOG.md` where applicable.
4. Record playtest evidence rather than relying on memory.
5. State what is complete, what is not, and the exact next recommended action.
6. Commit and sync the canonical repository when authorized and technically available.

## 10. Decision record format

Every material decision should record:

- decision ID;
- date;
- status: proposed, accepted, superseded, rejected, or experimental;
- decision;
- reason;
- alternatives considered;
- evidence;
- consequences;
- files or systems affected.

## 11. Idea preservation

The idea log must distinguish:

- active candidate;
- scheduled for testing;
- deferred;
- rejected with reason;
- expansion candidate;
- visual-only idea;
- narrative-only idea.

Ideas should not disappear merely because they do not fit the first prototype. They also must not silently become requirements.

## 12. GitHub bootstrap procedure

### Owner action

Gábor creates a new repository. Recommended name: `last-orbit-game`.

Recommended initial visibility: **private during early design and prototyping**, with visibility reconsidered when the first public demo is ready.

After creation, Gábor provides the exact repository URL or connects/mentions the repository in the development chat.

### Development-agent action

After repository access is available, the agent will:

1. verify the repository identity and default branch;
2. initialize the agreed project structure;
3. add all canonical design documents;
4. add `AGENTS.md` and continuity rules;
5. import the existing Phase 1 and Phase 2A reports;
6. create the initial project-state and decision records;
7. add appropriate ignore, license-decision placeholder, and contribution files;
8. commit and push the baseline;
9. verify the remote state;
10. report the commit identifier and exact next step.

No website deployment or public access change occurs merely because the repository is initialized.

## 13. Current project state

Completed:

- initial concept exploration;
- master prompt;
- full staged development plan;
- Phase 1 mechanics ledger and originality map;
- Phase 2A Crisis-system proposal;
- confirmation of broad creative freedom;
- confirmation of the online multiplayer and visual-animation ambition;
- repository and continuity requirements defined.

Next:

1. Finish the core experience decisions under the new creative mandate.
2. Write exact Rules v0.1.
3. Define player-count-specific deck recipes.
4. Create the text-only card catalogue.
5. Run scripted rule-resolution tests.
6. Begin manual playtesting.

Repository status: waiting for owner to create and provide the new GitHub repository.

