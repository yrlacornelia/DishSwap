import React, { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";
import NextButton from "../../components/game/nextButton";

interface MyObject {
    dateModified: null | string;
    idMeal: null | string;
    strArea: null | string;
    strCategory: string;
    strCreativeCommonsConfirmed: null | string;
    strDrinkAlternate: null | string;
    strImageSource: null | string;
    strIngredient1: null | string;
    strIngredient2: null | string;
    strIngredient3: null | string;
    strIngredient4: null | string;
    strIngredient5: null | string;
    strIngredient6: null | string;
    strIngredient7: null | string;
    strIngredient8: null | string;
    strIngredient9: null | string;
    strIngredient10: null | string;
    strIngredient11: null | string;
    strIngredient12: null | string;
    strIngredient13: null | string;
    strIngredient14: null | string;
    strIngredient15: null | string;
    strIngredient16: null | string;
    strIngredient17: null | string;
    strIngredient18: null | string;
    strIngredient19: null | string;
    strIngredient20: null | string;
    strInstructions: null | string;
    strMeal: null | string;
    strMealThumb: null | string;
    strMeasure1: null | string;
    strMeasure2: null | string;
    strMeasure3: null | string;
    strMeasure4: null | string;
    strMeasure5: null | string;
    strMeasure6: null | string;
    strMeasure7: null | string;
    strMeasure8: null | string;
    strMeasure9: null | string;
    strMeasure10: null | string;
    strMeasure11: null | string;
    strMeasure12: null | string;
    strMeasure13: null | string;
    strMeasure14: null | string;
    strMeasure15: null | string;
    strMeasure16: null | string;
    strMeasure17: null | string;
    strMeasure18: null | string;
    strMeasure19: null | string;
    strMeasure20: null | string;
    strSource: null | string;
    strTags: null | string;
    strYoutube: null | string;
}


// export default function Test() {
//     const [total, setTotal] = useState(0);
//     const [resultArray, setResultArray] = useState<string[]>([]); // Array to store results
//     const [playersFinished, setPlayersFinished] = useState(0);
  
//     const [testa, setTesta] = useState<MyObject>([""]);
//     useEffect(() => {
//         console.log("HI")
//         const localStorageArray = loadFromLocalStorage("meals")
//         console.log(localStorageArray)
//         setTesta(localStorageArray)
//     }, [])
//     useEffect(() => {
    
//         if (total === testa.length) {
//           setPlayersFinished(playersFinished + 1);
//           alert("Game over!");
//           setTotal(0); // Reset total for the next player
//         }
//       }, [total, testa]);
    
//     console.log(testa[0])
//     const [selectedObjectIndex, setSelectedObjectIndex] = useState<number>(0);
//     const selectedObject: MyObject = testa[selectedObjectIndex];
//     console.log(selectedObject)
//     const handleNextClick = () => {
//         setSelectedObjectIndex(selectedObjectIndex + 1);
     
//       };
//        console.log(selectedObjectIndex)
//       const handleYesClick = () => {
//         handleNextClick();
//         setResultArray(prevArray => [...prevArray, testa[total]?.strMeal]); // Add "No" to the result array
    
//       };

//   useEffect(() => {
//     const players = loadFromLocalStorage('playerMealData');
//     console.log(players.numPlayers);
//     if (playersFinished === players.numPlayers) {
//       alert("Game over!"); // Alert when all players have finished
//       saveToLocalStorage("results", resultArray);
//       window.location.href = `/game/endGame`;
//     }
//   }, [playersFinished]);

//     return (
//         <div>

//             <>
//                 {/* <p>måltid: {item.strMeal}</p> */}
//                 <p>måltid: bild</p>
//                 {selectedObject.strMeal}
//                 <NextButton onNextClick={handleYesClick} title={"yes"} />
//                 <NextButton onNextClick={handleNextClick} title={"no"} />
//             </>

//         </div>
//     );
// }


const emptyMyObject: MyObject = {
    dateModified: null,
    idMeal: null,
    strArea: null,
    strCategory: null,
    strCreativeCommonsConfirmed: null,
    strDrinkAlternate: null,
    strImageSource: null,
    strIngredient1: null,
    strIngredient2: null,
    strIngredient3: null,
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strInstructions: null,
    strMeal: null,
    strMealThumb: null,
    strMeasure1: null,
    strMeasure2: null,
    strMeasure3: null,
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strTags: null,
    strYoutube: null,
  };
  
export default function Test() {
    const [total, setTotal] = useState(0);
    const [resultArray, setResultArray] = useState<string[]>([]);
    const [playersFinished, setPlayersFinished] = useState(0);
    const [array, setArray] = useState<number>(0);
    const [testa, setTesta] = useState<MyObject>(emptyMyObject); // Provide default value here
    const [selectedObjectIndex, setSelectedObjectIndex] = useState<number>(0);
  
  
    const hi = () => {
      console.log(selectedObjectIndex);
      console.log(array);
      if (selectedObjectIndex === array) {
        setPlayersFinished(playersFinished + 1);
        alert("Game over!");
        setSelectedObjectIndex(0); // Reset total for the next player
      }
    };
  
    useEffect(() => {
      console.log("HI");
      const localStorageArray = loadFromLocalStorage("meals");
      setArray(localStorageArray.length);
      console.log(localStorageArray);
      setTesta(localStorageArray[0] || {}); // Set the first element of the array or an empty object
    }, []);
  
    useEffect(() => {
      console.log("HI");
      const localStorageArray = loadFromLocalStorage("meals");
      console.log(localStorageArray);
      setTesta(localStorageArray);
    }, []);
  
    const selectedObject: MyObject = testa[selectedObjectIndex];
    console.log(selectedObject);
  
    const handleNextClick = () => {
      setSelectedObjectIndex(selectedObjectIndex + 1);
      hi();
    };
  
    const handleYesClick = () => {
      handleNextClick();
      setResultArray((prevArray) => [...prevArray, selectedObject?.strMeal || ""]);
    };
  
    useEffect(() => {
      const players = loadFromLocalStorage("playerMealData");
      console.log(players.numPlayers);
      if (playersFinished === players.numPlayers) {
        alert("Game over!");
        saveToLocalStorage("results", resultArray);
        window.location.href = `/game/endGame`;
      }
    }, [playersFinished]);
  
    return (
      <div>
        <>
          {/* <p>måltid: {item.strMeal}</p> */}
          <p>måltid: bild</p>
          {selectedObject?.strMeal}
          <NextButton onNextClick={handleYesClick} title={"yes"} />
          <NextButton onNextClick={handleNextClick} title={"no"} />
        </>
      </div>
    );
  }