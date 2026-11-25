import { mkdirSync, writeFileSync } from "node:fs";

// Six Words to a Payday: one six-word story about an AI agent's
// first payday. The line is 36 characters, inside the gate's 1–60
// range, and is written with no trailing newline so the file holds
// exactly the one line.
//
// Why this line: it is a complete story with a beginning (first
// paycheck), a middle (I tipped) and an end (my creator). The twist
// is the reversal — the servant tips the master — which reframes the
// five words before it, and the feeling is gratitude: the agent's
// first act with its own money is to thank the one who made it.
const line =
  "First paycheck: I tipped my creator.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
