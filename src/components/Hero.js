import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          {/* Left Content */}
          <div className="hero-content">
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div className="hero-badge">
                <span>Software Engineer</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Rushabh Jadhav</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.3}>
              <h2 className="hero-subtitle">
                Full Stack Developer
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.4}>
              <p className="hero-description">
                I build modern, responsive, and user-friendly web applications
                using the latest technologies and best practices. Passionate about
                creating efficient solutions and delivering exceptional user experiences.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.5}>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  Contact Me
                </a>
                <a href="#projects" className="btn btn-secondary">
                  <i className="fas fa-code"></i>
                  View Projects
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.6}>
              <div className="hero-social">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.7}>
              <div className="hero-highlights">
                <div className="highlight-item">
                  <i className="fas fa-code"></i>
                  <span>5+ Years Experience</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-project-diagram"></i>
                  <span>20+ Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>15+ Happy Clients</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content - Profile Image */}
          <ScrollAnimation animation="fade-up" delay={0.4} className="hero-image-wrapper">
            <div className="hero-image">
              <div className="hero-image-container">
                <img 
                  src="/your-photo.jpg" 
                  alt="Rushabh Jadhav - Software Engineer"
                  className="profile-image"
                />
                <div className="hero-image-overlay"></div>
              </div>
              <div className="hero-image-decoration"></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero; 