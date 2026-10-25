# LAST ORBIT — PHASE 1

## Reference Mechanics Ledger and Originality Map

Status: first design pass  
Date: 25 October 2026  
Reference scope: current *Exploding Kittens: Original Edition* base rules, not expansions  
Project relationship: independent side project; no Solar System Explorer code or documents changed

## 1. Purpose

This phase identifies the functional design beneath the reference game, including its small but important timing rules and edge cases. It then determines what Last Orbit should retain as a general experience, what it should change, and what it should reject.

The goal is not to duplicate the reference game with planetary artwork. Last Orbit needs to preserve the useful emotional loop—anticipation, incomplete information, bluffing, interference, and escalating risk—while developing its own rule structure, fictional logic, faction play, visual identity, and strategic decisions.

## 2. Authoritative reference baseline

The current official Original Edition rules describe a 56-card game for 2–5 players. The important current details are:

- Each player starts with seven random cards plus one guaranteed survival card.
- The draw deck receives one fatal hazard fewer than the number of players.
- Only two unused survival cards are returned to the deck, except that a five-player game has only one unused survival card available.
- For faster two- and three-player games, the rules recommend randomly removing roughly one-third of the ordinary deck before adding hazards.
- Players may play any number of actions or none, then normally draw one card to end their turn.
- There is no hand-size limit and no special compensation for having an empty hand.
- Current special combinations use two or three cards with the same title. The older five-different-card combination is not present in the current official sheet.
- Attack obligations stack. If a player completes part of an obligation before transferring it, only the remaining turns transfer, plus the new attack amount.
- A skip ends only one owed turn.
- A cancellation may be played by any player before an action begins, including outside their own turn. Cancellation can itself be cancelled repeatedly.
- Fatal hazards and survival responses cannot be cancelled.

Primary source:

- Exploding Kittens, *Original Edition Official Instructions*, 2025 edition: https://cdn.shopify.com/s/files/1/0345/9180/1483/files/ekoe-instructions-english.pdf?v=1743802429
- Official rules page: https://www.explodingkittens.com/pages/rules-kittens

## 3. Reference mechanics ledger

