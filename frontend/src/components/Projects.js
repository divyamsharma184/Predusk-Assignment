import React from 'react';

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>
      
      <div className="projects-grid">
        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>A full-stack e-commerce application built with React and Node.js</p>
          <a href="https://github.com/divyamsharma184/ecommerce" target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
          <div className="skills-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
          </div>
        </div>
        
        <div className="project-card">
          <h3>Task Manager API</h3>
          <p>RESTful API for task management with Express and PostgreSQL</p>
          <a href="https://github.com/divyamsharma184/task-manager" target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
          <div className="skills-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">Express</span>
          </div>
        </div>
        
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio website built with React and modern CSS</p>
          <a href="https://github.com/divyamsharma184/portfolio" target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
          <div className="skills-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
