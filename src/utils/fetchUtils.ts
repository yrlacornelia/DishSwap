import { getId } from "../pages/game/endGame";

export const fetchMeals = async (numMeals) => {
    try {
      const fetchedMeals = [];
      for (let i = 0; i < numMeals; i++) {
        const response = await fetch("");
        const data = await response.json();
        fetchedMeals.push(data.meals[0]);
 
      }
      return fetchedMeals;
    } catch (error) {
      throw new Error("Failed to fetch meals");
    }
  };
  
  export async function getProductIds(id) {
const number = getId(id)
    return number
  }
  export async function getProductData(productId) {
    console.log(productId)
    try {
      // Make an API request to get the product data based on the "productId"
      const response = await fetch(``);
      const data = await response.json();
  
      return data.meals[0]
    } catch (error) {
      console.error(`Error fetching product data for productId ${productId}:`, error);
      return null;
    }
  }