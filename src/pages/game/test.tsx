

import React, { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";
import NextButton from "../../components/game/nextButton";
import { MyObject, emptyMyObject } from "../../lib/data";

export default function Test() {
  const [resultArray, setResultArray] = useState<string[]>([]);
  const [playersFinished, setPlayersFinished] = useState(0);
  const [array, setArray] = useState<number>(0);
  const [testa, setTesta] = useState<MyObject[]>([]); // Provide default value here
  const [selectedObjectIndex, setSelectedObjectIndex] = useState<number>(0);

  console.log(selectedObjectIndex);
  console.log(array);
  const hi = () => {
    if (selectedObjectIndex === array) {
      setPlayersFinished(playersFinished + 1);
      alert("Game over!");
      setSelectedObjectIndex(0); // Reset total for the next player
    }
  };

  useEffect(() => {
    const localStorageArray = loadFromLocalStorage("meals");
    setArray(localStorageArray.length);
    setTesta(localStorageArray); // Setting the whole array here
    setSelectedObjectIndex(0); // Resetting selectedObjectIndex when array updates
  }, []);

  const selectedObject: MyObject = testa[selectedObjectIndex];
  const handleNextClick = () => {
    setSelectedObjectIndex(selectedObjectIndex + 1);
    hi();
  };

  const handleYesClick = () => {
    setResultArray((prevArray) => [...prevArray, selectedObject?.strMeal || ""]);
    handleNextClick();
  };

  useEffect(() => {
    const players = loadFromLocalStorage("playerMealData");
    if (playersFinished === players.numPlayers) {
      alert("Game over!");
      saveToLocalStorage("results", resultArray);
      window.location.href = `/game/endGame`;
      setSelectedObjectIndex(0); // Reset for the next player
    }
  }, [playersFinished, resultArray]); // Add resultArray to the dependency array

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

