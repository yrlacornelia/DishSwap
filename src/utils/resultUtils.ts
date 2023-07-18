import { loadFromLocalStorage } from "./LocalStorageUtils";

export const resultsUtils = (occurrence) => {
    const results = loadFromLocalStorage('results');
    console.log(results)
    if(results){
    const countMap = results.reduce((map, item) => {
        map[item] = (map[item] || 0) + 1;
        return map;
      }, {});
    console.log(countMap)
    if (countMap <= 0)
    {
       alert("HI")
       return null
    }
    else{
      return Object.entries(countMap)
        .filter(([item, count]) => count === occurrence)
        .map(([item]) => item);}
        
}
else return null
}


  