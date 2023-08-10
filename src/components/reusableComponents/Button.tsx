import React, { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/LocalStorageUtils';


const NextButton =({ onNextClick, title }) => {

  return (
    <div className='flex justify-center '>
      <button onClick={onNextClick} className="bg-blue text-white hover:bg-blue-hover font-bold py-2 px-10 rounded-sm rounded w-56"
   >
        {title}
      </button>
    </div>
  );
};

export default NextButton;
