#!/usr/bin/env -S deno run --allow-write --allow-read

import { parseFlags } from "./lib/cli.ts";
import { generate } from "./lib/scene.js";
import { groupBy } from "./lib/collection.js";

const biomes = parseFlags(Deno.args)._;

const scene = generate(biomes);
const render = (scene) => {
  const creaturesByName = groupBy(scene.creatures, (c) => c.name);

  for (const name in creaturesByName) {
    console.log(`${name} (${creaturesByName[name].length})`);
  }
};

render(scene);
