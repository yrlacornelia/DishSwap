import { useEffect, useState } from "react";
import { resultsUtils } from "../../utils/resultUtils";
import { loadFromLocalStorage } from "../../utils/LocalStorageUtils";

const endGame = () => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
   const players = loadFromLocalStorage('playerMealData');
    const fetchResults = async () => {
      try {
        const results = await resultsUtils(players.numPlayers);
        console.log(results)
        setResults(results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);
console.log(results)
  return (
    <>
      {results.length > 0 ? (
      <div className="flex flex-col w-2/4 ">
          <h1 className="mb-5">Winners</h1>
        <div className="flex flex-wrap gap-5 ">
        {results.map((result) => (
              <div key={result.idMeal} className=" w-1/3 bg-green  p-2 shadow rounded-xl py-5 flex flex-col items-center">
                <img className=" rounded-xl mb-5" src={result.strMealThumb} width={150} height={150}></img>
                <div ><h4> {result.strMeal}</h4>
                {/* <p>Category: {result.strCategory}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>
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
