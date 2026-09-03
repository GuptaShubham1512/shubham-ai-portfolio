import React from "react";


function Projects() {
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
          Projects
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

       


        {/* =========================================
            ACHIEVEMENTS
        ========================================= */}



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

export default Projects;