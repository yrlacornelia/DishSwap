

import React, { useEffect, useState, useRef } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";
import NextButton from "../../components/reusableComponents/Button";
import { MyObject, emptyMyObject } from "../../lib/data";

export default function Test() {
  const [results, setResults] = useState<string[]>([]);
  const [numPlayersFinished, setNumPlayersFinished] = useState(0);
  const [arrayLength, setArrayLength] = useState<number>(0);
  const [myObjectArray, setMyObjectArray] = useState<MyObject[]>([]); // Provide default value here
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const initialRender = useRef(true); // Create a ref to track the initial render

  console.log(currentIndex);
  console.log(arrayLength);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    // Your logic for "hi()" function here if needed
  };

  useEffect(() => {
    console.log("Loading data from local storage...");
    const localStorageArray = loadFromLocalStorage("meals");
    setArrayLength(localStorageArray.length);
    setMyObjectArray(localStorageArray); // Setting the whole array here
    setCurrentIndex(0); // Resetting currentIndex when array updates
  }, []);

  const selectedObject: MyObject = myObjectArray[currentIndex];

  const handleYesClick = () => {
    setResults((prevResults) => [...prevResults, selectedObject?.strMeal || ""]);
    handleNext();
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (currentIndex === arrayLength) {
        setNumPlayersFinished(numPlayersFinished + 1);
        alert("Game over!");
        setCurrentIndex(0); // Reset currentIndex for the next player
      }
    }
  }, [currentIndex, arrayLength]);

  useEffect(() => {
    const players = loadFromLocalStorage("playerMealData");
    if (numPlayersFinished === players.numPlayers) {
      alert("Game over!");
      saveToLocalStorage("results", results);
      window.location.href = `/game/endGame`;
      setCurrentIndex(0); // Reset currentIndex for the next player
    }
  }, [numPlayersFinished, results]); // Add results to the dependency array

  return (
    <div>
      <>
        {/* <p>måltid: {item.strMeal}</p> */}
        <p>måltid: bild</p>
        {selectedObject?.strMeal}
        <NextButton onNextClick={handleYesClick} title={"yes"} />
        <NextButton onNextClick={handleNext} title={"no"} />
      </>
    </div>
  );
}
