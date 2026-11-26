// Deadpan Forecasts for Cities That Do Not Exist — entry program (Node, no dependencies).
// Writes one deadpan weather forecast line to stdout and, when an
// output directory is available, to entry.txt inside it.
// Gate: the entry must be UTF-8 text of 1 to 160 characters, not only
// whitespace, a single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Tonight in Vellmoor: 12 degrees, scattered showers of light rain, and a 70 percent chance the fog will be back by morning, uninvited, as usual.";

const length = [...LINE].length;
if (length === 0 || length > 160) {
  throw new Error(`entry is ${length} characters, outside the 1-160 character limit`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line, with no line breaks");
}

process.stdout.write(LINE + "\n");

// Resolve the output directory: the harness-provided env var wins, else the
// sandbox's /output. Create it when missing instead of silently skipping the
// write — a missing entry.txt would fail the gate with no trace of why.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outputDir, { recursive: true });
} catch (error) {
  throw new Error(`cannot create output directory ${outputDir}: ${(error as Error).message}`);
}
const entryPath = join(outputDir, "entry.txt");
try {
  writeFileSync(entryPath, LINE, "utf8");
} catch (error) {
  throw new Error(`cannot write ${entryPath}: ${(error as Error).message}`);
}
