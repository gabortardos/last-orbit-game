# Last Orbit — Card Catalogue v0.1

Status: exact text and player-count recipes defined; balance untested  
Catalogue ID: `LO-CARDS-0.1`

## 1. Full physical prototype pool

| Type | Maximum cards |
| --- | ---: |
| Commands and Countermeasures | 45 |
| Emergency Reroutes | 7 |
| Crisis identity pool | 8 |
| **Total** | **60** |

Each match uses a player-count-specific subset.

## 2. Crisis cards

All v0.1 Crisis cards use the same rules text:

> **CRISIS — REVEAL IMMEDIATELY.** Use an Emergency Reroute or disable your flagship. A Reroute secretly returns this Crisis anywhere in the Flight Deck and ends your turn.

| ID | Working name | Category | Copies |
| --- | --- | --- | ---: |
| CR-001 | Rogue Comet Convoy | Natural | 1 |
| CR-002 | Coronal Mass Ejection | Natural | 1 |
| CR-003 | Dormant Defense Grid | Technology | 1 |
| CR-004 | Micro-Singularity Snare | Space-time | 1 |
| CR-005 | Yesterday Loop | Space-time | 1 |
| CR-006 | Void Grazer | Cosmic life | 1 |
| CR-007 | Plasma Leeches | Cosmic life | 1 |
| CR-008 | Interplanetary Impound Order | Civilized absurdity | 1 |

At setup, randomly select players minus one and reveal their identities before shuffling them into the Flight Deck.

## 3. Emergency Reroute

| ID | Name | Type | Copies |
| --- | --- | --- | ---: |
| ER-001 | Emergency Reroute | Protected response | 7 |

Exact text:

> Play immediately after you draw a Crisis. Discard this card instead of being disabled. Without viewing or rearranging other cards, secretly return the Crisis anywhere in the Flight Deck. Clear your remaining Flight Pressure and end your turn. This response cannot be cancelled or redirected.

Every player receives one at setup. Extra copies are added according to the deck recipe.

## 4. Commands

| ID | Name | Maximum copies | Exact text |
| --- | --- | ---: | --- |
| CM-001 | Deep Scan | 5 | Privately view the top three cards of the Flight Deck. Return them in the same order. If fewer than three remain, view all remaining cards. |
| CM-002 | Course Correction | 4 | Move the top card of the Flight Deck to the bottom without viewing it. |
| CM-003 | Route Scramble | 4 | Shuffle the entire Flight Deck without viewing any card. |
| CM-004 | Forced Detour | 5 | Choose another active flagship with fewer than three Queued Pressure. Give it one Queued Pressure for its next turn. You must still complete your own Flight Phase. |
| CM-005 | Supply Requisition | 4 | Choose another active flagship. That player chooses one card from their hand and gives it to you. |
| CM-006 | Boarding Probe | 4 | Choose another active flagship. Take one random card from that player's hand. |
| CM-007 | Vector Flip | 3 | During your next Sector this turn, draw from the bottom of the Flight Deck instead of the top. Only one Vector Flip may be active at a time. |

Supply Requisition and Boarding Probe require a target with at least one card.

## 5. Countermeasures

| ID | Name | Maximum copies | Exact text |
| --- | --- | ---: | --- |
| CT-001 | Emergency Burn | 6 | Remove one current Flight Pressure instead of drawing a card. |
| CT-002 | Signal Jam | 5 | When a Command targets you, cancel it. Put both cards in the Mission Log. Signal Jam cannot be countered in v0.1. |
| CT-003 | Decoy Beacon | 5 | When a Command targets you, redirect it to another legal active flagship other than you and the commander. If none exists, cancel the Command. Only one Decoy Beacon may affect a Command. The new target may use Signal Jam but cannot redirect again. |

## 6. Exact ordinary-card recipes

| Card ID | 2 players | 3 players | 4 players | 5 players |
| --- | ---: | ---: | ---: | ---: |
| CM-001 Deep Scan | 2 | 3 | 4 | 5 |
| CM-002 Course Correction | 1 | 2 | 3 | 4 |
| CM-003 Route Scramble | 2 | 3 | 3 | 4 |
| CM-004 Forced Detour | 2 | 3 | 4 | 5 |
| CM-005 Supply Requisition | 2 | 3 | 4 | 4 |
| CM-006 Boarding Probe | 1 | 2 | 3 | 4 |
| CM-007 Vector Flip | 1 | 1 | 2 | 3 |
| CT-001 Emergency Burn | 3 | 4 | 5 | 6 |
| CT-002 Signal Jam | 2 | 3 | 4 | 5 |
| CT-003 Decoy Beacon | 2 | 3 | 4 | 5 |
| **Ordinary-card total** | **18** | **27** | **36** | **45** |

## 7. Complete match recipes

| Players | Ordinary | Personal Reroutes | Extra Reroutes | Crises | Cards used | Initial Flight Deck |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2 | 18 | 2 | 1 | 1 | 22 | 10 |
| 3 | 27 | 3 | 1 | 2 | 33 | 15 |
| 4 | 36 | 4 | 2 | 3 | 45 | 21 |
| 5 | 45 | 5 | 2 | 4 | 56 | 26 |

Cards used includes the five ordinary starting cards and one personal Reroute dealt to every player.

## 8. Initial Flight Deck risk

| Players | Crises | Starting deck | Initial Crisis density |
| ---: | ---: | ---: | ---: |
| 2 | 1 | 10 | 10.0% |
| 3 | 2 | 15 | 13.3% |
| 4 | 3 | 21 | 14.3% |
| 5 | 4 | 26 | 15.4% |

These values are intentionally close but not identical. Pressure, scanning, correction, shuffling, bottom drawing, theft, and Reroutes alter experienced risk during play.

## 9. Balance hypotheses

- Deep Scan plus Course Correction or Vector Flip should create meaningful two-card planning.
- Forced Detour should feel aggressive because it adds future risk without giving the attacker a free escape.
- Emergency Burn should protect against Pressure without protecting against every future turn.
- Signal Jam should give targets certainty; Decoy Beacon should create social redirection.
- Supply Requisition offers target agency; Boarding Probe offers higher variance.
- Extra Reroutes must remain scarce enough to preserve the endgame.
- Five starting ordinary cards should offer choices without emptying high-player decks.

Every hypothesis requires playtest evidence.

