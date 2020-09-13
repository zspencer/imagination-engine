import { deprecate } from './deprecate.js'

// TODO: Remove these!
export const readJson = deprecate(function readJson(path: string)  {
  return JSON.parse(Deno.readTextFileSync(path))
});

// TODO: Remove these!
export const writeJson = deprecate(function writeJson(path: string, object: any)  {
  return Deno.writeTextFile(path, JSON.stringify(object))
});
