import { parseHtml } from "./parseHtml.js";
import { read } from "./fs.ts";
import { map } from "./collection.js";
import { compact } from "./string.js";

const dom = await read("./rai/world.html").then(parseHtml);
const asText = (el) => compact(el.textContent);

class Creature {
  constructor(el) {
    this.el = el;
  }

  get name() {
    return this.asText("name");
  }

  get diet() {
    return this.asText("diet");
  }

  get description() {
    return this.asText("description");
  }

  get distinction() {
    return this.asText("distinction");
  }

  get size() {
    return this.asText("size");
  }

  get sound() {
    return this.asText("sound");
  }

  mapOver(selector, callback) {
    return map(this.el.querySelectorAll(selector), callback);
  }

  asText(selector) {
    return this.mapOver(selector, (x) => compact(asText(x)));
  }
}

export function creatures(biomes) {
  const biomeQuery = biomes
    .map((biome) => `creature[biomes~="${biome}"]`)
    .join(",");

  const creatures = [];
  const creaturesRepository = dom.querySelectorAll(biomeQuery);
  for (const creatureEl of creaturesRepository) {
    creatures.push(new Creature(creatureEl));
  }

  return creatures;
}
