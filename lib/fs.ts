const encoder = new TextEncoder();
export const write = (path: string, content: string) => {
  return Deno.writeFile(path, encoder.encode(content));
};

const decoder = new TextDecoder();
export const read = (path: string) => {
  return Deno.readFile(path).then((x) => decoder.decode(x));
};

export function readJson(path: string) {
  return read(path).then(JSON.parse);
}

export function writeJson(path: string, object: any) {
  return write(path, JSON.stringify(object));
}
