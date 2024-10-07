import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "MACHINE LEARNING\nDATA SCIENCE\nAI ENGINEERING";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">
          <span className="typed-text">{typedText}</span>
        </h2>
        <p className="hero-subtitle">
          Yashi Yadav: Innovating at the Intersection of AI and Technology
        </p>
        <div className="hero-details">
          <div>Master's in Computer Science</div>
          <div>Purdue University</div>
          <div>Fort Wayne, IN</div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          padding: 80px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero-title {
          font-size: 72px;
          margin-bottom: 20px;
          position: relative;
        }
        .typed-text {
          border-right: 2px solid #f7941d;
          white-space: pre-wrap;
          overflow: hidden;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #f7941d; }
        }
        .hero-subtitle {
          font-size: 24px;
          margin-bottom: 40px;
        }
        .hero-details {
          display: flex;
          justify-content: center;
          gap: 40px;
          font-size: 18px;
        }
      `}</style>
    </section>
  );
};

export default Hero;