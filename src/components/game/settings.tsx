import { useState } from 'react';
import { saveToLocalStorage } from '../../utils/LocalStorageUtils';
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
      console.log(mealArray)
      saveToLocalStorage('meals', mealArray);
// mealArray.map =>
  const nextMeal = mealArray[0];
      console.log(nextMeal.strMeal)

   window.location.href = `/game/test`;
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

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
