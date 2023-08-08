import React, { useState, useEffect } from "react";
import { MyObject } from "../../lib/data";
 
import BasicTabs from "../reusableComponents/tabs";
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


// <div className="flex align-center justify-center">
//    <div className="flex flex-col md:w-1/3 py-3 px-10">
//     <h4>intructions</h4>

//     <p>{item.strInstructions}</p>
//     </div> 

    
//     <div className="flex flex-col w-1/3 py-3 px-10 ">
//     <h4>Ingredients</h4>
// {find()}
//     </div>
// </div>
