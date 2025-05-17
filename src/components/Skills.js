import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'SQL', level: 75, category: 'Database' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'AWS', level: 70, category: 'Cloud' }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      duration: "2019 - 2023",
      cgpa: "8.5/10",
      highlights: [
        "Specialized in Web Development and Cloud Computing",
        "Final Year Project: AI-Powered Portfolio Website",
        "Active member of Coding Club"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Your College Name",
      duration: "2017 - 2019",
      percentage: "85%",
      highlights: [
        "Science Stream with Computer Science",
        "District Level Coding Competition Winner"
      ]
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Company Name",
      duration: "2023 - Present",
      location: "City, Country",
      responsibilities: [
        "Developed and maintained 5+ web applications using React and Node.js",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Led a team of 3 developers in a major project",
        "Improved application performance by 60% through optimization"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Previous Company",
      duration: "2022 - 2023",
      location: "City, Country",
      responsibilities: [
        "Built responsive user interfaces using React",
        "Collaborated with UX team to implement new features",
        "Reduced page load time by 30%"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <h2>Skills & Experience</h2>
        </ScrollAnimation>

        <div className="skills-grid">
          {/* Skills Section */}
          <div className="skills-category">
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <h3>Technical Skills</h3>
            </ScrollAnimation>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <ScrollAnimation key={skill.name} animation="fade-up" delay={0.1 * (index + 3)}>
                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-category">{skill.category}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="education-category">
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <h3>Education</h3>
            </ScrollAnimation>
            <div className="timeline">
              {education.map((edu, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={0.1 * (index + 4)}>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                      <p className="duration">{edu.duration}</p>
                      {edu.cgpa && <p className="achievement">CGPA: {edu.cgpa}</p>}
                      {edu.percentage && <p className="achievement">Percentage: {edu.percentage}</p>}
                      <ul className="highlights">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="experience-category">
            <ScrollAnimation animation="fade-up" delay={0.4}>
              <h3>Work Experience</h3>
            </ScrollAnimation>
            <div className="timeline">
              {experience.map((exp, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={0.1 * (index + 5)}>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{exp.role}</h4>
                      <p className="company">{exp.company}</p>
                      <p className="duration">{exp.duration}</p>
                      <p className="location">{exp.location}</p>
                      <ul className="responsibilities">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 