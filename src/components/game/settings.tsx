import { useState } from 'react';
import { saveToLocalStorage } from '../../utils/LocalStorageUtils';
import meals, { Meal } from '../../lib/data';
import { fetchMeals } from '../../utils/fetchUtils';

const Settings = () => {
  const [numPlayers, setNumPlayers] = useState<number>(1);
  const [numMeals, setNumMeals] = useState<number>(1);

  const handleNumPlayersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumPlayers(value);
  };

  const handleNumMealsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumMeals(value);
  };

  const handleSave = async () => {
    const data = {
      numPlayers,
      numMeals,
    };

    saveToLocalStorage('playerMealData', data);

    try {
      const mealArray = await fetchMeals(numMeals);
      console.log(mealArray);

      const randomMealNames = getRandomMealNames(meals, numMeals);
      saveToLocalStorage('meals', randomMealNames);
      saveToLocalStorage('test', mealArray);

      const nextMeal = randomMealNames[0];
      // window.location.href = `/game/${nextMeal}`;
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  // Function to get random MealName values
  function getRandomMealNames(meals: Meal[], count: number) {
    const randomMealNames = [];
  
    // Generate unique random indexes
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * meals.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
  
    // Get the MealName values at the random indexes
    for (const index of indexes) {
      randomMealNames.push(meals[index].MealName);
    }
  
    return randomMealNames;
  }

  return (
    <div>
      <label>
        Number of players (up to 5):
        <input
          type="number"
          min={1}
          max={5}
          value={numPlayers}
          onChange={handleNumPlayersChange}
        />
      </label>
      <label>
        Number of meals (up to 10):
        <input
          type="number"
          min={1}
          max={10}
          value={numMeals}
          onChange={handleNumMealsChange}
        />
      </label>
      <button onClick={handleSave}>starta</button>  
    </div>
  );
};

export default Settings;
