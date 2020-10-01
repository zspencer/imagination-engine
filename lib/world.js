import { parseHtml } from "./parseHtml.js";
import { read } from "./fs.ts";
import { map, isEmpty } from "./collection.js";
import { compact } from "./string.js";

const asText = (el) => compact(el.textContent);

const fetchSupplement = (element) =>
  fetch(element.getAttribute("location"))
    .then((res) => res.text())
    .then(parseHtml)
    .then((dom) => dom.getElementsByTagName("supplement"));

const addSupplement = (resultDom, supplementDom) => {
  for (const item of supplementDom) {
    resultDom.body.appendChild(item);
  }
  return resultDom;
};

const addSupplements = (dom) =>
  Promise.all(map(dom.querySelectorAll("supplement"), fetchSupplement))
    .then((supplementDoms) => supplementDoms.reduce(addSupplement, dom));

const dom = await read("./rai/world.html")
  .then(parseHtml)
  .then(addSupplements);

class Creature {
  constructor(el) {
    this.el = el;
  }

  get description() {
    return this.asText("description");
  }

  get diet() {
    return this.asText("diet");
  }

  get distinction() {
    return this.asText("distinction");
  }

  get movement() {
    return this.asText("movement");
  }

  get name() {
    return this.asText("name");
  }

  get phenotype() {
    return this.asText("phenotype");
  }

  get personality() {
    return this.asText("personality");
  }

  get sound() {
    return this.asText("sound");
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
  if (isEmpty(biomes)) return [];
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
