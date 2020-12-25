import { readJson, writeJson } from "./fs.ts";
import { loadOrGenerate } from "./tile.js";

export const look = async (directions = []) => {
  const loc = await readJson("loc.json");

  return loadOrGenerate(loc);
};
