import React from 'react';
import ScrollAnimation from './components/ScrollAnimation';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <ScrollAnimation animation="fade-down" delay={0}>
        <header>
          <Navbar />
        </header>
      </ScrollAnimation>

      <main>
        <section id="hero">
          <Hero />
        </section>

        <ScrollAnimation animation="fade-up" delay={0.2}>
          <section id="about">
            <About />
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.3}>
          <section id="skills">
            <Skills />
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.4}>
          <section id="projects">
            <Projects />
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.5}>
          <section id="contact">
            <Contact />
          </section>
        </ScrollAnimation>
      </main>

      <ScrollAnimation animation="fade-up" delay={0.6}>
        <footer>
          {/* Footer content */}
        </footer>
      </ScrollAnimation>
    </div>
  );
}

export default App;
