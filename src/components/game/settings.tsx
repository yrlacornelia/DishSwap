import { useState } from 'react';
import { saveToLocalStorage } from '../../utils/LocalStorageUtils';
import { fetchMeals } from '../../utils/fetchUtils';
import NextButton from '../reusableComponents/Button';
import Input from '../reusableComponents/inputfield';

const Settings = () => {
  const [numPlayers, setNumPlayers] = useState<number>(1);
  const [numMeals, setNumMeals] = useState<number>(1);
  const [errorMeals, setErrorMeals] = useState(false);
  const [errorPlayers, setErrorPlayers] = useState(false);
  
  // const handleNumPlayersChange = () => {
  //   setNumPlayers(numPlayers);
  // };
const validateMeals =() => {
  if(numMeals > 10) {
    setErrorMeals(true)
  }
  else {
    setErrorMeals(false)
  }
}
const validatePlayers =() => {
  if(numPlayers > 5) {
    setErrorPlayers(true)
  }
  else {
    setErrorPlayers(false)
  }
}
  const handleNumMealsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumMeals(value);
  };

  const handleNumPlayersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumPlayers(value);
  };

  const handleSave = async () => {
    // if()
    validateMeals()
    validatePlayers()
    if(errorMeals == false && errorPlayers == false)  {
      
  
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
   }
  };

  return (
    <div className='w-full'>
      {/* <label>
        Number of players (up to 5):
        <input
          type="number"
          min={1}
          max={5}
          value={numPlayers}
          onChange={handleNumPlayersChange}
        />
      </label> */}
      {/* <label>
        Number of meals (up to 10):
        <input
          type="number"
          min={1}
          max={10}
          value={numMeals}
          onChange={handleNumMealsChange}
        />
      </label> */}
      <div className='mb-10'>  <Input type='number'  value={numPlayers} min={1}  
      error={errorPlayers} errorMessage='error'
        max={5} label='Number of players (up to 5):' onChange={handleNumPlayersChange} />

        <Input value={numMeals} min={1} type='number'   
            error={errorMeals} errorMessage='error'  
          max={10} label='Number of meals (up to 10):' onChange={handleNumMealsChange} />
      </div>
      <NextButton title={"START"} onNextClick={handleSave} />
    </div>
  );
};

export default Settings;
