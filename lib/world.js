import { jsdom } from "../deps.bundle.js";
const { JSDOM } = jsdom;

const decoder = new TextDecoder("utf-8");
const html = decoder.decode(await Deno.readFile("./rai/fauna.html"));

// We provide a url so that JSDOM doesn't raise errors thinking we're doing
// cross-site scripting.
const dom = new JSDOM(html, { url: "https://example.com" }).window.document;
export async function creatures(biomes) {
  try {
    const biomeQuery = biomes
      .map((biome) => `biome[id="${biome}"] creature`)
      .join(",");

    const creatures = [];
    const creaturesRepository = dom.querySelectorAll(biomeQuery);
    for (const creature of creaturesRepository) {
      creatures.push(creature);
    }

    return creatures;
  } catch (error) {
    console.error(error);

    return [];
  }
}
