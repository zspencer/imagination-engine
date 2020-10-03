import { readJson, writeJson } from "./fs.ts";
import { loadOrGenerate } from "./tile.js";
import { translateAll } from "./coordinate.js";

export const move = async (directions = []) => {
  const loc = await readJson("loc.json");
  const newLoc = translateAll(loc, directions);

  const destination = await loadOrGenerate(newLoc);

  await writeJson("loc.json", newLoc);
  return destination;
};
