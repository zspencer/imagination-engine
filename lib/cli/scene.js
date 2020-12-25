import { groupBy, isPresent } from "./../collection.js";

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
    console.log(`size: %c${asText(creature.size)}`, "color: teal;");
    console.log(`eats: %c${asText(creature.diet)}`, "color: tomato;");
    console.log(`sounds: %c${asText(creature.sound)}`, "color: orange;");
    console.log(`looks: %c${asText(creature.phenotype)}`, "color: yellow;");
    console.log(`moves: %c${asText(creature.movement)}`, "color: yellow;");
    console.log(
      `personality: %c${asText(creature.personality)}`,
      "color: teal;",
    );
    console.log(
      `distinction: %c${asText(creature.distinction)}`,
      "color: teal;",
    );
    console.groupEnd();
  }
};
