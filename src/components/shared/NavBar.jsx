import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/logo-1.png';
import './styles/navbar.css';

const NavBar = () => {

  return (
    <div className='navbar'>
        <figure className='navbar__title'>
          <Link to={'/'}>
            <img src={logo} alt="logo" className='logo' />
          </Link>
        </figure>
        <ul className='navbar__list'>
            <li className='navbar__item'>
              <Link to={'/'}>Products</Link>
            </li>
            <li className='navbar__item'>
              <Link to={'/login'}>Login</Link>
            </li>
            <li className='navbar__item'>
              <Link to={'/purchases'}>Purchases</Link>
            </li>
            <li className='navbar__item'>
              <Link to={'/cart'}>Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar