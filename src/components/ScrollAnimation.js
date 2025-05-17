import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class
            entry.target.classList.add('animate');
            // Optional: unobserve after animation
            // observer.unobserve(entry.target);
          } else {
            // Remove animation class when element is out of view
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      // Add initial animation class
      currentElement.classList.add('scroll-animation', animation);
      // Set animation delay
      currentElement.style.setProperty('--animation-delay', `${delay}s`);
      // Start observing
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, delay]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animation ${animation} ${className}`}
      style={{ '--animation-delay': `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 