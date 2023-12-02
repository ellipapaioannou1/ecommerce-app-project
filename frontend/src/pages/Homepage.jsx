import React from 'react'
import '../styles/Homepage.css'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
<div className='home'>
<div className='intro'>
  <h1>Welcome to BearWear</h1>
  <h2>Your One-Stop Shop for Vibrant Scrunchies and Stylish Clutches</h2>
  <p>Discover a world of colors and express your unique style with our handcrafted scrunchies and fashionable clutches. From bold patterns to pastel hues, we have something for every mood and occasion.</p>
  <Link to="/products" className="cta-button">Shop Now</Link>
</div>
</div>


  
  )
}

export default Homepage