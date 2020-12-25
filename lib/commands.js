import { look } from "./look.js";
import { move } from "./move.js";
import { generate as scene } from "./scene.js";

const invalidCommand = (command) =>
  (args) =>
    `invalid command "${`${command} ${args}`.trim()}" try ${
      Object.keys(commands)
    }`;

const commands = {
  look,
  move,
  scene,
  quit: () => "ok",
};
export const execute = async (command, args) =>
  (commands[command] || invalidCommand(command))(args);
