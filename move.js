#!/usr/bin/env -S deno run --allow-write --allow-read

import { readJson, writeJson } from "./lib/fs.ts";
import { parseFlags } from "./lib/cli.ts";
import { loadOrGenerate } from "./lib/tile.js";
import { translateAll } from "./lib/coordinate.js";

const directions = parseFlags(Deno.args)._;
const loc = await readJson("loc.json");
const newLoc = translateAll(loc, directions);

const destination = await loadOrGenerate(newLoc);

console.log(destination);

await writeJson("loc.json", newLoc);
