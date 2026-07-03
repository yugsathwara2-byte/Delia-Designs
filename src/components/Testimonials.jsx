import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section testimonials-section bg-alt">
      <div className="container">
        <h2 className="section-title slide-up">Client Kind Words</h2>
        <div className="testimonial-container slide-up stagger-2">
          <div className="testimonial-quote">
            "Tina and her team at Delia Designs transformed our hotel lobby into a breathtaking space. Their eye for detail and commitment to quality is unmatched. The result feels both luxurious and welcoming."
          </div>
          <div className="testimonial-client">
            <span className="client-name">Sarah J.</span>
            <span className="client-project">The Edison Project</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
