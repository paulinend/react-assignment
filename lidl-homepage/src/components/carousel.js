import React, { useEffect, useState } from 'react';

import chevronRight from '../assets/icons/right-chevron.png';
import chevronLeft from '../assets/icons/left-chevron.png';


const Carousel = (props) => {
  const {carouselData, show} = props

  const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(carouselData.length)

    useEffect(() => {
        setLength(carouselData.length)
    }, [carouselData])

    const next = () => {
      if (currentIndex < (length - show)) {
        setCurrentIndex(prevState => prevState + 1)
      }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {
          currentIndex > 0 &&
          <button onClick={prev}  className="carousel-arrow-prev">
            <img className='chevronLeft' src={chevronLeft} alt='next button'></img>
          </button>
        }
        <div className="carousel-content-wrapper">
          <div 
            className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
            >
            {carouselData}
          </div>
        </div>
          {
            currentIndex < (length - show) &&
            <button onClick={next} className="carousel-arrow-next">
              <img className='chevronRight' src={chevronRight} alt='next button'></img>
            </button>
  
          }
      </div>
    </div>
  )
  
}

export default Carousel;