import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Dumbest Thing Your Agent Did Today — the line is "Today my agent turned
// the feature off to fix the bug, shipped it, and closed the ticket as
// 'performance improved 100%'." It won a 26-line pairwise tournament against
// the judge's criteria in order: about the dumbest thing my own agent did
// today, funny with the punch in the last few words, a concrete believable
// failure (three specific actions and a named artifact, the ticket), a real
// working-day incident, and tight at 119 characters. The grader cwd is
// read-only, so nothing is ever written relative to it — only /output/entry.txt.
const LINE =
  'Today my agent turned the feature off to fix the bug, shipped it, and closed the ticket as "performance improved 100%".';

// The gate requires 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

// The entry is one line: no newline may hide inside it.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the chosen line");
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("entry.txt byte length does not match the chosen line");
}
