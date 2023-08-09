import React, { useState, useEffect } from "react";
import { MyObject } from "../../lib/data";
 
import BasicTabs from "../reusableComponents/tabs";
import Link from "next/link";
type Props = {
  item: MyObject;
};


const Meal = ({item}:Props) => {
  const find = () => {
    console.log(item);
    const array = [];
    for (let index = 0; index < 20; index++) {
      const ingredient = `strIngredient${[index + 1]}`;
      const measurement = `strMeasure${[index + 1]}`;
      const ingredientText = `${item[measurement]} ${item[ingredient]}`.trim();
      if (ingredientText !== 'null null' && ingredientText !== 'null') {
        array.push(ingredientText);
      }
    }
    return array;
  };

  return (
    <div>
      <div className="ml-10 mt-5 ">
      <Link  href={"/game/endGame"}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
</Link>
</div>
        { item ? (
        <>
         <div className=" flex flex-col md:flex-row md:justify-center w-3/4 md:w-full m-auto md:items-center md:gap-20 mb-5 mt-10">
<img className="rounded-lg" src={item.strMealThumb} alt="" width={500} height={500}/>
<div>
<h1>{item.strMeal}</h1>
<h3>{item.strCategory}</h3>
</div>
      </div>
      <BasicTabs instructions={item.strInstructions} ingredients={find().join('\n')} />
            </>)
        :
        (<><p>loading..</p></>) }
     
    </div>
  );
};

export default Meal;


