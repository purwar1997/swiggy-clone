import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import CartHoverCard from './CartHoverCard';
import EmptyCartHoverCard from './EmptyCartHoverCard';

const Header = () => {
  const [cartHover, setCartHover] = useState(false);

  const cart = useSelector(store => store.cart);
  const path = useSelector(store => store.path);

  const closeCartCard = () => setCartHover(false);

  return (
    <header className='px-24 flex justify-between shadow-sm sticky top-0 bg-white z-20'>
      <div className='py-4'>
        <Link to='/'>
          <img className='w-8 hover:scale-110 transition-transform' src={logo} alt='swiggy-logo' />
        </Link>
      </div>

      <nav className='flex gap-10'>
        <NavLink
          to='/'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? '#FC8019' : '' })}
        >
          Home
        </NavLink>

        <NavLink
          to='search'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? '#FC8019' : '' })}
        >
          Search
        </NavLink>

        {path !== '/checkout' && (
          <NavLink
            to='checkout'
            className='flex items-center hover:text-orange relative'
            style={({ isActive }) => ({ color: isActive ? '#FC8019' : '' })}
            onMouseOver={() => setCartHover(true)}
            onMouseLeave={closeCartCard}
            onClick={closeCartCard}
          >
            Cart ({cart.items.reduce((totalItems, item) => totalItems + item.quantity, 0)})
            {cartHover &&
              (cart.items.length > 0 ? (
                <CartHoverCard cartItems={cart.items} closeCartCard={closeCartCard} />
              ) : (
                <EmptyCartHoverCard />
              ))}
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
