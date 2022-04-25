#!/usr/bin/env -S deno run --unstable --watch --allow-write --allow-read --allow-net
import { read } from "./lib/fs.ts";

const sample = (coll: Array<any>) =>
  coll[Math.floor(Math.random() * coll.length)];
const row = (width: number, svgs: string[]) =>
  Array.from({ length: width }, () => sample(svgs));

const grid = (count: number, svgs: string[]) =>
  Array.from({ length: count * 3 }, () => row(count, svgs));

// Start listening on port 8080 of localhost.
const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

const world = Deno.args[0];
const svgs: string[] = [];
for await (const dirEntry of Deno.readDir(`${world}/tileset`)) {
  console.log(dirEntry);
  if (dirEntry.name.startsWith("tile.")) {
    read(`${world}/tileset/${dirEntry.name}`).then((svgFile) =>
      svgs.push(svgFile)
    );
  }
}

const styles = await read(`${world}/styles.css`);
const scripts = await read(`${world}/scripts.js`);
// Connections to the server will be yielded up as an async iterable.
for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);

}


async function serveHttp(conn: Deno.Conn) {
  // This "upgrades" a network connection into an HTTP connection.
  const httpConn = Deno.serveHttp(conn);
  // Each request sent over the HTTP connection will be yielded as an async
  // iterator from the HTTP connection.
  for await (const requestEvent of httpConn) {
    const body = `<html><style>${styles}</style><body><div class="grid">${grid(7, svgs).map(
      (row) => `<div class="row">${row.join("")}</div>`
    ).join("")}</div><script>${scripts}</script></body></html>`;

    // The requestEvent's `.respondWith()` method is how we send the response
    // back to the client.
    requestEvent.respondWith(
      new Response(body, {
        status: 200,
        headers: { "content-type": "text/html" },
      })
    );
  }
}
