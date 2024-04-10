import { useEffect, useState } from "react";
import { resultsUtils } from "../../utils/resultUtils";
import { loadFromLocalStorage } from "../../utils/LocalStorageUtils";
import { useRouter } from "next/router";
import Link from "next/link";
import NextButton from "../../components/reusableComponents/Button";
import { getProductData } from "../../utils/fetchUtils";

export function getId(id: number) {
  console.log("HI")
  console.log(id)
  return id
}
const endGame = () => {
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();


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
  const handleRouting = (id) => {
    const data = getProductData(id)
    router.push(`/game/${data}`);
  };
  const handleButtonClick = () => {
    router.push('/');
  };
  return (
    <>
      {results.length > 0 ? (
        <>
          <div className="  ">
            <div className="mb-5 text-center   ">
              <h2 className="  ">CONGRATULATIONS!</h2>
              <p>You agreed on these meals:</p></div>
  
<div className="grid grid-cols-2 gap-4 m-8">
              {results.map((result) => (
                <a href={`/game/recipe?number=${result.idMeal}`} key={result.idMeal}
                  className="cursor-pointer m-2 w-full  items-center   gap-5 flex flex-col">
                  <img className="w-full h-40 object-cover" src={result.strMealThumb} alt={result.strMeal} />
                  <div className="w-full  justify-between flex flex-col  mb-0 mt-auto">
                    <div className="px-0">
                      <h4> {result.strMeal}</h4>
                      <p> {result.strCategory}</p></div>

                    {/* <Link className="flex gap-1 mb-3 mr-3 items-center justify-end" href={`/game/recipe?number=${result.idMeal}`}><p className="underline">Go to recipe</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    </Link> */}
                  </div>
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center mt-10 gap-2">
              <h3>Didnt like anything?</h3>
              <NextButton onNextClick={handleButtonClick} title={"TRY AGAIN"} />
            </div>
          </div>

        </>
      ) : (
        <div className="justify-center flex flex-col m-auto gap-2 items-center mt-20 w-3/4">
          <div className="mb-5">
            <h4>Too bad!</h4>
            <p>You didnt find any of of the same meals interesting</p></div>
          <NextButton title={"TRY AGAIN"} onNextClick={handleButtonClick} />
        </div>
      )}
      {/* <button >try again</button> */}
    </>
  );
};

export default endGame;
