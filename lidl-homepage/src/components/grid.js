import React from 'react';
import roller from '../assets/patines.webp';
import bike from '../assets/bici.webp';

const Grid = () => {
  return (
    <div className='grid'>
      <div className='highlighted'>
        <button> Add to basket </button>
        <img className='furniture-highlighted' src={roller} alt='family rollerblading'></img>
      </div>
      <img className='furniture' src={bike} alt='two persons biking'></img>
    </div>
  )
}

export default Grid;