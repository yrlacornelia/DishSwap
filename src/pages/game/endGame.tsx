import { useEffect, useState } from "react";
import { resultsUtils } from "../../utils/resultUtils";
import { loadFromLocalStorage } from "../../utils/LocalStorageUtils";
import { useRouter } from "next/router";

export function getId(id: number) {
console.log("HI")
console.log(id)
return id
}
const endGame = () => {
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter(); // Use the useRouter hook inside the functional component


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
const handleRouting = (id) => {
  router.push(`/game/${id}`);
};
  return (
    <>
      {results.length > 0 ? (
      <div className="flex flex-col w-full ">
          <h1 className="mb-5 text-center">Winners</h1>
        <div className="flex flex-wrap gap-5 justify-center">
        {results.map((result) => (
              <div key={result.idMeal}
               onClick={() => {handleRouting(result.idMeal)}}
                className="w-2/3  lg:w-1/4 sm:w-1/3 bg-green p-2 px-5 shadow justify-center items-center rounded-xl py-5 flex-col flex">
                <img className="rounded-xl mb-5" src={result.strMealThumb}></img>
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
