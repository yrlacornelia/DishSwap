import React, { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/LocalStorageUtils';


const NextButton =({ onNextClick, title }) => {

  return (
    <div className='flex justify-center '>
      <button onClick={onNextClick} className="bg-white-light font-bold py-2 px-10 rounded-xl rounded w-56 shadow-md"
   >
        {title}
      </button>
      
    </div>
  );
};

export default NextButton;
