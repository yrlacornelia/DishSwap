import { useEffect, useState } from "react";
import { resultsUtils } from "../../utils/resultUtils";
import { loadFromLocalStorage } from "../../utils/LocalStorageUtils";
import { useRouter } from "next/router";
import Link from "next/link";
import NextButton from "../../components/reusableComponents/Button";

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
        <>
      <div className="flex flex-col md:w-full xl:w-4/5   ">
        <div className="mb-5 text-center   ">
           <h2 className="  ">CONGRATULATIONS!</h2>
          <p>You agreed on these meals:</p></div>
         
        <div className="flex flex-wrap md:gap-10 justify-center ">
        {results.map((result) => (
              <div key={result.idMeal}
               onClick={() => {handleRouting(result.idMeal)}}
                className="md:w-1/2 hover:scale-105 cursor-pointer duration-200 sm:w-3/4 m-2 lg:w-1/3 md:m-0 w-full shadow-lg bg-blue-lighter items-center rounded-md  gap-5 flex">
                <img className="rounded-l-md" src={result.strMealThumb} width={150} height={150}></img>
                <div className="w-full  h-2/3 justify-between flex flex-col  mb-0 mt-auto">
                 <div>
                  <h4> {result.strMeal}</h4>
                <p> {result.strCategory}</p></div>
                <Link className="flex gap-1 mb-3 mr-3 items-center justify-end" href={"/endGame"}><p className="underline">Go to recipe</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</Link>
                </div>
              </div>
            ))}
        </div>
       <div className="flex flex-col items-center mt-10 gap-2">
          <h3>Didnt like anything?</h3>
          <NextButton onNextClick={"hi"} title={"TRY AGAIN"}/>
        </div>
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
