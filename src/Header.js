import React from 'react';

const Header = () => {
  return (
    <header className="sticky-nav">
      <div className="nav-content">
        <h1 className="logo">
          <img src={process.env.PUBLIC_URL + '/gears.svg'} alt="Gears" className="gears" />
          <span className="orange">Yashi</span>
          <span className="white">@</span>
          <span className="blue">WE24</span>
        </h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="contact-btn">Contact Me</button>
      </div>
      <style jsx>{`
        .sticky-nav {
          position: sticky;
          top: 0;
          background-color: #3c1053;
          z-index: 1000;
          padding: 20px 0;
          transition: background-color 0.3s ease;
        }
        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 28px;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gears {
          width: 60px;
          height: 20px;
          margin-right: 10px;
        }
        .orange { color: #f7941d; }
        .white { color: white; }
        .blue { color: #00a9b7; }
        nav {
          display: flex;
          gap: 20px;
        }
        nav a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        nav a:hover {
          color: #f7941d;
        }
        .contact-btn {
          background-color: #f7941d;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .contact-btn:hover {
          background-color: #e67e22;
          transform: translateY(-2px);
        }
      `}</style>
    </header>
  );
};

export default Header;