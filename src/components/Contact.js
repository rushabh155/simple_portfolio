import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS with your Public Key
emailjs.init("HLLct_HuNo-Mly0Iy"); // 👈 Replace this with the Public Key from your EmailJS Account page

const Contact = () => {
  const formRef = useRef();
  const contactRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Add animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe contact items and form
    const contactItems = document.querySelectorAll('.contact-item');
    const formGroups = document.querySelectorAll('.form-group');
    const contactTitle = document.querySelector('.contact h2');

    if (contactTitle) observer.observe(contactTitle);
    contactItems.forEach(item => observer.observe(item));
    formGroups.forEach(group => observer.observe(group));

    return () => {
      if (contactTitle) observer.unobserve(contactTitle);
      contactItems.forEach(item => observer.unobserve(item));
      formGroups.forEach(group => observer.unobserve(group));
    };
  }, []);

  // Your personal information
  const personalInfo = {
    name: "Rushabh Jadhav", // This will be used as {{to_name}} in the template
    email: "rushabhj1520@gmail.com", // This should match your EmailJS template's To Email
    phone: "9370631233",
    location: "Pune, India"
  };

  // EmailJS configuration
  const emailConfig = {
    serviceID: "service_edllobl", // 👈 Replace with your EmailJS Service ID
    templateID: "template_fmbhvns", // 👈 Replace with your EmailJS Template ID
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (status.error) {
      setStatus(prev => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please enter a valid email address'
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: personalInfo.name,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams
      );

      if (result.text === 'OK') {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Simple timeout to remove message after 2 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 2000);
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again later or contact me directly via email.'
      });
    }
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <h2 className="animate-on-scroll">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item animate-on-scroll">
              <i className="fas fa-envelope"></i>
              <div className="contact-item-content">
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>
            <div className="contact-item animate-on-scroll">
              <i className="fas fa-phone"></i>
              <div className="contact-item-content">
                <h3>Phone</h3>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>
            <div className="contact-item animate-on-scroll">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-item-content">
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            {status.error && (
              <div className="form-error animate-on-scroll">
                <i className="fas fa-exclamation-circle"></i>
                {status.error}
              </div>
            )}
            
            {status.submitted && (
              <div className="form-success animate-on-scroll">
                <i className="fas fa-check-circle"></i>
                <div className="success-message">
                  <p>Thank you for your message!</p>
                  <p>I'll get back to you soon.</p>
                </div>
              </div>
            )}

            <div className="form-group animate-on-scroll">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={status.submitting}
                minLength={2}
              />
            </div>

            <div className="form-group animate-on-scroll">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={status.submitting}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <div className="form-group animate-on-scroll">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                disabled={status.submitting}
                minLength={3}
              />
            </div>

            <div className="form-group animate-on-scroll">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
                disabled={status.submitting}
                minLength={10}
              ></textarea>
            </div>

            <div className="submit-button-wrapper">
              <button 
                type="submit" 
                className="submit-button animate-on-scroll"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 