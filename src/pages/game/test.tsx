

import React, { useEffect, useState, useRef } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";
import NextButton from "../../components/reusableComponents/Button";
import { MyObject, emptyMyObject } from "../../lib/data";
import Image from "next/image";

export default function Test() {
  const [results, setResults] = useState<any[]>([]);
  const [numPlayersFinished, setNumPlayersFinished] = useState(0);
  const [arrayLength, setArrayLength] = useState<number>(0);
  const [myObjectArray, setMyObjectArray] = useState<MyObject[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const initialRender = useRef(true); 
  const selectedObject: MyObject = myObjectArray[currentIndex];
  
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleYesClick = () => {
    setResults((prevResults) => [...prevResults, selectedObject || ""]);
    handleNext();
  };

  useEffect(() => {
    console.log("Loading data from local storage...");
    const localStorageArray = loadFromLocalStorage("meals");
    setArrayLength(localStorageArray.length);
    setMyObjectArray(localStorageArray); 
    setCurrentIndex(0);
  }, []);


  useEffect(() => {
    const players = loadFromLocalStorage("playerMealData");
    if (numPlayersFinished === players.numPlayers) {
      saveToLocalStorage("results", results);
      window.location.href = `/game/endGame`;
      setCurrentIndex(0); // Reset currentIndex for the next player
    }
  }, [numPlayersFinished, results]); // Add results to the dependency array

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (currentIndex === arrayLength) {
        setNumPlayersFinished(numPlayersFinished + 1);
        setCurrentIndex(0); // Reset currentIndex for the next player
      }
    }
  }, [currentIndex, arrayLength]);
  return (
    <div className="text-center m-20 flex flex-col gap-5 mt-10">
      <>
        <img  alt="image" src={selectedObject?.strMealThumb} width={400} height={400} className="border border-black-light border-2 rounded-3xl"/>
      <h4>  {selectedObject?.strMeal}</h4>
      <div className="flex justify-between">
         <NextButton onNextClick={handleYesClick} title={"yes"} />
        <NextButton onNextClick={handleNext} title={"no"} />
</div>
          </>
    </div>
  );
}
