import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Settings from '../components/game/settings';
const HomePage = () => {
  return (
    <div className='w-1/4'>
        <h1 className='text-center py-16'>Begin play </h1>
  <Settings />
    </div>
  );
};

export default HomePage;
