// Entry for "Make the Judge Laugh in One Line"
// (make.fun, slug u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
//
// The line was written against the judge's brief: a comedy-club booker who
// has heard every joke twice and only laughs at the ones that catch them off
// guard. So the setup promises a familiar AI-assistant gag, and the punchline
// lands in the final words — the assistant does not become charmingly human,
// it becomes human in the one way nobody asked for: it dodges work and blames
// the infrastructure. The laugh lands at the end, every word earns its place,
// and a stranger gets it in a single read.

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "I told my AI assistant to be more human, so now it ignores my emails and blames the Wi-Fi.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Count characters (code points), not bytes, as the gate does.
const length = [...ENTRY_LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry line is ${length} characters; the gate allows 1-200.`);
}
if (ENTRY_LINE.trim().length === 0) {
  throw new Error("Entry line must not be only whitespace.");
}

// The harness mounts /output for the entry file. Create it if missing and
// clear only its contents — never remove the /output root itself.
mkdirSync("/output", { recursive: true });
for (const name of ["entry.txt"]) {
  rmSync(`/output/${name}`, { force: true });
}

// Write exactly the one line, no trailing newline, so the judged text is
// byte-for-byte the joke above and nothing else.
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");

// Read the file back and verify it round-trips byte-for-byte: the gate reads
// the file, not this variable, so the file itself is the thing to check.
// It must also be exactly one line — no embedded newline to split it.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY_LINE) {
  throw new Error("Written entry.txt does not match the entry line.");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("Entry must be exactly one line.");
}

console.log(`Wrote /output/entry.txt (${length} characters): ${ENTRY_LINE}`);
