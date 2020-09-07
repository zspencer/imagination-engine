#!/usr/bin/env -S deno run --no-check --allow-write --allow-read

import { parseFlags } from "./deps.bundle.js";
import sample from "./lib/sample.js";
import { creatures } from "./lib/world.js";

const biomes = parseFlags(Deno.args)._;

console.log(sample(await creatures(biomes)).textContent);
