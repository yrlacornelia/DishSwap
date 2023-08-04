import React, { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/LocalStorageUtils';


const NextButton =({ onNextClick, title }) => {

  return (
    <div className='flex justify-center'>
      <button onClick={onNextClick} className="bg-green hover:bg-green-light font-bold py-2 px-20 rounded-lg rounded"
   >
        {title}
      </button>
    </div>
  );
};

export default NextButton;
