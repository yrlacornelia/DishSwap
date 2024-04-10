import Card from './Card';
import { CardData } from '../../lib/cardData';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/LocalStorageUtils';


export default function Swiping() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [rightSwipe, setRightSwipe] = useState(0);
  const [leftSwipe, setLeftSwipe] = useState(0);
  const [round, setRound] = useState(1); 
  
  const loadPlayers = () => {
    const players = loadFromLocalStorage("playerMealData") || { numPlayers: 0 };
    return players.numPlayers;
  };
  
  const loadCards = () => {
    if(round >= maxRounds){
      saveToLocalStorage("results", results);
      window.location.href = `/game/endGame`;
    }
    else{
    const localStorageArray = loadFromLocalStorage("meals") || [];
    setCards(localStorageArray);}
  };

  const maxRounds = loadPlayers();

  useEffect(() => {
    loadCards();
  }, []);

  useEffect(() => {
    saveToLocalStorage("results", results); // Update local storage whenever results change
  }, [results]); 

  const activeIndex = cards.length - 1;


  // const removeCard = (id: number, action: 'right' | 'left') => {
  //   const selectedObject = cards.find(card => card.idMeal === id);

  //   const isLastCard = cards.length === 1;
  //   setCards((prev) => prev.filter((card) => card.idMeal !== id));
  //   if (action === 'right') {
  //     if (selectedObject) {
  //       console.log(selectedObject.strArea)
  //       setResults((prevResults) => [...prevResults, selectedObject]);
  //     }
  //     setRightSwipe((prev) => prev + 1);
  //   } else {
  //     setLeftSwipe((prev) => prev + 1);
  //   }
  //   if (isLastCard) {
  //     setTimeout(() => {
  //       if (round <= maxRounds) {
  //         setRound((prevRound) => prevRound + 1);
  //         loadCards(); 
      
  //       } else {
  // }
  //     }, 1000); 
  //   }
  // }; 
  const removeCard = (id: number, action: 'right' | 'left') => {
    const selectedObject = cards.find(card => card.idMeal === id);
    const isLastCard = cards.length === 1;
  
    setCards(prev => prev.filter(card => card.idMeal !== id));
  
    if (action === 'right') {
      if (selectedObject) {
        setResults(prevResults => {
          return [...prevResults, selectedObject];
        });
        saveToLocalStorage("results", [...results, selectedObject]);
        console.log(results)
      } else {
        console.log("No selected object found!");
      }
      setRightSwipe(prev => prev + 1);
    } else {
      setLeftSwipe(prev => prev + 1);
    }
  
    if (isLastCard && round <= maxRounds) {
      setTimeout(() => { 
      setRound(prevRound => prevRound + 1);
      loadCards(); }, 1000); 
    }
  };
  
  
  return (
    <div className="relative flex h-screen w-full justify-center overflow-clip text-textGrey">

<div>Player {round}</div>
      <AnimatePresence>
        {cards.length ? (
          cards.map((card, index) => (
            <Card
              key={card.idMeal}
              data={card}
              active={index === activeIndex}
              removeCard={removeCard}
            />
          ))
        )  : 
          (round == maxRounds) ? (
            <div className="absolute z-10 text-center text-2xl font-bold text-textGrey">
              No more cards. Thank you for playing!
            </div>
          ) 
          : (
            <div></div>
          )
        }
      </AnimatePresence>
      
    </div>
  );
}