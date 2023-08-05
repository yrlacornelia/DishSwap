import React, { useState, useEffect } from "react";
import { MyObject } from "../../lib/data";
import { it } from "node:test";

type Props = {
  item: MyObject;
};

const Meal = ({item}:Props) => {
 console.log(item)
  return (
    <div>
      {/* <p>måltid: {item.strMeal}</p>
      <p>måltid: bild</p> */}
      <div className=" flex justify-center items-center gap-20 mb-10 mt-10">
<img src={item.strMealThumb} alt="" width={500} height={500}/>
<div>
<h1>{item.strMeal}</h1>
<h3>{item.strCategory}</h3>
</div>
      </div>
<div className="flex align-center justify-center">
   <div className="flex flex-col w-1/3 py-3 px-10">
    <h4>intructions</h4>

    <p>{item.strInstructions}</p>
    </div> 
    <div className="flex flex-col w-1/3 py-3 px-10 ">
    <h4>Ingredients</h4>

    </div>
</div>
    </div>
  );
};

export default Meal;
