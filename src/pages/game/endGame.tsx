import { useEffect, useState } from "react";
import { resultsUtils } from "../../utils/resultUtils";
import { loadFromLocalStorage } from "../../utils/LocalStorageUtils";

const endGame = () => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
   const players = loadFromLocalStorage('playerMealData');
   console.log(players.numPlayers)
    const fetchResults = async () => {
      try {
        const results = await resultsUtils(players.numPlayers);
        setResults(results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <>
      {results.length > 0 ? (
      <>
          <h1>Winners</h1>
        <div>
          {results.map((result, index) => (
            <div key={index}>        
                 <p >{result}</p>
                 </div>
 
          ))}
        </div>
      </>
      ) : (
        <div>
          <p>No results found</p>
        </div>
      )}
      {/* <button >try again</button> */}
    </>
  );
};

export default endGame;
