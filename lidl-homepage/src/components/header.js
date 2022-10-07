import logo from '../assets/lidl-logo-svg.svg';
import cart from '../assets/icons/cart-shopping.png';

const Header = (props) => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='lidl logo'></img>
      <div className='cart'>
        <img className='icon-cart' src={cart} alt='shopping cart icon'></img>
        {props.count > 0 ? <div className="cercle">{props.count}</div> : null}
      </div>
    </div>
  )
}

export default Header;