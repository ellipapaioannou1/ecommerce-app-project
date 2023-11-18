import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'
//import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
         
            <img src="" alt="Logo" />
            {/* <form className='search-bar' action=""> 

            </form> */}
            <ul className='navbar-links'>
                <li className='list-item'>Log in</li>
                <li className='list-item'>Cart</li>
                <Link to="/categories" className='list-item'>Categories</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar