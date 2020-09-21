import { move } from "./move.js";
import { generate as scene } from "./scene.js";

const invalidCommand = (command) =>
  (...args) =>
    console.log(
      { status: "invalid", command, args, commands: Object.keys(commands) },
    );

const commands = {
  move,
  scene,
};
export const execute = async (command, args) =>
  (commands[command] || invalidCommand(command))(args);
