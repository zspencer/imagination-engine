export { parseFlags } from "../deps.bundle.js";

export { execute } from "./commands.js";
export { render } from "./cli/render.js";

export async function prompt(message: string = "") {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message + ": "));
  const n = <number> await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}
