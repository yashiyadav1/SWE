import React from 'react';

const experiences = [
  {
    title: "Software QA Intern - Nokia",
    date: "May 2024 - Present",
    details: [
      "Developed RESTful API using FastAPI for XR Edge Cloud management",
      "Implemented AI model deployment POC in microservices architecture",
      "Implemented FAISS-based vector database, reducing query time significantly",
      "Created NLP scripts for network log analysis, speeding up issue identification"
    ]
  },
  {
    title: "Graduate Research Assistant - Purdue University",
    date: "August 2023 - December 2024",
    details: [
      "Designing and implementing a deep learning model for steganographic applications using TensorFlow",
      "Developed custom DWT-based convolutional layer, improving image hiding capacity by 30%",
      "Created a comprehensive pipeline for dataset preprocessing, model training, and evaluation"
    ]
  },
  {
    title: "D365 Developer Intern - Vera Bradley",
    date: "May 2022 – August 2022",
    details: [
      "Enhanced Microsoft Dynamics 365 by resolving ITR/Bugs backlogs, improving the overall ERP system",
      "Designed Power Automate Flows for alerts on 24 critical Batch Jobs in D365"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-content fade-in">
        <h3 className="section-title">Experience</h3>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4 className="experience-title">{exp.title}</h4>
              <p className="experience-date">{exp.date}</p>
              <ul className="experience-list">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .experience-section {
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
          margin-bottom: 40px;
          text-align: center;
        }
        .experience-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .experience-item {
          background-color: rgba(60, 16, 83, 0.1);
          padding: 20px;
          border-radius: 10px;
        }
        .experience-title {
          font-size: 24px;
          margin-bottom: 10px;
          color: #00a9b7;
        }
        .experience-date {
          font-size: 18px;
          margin-bottom: 10px;
          font-style: italic;
        }
        .experience-list {
          padding-left: 20px;
        }
        .experience-list li {
          margin-bottom: 5px;
        }
      `}</style>
    </section>
  );
};

export default Experience;