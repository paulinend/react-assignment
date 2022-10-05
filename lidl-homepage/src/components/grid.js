import React from 'react';
import roller from '../assets/patines.webp';
import bike from '../assets/bici.webp';

const Grid = () => {
  return (
    <div className='grid'>
      <img className='furniture-highlighted' src={roller} alt='highlighted image of a family rollerblading'></img>
      <img className='furniture' src={bike} alt='image of two persons biking'></img>
    </div>
  )
}

export default Grid;