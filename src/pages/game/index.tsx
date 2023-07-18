import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import meals from '../../lib/data';
import { getRandomMeal } from '../../utils/utils';
export default function Game() {

  const randomMeal = getRandomMeal(meals);

  return (
    
    <div>
  <p>måltid: namn</p>
  <p>måltid: sbild</p>
  
  {/* <Link href={`/game/${randomMeal.MealName}`}>  <button>like</button></Link>

  <Link href={`/game/${randomMeal.MealName}`}>  
  <button>dislike</button>
  </Link> */}

    </div>
  )

}