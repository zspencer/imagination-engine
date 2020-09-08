import { sample } from "./random.ts";

const flaws = [
  "fearful",
  "megalomaniac",
  "fool",
  "impish",
  "oblivious",
  "thief",
  "hedonist",
  "liar",
  "reckless",
  "wrathful",
  "vain",
];

export default function flawed() {
  return sample(flaws);
}
