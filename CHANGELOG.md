# Changelog

All notable project changes will be documented here.

## 2026-10-25 — Rules v0.1

### Added

- Complete prototype rules covering setup, timing, Commands, Countermeasures, Flight Pressure, Crisis resolution, elimination, information, and edge cases.
- Exact 2–5 player card recipes and 60-card physical prototype inventory.
- Machine-readable deck recipe.
- Automated structural validator for counts, inventory, risk density, Pressure limits, Decoy legality, card conservation, and elimination invariants.
- Worked interaction examples and prepared PT-001 open-hand test.

### Changed

- Replaced attack-as-free-skip with Forced Detour, which adds future Pressure while leaving the commander's own risk intact.
- Limited reactions to targets with a bounded Decoy/Signal Jam sequence.
- Defined two-player Decoy Beacon as cancellation when no third legal target exists.

### Validation

- `node tools/validate-prototype-v0.1.mjs`: PASS.

## 2026-10-25 — Repository baseline

### Added

- Independent Last Orbit repository and continuity structure.
- Project charter and full gated development roadmap.
- Development instructions for future models.
- Phase 1 reference mechanics ledger and originality map.
- Phase 2A core experience and multi-Crisis system.
- Canonical state, decisions, ideas, issues, rules, card, visual, architecture, test, playtest, and provenance records.

### Status

- Pre-production only.
- No application code or deployment.
- Next milestone: Rules v0.1 and exact prototype deck recipes.

