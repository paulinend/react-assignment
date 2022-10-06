import roller from '../assets/patines.webp';
import bike from '../assets/bici.webp';
import Button from './button';
import Tabs from './tabs';

const Grid = () => {
  return (
    <div className='grid'>
      <div className='card highlighted'>
        <Button title="Add to Basket"/>
        <Tabs />
        <img className='furniture-img' src={roller} alt='family rollerblading'></img>
      </div>
      <div className='card'>
        <img className='furniture-img' src={bike} alt='two persons biking'></img>
      </div>
    </div>
  )
}

export default Grid;