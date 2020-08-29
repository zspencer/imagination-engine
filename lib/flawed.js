import sample from "./sample.js";

const flaws = [
  "fearful",
  "megalomaniac",
  "idiot",
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
