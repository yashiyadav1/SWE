import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <p>yashiyadav0901@gmail.com</p>
          <p>(260) 246-8543</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Connect</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} color="#00a9b7" />
            </a>
            <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer">
              <Github size={24} color="#00a9b7" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Yashi@WE24</h4>
          <p>© 2024 Yashi Yadav. All Rights Reserved.</p>
        </div>
      </div>
      <div className="footer-watermark">TOGETHER WE RISE</div>
      <style jsx>{`
        .footer {
          background-color: #3c1053;
          padding: 40px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .footer-title {
          font-size: 18px;
          margin-bottom: 10px;
          color: #f7941d;
        }
        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }
        .footer-watermark {
          position: absolute;
          bottom: -30px;
          left: 0;
          right: 0;
          font-size: 120px;
          font-weight: bold;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: clip;
          text-transform: uppercase;
          background: linear-gradient(45deg, #f7941d, white, #00a9b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;