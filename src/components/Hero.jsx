import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=60&w=1600" 
          alt="Luxury Interior Design" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container fade-in">
        <h1 className="hero-title stagger-1">
          Designing Spaces<br />
          <span className="italic">that tell a story</span>
        </h1>
        <p className="hero-subtitle stagger-2">
          Washington DC's Premier Full-Service Interior Design Firm
        </p>
        <div className="hero-actions stagger-3">
          <a href="#portfolio" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </div>

      <div className="scroll-indicator fade-in stagger-4">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
