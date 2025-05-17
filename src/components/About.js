import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Full Stack Developer with a strong foundation in web development
              and a keen eye for creating elegant solutions to complex problems. With expertise
              in both front-end and back-end technologies, I strive to build applications that
              are not only functional but also provide an exceptional user experience.
            </p>
            <p>
              My journey in web development started [Your Story Here]. I enjoy learning new
              technologies and staying up-to-date with the latest industry trends. When I'm
              not coding, you can find me [Your Hobbies/Interests].
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Education</h3>
                <p>Your Degree</p>
                <p>Your University</p>
                <p>Year of Graduation</p>
              </div>
              <div className="detail-item">
                <h3>Experience</h3>
                <p>Your Current Role</p>
                <p>Your Company</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 