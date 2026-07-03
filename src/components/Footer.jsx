import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-alt">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">DELIA DESIGN</h3>
            <p className="footer-tagline">Elevating spaces through thoughtful design.</p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Explore</h4>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#philosophy">Philosophy</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-title">Connect</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/tinadelia.designs/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/pages/Delia-Designs/167174857586" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://twitter.com/deliadesigns" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Delia Design. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
