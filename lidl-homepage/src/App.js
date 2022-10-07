import React from 'react';

import Header from './components/header';
import Grid from './components/grid';
import Carousel from './components/carousel';
import Accordion from './components/accordion';

import './sass/main.scss'

import diy from './assets/bricolaj.webp';
import footwear from './assets/calzado.webp';
import kitchen from './assets/cocina.webp';
import relax from './assets/descanso.webp';
import teeth from './assets/dientes.webp';
import toy from './assets/juguete.webp';
import machine from './assets/maquinas.webp';
import skateboard from './assets/monopatin.webp';
import furniture from './assets/muebles.webp';
import shoes from './assets/zapatillas.webp';

const App = () => {

  const carouselData = [
    { id: 1, img: diy, alt: 'image of the link for the home DIY' },
    { id: 2, img: footwear, alt: 'image of the link for the footwear' },
    { id: 3, img: kitchen, alt: 'image of the link for the cuisine' },
    { id: 4, img: relax, alt: 'image of the link for the bedroom' },
    { id: 5, img: teeth, alt: 'image of the link for the bathroom' },
    { id: 6, img: toy, alt: 'image of the link for kids toys' },
    { id: 7, img: machine, alt: 'image of the link for sewers' },
    { id: 8, img: shoes, alt: 'image of the link for shoes' },
    { id: 9, img: skateboard, alt: 'image of the link for skateboards' },
    { id: 10, img: furniture, alt: 'image of the link for home furnitures' },

  ];

  const accordionData = [
    {
      id: 1,
      title: 'Accordion Button',
      grid: <Grid />,
      carousel: <Carousel show={7}>
      {carouselData.map(({id, alt, img}) => (
        <div className='carousel-item'>
        <img key={id} src={img} alt={alt}></img>
        <div className='link-name'>
          Link
        </div>
      </div>
      ))}
    </Carousel>
    },
    {
      id: 2,
      title: 'Accordion Button',
      grid: <Grid />,
      carousel: <Carousel show={7}>
      {carouselData.map(({id, alt, img}) => (
        <div className='carousel-item'>
        <img key={id} src={img} alt={alt}></img>
        <div className='link-name'>
          Link
        </div>
      </div>
      ))}
    </Carousel>
    },
    {
      id: 3,
      title: 'Accordion Button',
      grid: <Grid />,
      carousel: <Carousel show={7}>
      {carouselData.map(({id, alt, img}) => (
        <div className='carousel-item'>
        <img key={id} src={img} alt={alt}></img>
        <div className='link-name'>
          Link
        </div>
      </div>
      ))}
    </Carousel>
    },
    {
      id: 4,
      title: 'Accordion Button',
      grid: <Grid />,
      carousel: <Carousel show={7}>
      {carouselData.map(({id, alt, img}) => (
        <div className='carousel-item'>
        <img key={id} src={img} alt={alt}></img>
        <div className='link-name'>
          Link
        </div>
      </div>
      ))}
    </Carousel>
    }
  ];
  
  return (
    <div className="App">
      <Header/>
      <div className='accordion'>
        {accordionData.map(({title, grid, carousel, id}) => (
          <Accordion key={id} title={title} grid={grid} carousel={carousel}/>
          ))}

      </div>
      <div className="hidden-grid">
          <Grid />
        <Carousel show={7}>
          {carouselData.map(({id, alt, img}) => (
            <div className='carousel-item'>
            <img key={id} src={img} alt={alt}></img>
            <div className='link-name'>
              Link
            </div>
          </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
