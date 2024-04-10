import { getId } from "../pages/game/endGame";
// https://www.themealdb.com/api/json/v1/1/random.php
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}

//alla categegorier
// sökväg kategorier 
// sök ?? 
export const fetchMeals = async (numMeals) => {
    try {
      const fetchedMeals = [];
      for (let i = 0; i < numMeals; i++) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        const data = await response.json();
   console.log(data)
        fetchedMeals.push(data.meals[0]);
      } 
        console.log(fetchedMeals)
      return fetchedMeals;
    } catch (error) {
      throw new Error("Failed to fetch meals");
    }
  };
  export const fetchVegoMeals = async (numMeals) => {
    try {
      const fetchedMeals = [];
  
        const response = await fetch("");
        const data = await response.json();
        const meals = data.meals
        console.log(meals.length)
     // for (let i = 0; i < numMeals; i++) {
     for (let i = 0; i < numMeals; i++) {
      const randomMeal =  Math.floor(Math.random() * meals.length);
      fetchedMeals.push(data.meals[randomMeal]);
     }
      // }
console.log(fetchedMeals)
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
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`);
      const data = await response.json();
  
      return data.meals
    } catch (error) {
      console.error(`Error fetching product data for productId ${productId}:`, error);
      return null;
    }
  }