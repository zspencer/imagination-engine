import { readJson, writeJson } from 'https://deno.land/std/fs/mod.ts';
import { parse } from "https://deno.land/std/flags/mod.ts";

const directions = parse(Deno.args)._

const encoder = new TextEncoder("utf-8");
const locationPath = (loc) => {
  return `loc/loc-${loc.latitude}-${loc.longitude}.md`
}
const loadOrGenerate = async (loc) => {
  try {
    return await Deno.readFile(locationPath(loc));
  } catch(e) {
    if(e.name !== "NotFound") { throw e }
    await Deno.writeFile(locationPath(loc), encoder.encode(''));
    return await Deno.readFile(locationPath(loc));
  }
}

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
const destination = loadOrGenerate(newLoc)

console.log(newLoc)
console.log(decoder.decode(destination));

await writeJson('loc.json', newLoc);




