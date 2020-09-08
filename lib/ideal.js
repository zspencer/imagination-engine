import { sample } from "./random.ts";

const ideals = [
  "order",
  "justice",
  "heroism",
  "compassion",
  "generosity",
  "pleasure",
  "pragmatism",
  "honor",
  "power",
  "salvation",
  "the ends",
];

export default function ideal() {
  return sample(ideals);
}
