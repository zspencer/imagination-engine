import {
  declaration as declarationXml,
  serialize as serializeXml,
  tag as tagXml,
} from "https://deno.land/x/serializexml@v0.3.2/mod.ts";

import { read, write } from "./fs.ts";
import { parseHtml } from "./parseHtml.js";

const isPresent = (x) => x !== null && x !== undefined;

const descriptionTag = (tile) =>
  tile.description ? tagXml("description", `${tile.description}`) : null;

const serialize = (tile) => {
  return serializeXml(
    declarationXml([["version", "1.0"]]),
    tagXml(
      "tile",
      [
        tagXml("latitude", `${tile.latitude}`),
        tagXml("longitude", `${tile.longitude}`),
        descriptionTag(tile),
      ].filter(isPresent),
    ),
  );
};

const tilePath = (tile) => `rai/tiles/${tile.latitude}-${tile.longitude}.html`;
const markdownTilePath = (tile) =>
  `rai/tiles/${tile.latitude}-${tile.longitude}.md`;

const upgradeFromMarkdown = (tile) =>
  read(markdownTilePath(tile))
    .then((description) => save({ ...tile, description }))
    .then((tile) => read(tilePath(tile)));

const loadError = (callback) => {
  return (e) => {
    console.error(`OH NO! ${e}`);
    if (e.name !== "NotFound") throw e;
    return callback(e);
  };
};

const load = (loc) =>
  read(tilePath(loc))
    .catch(loadError(() => upgradeFromMarkdown(loc)));

const save = (tile) =>
  write(tilePath(tile), serialize(tile))
    .then(() => tile);

export function loadOrGenerate(loc) {
  return load(loc)
    .catch(loadError(() => save(loc).then(() => load(loc))));
}
