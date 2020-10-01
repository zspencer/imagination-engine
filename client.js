#!/usr/bin/env -S deno run --unstable --watch --allow-write --allow-read --allow-net
import { prompt, execute, render } from "./lib/cli.ts";

let lastCommand = "";
while (lastCommand != "quit") {
  const input = await prompt("what next? ");
  let [cmd, ...args] = input.split(" ");
  await execute(cmd, args)
    .then(render(cmd))
    .then(() => lastCommand = cmd);
}
