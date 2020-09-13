export const roll = (sides: number) => Math.floor(Math.random() * sides);
export const sample = (array: []) => array[roll(array.length)];
