import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

const EnhancedPortfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="hexagon-pattern"></div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background-color: #3c1053;
          color: white;
        }
        
        .portfolio-container {
          position: relative;
          overflow-x: hidden;
        }
        
        .hexagon-pattern {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.05;
          background-color: #3c1053;
          background-image: 
            linear-gradient(30deg, #4c2063 12%, transparent 12.5%, transparent 87%, #4c2063 87.5%, #4c2063),
            linear-gradient(150deg, #4c2063 12%, transparent 12.5%, transparent 87%, #4c2063 87.5%, #4c2063),
            linear-gradient(30deg, #4c2063 12%, transparent 12.5%, transparent 87%, #4c2063 87.5%, #4c2063),
            linear-gradient(150deg, #4c2063 12%, transparent 12.5%, transparent 87%, #4c2063 87.5%, #4c2063),
            linear-gradient(60deg, #4c2063 25%, transparent 25.5%, transparent 75%, #4c2063 75%, #4c2063),
            linear-gradient(60deg, #4c2063 25%, transparent 25.5%, transparent 75%, #4c2063 75%, #4c2063);
          background-size: 40px 70px;
          background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default EnhancedPortfolio;