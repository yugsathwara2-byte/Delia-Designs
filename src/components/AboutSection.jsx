import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section bg-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-content slide-up">
            <h2 className="section-title">The Art of Living Well</h2>
            <p className="about-text">
              Delia Design is a full-service interior design firm in Washington, DC, specializing in hospitality, multi-family, and luxury residential projects. Founded by Tina Delia, our firm believes that your environment deeply influences your well-being.
            </p>
            <p className="about-text">
              We approach each project as a unique narrative, blending timeless elegance with modern sensibility. Our meticulous attention to detail and commitment to quality craftsmanship ensures spaces that are not only beautiful but truly functional.
            </p>
            <a href="#philosophy" className="btn btn-primary" style={{marginTop: '2rem'}}>Our Philosophy</a>
          </div>
          <div className="about-image-wrapper slide-up stagger-2">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=60&w=600" 
              alt="Tina Delia - Delia Design" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
