import React, { useState, useEffect } from "react";
import { MyObject } from "../../lib/data";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 

type Props = {
  item: MyObject;
};


const Meal = ({item}:Props) => {
  const data = [
    {
      label: "Ingredients",
      value: "Ingredients",
      desc: item.strInstructions,
    },
    {
      label: "Instructions",
      value: "Instructions",
      desc: item.strInstructions,   },

  ];
 const find = () => {
   console.log(item)
   const array = []
for (let index = 0; index < 20; index++) {
  const ingredient = `strIngredient${[index +1]}`
  const mesurment = `strMeasure${[index +1]}`
array.push ( item[mesurment] + item[ingredient]  )
}

   return(
    <ul>

{array.map((result) => (
              <li>
                {result}
              </li>
            ))}
    </ul>
   )
}
  return (
    <div>
        { item ? (
        <>
         <div className=" flex  flex-col md:flex-row md:justify-center w-3/4 md:w-full m-auto md:items-center md:gap-20 mb-10 mt-10">
<img className="rounded-lg" src={item.strMealThumb} alt="" width={500} height={500}/>
<div >
<h1>{item.strMeal}</h1>
<h3>{item.strCategory}</h3>
</div>
      </div>
      <div>
        
      </div>
      <div ><Tabs value="Ingredients">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
                        {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs></div>

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