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
  
  const loadCards = () => {
    if(round >= maxRounds){
      saveToLocalStorage("results", results);
      window.location.href = `/game/endGame`;
    }
    else{
    const localStorageArray = loadFromLocalStorage("meals") || [];
    setCards(localStorageArray);}
  };
  const loadPlayers = () => {
    const players = loadFromLocalStorage("playerMealData") || { numPlayers: 0 };
    return players.numPlayers;
  };

  const maxRounds = loadPlayers();
  useEffect(() => {
    loadCards();
  }, []);
  const activeIndex = cards.length - 1;
  const removeCard = (id: number, action: 'right' | 'left') => {
    const selectedObject = cards.find(card => card.idMeal === id);
    const isLastCard = cards.length === 1;
    setCards((prev) => prev.filter((card) => card.idMeal !== id));
    if (action === 'right') {
      setRightSwipe((prev) => prev + 1);
      if (selectedObject) {
        setResults((prevResults) => [...prevResults, selectedObject]);
      }
    } else {
      setLeftSwipe((prev) => prev + 1);
    }
    if (isLastCard) {
      // Use a timeout to ensure the state has updated and to allow for the swipe animation to complete
      setTimeout(() => {
        if (round <= maxRounds) {
          setRound((prevRound) => prevRound + 1);
          loadCards(); 
      
        } else {
  }
      }, 1000); // Adjust timeout duration as needed based on your animation speed
    }
  }; 

  const stats = [
    {
      name: 'Left',
      count: leftSwipe,
    },
    {
      name: 'Right',
      count: rightSwipe,
    },
  ];
  return (
    <div className="relative flex h-screen w-full  items-center justify-center overflow-clip text-textGrey">
      <div className="absolute bottom-0 h-[50%] w-screen scale-125 sm:h-[80%] sm:scale-110 md:scale-100">

      </div>
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
          ) : (
            <div>Player {round + 1}</div>
          )
        }
      </AnimatePresence>
    </div>
  );
}