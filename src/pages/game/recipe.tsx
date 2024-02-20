import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProductData } from '../../utils/fetchUtils';
import { MyObject, emptyMyObject } from "../../lib/data";
import Link from 'next/link';
import LabTabs from '../../components/reusableComponents/tabs';

const RecipePage = () => {
    
    const router = useRouter();
    const { number } = router.query;
    const [loading, setLoading] = useState(true);
    const [myObjectArray, setMyObjectArray] = useState<MyObject[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mealArray = await getProductData(number); 
                setMyObjectArray(mealArray);
                setLoading(false); 
            } catch (error) {
                console.error("Failed to fetch product data", error);
            }
        };
        fetchData();
    }, [number]); 
    const find = (item) => {
        console.log(item);
        const array = [];
        for (let index = 0; index < 20; index++) {
          const ingredient = `strIngredient${[index + 1]}`;
          const measurement = `strMeasure${[index + 1]}`;
          const ingredientText = `${item[measurement]} ${item[ingredient]}`.trim();
            array.push(ingredientText);
    
        }
        const filteredArray = array.filter(item => item !== 'null');
console.log(filteredArray)
        return (<ul >{filteredArray.map ((item) =>(<li className="mb-2   ">{item}</li>))}</ul>);
      }
      const handleButtonClick = () => {
        router.push('/game/endGame');
      };
    
    return (
        <div className=''>
            <button 
      className="border absolute border-blue flex z-30 gap-2 top-2 left-2 rounded-md px-5 items-center py-2 hover:bg-blue-light"
      onClick={handleButtonClick}
    > 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
      <p>Go back</p>
    </button>
            {loading ? ( // Check if loading is true
                <p>Loading...</p>
            ) : myObjectArray && myObjectArray.length > 0 ? ( // Check if myObjectArray is not empty
                myObjectArray.map((item) => (
                    <div key={item.idMeal} className='relative'>
                       <img  src={item.strMealThumb} alt="" />
                        <div className='bg-white border rounded-t-3xl absolute top-80 pt-10 px-14 '>
                            <div className='mb-10 '>
                            <h2 className='text-black text-2xl'>{item.strMeal}</h2>
                        <h4>{item.strCategory}</h4>
                            </div>

                   
                        <div>
                        {/* <LabTabs instructions={item.strInstructions} ingredients={find(item)} /> */}
                        <h4 className='text-black mb-2'>Ingredients</h4>
                            <p>{find(item)}</p>
                            <h4 className='text-black mt-10 mb-2'>Instructions</h4>
                            <p>{item.strInstructions}</p>
                        </div>
                  
                    </div>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default RecipePage;
