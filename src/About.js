import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-content fade-in">
        <h3 className="section-title">About Me</h3>
        <p className="about-text">
          A passionate Machine Learning Engineer and Software Developer with a strong foundation in AI/ML techniques and
          hands-on experience in deep learning and natural language processing. Highly skilled in developing and deploying ML
          models using TensorFlow and PyTorch. Excited to create innovative solutions and solve complex problems in the field of AI.
        </p>
      </div>
      <style jsx>{`
        .about-section {
          padding: 60px 0;
          background-color: white;
          color: #3c1053;
        }
        .section-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 36px;
          color: #f7941d;
          margin-bottom: 20px;
          text-align: center;
        }
        .about-text {
          font-size: 18px;
          line-height: 1.6;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default About;