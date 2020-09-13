import { parseHtml } from "./parseHtml.js";
import { read } from "./fs.ts";
import { map } from "./collection.js";
import { compact } from "./string.js";

const dom = await read("./rai/world.html").then(parseHtml);

class Creature {
  constructor(el) {
    this.el = el;
    this.textContent = el.textContent;
  }

  get name() {
    return compact(this.mapOver("name", (nEl) => nEl.textContent).join(","));
  }
  get description() {
    return compact(
      this.mapOver("description", (nEl) => nEl.textContent).join(","),
    );
  }

  mapOver(selector, callback) {
    return map(this.el.querySelectorAll(selector), callback);
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
