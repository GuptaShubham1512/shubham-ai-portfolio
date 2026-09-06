import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">

      {/* =================================================
          BACKGROUND EFFECTS
      ================================================= */}

      <div className="footer-orb"></div>

      <div className="footer-grid"></div>

      <div className="footer-particle footer-particle-1"></div>
      <div className="footer-particle footer-particle-2"></div>
      <div className="footer-particle footer-particle-3"></div>
      <div className="footer-particle footer-particle-4"></div>


      {/* =================================================
          FOOTER CONTENT
      ================================================= */}

      <div className="footer-content">

        {/* Sanskrit Inspiration */}

        <div className="footer-mantra">

          <span className="mantra-line"></span>

          <div className="mantra-wrapper">

            <p className="sanskrit-text">
              तमसो मा ज्योतिर्गमय
            </p>

            <p className="mantra-translation">
              From darkness, lead me towards light.
            </p>

          </div>

          <span className="mantra-line"></span>

        </div>


        {/* Main Signature */}

        <div className="footer-signature">

          <p className="footer-small-text">
            THANK YOU FOR VISITING
          </p>

          <h2>
            Let's build something
            <span>meaningful.</span>
          </h2>

          <p className="footer-description">
            Turning ideas into scalable digital experiences
            and intelligent solutions — one line of code at
            a time.
          </p>

        </div>


        {/* Brand */}

        <div className="footer-brand-area">

          <div className="footer-brand">
            Shubham<span>.</span>
          </div>

          <p className="footer-role">
            Developer · AI Architect · Problem Solver
          </p>

        </div>


        {/* Social Links */}

        <div className="footer-socials">

          <a
            href="https://github.com/GuptaShubham1512"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a href="#contact">
            Contact
            <span>↗</span>
          </a>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Shubham Gupta.
            All rights reserved.
          </p>

          <p className="footer-made">
            Crafted with
            <span className="footer-heart">♥</span>
            & curiosity
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;