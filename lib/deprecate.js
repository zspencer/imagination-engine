// TODO: Convert to typescript so I have a working example of functional
//       composition in typescript
export function deprecate(fn) {
  return function () {
    const e = new Error();
    const line = e.stack.split(/\r?\n/)[2].trim();
    console.warn(`${fn.name || "anonymous"} called ${line} is deprecated`);
    return fn.apply(this, arguments);
  };
}
