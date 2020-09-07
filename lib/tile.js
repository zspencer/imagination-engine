const locationPath = (loc) => {
  return `loc/loc-${loc.latitude}-${loc.longitude}.md`;
};

const decoder = new TextDecoder("utf-8");
const load = async (loc) =>
  decoder.decode(await Deno.readFile(locationPath(loc)));

const encoder = new TextEncoder("utf-8");
const generate = async (loc) =>
  Deno.writeFile(
    locationPath(loc),
    encoder.encode(`## ${loc.latitude}, ${loc.longitude}`),
  );

export async function loadOrGenerate(loc) {
  try {
    return await load(loc);
  } catch (e) {
    if (e.name !== "NotFound") {
      throw e;
    }
    await generate(loc);
    return await load(loc);
  }
};
