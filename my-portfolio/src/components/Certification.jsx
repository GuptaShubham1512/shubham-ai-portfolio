import React, { useState } from "react";
import pythonCert from "../assets/certificates/image.png";



const projects = [
  {
    title: "Python Programming Certificate",
    description:
      "Certificate in Python programming covering core programming concepts, problem-solving, and practical Python development.",
    image: pythonCert,
    tech: ["Python", "Programming", "Problem Solving"],
    issuer: "Open Edge Python Institute",
  },
  {
    title: "English for IT 2",
    description:
      "Cisco certification focused on professional English communication, IT terminology, workplace communication, and technical vocabulary.",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20220816100116/Cisco.png",
    tech: ["English", "IT Communication", "Professional Skills"],
    issuer: "Cisco",
  },
  {
    title: "AI Agents",
    description:
      "Hands-on certification covering AI Agent development, LangGraph, MCP, agent workflows, orchestration, and FastAPI integration.",
    image: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    tech: ["AI Agents", "LangGraph", "MCP", "FastAPI"],
    issuer: "ViqriLabs Pvt. Ltd.",
  },
  {
    title: "DSA – 160 Days Problem Solving",
    description:
      "Completed an intensive 160-day Data Structures and Algorithms problem-solving program covering arrays, strings, trees, graphs, dynamic programming, and competitive programming concepts.",
    image: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    tech: ["DSA", "Algorithms", "Problem Solving", "GFG"],
    issuer: "GeeksforGeeks",
  },
  {
    title: "Generative AI Powered Data Analytics",
    description:
      "Certification focused on using Generative AI and modern analytics techniques to analyze data, generate insights, and support data-driven decision making.",
    image: "https://www.tata.com/content/dam/tata/images/logo.svg",
    tech: ["Generative AI", "Data Analytics", "AI"],
    issuer: "TATA",
  },
  {
    title: "Introduction to Cybersecurity",
    description:
      "Cisco cybersecurity certification covering fundamental security concepts, cyber threats, vulnerabilities, protection strategies, and cybersecurity awareness.",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20220816100116/Cisco.png",
    tech: ["Cybersecurity", "Network Security", "Threats"],
    issuer: "Cisco",
  },
  {
    title: "Cybersecurity Essentials",
    description:
      "Certification covering essential cybersecurity principles, network security, common cyber attacks, security technologies, and defensive practices.",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20220816100116/Cisco.png",
    tech: ["Cybersecurity", "Network Security", "Security"],
    issuer: "Cisco",
  },
  {
    title: "Cisco Packet Tracer",
    description:
      "Hands-on networking certification and practical experience using Cisco Packet Tracer to design, configure, and troubleshoot network topologies.",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20220816100116/Cisco.png",
    tech: ["Cisco", "Networking", "Packet Tracer"],
    issuer: "Cisco",
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
          Certificates
        </div>

        <h1>
          <span className="title-white">My</span>{" "}
          <span className="title-gradient">Certificates</span>
        </h1>

        <p>
          A collection of certificates I have earned in various domains of technology.
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