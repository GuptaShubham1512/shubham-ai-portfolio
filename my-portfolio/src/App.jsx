import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCube from "./components/TechCube";

import "./index.css";

function App() {
  return (
    <div className="app">

      {/* =========================================
          FIXED 3D SPACE BACKGROUND
      ========================================= */}

      <div className="background-canvas">

        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 50,
          }}
        >

          <ambientLight intensity={0.4} />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
            speed={1}
          />

          <Sparkles
            count={300}
            scale={[15, 10, 15]}
            size={2}
            speed={0.4}
          />

        </Canvas>

      </div>


      {/* =========================================
          DARK SPACE OVERLAY
      ========================================= */}

      <div className="space-overlay"></div>


      {/* =========================================
          FIXED SHUBHAM IMAGE
      ========================================= */}

      <div className="fixed-human">

        <div className="human-image-wrapper">

          <img
            src="/src/assets/shubham.jpeg"
            alt="Shubham Gupta"
            className="human-image"
          />

        </div>

      </div>


      {/* =========================================
          WEBSITE
      ========================================= */}

      <div className="website">

        <Navbar />

        <Hero />


        {/* =========================================
            TECHNOLOGIES
        ========================================= */}

        <section
          className="technology-section"
          id="technologies"
        >

          {/* LEFT / CONTENT SIDE */}

          <div className="technology-content">

            <span className="section-tag">
              MY TECHNOLOGIES
            </span>

            <h2>
              Technologies I
              <span>Work With</span>
            </h2>

            <p>
              I build modern full-stack and AI-powered
              applications using these technologies.
            </p>


            <div className="technology-info">

              <div>
                <strong>10+</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>250+</strong>
                <span>DSA Problems</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Projects</span>
              </div>

            </div>

          </div>


          {/* RIGHT / 3D CUBE SIDE */}

          <div className="technology-cubes">

            <TechCube />

          </div>

        </section>


        {/* =========================================
            PROJECTS
        ========================================= */}

        <section
          className="dummy-section"
          id="projects"
        >

          <h2>Projects</h2>

          <p>
            AI systems, full-stack applications, RAG,
            generative AI and immersive experiences.
          </p>

        </section>


        {/* =========================================
            CONTACT
        ========================================= */}

        <section
          className="dummy-section"
          id="contact"
        >

          <h2>Let's Connect</h2>

          <p>
            Let's build something intelligent together.
          </p>

        </section>

      </div>

    </div>
  );
}

export default App;