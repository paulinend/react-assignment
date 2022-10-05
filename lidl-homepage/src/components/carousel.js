import React from 'react';
import diy from '../assets/bricolaj.webp';
import footwear from '../assets/calzado.webp';
import kitchen from '../assets/cocina.webp';
import relax from '../assets/descanso.webp';
import teeth from '../assets/dientes.webp';
import toy from '../assets/juguete.webp';
import machine from '../assets/maquinas.webp';
import skateboard from '../assets/monopatin.webp';
import furniture from '../assets/muebles.webp';
import shoes from '../assets/zapatillas.webp';
import roller from '../assets/patines.webp';
import bike from '../assets/bici.webp';


const Carousel = () => {
  // const slidesContainer = document.getElementById("slides-container");
  // const slide = document.querySelector(".slide");
  // const prevButton = document.getElementById("slide-arrow-prev");
  // const nextButton = document.getElementById("slide-arrow-next");
  
  // nextButton.addEventListener("click", () => {
  //   const slideWidth = slide.clientWidth;
  //   slidesContainer.scrollLeft += slideWidth;
  // });
  
  // prevButton.addEventListener("click", () => {
  //   const slideWidth = slide.clientWidth;
  //   slidesContainer.scrollLeft -= slideWidth;
  // });
  return (
    <div className='slider-wrapper'>
      <button className="slide-arrow" id="slide-arrow-prev">
        &#8249;
      </button>
   
      <button className="slide-arrow" id="slide-arrow-next">
        &#8250;
      </button>

      <ul className="slides-container" id="slides-container">
        <li className="slide">
          <img src={diy} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={footwear} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={kitchen} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={relax} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={teeth} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={toy} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={machine} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={skateboard} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={furniture} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={shoes} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={roller} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
        <li className="slide">
          <img src={bike} alt=''></img>
          <div className='link-name'>
            Link
          </div>
        </li>
      </ul>
    </div>
  )
  
}

export default Carousel;