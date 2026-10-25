# Last Orbit — Prototype Rules v0.1

Status: scripted validation passed; human playtest pending  
Rules ID: `LO-RULES-0.1`  
Supported players: 2–5  
Target duration: 10–15 minutes

## 1. Prototype purpose

Rules v0.1 tests the shared-risk loop, the two-Command turn limit, the Flight Pressure system, targeted interaction, private route information, and Crisis survival.

It deliberately excludes faction powers, Reactor Charge, unique Crisis effects, progression, teams, and finished presentation.

## 2. Objective

Keep your flagship operational. When you encounter a Crisis without using an Emergency Reroute, your flagship is disabled and leaves the rally. The last operational flagship wins immediately.

## 3. Components

The full prototype pool contains:

- 45 ordinary support cards;
- 7 Emergency Reroute cards;
- 8 mechanically identical Crisis cards with different identities.

Each match uses an exact subset based on player count. See Section 6.

## 4. Card types

### Crisis

A lethal route condition. Crisis cards never enter a player's hand.

### Emergency Reroute

A protected response used immediately after drawing a Crisis.

### Command

An action played during your Command Phase. You may play no more than two Commands per turn.

### Countermeasure

A reaction played only at the timing printed on the card. Countermeasures do not count toward the two-Command limit.

## 5. Important areas and terms

- **Flight Deck:** shared face-down draw pile.
- **Mission Log:** shared face-up discard pile.
- **Hand:** a player's private cards.
- **Active flagship:** a player still in the game.
- **Commander:** the player whose turn it is.
- **Flight Pressure:** number of sectors the commander must resolve during the current Flight Phase.
- **Queued Pressure:** extra Pressure waiting for a player's next turn.
- **Sector:** one required Flight Deck draw or one Pressure removed by Emergency Burn.
- **Targeted Command:** a Command naming another active flagship.
- **Reaction window:** the moment in which an eligible target may play a Countermeasure.

## 6. Exact setup

### 6.1 Select the recipe

| Players | Ordinary cards | Starting cards dealt | Extra Reroutes in Flight Deck | Crises | Starting Flight Deck |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 2 | 18 | 10 | 1 | 1 | 10 |
| 3 | 27 | 15 | 1 | 2 | 15 |
| 4 | 36 | 20 | 2 | 3 | 21 |
| 5 | 45 | 25 | 2 | 4 | 26 |

The detailed ordinary-card recipe is in `CARD_CATALOGUE.md` and `prototype/deck-recipes.v0.1.json`.

### 6.2 Prepare the support cards

1. Take the ordinary cards listed for the player count.
2. Set all Crisis and Emergency Reroute cards aside.
3. Shuffle the ordinary cards.
4. Deal five ordinary cards face down to every player.
5. Give every player one Emergency Reroute. Each player therefore starts with six cards.

### 6.3 Prepare the Flight Deck

1. Add the listed number of extra Emergency Reroutes to the undealt ordinary cards.
2. Randomly select a number of Crisis identities equal to players minus one.
3. Reveal the selected Crisis identities to all players.
4. Shuffle those Crisis cards into the undealt cards without revealing their positions.
5. Place the completed Flight Deck face down.
6. Leave space for the Mission Log.

Unused ordinary cards, Reroutes, and Crises remain outside the match. Their published recipe counts remain public.

### 6.4 Begin

Choose the first player randomly. Play proceeds clockwise among active flagships.

Every player begins with zero Queued Pressure.

## 7. Public and private information

### Public

- active and disabled flagships;
- current commander;
- turn direction;
- current and Queued Pressure totals;
- number of cards in every hand;
- number of cards remaining in the Flight Deck;
- all cards in the Mission Log;
- selected Crisis identities;
- Commands, targets, Countermeasures, and resolutions.

### Private

- cards in each hand;
- information seen through Deep Scan;
- exact Crisis and Flight Deck order;
- Crisis reinsertion position;
- random card selected during Boarding Probe until received.

Players may count the Flight Deck, Mission Log, and hand sizes at any time. Players may discuss, bluff, promise, or lie about private information. Agreements are not enforced by the rules.

## 8. Turn structure

A turn has three stages.

### Stage A — Start of Turn

1. Set current Flight Pressure to `1 + Queued Pressure`.
2. Current Flight Pressure cannot exceed four.
3. Reset that player's Queued Pressure to zero.
4. Resolve future start-of-turn effects. None exist in v0.1.

### Stage B — Command Phase

The commander may play zero, one, or two Command cards.

For each Command:

1. Announce the card and any required target.
2. Place it face up in the resolution area.
3. Open the reaction window if it is targeted.
4. Resolve or cancel the Command.
5. Move it to the Mission Log.

A cancelled Command still counts against the two-Command limit. Countermeasures do not count against it.

