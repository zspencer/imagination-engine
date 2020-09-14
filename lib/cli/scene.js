import { isPresent, groupBy } from "./../collection.js";

const asText = (attribute) =>
  isPresent(attribute) ? attribute.join(",") : "???";

export const render = (scene) => {
  const creaturesByName = groupBy(scene.creatures, (c) => c.name);

  for (const name in creaturesByName) {
    let creature = creaturesByName[name][0];
    console.group(
      `(${creaturesByName[name].length}) %c${name}`,
      "background-color: fuchsia; font-weight: bold",
    );
    console.log(`%c${asText(creature.size)}`, "color: teal;");
    console.log(`%c${asText(creature.diet)}`, "color: tomato;");
    console.log(`%c${asText(creature.sound)}`, "color: orange;");
    console.log(`%c${asText(creature.phenotype)}`, "color: yellow;");
    console.groupEnd();
  }
};
