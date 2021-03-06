import { default as jsdom } from "https://dev.jspm.io/jsdom";
const { JSDOM } = jsdom;

export const parseHtml = (html) => {
  // We provide a url so that JSDOM doesn't raise errors thinking we're doing
  // cross-site scripting.
  return new JSDOM(html, { url: "https://example.com" }).window.document;
};
