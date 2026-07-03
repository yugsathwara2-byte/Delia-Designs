import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="/" className="navbar-logo">
          DELIA DESIGNS
        </a>
        <div className="navbar-links desktop-only">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-mobile-icon mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
