import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="section philosophy-section bg-alt">
      <div className="container">
        <div className="philosophy-content slide-up">
          <span className="philosophy-label">Our Philosophy</span>
          <h2 className="philosophy-quote">
            "We believe that a well-designed space has the power to transform not just your environment, but your entire outlook on life."
          </h2>
          <div className="philosophy-author">
            <span className="author-name">Tina Delia</span>
            <span className="author-title">Founder & Principal Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
