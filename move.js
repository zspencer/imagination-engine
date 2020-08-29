import { readJson, writeJson } from 'https://deno.land/std/fs/mod.ts';
import { parse } from "https://deno.land/std/flags/mod.ts";

const directions = parse(Deno.args)._

const translate = (loc, direction) => {
  if(direction == "north") {
    return { ...loc, latitude: loc.latitude + 1 }
  }
  if(direction == "south") {
    return { ...loc, latitude: loc.latitude - 1 }
  }

  if(direction == "west") {
    return { ...loc, longitude: loc.longitude + 1 }
  }

  if(direction == "east") {
    return { ...loc, longitude: loc.longitude - 1 }
  }
}
const loc = await readJson('loc.json');
const newLoc = directions.reduce((loc, direction) => translate(loc, direction), loc)

const decoder = new TextDecoder("utf-8");
const des = await Deno.readFile(`loc-${newLoc.latitude}-${newLoc.longitude}.md`);

console.log(decoder.decode(des));

await writeJson('loc.json', newLoc);




