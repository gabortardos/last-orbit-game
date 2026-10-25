# Phase 3 — Rules v0.1 Validation

Date: 25 October 2026  
Rules: `LO-RULES-0.1`  
Catalogue: `LO-CARDS-0.1`  
Status: scripted validation passed; human validation pending

## Deliverables

- Complete Rules v0.1.
- Exact card text for seven Commands and three Countermeasures.
- Eight Crisis identities with one shared effect.
- Exact 2–5 player recipes.
- Machine-readable recipe data.
- Automated structural validation.
- Prepared PT-001 open-hand playtest.

## Automated checks

Command:

```bash
node tools/validate-prototype-v0.1.mjs
```

Result:

```text
Rules v0.1 deck and pressure validation passed for 2–5 players.
```

Validated:

- 45-card ordinary inventory and 60-card full prototype pool.
- every recipe uses only available copies.
- ordinary-card totals equal nine per player.
- five ordinary cards can be dealt to every player.
- players-minus-one Crisis invariant.
- 10, 15, 21, and 26-card starting Flight Decks.
- setup card conservation.
- extra Reroute inventory.
- initial Crisis density remains between 10% and 16%.
- Queued and current Pressure caps.
- Emergency Burn removes exactly one current Pressure.
- two-player Decoy has no third target and therefore cancels.
- three-player Decoy finds the third legal target.
- Decoy cancels when all alternative targets are illegal.
- a cancelled Command still consumes one Command slot.
- Crisis removal and player elimination preserve `Crises = active players - 1`.

## Scripted rule walkthroughs

| Case | Expected result | Status |
| --- | --- | --- |
| Two Commands then draw | Both resolve in order; one Flight Phase follows | Pass by specification |
| Deep Scan + Course Correction | Information then top-to-bottom manipulation | Pass by specification |
| Deep Scan + Vector Flip | Information then next draw from bottom | Pass by specification |
| Forced Detour | Target gains one Queued Pressure; commander still flies | Pass by specification |
| Signal Jam | Target cancels Command; both cards discarded | Pass by specification |
| Decoy Beacon, 3+ players | One legal redirection; new target may only Jam | Pass by specification |
| Decoy Beacon, 2 players | No third target; Command cancelled | Pass by specification |
| Multi-Pressure turn | One Command Phase, then repeated Sectors | Pass by specification |
| Emergency Burn | Removes one current Pressure only | Pass by specification |
| Crisis + Reroute | Secret reinsertion, Pressure cleared, turn ends | Pass by specification |
| Crisis without Reroute | Player and Crisis leave match; invariant preserved | Pass by specification |
| Empty hand | Player skips Commands and flies normally | Pass by specification |
| Unexpected empty deck | Match stops as implementation/rules defect | Pass by specification |

## Issue found and corrected

The first Decoy wording allowed redirection back to the original commander. That created nonsensical self-theft for Supply Requisition and Boarding Probe. The rule now permits redirection only to a third legal flagship; if none exists, the Command is cancelled.

## Remaining evidence gap

Structural consistency does not establish fun, clarity under hidden information, pacing, or fairness. Phase 3 cannot be considered human-validated until PT-001 and the closed-hand player-count cycle are completed.

## Gate result

**RULES v0.1 SPECIFICATION COMPLETE: YES**  
**SCRIPTED VALIDATION COMPLETE: YES**  
**HUMAN PLAYTEST VALIDATION COMPLETE: NO**

Next action: run PT-001.