The commander may not draw voluntarily during the Command Phase.

### Stage C — Flight Phase

Resolve current Flight Pressure one point at a time.

Before each Sector, the commander may play one Emergency Burn. Otherwise, draw the required card from the Flight Deck.

- A safe card enters the commander's hand. Reduce current Flight Pressure by one.
- Emergency Burn removes one current Flight Pressure without drawing.
- If Pressure remains, resolve another Sector immediately. There is no additional Command Phase.
- When Pressure reaches zero, end the turn.
- Drawing a Crisis follows Section 11.

Any unused Vector Flip expires when the turn ends.

## 9. Commands

### CM-001 — Deep Scan

Privately view the top three cards of the Flight Deck, or all remaining cards if fewer than three remain. Return them in the same order.

### CM-002 — Course Correction

Move the top card of the Flight Deck to the bottom without viewing it. If only one card remains, its position does not change.

### CM-003 — Route Scramble

Shuffle the entire Flight Deck without viewing any card.

### CM-004 — Forced Detour

Choose another active flagship with fewer than three Queued Pressure. Add one Queued Pressure to that player.

Forced Detour does not reduce the commander's current Pressure. The commander must still complete their own Flight Phase.

### CM-005 — Supply Requisition

Choose another active flagship with at least one card. That player chooses one card from their hand and gives it to you.

### CM-006 — Boarding Probe

Choose another active flagship with at least one card. Take one random card from that player's hand.

For physical play, the target conceals and mixes their hand before selection. The selected card is private between the affected players unless revealed voluntarily.

### CM-007 — Vector Flip

During your next Sector this turn, draw from the bottom of the Flight Deck instead of the top. Do not inspect either card before drawing.

Only one Vector Flip may be active at a time. It expires after that Sector or when the turn ends.

## 10. Countermeasures and reaction windows

### CT-001 — Emergency Burn

Play during your own Flight Phase immediately before resolving a Sector. Remove one current Flight Pressure instead of drawing. Discard Emergency Burn to the Mission Log.

Emergency Burn does not remove Queued Pressure that has not yet entered a turn.

### CT-002 — Signal Jam

When a Command targets you, cancel that Command. Put Signal Jam and the cancelled Command into the Mission Log. The cancelled Command's effect does not occur.

### CT-003 — Decoy Beacon

When a Command targets you, redirect it to another legal active flagship other than you and the commander. If no such target exists, cancel the Command instead.

Only one Decoy Beacon may be used on a Command. The new target receives a reaction window and may play Signal Jam, but may not play another Decoy Beacon.

After redirection, resolve the Command from the original commander against the new target. Put Decoy Beacon into the Mission Log.

### Reaction priority

1. Only the current target may react.
2. The target may play at most one eligible Countermeasure or decline.
3. If Decoy Beacon changes the target, only the new target receives one additional reaction window. If no legal new target exists, the Command is cancelled and there is no additional window.
4. The new target may use Signal Jam or decline. No further redirection is allowed.
5. No other player may intervene.
6. Signal Jam itself cannot be countered in v0.1.

This bounded reaction structure is deliberate and intended to remain fair online.

## 11. Crisis resolution

When a player draws a Crisis:

1. Reveal it immediately.
2. Do not place it in the player's hand.
3. The player may use one Emergency Reroute from their hand.

### If Emergency Reroute is used

1. Put Emergency Reroute in the Mission Log.
2. Without viewing or changing other cards, secretly insert the Crisis anywhere in the Flight Deck: top, bottom, or between two cards.
3. Set current Flight Pressure to zero.
4. Expire Vector Flip and end the turn immediately.

Emergency Reroute is protected: it cannot be cancelled, redirected, stolen during resolution, or affected by Countermeasures.

Using it is optional. A player may accept elimination even if one is available.

### If Emergency Reroute is not used

1. Disable that flagship.
2. Place the Crisis face up beside the disabled flagship and remove it from the Flight Deck.
3. Place the disabled player's remaining hand face down outside the match. Do not reveal it.
4. Clear all current and Queued Pressure and expire temporary effects.
5. If only one active flagship remains, that player wins immediately.
6. Otherwise, play passes clockwise to the next active flagship.

## 12. Queued Pressure rules

- Queued Pressure is public.
- A player may hold at most three Queued Pressure.
- Their next turn therefore begins with at most four current Flight Pressure: one normal plus three queued.
- Forced Detour cannot target a player already holding three Queued Pressure.
- Redirecting Forced Detour requires a new legal target below the cap.
- Queued Pressure remains until that player's next turn unless they are disabled.
- Emergency Burn affects current Pressure only after the turn begins.

## 13. Card transfer rules

