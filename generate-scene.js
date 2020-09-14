#!/usr/bin/env -S deno run --allow-write --allow-read --allow-net

import { parseFlags } from "./lib/cli.ts";
import { generate } from "./lib/scene.js";
import { render } from "./lib/cli/scene.js";

const biomes = parseFlags(Deno.args)._;

render(generate(biomes));
