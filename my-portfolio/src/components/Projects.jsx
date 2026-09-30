import React, { useState } from "react";


const projects = [
  {
    title: "S2-Trading Indicator Engine",
    description:
      "Real-time NIFTY trading analytics platform combining VWAP, RSI, EMA and custom S2 entry, exit and risk logic.",
    image:
      "https://s3.tradingview.com/snapshots/8/8GB6Mhzh.png",
    tech: ["React", "Node.js", "Express", "WebSocket", "MongoDB"],
    github: "https://github.com/GuptaShubham1512",
    live: "#",
  },

  {
    title: "Talus.AI",
    description:
      "AI-powered mining safety platform for rockfall risk monitoring, alerts and intelligent safety insights.",
    image:
      "https://0701.static.prezi.com/preview/v2/c3vmkioh6wyp2xed7l5dfr6w636jc3sachvcdoaizecfr3dnitcq_3_0.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "LangChain", "Gemini"],
    github: "https://github.com/GuptaShubham1512/Mining",
    live: "#",
  },

  {
    title: "Business Management System",
    description:
      "Full-stack MERN application for managing customers, products, orders and business analytics.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini"],
    github: "https://github.com/GuptaShubham1512/Sales-Manager",
    live: "#",
  },

  {
    title: "AI Financial Advisor",
    description:
      "AI-powered financial analysis application that analyzes financial data and provides personalized insights using Gemini.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "Streamlit", "Gemini API", "Pandas"],
    github: "https://github.com/GuptaShubham1512/financial-advisor-ai",
    live: "#",
  },

  {
    title: "AI Chatbot",
    description:
      "Conversational AI application that provides intelligent responses using the Gemini API.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "Gemini API"],
    github: "https://github.com/GuptaShubham1512/shubham-ai-portfolio",
    live: "#",
  },

  {
    title: "3D Developer Portfolio",
    description:
      "Interactive 3D developer portfolio showcasing projects, technical skills and an AI-powered chatbot.",
    image:
      "https://user-images.githubusercontent.com/140153463/267377369-2f298470-a7fa-4555-a6b0-75aba70306f4.PNG",
    tech: ["React", "Three.js", "React Three Fiber", "LangChain", "Gemini"],
    github: "https://github.com/GuptaShubham1512/shubham-ai-portfolio",
    live: "#",
  },

 
];

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const project = projects[currentProject];

  return (
    <section className="projects-section" id="projects">

      {/* Heading */}
      <div className="projects-heading">

        <div className="availability">
          <span className="online-dot"></span>
          Projects
        </div>

        <h1>
          <span className="title-white">My</span>{" "}
          <span className="title-gradient">Projects</span>
        </h1>

        <p>
          A collection of projects I have built using modern
          software engineering and AI technologies.
        </p>

      </div>


      {/* ONE PROJECT CARD */}
      <div className="project-wrapper">

        <div className="project-card">

          {/* Image */}
          <div className="project-image">

            <img
              src={project.image}
              alt={project.title}
            />

            <span className="project-number">
              {String(currentProject + 1).padStart(2, "0")}
            </span>

          </div>


          {/* Content */}
          <div className="project-content">

            <span className="project-label">
              PROJECT {String(currentProject + 1).padStart(2, "0")}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>


            {/* Technologies */}
            <div className="project-tech">

              {project.tech.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>


            {/* Links */}
            <div className="project-links">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>


        {/* ARROWS BELOW CARD */}
        <div className="project-navigation">

          <button
            onClick={previousProject}
            className="project-arrow"
            aria-label="Previous project"
          >
            ←
          </button>

          <span className="project-counter">
            {String(currentProject + 1).padStart(2, "0")}
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <button
            onClick={nextProject}
            className="project-arrow"
            aria-label="Next project"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Projects;