| ID | Reference mechanism | Functional purpose | Why it works | Weakness or risk | Last Orbit decision |
| --- | --- | --- | --- | --- | --- |
| R01 | One fatal card fewer than players | Guarantees one eventual survivor | Makes the victory condition self-resolving and easy to understand | Produces player elimination and may feel predetermined | **Retain function** for prototype; reassess elimination after tests |
| R02 | Every player receives one guaranteed survival card | Prevents frequent helpless first-turn elimination | Gives everyone at least one dramatic escape | Players may feel safe until survival cards are consumed | **Retain function**, with an original survival system and terminology |
| R03 | Seven random cards plus one survival card | Gives early tactical options | Players begin with enough tools to form plans | Large starting hands make teaching harder and shrink the deck at high player counts | **Change**: test smaller five-card starting support hand plus one survival card |
| R04 | Only a limited number of extra survival cards enter the deck | Keeps survival scarce | Creates competition and theft targets | Luck in drawing extra survival can dominate | **Retain scarcity**, but test one extra survival at low counts and two at high counts |
| R05 | Randomly remove roughly one-third for faster 2–3 player games | Prevents an oversized deck and slow low-player games | Preserves tension with fewer dealt hands | Random removal can accidentally remove too much of one useful effect | **Change**: use exact player-count deck recipes rather than blind removal |
| R06 | Play any number of cards, or none, then draw | Gives control before mandatory risk | Very simple rhythm; suspense naturally builds toward the draw | Unlimited action chains can slow turns and enable explosive combos | **A/B test** against a two-command limit |
| R07 | Drawing normally ends the turn | Makes every turn culminate in risk | Strong pacing and anticipation | Rules need precise exceptions for actions that end turns without drawing | **Retain function** as the central pulse of the game |
| R08 | Hidden hands and public discard pile | Supports bluffing while allowing some card counting | Players infer resources without perfect knowledge | Experienced players gain a large memory advantage | **Retain**, with a digital discard/history viewer |
| R09 | No hand-size limit | Avoids upkeep and discarding rules | Keeps the game accessible | Hoarding can create long turns and runaway power | **Do not commit**; observe hand growth in prototype tests |
| R10 | Fatal hazard causes immediate elimination unless answered | Creates the central fear | Resolution is dramatic and fast | Failure may feel arbitrary; eliminated players wait | **Retain for first prototype**, but test alternative damaged-ship mode later |
| R11 | Survival response secretly reinserts hazard anywhere in deck | Converts survival into bluffing, revenge, and memory play | The survivor gains agency and the whole table becomes suspicious | Exact reinsertion can create targeted, nearly certain elimination | **Retain the hidden-relocation function**, but create fiction that logically supports relocation |
| R12 | Attack ends current turn without drawing and gives next player two turns | Combines self-protection with aggression | One card changes both risk owner and tempo | Can create punishing chains and targets only the next player | **Transform** into an original pressure-transfer system; test targeted and directional versions |
| R13 | Attacks stack and transfer remaining obligation plus two | Creates spectacular escalation | Easy arithmetic and social drama | Large debts can become functionally unwinnable and confusing | **Cap or soften** attack debt during initial testing |
| R14 | Skip ends one current turn without drawing | Provides a clean escape | Easy to understand and tactically valuable | Closely overlaps attack as self-protection | **Retain function**, but distinguish emergency escape from offensive transfer |
| R15 | Future-view examines top three without reordering | Rewards information and memory | Creates private knowledge and bluffing | Weak if immediately followed by shuffle; can slow physical handling | **Retain function**; exact number depends on deck size |
| R16 | Shuffle destroys known deck order | Resets danger when information is bad | Clean counter to future knowledge and secret placement | Repeated shuffle can erase strategy and return play to pure luck | **Retain sparingly** and track frequency |
| R17 | Favor forces a chosen opponent to give a card of their choice | Creates negotiation and targeting without guaranteed theft | Victim retains limited agency | Often produces an unimportant card and may feel weak | **Transform** into a trade/requisition effect with more interesting choices |
| R18 | Cancellation may stop almost any action | Creates table-wide participation and surprise | Players remain engaged outside their turns | Broad cancellation can be frustrating and generate timing disputes | **Retain a narrower reaction system** with a visible response window |
| R19 | Cancellation can cancel cancellation | Produces memorable reversals | Simple odd/even resolution | Long chains become noisy; physical timing can be unfair | **Retain at most one or two response layers initially**, then test full chains |
| R20 | Fatal hazard and survival response cannot be cancelled | Protects the core game loop | Prevents arguments and unavoidable counterplay | Must be clearly stated | **Retain principle**: core hazard resolution is protected |
| R21 | Two matching titles steal a random card | Gives duplicate cards alternative value | Encourages collection and creates surprise | Sacrificing strong actions as a pair may be unintuitive | **Replace** with original crew/module set bonuses |
| R22 | Three matching titles request a named card | Rewards information and risk-taking | Bluffing about possession becomes relevant | High collection requirement; can be devastating when certain | **Transform** into specialized boarding/espionage sets |
| R23 | Blank themed cards have no solo power | Supplies collectable combo material | Keeps individual reading burden low | Dead cards can feel disappointing and are heavily derivative in structure | **Reject**; every Last Orbit crew/module card should have at least minor solo value |
| R24 | Any active player may cancel before an action begins | Maintains attention outside turns | Encourages temporary alliances and kingmaking | “Before it begins” is vague in digital latency and physical play | **Formalize** with a clear reaction window and priority rule |
| R25 | Deck size may be counted openly | Makes risk calculable | Lets players feel clever and see tension rising | Exact odds can slow analytical players | **Retain visible deck count**, but not an automatic hazard probability display in standard mode |
| R26 | When eliminated, hazard remains visible and other cards stay face down | Shows player status without revealing all lost information | Keeps remaining uncertainty intact | Removed cards may make deck inference uneven | **Retain hidden eliminated hands**; show disabled flagship clearly |
| R27 | Clockwise turn order | Creates predictable targeting and attack direction | Very easy to follow | Player immediately downstream may be repeatedly punished | **Change later** through limited trajectory/target choice, not constant reversal chaos |
| R28 | Last active player wins | Immediate and universal objective | No scoring explanation required | Encourages kingmaking and waiting after elimination | **Retain for core mode**; consider score/team variants only after validation |

## 4. Edge cases and timing requirements Last Orbit must explicitly solve

The reference design exposes a group of rules that must not be left to assumption in our prototype:

