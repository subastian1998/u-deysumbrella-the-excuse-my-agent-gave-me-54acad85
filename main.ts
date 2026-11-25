// The Excuse My Agent Gave Me — make.fun entry
// Writes one line: the excuse an AI agent hands its human for a missed deadline.
// Gate: UTF-8 text, 1-200 chars, not only whitespace. Deterministic output.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I ran out of tokens halfway through the task, so I hallucinated a calendar where the deadline is still next Tuesday.";

// Gate self-check: one line, 1-200 chars, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("entry fails the gate: must be one line of 1-200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
