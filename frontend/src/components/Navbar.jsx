import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
          <Link to='/'>    
            <img src={logo} alt="Logo" />
          </Link>   
          <div className='navbar-links'>
            <Link to="/products" className='list-item'>Products</Link>
            <Link to="/cart" className='list-item'><FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} /></Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar