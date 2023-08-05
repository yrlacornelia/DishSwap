
import { loadFromLocalStorage } from "./LocalStorageUtils";

export const resultsUtils = (occurrence) => {
  const results = loadFromLocalStorage('results');
  console.log(results);

  if (results) {
    const countMap = results.reduce((map, item) => {
      const itemId = item.idMeal; // Assuming your object has an `idMeal` property, modify this accordingly.
      map[itemId] = (map[itemId] || 0) + 1;
      console.log(map)
      return map;
    }, {});
    console.log(countMap);

    const hi = Object.entries(countMap)
      .filter(([itemId, count]) => count === occurrence)
      .map(([itemId]) => itemId);
      
    const matchingObjects = [];
    for (let i = 0; i < hi.length; i++) {
      const f = results.find(item => item.idMeal === hi[i]);
      if (f) {
        matchingObjects.push(f);
      }
    }
    return matchingObjects;
  } else {
    return []; // Return an empty array instead of null when no results available.
  }
};
