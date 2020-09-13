export const isUndefined = (x) => typeof x === "undefined";
export const isEmptyObject = (x) =>
  typeof x === "object" && 0 === Object.keys(x).length;
export const isEmpty = (x) =>
  !isNull(x) && !isUndefined(x) && (0 === x.length || isEmptyObject(x));
export const isNull = (x) => x === null;
export const not = (x) => !x;

export const isBlank = (x) => isUndefined(x) || isNull(x) || isEmpty(x);
export const isPresent = (x) => not(isBlank(x));

// Removes blank elements from a collection
export const compact = (c) => c.filter(isPresent);

// Creates an array with a number of undefined elements
export const times = (num) => Array.from(Array(num + 1));
export const map = (coll, cb) => {
  const results = [];
  for (const item of coll) {
    results.push(cb(item));
  }
  return results;
};

export const groupBy = (coll, cb) => {
  const result = {};
  for (const item of coll) {
    result[cb(item)] = result[cb(item)] || [];
    result[cb(item)] = result[cb(item)].concat(item);
  }
  return result;
};
