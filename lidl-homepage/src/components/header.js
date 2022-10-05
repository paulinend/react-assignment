import React from 'react';
import logo from '../assets/lidl-logo-svg.svg';
import cart from '../assets/cart-shopping.png';

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='lidl logo'></img>
      <img className='icon-cart' src={cart} alt='shopping cart icon'></img>
    </div>
  )
}

export default Header;