# AGENTS.md — Last Orbit Development Instructions

These instructions apply to every model or contributor working in this repository.

## Required reading order

Before changing anything:

1. Read this file completely.
2. Read `docs/PROJECT_STATE.md`.
3. Read `docs/PROJECT_CHARTER.md`.
4. Read the active rules, design, architecture, and phase documents relevant to the task.
5. Inspect the repository and validation status.

Do not rely on chat memory when the repository contains a current answer.

## Owner and working style

The owner is Gábor Tardos. He is the creative decision-maker and should not be required to perform manual code edits. Explain material decisions in plain language and give a recommendation when choices are needed.

The owner has granted broad creative freedom. Early prompts, names, mechanics, and factions are hypotheses, not permanent constraints. Replace weak ideas when a better design is supported by reasoning or tests.

Ask before materially changing the audience, business model, fundamental tone, Solar System Explorer relationship, cost/external-service footprint, public deployment/access, data collection, or a confirmed owner requirement.

## Non-negotiable project requirements

- Intended product: browser-accessible online multiplayer game.
- Strong graphics and animation are eventual product requirements.
- Validate gameplay cheaply before expensive production.
- Last Orbit remains separate from Solar System Explorer.
- Explorer technology reuse requires a documented later decision.
- Rules logic must remain separate from presentation and networking.
- Desktop and mobile readability are required.
- Preserve accessibility planning from the start.
- Do not imitate protected characters, art, writing, or distinctive expression from reference games or media.

## Canonical documentation discipline

Every meaningful task must update documentation in the same change as the design or code.

At minimum consider:

- `docs/PROJECT_STATE.md`
- `docs/DECISIONS.md`
- `docs/IDEA_LOG.md`
- `docs/KNOWN_ISSUES.md`
- `docs/PLAYTEST_LOG.md`
- `docs/RULES.md`
- `docs/CARD_CATALOGUE.md`
- `docs/ARCHITECTURE.md`
- `CHANGELOG.md`

Do not silently overwrite or forget earlier decisions. Mark them superseded and explain why.

## Design and implementation rules

- Test one major rules variable at a time where practical.
- Give cards, effects, factions, decisions, and tests stable identifiers.
- Record hypotheses and exit criteria before playtests.
- Simulations support human playtests; they do not replace fun testing.
- Use deterministic state transitions and seeded randomness when implementation starts.
- The authoritative game engine validates every action.
- UI and animation may explain rules but may not define them.
- Any future network client is untrusted.
- Preserve unrelated owner changes.

## Task completion requirements

Before finishing a substantial task:

1. Run relevant checks or explain why none apply.
2. Update `docs/PROJECT_STATE.md` with the exact resume point.
3. Record material decisions and deferred ideas.
4. Record unresolved risks or defects.
5. Update the changelog.
6. State what is complete, what remains, and the next recommended action.
7. Commit and sync the canonical repository when authorized.

Never claim a phase is complete without checking its exit gate.

