import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info slide-up">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Inquire</h2>
            <p className="contact-description">
              We look forward to discussing your upcoming project. Please reach out to begin the conversation.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:info@delia-designs.com">info@delia-designs.com</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span>Washington, DC</span>
              </div>
            </div>
          </div>
          <div className="contact-form slide-up stagger-2">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Project Type (e.g. Residential, Hospitality)" />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
