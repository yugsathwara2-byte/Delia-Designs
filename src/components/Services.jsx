import React from 'react';
import './Services.css';

const services = [
  {
    icon: "01",
    title: "Hospitality Design",
    description: "Creating immersive experiences for boutique hotels, restaurants, and luxury venues that captivate guests and define brands."
  },
  {
    icon: "02",
    title: "Multi-Family",
    description: "Designing compelling common areas and model units that elevate properties, attract residents, and foster community."
  },
  {
    icon: "03",
    title: "Residential Design",
    description: "Crafting bespoke, highly personal homes that reflect our clients' lifestyles, tastes, and aspirations with timeless elegance."
  },
  {
    icon: "04",
    title: "Furniture Sourcing",
    description: "Curating and procuring distinct, high-quality furnishings, art, and accessories to perfectly complete your space."
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title slide-up">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card slide-up stagger-${index + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
