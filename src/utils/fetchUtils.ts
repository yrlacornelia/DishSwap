
export const fetchMeals = async (numMeals) => {
    try {
      const fetchedMeals = [];
      for (let i = 0; i < numMeals; i++) {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        fetchedMeals.push(data.meals);
      }
      return fetchedMeals;
    } catch (error) {
      throw new Error("Failed to fetch meals");
    }
  };
  
  
