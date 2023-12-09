import React from 'react';
import '../styles/Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
          <Link to='/'>    
            <img src={logo} alt="Logo" />
            </Link>   
            <ul className='navbar-links'>
            <Link to="/products" className='list-item'>Products</Link>
                <Link to="/cart" className='list-item'>Cart</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar