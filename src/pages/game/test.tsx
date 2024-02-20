// import React, { useEffect, useState, useRef } from "react";
// import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageUtils";
// import NextButton from "../../components/reusableComponents/Button";
// import { MyObject, emptyMyObject } from "../../lib/data";
// import Image from "next/image";
// import IconButton from "../../components/reusableComponents/iconButton";
// import { SwipableCard } from "../../components/game/swipableCard";



// const Test = () => {
//   const [results, setResults] = useState<any[]>([]);
//   const [numPlayersFinished, setNumPlayersFinished] = useState<number>(0);
//   const [arrayLength, setArrayLength] = useState<number>(0);
//   const [myObjectArray, setMyObjectArray] = useState<MyObject[]>([]);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const initialRender = useRef(true);
//   const selectedObject: MyObject | undefined = myObjectArray[currentIndex];

//   const handleNoClick = () => {
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   const handleYesClick = () => {
//     setResults((prevResults) => [...prevResults, selectedObject || ""]);
//     handleNoClick();
//   };

//   useEffect(() => {
//     console.log("Loading data from local storage...");
//     const localStorageArray = loadFromLocalStorage("meals") || [];
//     setArrayLength(localStorageArray.length);
//     setMyObjectArray(localStorageArray);
//     setCurrentIndex(0);
//   }, []);

//   useEffect(() => {
//     const players = loadFromLocalStorage("playerMealData") || { numPlayers: 0 };
//     if (numPlayersFinished === players.numPlayers) {
//       saveToLocalStorage("results", results);
//       window.location.href = `/game/endGame`;
//       setCurrentIndex(0);
//     }
//   }, [numPlayersFinished, results]);

//   useEffect(() => {
//     if (!initialRender.current && currentIndex === arrayLength) {
//       setNumPlayersFinished((prevNumPlayersFinished) => prevNumPlayersFinished + 1);
//       setCurrentIndex(0);
//     } else {
//       initialRender.current = false;
//     }
//   }, [currentIndex, arrayLength]);

//   return (
//     <>
//       <h2 className="px-10">Participant {numPlayersFinished + 1}</h2>
//       <div className="p-10 flex flex-col m-auto justify-center gap-2">
//         <SwipableCard
//           image={selectedObject?.strMealThumb}
//           heading={selectedObject?.strMeal}
//           description={selectedObject?.strCategory}
//         />
//         <div className="flex justify-between mt-2">
//           <IconButton
//             label={
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             }
//             onClick={handleNoClick}
//           />
//           <IconButton
//             label={
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//               </svg>
//             }
//             onClick={handleYesClick}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test;
