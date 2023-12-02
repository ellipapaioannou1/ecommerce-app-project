import React, { useState, useEffect } from 'react';
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
                <li className='list-item'>Log in</li>
                <li className='list-item'>Cart</li>
                <Link to="/categories" className='list-item'>Products</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar