import chevronRight from '../assets/icons/right-chevron.png';
import chevronDown from '../assets/icons/chevron.png';

const Accordion = ({ onToggle, active, title, grid, carousel }) => {


  return (
    <div className={`accordion-item ${active ? "active" : ""}`}>
      <div className="accordion-title" onClick={onToggle}>
        <div>{active ? 
        <img className='chevronDown' src={chevronDown} alt='chevron to open the accordion menu'></img> :
        <img className='chevronRight' src={chevronRight} alt='chevron to close the accordion menu'></img>
      }</div>
      <div>{title}</div>
      </div>
      {active && <div className={`accordion-content ${active ? "open" : ""}`}>
        {grid}
        {carousel}
        </div>}
    </div>
  );
};

export default Accordion;