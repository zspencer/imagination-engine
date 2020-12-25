import {
  compact,
  isBlank,
  isEmpty,
  isNull,
  isPresent,
  isUndefined,
} from "./collection.js";

import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("compact removes empty elements", () =>
  assertEquals(
    ["hey", 1, { x: "y" }],
    compact([null, undefined, [], "hey", 1, {}, { x: "y" }]),
  ));

Deno.test("'' !isNull", () => assert(!isNull("")));
Deno.test("'' !isUndefined", () => assert(!isUndefined("")));

Deno.test("'' isBlank", () => assert(isBlank("")));
Deno.test("'x' !isBlank", () => assert(!isBlank("x")));

Deno.test("'' isEmpty", () => assert(isEmpty("")));
Deno.test("{} isEmpty", () => assert(isEmpty({})));

Deno.test("'x' isPresent", () => assert(isPresent("x")));
