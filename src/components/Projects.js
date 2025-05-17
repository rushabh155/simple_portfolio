import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://via.placeholder.com/400x300",
      github: "#",
      live: "#"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with features like product search, cart management, and secure payment processing.",
      technologies: ["React", "Redux", "Node.js", "Stripe"],
      image: "https://via.placeholder.com/400x300",
      github: "#",
      live: "#"
    },
    {
      title: "Project Three",
      description: "A social media dashboard that provides analytics and insights for social media managers.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x300",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 