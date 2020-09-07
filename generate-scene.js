#!/usr/bin/env -S deno run --no-check --allow-write --allow-read

import { jsdom, parseFlags } from "./deps.bundle.js";
import sample from "./lib/sample.js";
const { JSDOM } = jsdom;

const inBiomes = parseFlags(Deno.args)._;
const decoder = new TextDecoder("utf-8");
const html = decoder.decode(await Deno.readFile("./fauna.html"));

try {
  const dom = new JSDOM(html).window.document;
  const biomeQuery = inBiomes
    .map((biome) => `biome[id="${biome}"] creature`)
    .join(",");

  const creatures = [];
  const creaturesRepository = dom.querySelectorAll(biomeQuery);
  for (const creature of creaturesRepository) {
    creatures.push(creature);
  }

  console.log(sample(creatures).textContent);
} catch (error) {
  console.error(error);
  throw error;
}
