import React from 'react';
import Header from './components/header';
import Grid from './components/grid';
import Carousel from './components/carousel';
import './sass/main.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid />
      <Carousel />
    </div>
  );
}

export default App;
