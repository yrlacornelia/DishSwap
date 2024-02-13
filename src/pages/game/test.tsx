

import React, { useEffect, useState, useRef } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";
import NextButton from "../../components/reusableComponents/Button";
import { MyObject, emptyMyObject } from "../../lib/data";
import Image from "next/image";
import IconButton from "../../components/reusableComponents/iconButton";

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
      setCurrentIndex(0);
    }
  }, [numPlayersFinished, results]); 

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (currentIndex === arrayLength) {
        setNumPlayersFinished(numPlayersFinished + 1);
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, arrayLength]);
  console.log(numPlayersFinished)
  return (
    <>
    <h2>Participant {numPlayersFinished +1}</h2>
    <div className=" p-10 flex flex-col m-auto justify-center  gap-2 ">
     <div className="border border-black">
      <img alt="image" src={selectedObject?.strMealThumb} width={400} height={400} className="border rounded-md" />
      <div>    <h4> {selectedObject?.strMeal}</h4>
        <p>{selectedObject?.strCategory}</p></div>
        </div>
      <div className="flex justify-between mt-2">
        <IconButton label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        } onClick={handleNext} />
        <IconButton label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        } onClick={handleYesClick} />
      </div>
    </div>
    </> 
  );
}
