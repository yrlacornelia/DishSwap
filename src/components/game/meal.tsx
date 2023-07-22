// import React, { useState, useEffect } from "react";
// import Link from 'next/link';
// import NextButton from "./nextButton";
// import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";

// // type Props = {
// //   item: Meal;
// // };

// const OneMeal = () => {
//   const [total, setTotal] = useState(0);
//   const [resultArray, setResultArray] = useState<string[]>([]); // Array to store results
//   const [playersFinished, setPlayersFinished] = useState(0);

//   const handleNextClick = () => {
//     setTotal(total + 1);
//   };

//   const handleYesClick = () => {
//     handleNextClick()
//     setResultArray(prevArray => [...prevArray, item.MealName]); // Add "No" to the result array

//   };
//   console.log(resultArray)
//   const mealsString = loadFromLocalStorage('meals');
//   const nextMeal = () => {
//     if (mealsString && mealsString.length > 0) {
//       const nextIndex = (total + 1) % mealsString.length;
//       const nextMeal = mealsString[nextIndex];
//       return nextMeal;
//     } else {
//       return null;
//     }
//   };

//   useEffect(() => {
    
//     if (total === mealsString.length) {
//       setPlayersFinished(playersFinished + 1);
//       alert("Game over!")
//       setTotal(0); // Reset total for the next player
//     }
//   }, [total, mealsString]);

//   useEffect(() => {
//     const players = loadFromLocalStorage('playerMealData');
//     console.log(players.numPlayers)
//     if (playersFinished === players.numPlayers) {

//       alert("Game over!"); // Alert when all players have finished
//       saveToLocalStorage("results",resultArray)
//       window.location.href = `/game/endGame` }
//   }, [playersFinished]);

//   return (
//     <div>
//       <p>måltid: {item.MealName}</p>
//       <p>måltid: bild</p>
//       <Link href={`/game/${nextMeal()}`}>
//         <NextButton onNextClick={handleYesClick} title={"yes"} />
//       </Link>
//       <Link href={`/game/${nextMeal()}`}>
//         <NextButton onNextClick={handleNextClick} title={"no"} />
//       </Link>
//     </div>
//   );
// };

// export default OneMeal;
