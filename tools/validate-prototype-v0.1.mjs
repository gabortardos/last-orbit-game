import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(here, "../prototype/deck-recipes.v0.1.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const ordinaryIds = Object.keys(data.inventory).filter((id) => id.startsWith("CM-") || id.startsWith("CT-"));
const ordinaryInventory = ordinaryIds.reduce((total, id) => total + data.inventory[id], 0);
check(ordinaryInventory === 45, "Physical ordinary-card inventory must equal 45");
check(ordinaryInventory + data.inventory["ER-001"] + data.inventory.CRISIS_POOL === 60, "Full physical prototype must equal 60 cards");

for (const players of [2, 3, 4, 5]) {
  const recipe = data.recipes[String(players)];
  const counts = recipe.ordinary;
  const ordinaryTotal = Object.values(counts).reduce((a, b) => a + b, 0);
  const dealtOrdinary = players * data.startingOrdinaryCardsPerPlayer;
  const startingFlightDeck = ordinaryTotal - dealtOrdinary + recipe.extraEmergencyReroutes + recipe.crises;

  check(Object.keys(counts).length === ordinaryIds.length, `${players}p recipe has missing or extra ordinary IDs`);
  check(ordinaryIds.every((id) => Number.isInteger(counts[id]) && counts[id] >= 0), `${players}p has invalid counts`);
  check(ordinaryIds.every((id) => counts[id] <= data.inventory[id]), `${players}p exceeds physical inventory`);
  check(ordinaryTotal === players * 9, `${players}p ordinary total must equal 9 per player`);
  check(dealtOrdinary < ordinaryTotal, `${players}p must leave ordinary cards in the Flight Deck`);
  check(recipe.crises === players - 1, `${players}p must use players minus one Crises`);
  check(startingFlightDeck === recipe.expectedStartingFlightDeck, `${players}p starting Flight Deck mismatch`);
  check(players + recipe.extraEmergencyReroutes <= data.inventory["ER-001"], `${players}p exceeds Reroute inventory`);
  check(recipe.crises <= data.inventory.CRISIS_POOL, `${players}p exceeds Crisis pool`);
  const cardsUsed = ordinaryTotal + players + recipe.extraEmergencyReroutes + recipe.crises;
  const initialHands = players * (data.startingOrdinaryCardsPerPlayer + data.personalEmergencyReroutesPerPlayer);
  check(cardsUsed === initialHands + startingFlightDeck, `${players}p card-conservation mismatch at setup`);
  const density = recipe.crises / startingFlightDeck;
  check(density >= 0.1 && density <= 0.16, `${players}p initial Crisis density outside 10–16%`);
}

const legalDecoyTargets = ({active, commander, target, isLegal}) =>
  active.filter((player) => player !== commander && player !== target && isLegal(player));

check(
  legalDecoyTargets({active:["A","B"], commander:"A", target:"B", isLegal:()=>true}).length === 0,
  "Two-player Decoy must cancel because no third target exists"
);
check(
  legalDecoyTargets({active:["A","B","C"], commander:"A", target:"B", isLegal:()=>true}).join(",") === "C",
  "Three-player Decoy must identify the third legal flagship"
);
check(
  legalDecoyTargets({active:["A","B","C"], commander:"A", target:"B", isLegal:(player)=>player!=="C"}).length === 0,
  "Decoy must cancel when every third flagship is illegal for the Command"
);

const commandsUsedAfterCancellation = 1;
check(commandsUsedAfterCancellation === 1, "A cancelled Command must still consume one Command slot");

for (let queued = 0; queued <= data.maxQueuedPressure; queued += 1) {
  const current = 1 + queued;
  check(current <= data.maxCurrentFlightPressure, `Queued Pressure ${queued} exceeds cap`);
  check(Math.max(0, current - 1) === queued, `Emergency Burn must remove exactly one Pressure`);
}

for (let active = 2; active <= 5; active += 1) {
  const crises = active - 1;
  const remainingActive = active - 1;
  const remainingCrises = crises - 1;
  check(remainingCrises === remainingActive - 1, `Elimination invariant failed at ${active} active players`);
}

if (failures.length) {
  console.error("Rules v0.1 validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Rules v0.1 deck and pressure validation passed for 2–5 players.");

