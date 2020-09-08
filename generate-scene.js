#!/usr/bin/env -S deno run --allow-write --allow-read

import { parseFlags } from "./deps.bundle.js";
import { generate } from "./lib/scene.js";

const biomes = parseFlags(Deno.args)._;

const scene = generate(biomes);
scene.creatures.forEach((c) => console.log(c.textContent));
