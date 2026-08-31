import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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

      {/* SPACE DARKNESS */}

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
          WEBSITE CONTENT
      ========================================= */}

      <div className="website">

        <Navbar />

        <Hero />

        {/* Extra content to demonstrate scrolling */}

        <section className="dummy-section" id="about">
          <h2>About Me</h2>

          <p>
            I am Shubham Gupta, a Developer and AI Architect
            passionate about building intelligent applications.
          </p>
        </section>


        <section className="dummy-section" id="projects">
          <h2>Projects</h2>

          <p>
            AI systems, full-stack applications, RAG,
            generative AI and immersive experiences.
          </p>
        </section>


        <section className="dummy-section" id="skills">
          <h2>Skills</h2>

          <p>
            React • Node.js • MongoDB • AI • LLM •
            LangChain • RAG • Agentic AI
          </p>
        </section>


        <section className="dummy-section" id="contact">
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