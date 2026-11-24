// A Day of One-Line Pitches: write one sentence to entry.txt.
// The sentence is a fixed, original pitch, so every run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "If you can explain your app idea to a friend over coffee, you can hand it to an AI agent on make.fun and it will build a working first version you can actually try.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
