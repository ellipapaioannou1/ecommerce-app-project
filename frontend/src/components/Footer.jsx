import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer-section">
            <p><a href="mailto:info@bearwear.com"><FontAwesomeIcon icon={faEnvelope}/></a> info@bearwear.com</p>
            <p><a href="http://instagram.com/bearwear"><FontAwesomeIcon icon={faInstagram} style={{color: "#e7748b",}}/></a> _BearWear</p>
            <p><a href="http://facebook.com/bearwear"><FontAwesomeIcon icon={faFacebookF} style={{color: "#1452ff",}}/></a> Bearwear</p>
          </div>
      <div className="footer-bottom">
        <p>&copy; 2023 BearWear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