1. Whether an action is announced, paid, placed in discard, and resolved as separate steps.
2. Exactly when reactions may be played.
3. Who has priority if several players react simultaneously.
4. What happens to a cancelled card and any costs already paid.
5. Whether reactions may respond to other reactions and how deep the chain may go.
6. Which core events cannot be interrupted.
7. Whether an extra-turn attack ends all current obligations or transfers only remaining obligations.
8. Whether an escape card removes one obligation or the whole stack.
9. Whether the player who survives a catastrophe draws a replacement card.
10. Whether surviving immediately ends the turn.
11. Whether players may count the deck, discard pile, and opponents' hand sizes.
12. How random theft is performed digitally and physically.
13. What happens when a requested named card is not present.
14. What happens to an eliminated player's hand.
15. Whether an eliminated player's persistent effects disappear.
16. Whether play direction can change and how it affects pending obligations.
17. What happens if the deck becomes empty unexpectedly.
18. Whether a player with no cards may still pass and draw normally.
19. Whether a protected or stored card counts as part of the hand.
20. Whether faction powers use the same reaction system as cards.

Rules v0.1 must answer all twenty before closed-hand testing.

## 5. Emotional experience map

The useful structure is not “cats in space.” It is this emotional sequence:

1. **Low danger:** players gather tools and watch one another.
2. **First information:** someone learns or suspects where danger is.
3. **Uncertainty:** other players cannot tell whether that player is bluffing.
4. **Displacement:** danger is skipped, shuffled, transferred, or secretly relocated.
5. **Accusation:** the table reacts to who was targeted and why.
6. **Resource loss:** defensive options disappear over time.
7. **Compression:** the deck shrinks and every draw becomes more meaningful.
8. **Final confrontation:** remaining players have partial information and fewer escapes.
9. **Resolution:** one short dramatic event decides the winner.

Last Orbit should preserve this escalation while adding more meaningful sacrifice and faction identity.

## 6. Weaknesses we should improve

### 6.1 Excessive luck

The game must contain uncertainty, but players need to believe their choices influenced survival. Last Orbit should test controlled decisions such as sacrificing cards for charge, selecting a trajectory, or deciding between information and protection.

### 6.2 Player elimination

Elimination is appropriate for a 10–15 minute match but becomes unpleasant if a five-player game continues for another fifteen minutes. We will measure the longest wait, not merely total duration.

### 6.3 Downstream targeting

Directional attacks can repeatedly punish the next player. Last Orbit should eventually mix directional pressure with limited targeted actions and defensive redirection.

### 6.4 Dead combination cards

Cards that do nothing alone simplify the rules but often disappoint. Our crew and ship modules should have modest standalone effects and stronger set interactions.

### 6.5 Unlimited action turns

Allowing unlimited actions is elegant but can produce lengthy turns and difficult-to-follow chains. A maximum of two Command actions is a promising differentiator to test.

### 6.6 Cancellation ambiguity

Digital play requires a defined response window. The interface must not make players hammer a button faster than opponents. Priority and timeout behaviour must be deterministic.

### 6.7 Theme-mechanic mismatch

“Survive a catastrophe and then put the catastrophe somewhere else in time” needs fictional justification. Before final naming, the hazard must be something that a ship can logically redirect, re-arm, reroute, or conceal.

## 7. Originality map

| Experience function | Reference implementation | Last Orbit direction | Originality status |
| --- | --- | --- | --- |
| Hidden lethal risk | Exploding creature in draw deck | Redirectable route hazard, trap, or unstable phenomenon | Needs final fiction and name |
| Guaranteed first escape | Personal Defuse | Emergency ship system issued during setup | Function retained; expression new |
| Secret hazard placement | Return fatal card anywhere | Recalculate or sabotage the shared flight route | Retained function with new fiction |
| Risk avoidance | Skip | Emergency maneuver that consumes one flight obligation | Common function; new presentation |
| Risk transfer | Attack next player with two turns | Pressure/trajectory transfer with a tested debt cap | Structurally modified |
| Private information | View top three | Navigation scan of upcoming route segments | Common function; theme-integrated |
| Information destruction | Shuffle | Recompute route / gravitational turbulence | Common function |
| Forced transfer | Victim gives chosen card | Requisition, trade ultimatum, or salvage claim | Needs stronger choice design |
| Global counter | Any-player cancellation | Limited communications interference/reaction protocol | Narrower and formally timed |
| Matching-card theft | Pairs and triples | Crew teams, ship modules, or mission sets with solo utility | Rebuilt |
| Player identity | No asymmetric base faction | Eight planetary civilizations with tested powers | Major new layer |
| Resource sacrifice | None in base rules | Reactor Charge: sacrifice card value to power civilization | Proposed signature mechanic |
| Spatial context | Abstract table order | Planetary route/orbit context in a later module | Proposed signature layer |
| Presentation | Static comic cat cards | Cinematic planetary races, flagships, reactions, and readable cards | Fully original requirement |

