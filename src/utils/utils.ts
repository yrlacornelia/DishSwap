// utils.ts

import { Meal } from "../lib/data";
export const getRandomMeal = (meals: Meal[]): Meal => {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
};
