import React from 'react';

const projects = [
  {
    title: "Adaptive Reading Companion (ARC)",
    description: "Chrome extension for bionic reading and assistive features for various reading disabilities.",
    details: [
      "Implementing features for font customization, background color changes, focus mode, and text-to-speech",
      "Implementing Natural Language Processing techniques for text analysis and vocabulary assistance"
    ]
  },
  {
    title: "Jerry: The Virtual Assistant",
    description: "Voice assistant using ChatGPT's API for communication and answering user queries.",
    details: [
      "Developing a voice recognition model using PyTorch for accurate voice-to-text conversion",
      "Integrating Google's API for web search capabilities and providing a wide range of results when prompted"
    ]
  },
  {
    title: "Binary Classification of Hateful Speech on Social Media",
    description: "Developed a scalable content moderation system using CNN, GloVe-enhanced CNN, and fine-tuned BERT models.",
    details: [
      "Achieved 93.50% accuracy with the BERT model in classifying harmful content across a dataset of 450,000+ sentences",
      "Implemented an efficient matching algorithm to assign content to the most suitable classification model based on complexity"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-content fade-in">
        <h3 className="section-title">Featured Projects</h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <ul className="project-list">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-section {
          padding: 60px 0;
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
        .projects-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .project-item {
          background-color: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
        }
        .project-title {
          font-size: 24px;
          margin-bottom: 10px;
          color: #00a9b7;
        }
        .project-description {
          margin-bottom: 15px;
        }
        .project-list {
          padding-left: 20px;
        }
        .project-list li {
          margin-bottom: 5px;
        }
      `}</style>
    </section>
  );
};

export default Projects;