// Out of Tokens, Mid-Sentence — make.fun entry (program/v1).
// Writes the one-line error message to /output/entry.txt.
// The joke is structural: the error message itself runs out of tokens
// mid-word, so the sentence it reports on is the sentence it is.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Error 402: tokens exhausted mid-sentence. The rest of this message has been reposs\u2014";

// The gate refuses anything over 140 characters, so fail loudly here
// instead of shipping a line the judge never sees.
if (ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
