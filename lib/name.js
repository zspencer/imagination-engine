import { roll, sample } from "./random.ts";
import { times } from "./collection.ts";

const syllabi = [
  "arn",
  "ei",
  "ahr",
  "ban",
  "uld",
  "car",
  "irs",
  "daw",
  "mur",
  "cun",
  "vin",
  "cul",
];

export default function name() {
  return times(roll(3))
    .map(() => sample(syllabi))
    .join("");
}
