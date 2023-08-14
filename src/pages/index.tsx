import React from 'react';
import Settings from '../components/game/settings';
import NextButton from '../components/reusableComponents/Button';
import Loader from '../components/reusableComponents/loader';
const HomePage = () => {
  return (
    <div className='lg:w-1/4 sm:w-2/3 m-auto'>
      <div className=' py-6 px-6 lg:px-0'>  <h1 className='mb-0'>What meal for today? </h1>
      {/* <div className=' mt-0 absolute '> <svg width="142" height="100" viewBox="0 0 142 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M112.589 27.2043C114.872 29.1009 116.483 31.6823 117.184 34.5661C117.664 36.4479 117.931 38.3779 117.978 40.3194M97.288 26.8777C99.6396 25.5743 102.295 24.9178 104.983 24.9752C107.671 25.0326 110.295 25.8018 112.589 27.2043C116.199 17.0986 113.588 9.03247 120.526 5.2093C122.302 4.11917 124.349 3.55119 126.433 3.57039V3.57039C127.194 3.63279 127.952 3.73962 128.7 3.89033C132.516 5.6814 135.776 8.47214 138.134 11.9664M97.288 26.8777C97.2141 28.6125 97.7013 30.325 98.6773 31.7611C100.228 33.9108 102.214 35.7109 104.504 37.0448C108.451 39.7637 113.248 40.9632 118.009 40.4219C117.75 52.5678 106.324 66.3082 97.6832 73.5571C68.341 98.15 -13.07 102.114 7.31252 88.5992C13.2688 84.6532 32.3689 77.1524 46.1548 67.3657C62.2791 54.5742 75.3778 34.047 97.3205 26.9463L97.288 26.8777Z" stroke="#B4D4A1" stroke-width="6.88255" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div> */}
       </div>
      

  <Settings />

    </div>
  );
};

export default HomePage;
