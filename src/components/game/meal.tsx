import React, { useState, useEffect } from "react";
import { MyObject } from "../../lib/data";
 
import BasicTabs from "../reusableComponents/tabs";
import Link from "next/link";
import Loader from "../reusableComponents/loader";
import TabsMeals from "../reusableComponents/tabs";
import LabTabs from "../reusableComponents/tabs";
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
        array.push(ingredientText);

    }
    const filteredArray = array.filter(item => item !== ""); // Moved the filtering outside the loop

    return (<ul >{filteredArray.map ((item) =>(<li className="mb-2 list-disc ">{item}</li>))}</ul>);
  };

  return (
    <div>
      <div className="ml-10 mt-5 ">
  
     
</div>
        { item ? (
        <div className="   md:w-5/6 lg:w-3/4 md:py-5 m-auto">
         <div className=" flex relative flex-col md:flex-row md:justify-center w-3/4 md:w-full m-auto md:items-center md:gap-20 mb-5 mt-10">
<img  src={item.strMealThumb} alt="" width={400} height={400}/>
<div className="  md:relative">
<h2>{item.strMeal}</h2>
<h3>{item.strCategory}</h3>
</div>
      </div>
      {/* <div className="border border-black ">
        <BasicTabs instructions={item.strInstructions} ingredients={find()} />
        </div> */}
      <LabTabs instructions={item.strInstructions} ingredients={find()} />

            </div>)
        :
        (<><Loader/></>) }
     
    </div>
  );
};

export default Meal;


