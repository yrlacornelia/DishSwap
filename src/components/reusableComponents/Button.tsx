import React, { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/LocalStorageUtils';


const NextButton =({ onNextClick, title }) => {

  return (
    <div>
      <button onClick={onNextClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
   >
        {title}
      </button>
    </div>
  );
};

export default NextButton;
