import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import { getRandomMeal } from '../../utils/utils';
export default function Game() {


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