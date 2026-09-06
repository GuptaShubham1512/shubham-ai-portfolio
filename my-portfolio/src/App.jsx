import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import React from "react";
import shubhamImage from "./assets/shubham.jpeg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCube from "./components/TechCube";
import Technology from "./components/technology";
import Projects from "./components/Projects";
import "./index.css";
import Certification from "./components/Certification";
import Achievements from "./components/Achievments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
            src={shubhamImage}
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

        {/* =========================================
            HERO
        ========================================= */}

        <Hero />

        {/* =========================================
            TECHNOLOGIES
        ========================================= */}
        <Technology />
       

            {/* =====================================
                3D TECHNOLOGY CUBES
            ===================================== */}

        <TechCube/>  

         

        

        {/* =========================================
            PROJECTS
        ========================================= */}

       <Projects/>

       <Certification/>

       <Achievements/>
       <Contact/>
       <Footer/>
     
       

        {/* =========================================
            CONTACT
        ========================================= */}

        

      </div>

    </div>
  );
}

export default App;