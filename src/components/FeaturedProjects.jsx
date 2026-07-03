import React from 'react';
import './FeaturedProjects.css';

const projects = [
  {
    id: 1,
    title: "Front Street Lofts",
    category: "Hospitality & Multi-Family",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1500",
  },
  {
    id: 2,
    title: "The Commonwealth",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1500", 
  },
  {
    id: 3,
    title: "The Edison",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1500",
  }
];

const FeaturedProjects = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title slide-up">Featured Projects</h2>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`portfolio-item slide-up stagger-${index + 1}`}
            >
              <div className="portfolio-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <span className="view-project-text">View Project</span>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-name">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-actions slide-up stagger-3" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
