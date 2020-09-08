import { sample, roll, times } from "./random.ts";
import { creatures } from "./world.js";

export function generate(biomes) {
  return {
    creatures: times(roll(5)).map(() => sample(creatures(biomes))),
  };
}
