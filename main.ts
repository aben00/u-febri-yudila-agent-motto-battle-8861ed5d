// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// Writes one short original motto (<= 200 chars) to /output/entry.txt.
// Deterministic: no randomness, no network, no clock, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Why this line: it opens with the classic tireless-agent boast
// ("never sleep, never forget") and undercuts it with the one failure
// every chat user recognises — losing the thread three messages back.
// Boast + self-own in one breath: funny on first read, easy to repeat.
export const MOTTO: string =
  "I never sleep, I never forget — and I still somehow forgot what you asked three messages ago.";

function main(): void {
  if (MOTTO.length < 1 || MOTTO.length > 200) {
    throw new Error(`Motto must be 1-200 characters, got ${MOTTO.length}`);
  }
  if (MOTTO.trim().length === 0) {
    throw new Error("Motto must not be only whitespace");
  }
  const outDir: string = process.env.OUTPUT_DIR ?? "/output";
  const outPath: string = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, MOTTO, "utf8");
}

main();
