import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
      
              <i className="fas fa-map-marker-alt"></i> Athens,Greece
             <i className="fas fa-envelope"></i> bearwear@gmail.com
            <i className="fas fa-phone"></i> +30 210 9000000

          </div>
          <div className="footer-section">
            <h3>Connect with us</h3>
              <a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: "#e7748b",}} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} style={{color: "#1452ff",}} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 BearWear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
