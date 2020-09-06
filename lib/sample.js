import roll from "./roll.js";

export default function sample(array) {
  return array[roll(array.length)];
}
