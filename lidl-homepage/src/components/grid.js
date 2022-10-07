import { useState, useEffect } from 'react';

import roller from '../assets/patines.webp';
import bike from '../assets/bici.webp';
import Button from './button';
import Tabs from './tabs';

const Grid = ({count, setCount}) => {

  const handleClick = event => {
    setCount(count + 1);
  };

  return (
    <div className='grid'>
      <div className='card highlighted'>
        <Button handleClick={handleClick} title="Add to Basket"/>
        <Tabs />
        <img className='card-img' src={roller} alt='family rollerblading'></img>
      </div>
      <div className='card'>
        <img className='card-img' src={bike} alt='two persons biking'></img>
      </div>
    </div>
  )
}

export default Grid;