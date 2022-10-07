import React, { useState } from 'react';
import chevronRight from '../assets/icons/right-chevron.png';
import chevronDown from '../assets/icons/chevron.png';

const Accordion = ({ title, grid, carousel }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? 
        <img className='chevronDown' src={chevronDown} alt='chevron to open the accordion menu'></img> :
        <img className='chevronRight' src={chevronRight} alt='chevron to close the accordion menu'></img>
      }</div>
      <div>{title}</div>
      </div>
      {isActive && <div className="accordion-content">
        {grid}
        {carousel}
        </div>}
    </div>
  );
};

export default Accordion;