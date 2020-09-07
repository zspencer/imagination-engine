export const translations = {
  north: (loc) => ({ ...loc, latitude: loc.latitude + 1 }),
  south: (loc) => ({ ...loc, latitude: loc.latitude - 1 }),
  west: (loc) => ({ ...loc, longitude: loc.latitude + 1 }),
  east: (loc) => ({ ...loc, longitude: loc.latitude - 1 }),
};

export const translate = (loc, direction) => translations[direction](loc);
export const translateAll = (loc, directions) =>
  directions.reduce(translate, loc);
