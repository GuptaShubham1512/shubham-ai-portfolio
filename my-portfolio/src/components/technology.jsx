import React from "react";
import TechCube from "./TechCube";

function Technology() {
  return (
    <section
      className="hero"
      id="home"
    >

      {/* =========================================
          LEFT SIDE CONTENT
      ========================================= */}

      <div className="hero-content">

        {/* SECTION TAG */}

        <div className="availability">
          <span className="online-dot"></span>
          MY TECHNOLOGIES
        </div>


        {/* INTRO */}

        {/* <p className="intro">
          Hi, I am{" "}
          <span>
            Shubham Gupta
          </span>
        </p> */}


        {/* TITLE */}

        <h1>
          <span className="title-white">
            Technology
          </span>

          <br />

          <span className="title-gradient">
            & Skills
          </span>
        </h1>


        {/* DESCRIPTION */}

        <p className="description">
          I build intelligent digital experiences by combining
          modern software engineering, artificial intelligence,
          generative AI and immersive 3D technologies.
        </p>


        {/* =========================================
            SKILLS DESCRIPTION
        ========================================= */}

        <div className="skills-description">

          <p>
            <span>Frontend:</span>{" "}
            React.js, JavaScript, HTML5, CSS3, Tailwind CSS
          </p>

          <p>
            <span>Backend:</span>{" "}
            Node.js, Express.js, FastAPI, REST APIs
          </p>

          <p>
            <span>Database:</span>{" "}
            MongoDB, SQL
          </p>

          <p>
            <span>AI & GenAI:</span>{" "}
            LangChain, LangGraph, RAG, Gemini API, AI Agents
          </p>

          <p>
            <span>Programming:</span>{" "}
            C++, OOP, Data Structures & Algorithms
          </p>

          <p>
            <span>Tools:</span>{" "}
            Git, GitHub, Docker, Postman
          </p>

        </div>


        {/* =========================================
            ACHIEVEMENTS
        ========================================= */}

        <div className="technology-info">

          <div className="technology-stat">
            <strong>
              <span>300+</span>
            </strong>

            <p>
              DSA Questions
            </p>
          </div>


          <div className="technology-stat">
            <strong>
              <span>10+</span>
            </strong>

            <p>
              Technologies
            </p>
          </div>


          <div className="technology-stat">
            <strong>
              <span>5+</span>
            </strong>

            <p>
              Projects
            </p>
          </div>

        </div>


        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="hero-actions">

          <a
            href="#projects"
            className="primary-btn"
          >
            Explore My Work

            <span>
              ↗
            </span>
          </a>


          <a
            href="#contact"
            className="outline-btn"
          >
            Let's Connect
          </a>

        </div>


        {/* =========================================
            SOCIAL LINKS
        ========================================= */}

        <div className="social-links">

          <a
            href="https://github.com/GuptaShubham1512"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href="#"
          >
            LinkedIn
          </a>

          <span>•</span>

          <a
            href="#"
          >
            Resume
          </a>

        </div>

      </div>


      {/* =========================================
          RIGHT SIDE — 3D TECHNOLOGY CUBES
      ========================================= */}

     

    </section>
  );
}

export default Technology;