- Emergency Reroute, Commands, and Countermeasures may be transferred or stolen from a hand.
- Crisis cards are never in a hand and cannot be transferred.
- A player with no cards is not a legal target for Supply Requisition or Boarding Probe.
- With Supply Requisition, the target chooses the transferred card.
- With Boarding Probe, selection is random.
- Hand contents remain private after transfer.

## 14. Empty hands and unusual deck states

### Empty hand

A player with no cards takes a normal turn, skips the Command Phase, and resolves Flight Pressure. Safe cards drawn enter their hand normally.

### Fewer than three cards

Deep Scan views all remaining cards and preserves their order.

### Empty Flight Deck

Under correct setup and ordinary play, the Flight Deck cannot become empty while more than one flagship remains because each elimination removes one Crisis with one player. If an implementation reaches an empty Flight Deck with multiple active flagships, stop the match and record a rules-engine defect. Do not reshuffle the Mission Log.

### Invalid action

A card cannot be played without meeting its targeting and timing requirements. Digital play must reject invalid actions without revealing hidden information or consuming the card. In physical play, return the card to the player's hand and correct the state.

### Accidental reveal

Accidental physical information disclosure is handled by agreement among testers and recorded in the playtest log. It does not change the formal rules.

## 15. End of game

The moment only one active flagship remains, that player wins. Do not resolve remaining Pressure, effects, or cards.

## 16. Worked examples

### Example A — Two Commands then Flight

Mira plays Deep Scan and sees a Crisis on top. She plays Course Correction as her second Command, moving that top card to the bottom. She then begins Flight Phase and draws the new top card.

### Example B — Flight Pressure

Taro has two Queued Pressure. His turn begins with three current Pressure. He plays up to two Commands once. During Flight Phase he uses Emergency Burn, reducing Pressure from three to two, then draws two safe cards in sequence. His turn ends.

### Example C — Crisis during extra Pressure

Lio begins Flight Phase with four Pressure. The first draw is a Crisis. Lio uses Emergency Reroute, secretly reinserts it, clears Pressure, and ends the turn. The remaining three Pressure do not continue.

### Example D — Signal Jam

Mira plays Boarding Probe targeting Lio. Lio plays Signal Jam. Boarding Probe is cancelled; both cards enter the Mission Log. It still counts as one of Mira's two Commands.

### Example E — Decoy Beacon

Mira plays Forced Detour targeting Lio. Lio plays Decoy Beacon and redirects it to Taro. Taro may play Signal Jam or decline. Taro cannot play another Decoy Beacon. If Taro declines, Taro gains one Queued Pressure.

### Example F — Two-player Decoy

Mira plays Forced Detour targeting Lio. Lio uses Decoy Beacon. Because there is no third active flagship that can become a legal target, Forced Detour is cancelled. Both cards enter the Mission Log.

### Example G — Vector Flip

After using Deep Scan, Mira wants to avoid the top card. She plays Vector Flip as her second Command. During her next Sector she draws the bottom card. If she had used Emergency Burn for her only Pressure instead, Vector Flip would expire unused at turn end.

## 17. Twenty edge-case answers from Phase 1

1. Announce and target a Command before the reaction window; discard it after resolution or cancellation.
2. Reactions occur only in the printed timing window.
3. Only the current target has reaction priority.
4. Cancelled Commands and the cancelling Countermeasure enter the Mission Log; costs are not refunded.
5. One Decoy redirection and one new-target Signal Jam are the maximum response depth.
6. Crisis drawing and Emergency Reroute cannot be interrupted.
7. Forced Detour queues future Pressure; it does not transfer the commander's current Pressure.
8. Emergency Burn removes exactly one current Pressure.
9. A Crisis never produces a replacement draw.
10. Emergency Reroute ends the entire turn.
11. Deck size, Mission Log, hand sizes, and Pressure may be counted publicly.
12. Random theft uses concealed mixed selection or authoritative digital randomness.
13. There is no named-card request in v0.1.
14. A disabled player's hand leaves the match face down.
15. Disabled players have no persistent effects in v0.1.
16. Play direction never changes in v0.1.
17. An unexpectedly empty deck with multiple players is a defect, not a reshuffle condition.
18. An empty-handed player proceeds normally to Flight Phase.
19. No protected or stored-card zone exists in v0.1.
20. Faction powers do not exist in v0.1.

## 18. Experimental variables and success gate

The following are experiments, not permanent commitments:

- five ordinary starting cards;
- two Commands per turn;
- four maximum current Flight Pressure;
- Emergency Reroute clearing all remaining current Pressure;
- selected Crisis identities revealed during setup;
- bounded target-only reaction windows;
- exact card counts.

Rules v0.1 passes only if:

- scripted validation finds no contradiction or impossible ordinary state;
- a match can be played without inventing a ruling;
- early tests show meaningful choices before draws;
- Pressure creates tension without extended helplessness;
- match length and elimination wait remain acceptable;
- players can explain why an action resolved.

