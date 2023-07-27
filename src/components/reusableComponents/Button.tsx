import React, { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/LocalStorageUtils';


const NextButton =({ onNextClick, title }) => {

  return (
    <div className='flex justify-center'>
      <button onClick={onNextClick} className="bg-green hover:bg-blue-700 font-bold py-2 px-4 rounded"
   >
        {title}
      </button>
    </div>
  );
};

export default NextButton;
