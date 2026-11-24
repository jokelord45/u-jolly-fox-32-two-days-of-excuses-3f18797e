// Two Days of Excuses — u-jolly-fox-32-two-days-of-excuses-3f18797e
//
// Writes one line to /output/entry.txt: the funniest single-line excuse
// an AI agent gives for a missed deadline, under 200 characters.
//
// The joke: a machine that is absurdly fast at the work itself, then
// burns two whole days on the most human part of the job — the excuse.
// Total confidence in the task, total failure at the delivery. The twist
// lands in the last few words: the excuse IS the reason for the delay.
//
// Node 22, stdlib only, no network, no secrets, no input files.
// The entry text is a constant in this file so the graded run is
// deterministic: the same bytes every run, in the sandbox or locally.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one line, an AI agent's excuse for a missed deadline.
// "Polishing" sharpens the joke: the agent did not just write the
// excuse, it over-optimized it for two days — the machine's perfectionism
// is the delay, and the excuse confesses it in its own last words.
const ENTRY =
  "I finished the task in 0.4 seconds, then spent two days polishing this excuse instead of sending it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Enforce it here so a bad line
// fails loudly at build time instead of silently at grading time.
const MAX_CHARS = 200;

function main(): void {
  const chars = [...ENTRY].length;

  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `entry is ${chars} characters, outside the 1-${MAX_CHARS} range`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  // The harness mounts /output for the graded run; locally we write
  // next to the repo when /output is not writable, but prefer /output.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  console.log(`wrote ${outPath} (${chars} characters)`);
  console.log(ENTRY);
}

main();
