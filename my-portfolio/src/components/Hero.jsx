import Chatbot from "./Chatbot";
import shubhamImage from "../assets/shubham.jpeg";
function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >

      {/* =========================================
          RIGHT SIDE CONTENT
      ========================================= */}

      <div className="hero-content">

        <div className="availability">

          <span className="online-dot"></span>

          Available for opportunities

        </div>


        <p className="intro">

          Hi, I am{" "}

          <span>
            Shubham Gupta
          </span>

        </p>


        <h1>

          <span className="title-white">
            Developer
          </span>

          <br />

          <span className="title-gradient">
            & AI Architect
          </span>

        </h1>


        <p className="description">

          I build intelligent digital experiences by combining
          modern software engineering, artificial intelligence,
          generative AI and immersive 3D technologies.

        </p>


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


        <div className="social-links">

          <a
            href="https://github.com/GuptaShubham1512"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span>•</span>

          <a href="#">
            LinkedIn
          </a>

          <span>•</span>

          <a href="#">
            Resume
          </a>

        </div>

      </div>


      {/* =========================================
          CHATBOT
      ========================================= */}

      <Chatbot />

    </section>
  );
}

export default Hero;