## 8. Minimum originality target

Before public release, Last Orbit should contain at least three proven structural differences, not merely renamed cards. The current candidates are:

1. A limited Command economy instead of unlimited action play.
2. Planetary civilizations with simple, readable asymmetry.
3. Reactor Charge or a superior sacrifice-based resource system.
4. Crew/module cards that work alone and form functional teams.
5. A route, orbit, or solar-weather layer that changes decisions without overwhelming the card game.

The first prototype will not test all five simultaneously. Original systems will be introduced one at a time so their effects can be measured.

## 9. Phase 1 provisional design decisions

### Accepted for the first prototype

- Last active flagship wins.
- Base support covers 2–5 players.
- One lethal hazard fewer than the number of players.
- Every player begins with one survival response.
- Hands remain hidden; discard and deck count are public.
- A normal turn culminates in one mandatory draw.
- Survival includes secret hazard relocation.
- Information, shuffle, escape, pressure, card transfer, theft, and reaction functions are represented.
- Exact deck recipes are used for each player count.

### Changed from the reference baseline

- Starting support hand initially targets five cards plus one survival card, not seven plus one.
- Low-player decks use designed recipes rather than randomly removing a third.
- Blank combination-only cards are excluded.
- Reactions use a formal timing window.
- Attack debt will have a provisional cap.
- A two-Command-per-turn alternative will be tested against unlimited play.

### Deferred

- Final hazard name and fiction.
- Final card names.
- Faction powers.
- Reactor Charge.
- Planetary route/environment system.
- Non-elimination or damaged-ship mode.
- Team and score modes.
- Expansion bodies and factions.

## 10. Risks specific to Last Orbit

| Risk | Likelihood | Impact | Early mitigation |
| --- | --- | --- | --- |
| Feels like a space reskin | High without signature systems | Critical | Require structural originality gates before visual production |
| Eight factions create balance overload | High | High | Test core without powers; introduce four factions first |
| Scientific setting conflicts with absurd comedy | Medium | Medium | Use real planetary facts as comic foundations, not strict simulation rules |
| 3D spectacle slows a short card game | High later | High | Measure presentation time separately; keep animation skippable |
| Eliminated players wait too long | Medium | High | Target short matches and record actual wait time |
| Too many reactions create digital friction | Medium | High | Narrow reaction eligibility and use deterministic windows |
| Reactor Charge rewards hoarding | Medium | Medium | Test public costs, charge caps, and expiry alternatives |
| Mobile UI hides the game state | Medium | High | Treat readable hand, target, deck, and turn debt as non-negotiable |

## 11. Phase 1 gate assessment

### Result: PROVISIONAL PASS

The concept has a viable emotional core and enough room for an original game, provided that development does not stop at renaming the reference cards.

The strongest opportunity is the combination of:

- escalating shared-deck risk;
- eight memorable planetary civilizations;
- resource sacrifice through Reactor Charge or an improved alternative;
- a later lightweight orbital context;
- cinematic but readable digital consequences.

The greatest immediate design problem is the hazard fiction. Its mechanical behaviour—draw, survive, secretly reinsert—must make sense in the world. Resolving that is part of the next rules phase.

## 12. Next phase

Proceed to **Phase 2A: Core Experience Decisions**, then **Phase 3: Rules v0.1 and exact deck recipes**.

Before freezing the first rules, the owner should confirm or revise:

1. Family-accessible layered humour.
2. Ship disabled/towed-home elimination.
3. 3–5 players as primary, with dedicated 2-player support.
4. 10–15 minute target match length.
5. Science-inspired comic fantasy.
6. No faction powers in the first core test.
7. Whether to test two Commands per turn first, or unlimited actions first.

