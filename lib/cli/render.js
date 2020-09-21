import { render as scene } from "./scene.js";

const renderers = {
  scene,
};
export const render = (cmd) => renderers[cmd] || console.log;
