#!/usr/bin/env -S deno run --no-check --allow-write --allow-read --unstable

import { readJson, writeJson, parseFlags } from "./deps.bundle.js";
import { loadOrGenerate } from './lib/tile.js'
import { translateAll } from './lib/coordinate.js'

const directions = parseFlags(Deno.args)._;
const loc = await readJson("loc.json");
const newLoc = translateAll(loc, directions)

const destination = await loadOrGenerate(newLoc);

console.log(destination);

await writeJson("loc.json", newLoc);
