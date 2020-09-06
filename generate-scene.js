import { jsdom, parse } from "./deps.ts";
import sample from "./lib/sample.js";
const { JSDOM } = jsdom;

const inBiomes = parse(Deno.args)._;
const decoder = new TextDecoder("utf-8");
const html = decoder.decode(await Deno.readFile("./fauna.html"));

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
