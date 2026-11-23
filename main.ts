// The Vacuum's Alibi: One Line, 200 Characters
// Writes one deadpan excuse from a robot vacuum for missing a spot
// to /output/entry.txt. Deterministic: the same line on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss that spot. I audited it: 94% crumbs, 6% ambition — and promoted it to permanent resident.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  // Count Unicode code points, so multi-byte characters count as one each.
  const length = [...LINE].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file is exactly the one line.
  writeFileSync(OUT_PATH, LINE, "utf8");
  // Read-back check: what landed on disk must be byte-identical to the line.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== LINE) {
    throw new Error("read-back mismatch: entry.txt differs from the line");
  }
  console.log(`wrote ${length} characters to ${OUT_PATH}`);
}

main();
