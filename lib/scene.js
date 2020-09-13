import { sample, roll } from "./random.ts";
import { creatures as creaturesFactory } from "./world.js";
import { compact, times } from "./collection.js";

export function generate(biomes) {
  const availableCreatures = creaturesFactory(biomes);
  const creatures = times(roll(5)).map(() => sample(availableCreatures));
  return { creatures: compact(creatures) };
}
