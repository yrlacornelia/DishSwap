
export const fetchMeals = async (numMeals) => {
    try {
      const fetchedMeals = [];
      for (let i = 0; i < numMeals; i++) {
        const response = await fetch(""
        );
        const data = await response.json();
        fetchedMeals.push(data.meals[0]);
 
      }
      return fetchedMeals;
    } catch (error) {
      throw new Error("Failed to fetch meals");
    }
  };
  
  
