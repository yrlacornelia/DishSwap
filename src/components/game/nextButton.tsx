import React, { useState } from 'react';
import { loadFromLocalStorage } from '../../utils/LocalStorageUtils';


const NextButton =({ onNextClick, title }) => {

  return (
    <div>
      <button onClick={onNextClick}>
        {title}
      </button>
    </div>
  );
};

export default NextButton;
