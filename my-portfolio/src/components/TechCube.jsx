import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

const technologies = [
  { name: "React.js", color: "#61DAFB" },       // Cyan
  { name: "DSA", color: "#F59E0B" },             // Amber
  { name: "Express", color: "#E5E7EB" },        // Light Gray
  { name: "MongoDB", color: "#10B981" },        // Emerald
  { name: "C++", color: "#3B82F6" },            // Blue
  { name: "JavaScript", color: "#FACC15" },      // Yellow
  { name: "LangChain", color: "#22C55E" },      // Green
  { name: "GenAI", color: "#A855F7" },           // Purple
  { name: "LangGraph", color: "#F97316" },       // Orange
  { name: "Docker", color: "#0EA5E9" },          // Sky Blue
  { name: "SQL", color: "#14B8A6" },             // Teal
  { name: "Kubernetes", color: "#6366F1" },      // Indigo
  { name: "GitGitHub", color: "#F43F5E" },      // Rose
  { name: "Postman", color: "#F97316" },         // Orange
  { name: "VS Code", color: "#38BDF8" },         // Light Blue
];
/*
=====================================================
  PLAYGROUND SETTINGS
=====================================================
*/

const columns = 3;

const cubeSize = 0.72;
const gap = 0.36;

const horizontalSpacing = cubeSize + gap;
const verticalSpacing = cubeSize + gap;


/*
=====================================================
  ORIGINAL POSITIONS

  3 columns × 4 rows

  This creates a taller Y-axis layout.
=====================================================
*/

function getOriginalPosition(index) {
  const row = Math.floor(index / columns);
  const column = index % columns;

  const totalWidth =
    (columns - 1) * horizontalSpacing;

  const totalHeight =
    4 * verticalSpacing;

  const x =
    column * horizontalSpacing -
    totalWidth / 2;

  const y =
    totalHeight / 2 -
    row * verticalSpacing;

  return {
    x,
    y,
    z: 0,
  };
}


/*
=====================================================
  CUBE
=====================================================
*/

function TechCubeItem({
  technology,
  index,
  mouse,
  bounds,
}) {
  const group = useRef();

  const original = useRef(
    getOriginalPosition(index)
  );

  const velocity = useRef({
    x: 5,
    y: 5,
    z: 5,
  });


  useFrame((state, delta) => {
    if (!group.current) return;

    const position = group.current.position;

    /*
    =================================================
      MOUSE POSITION

      mouse.x / mouse.y are already converted
      into the actual 3D plane coordinates.
    =================================================
    */

    const mouseX = mouse.current.x;
    const mouseY = mouse.current.y;


    /*
    =================================================
      DISTANCE FROM MOUSE
    =================================================
    */

    const dx = position.x - mouseX;
    const dy = position.y - mouseY;

    const distance = Math.sqrt(
      dx * dx + dy * dy
    );


    /*
    =================================================
      MOUSE REPULSION
    =================================================
    */

    const reactionRadius = 1.15;

    if (distance < reactionRadius) {

      const safeDistance = Math.max(
        distance,
         0.15
       );

      const force =
        (reactionRadius - safeDistance) /
        reactionRadius;

      const directionX =
        dx / safeDistance;

      const directionY =
        dy / safeDistance;


      velocity.current.x +=
        directionX * force * 0.035;

      velocity.current.y +=
        directionY * force * 0.035;

      velocity.current.z +=
        force * 0.012;
    }


    /*
    =================================================
      RETURN TO ORIGINAL POSITION

      Keeps the cubes organized after interaction.
    =================================================
    */

    const returnX =
      original.current.x - position.x;

    const returnY =
      original.current.y - position.y;

    const returnZ =
      original.current.z - position.z;


    velocity.current.x +=
      returnX * 0.014;

    velocity.current.y +=
      returnY * 0.014;

    velocity.current.z +=
      returnZ * 0.02;


    /*
    =================================================
      DAMPING
    =================================================
    */

    velocity.current.x *= 0.90;
    velocity.current.y *= 0.90;
    velocity.current.z *= 0.88;


    /*
    =================================================
      MOVEMENT

      Prevent huge frame-rate-dependent jumps.
    =================================================
    */

    const frameScale = Math.min(
      delta * 60,
      1.5
    );

    position.x +=
      velocity.current.x * frameScale;

    position.y +=
      velocity.current.y * frameScale;

    position.z +=
      velocity.current.z * frameScale;


    /*
    =================================================
      HARD X/Y BOUNDARIES

      THIS IS THE IMPORTANT FIX.

      Cubes can NEVER escape the plane.
    =================================================
    */

    position.x = THREE.MathUtils.clamp(
      position.x,
      bounds.minX,
      bounds.maxX
    );

    position.y = THREE.MathUtils.clamp(
      position.y,
      bounds.minY,
      bounds.maxY
    );


    /*
    =================================================
      Z LIMIT

      Prevent cubes from flying toward the camera.
    =================================================
    */

    position.z = THREE.MathUtils.clamp(
      position.z,
      -0.35,
      0.35
    );


    /*
    =================================================
      INDEPENDENT ROTATION
    =================================================
    */

    group.current.rotation.x +=
      velocity.current.y * 0.06;

    group.current.rotation.y +=
      velocity.current.x * 0.06;


    group.current.rotation.x =
      THREE.MathUtils.clamp(
        group.current.rotation.x,
        -0.4,
        0.4
      );

    group.current.rotation.y =
      THREE.MathUtils.clamp(
        group.current.rotation.y,
        -0.4,
        0.4
      );
  });


  return (
    <group ref={group}>

      <RoundedBox
        args={[
          cubeSize,
          cubeSize,
          cubeSize,
        ]}
        radius={0.10}
        smoothness={6}
        bevelSegments={6}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={technology.color}
          metalness={0.45}
          roughness={0.22}
          emissive={technology.color}
          emissiveIntensity={0.08}
        />
      </RoundedBox>


      <Text
        position={[
          0,
          0,
          cubeSize / 2 + 0.02,
        ]}
        fontSize={0.10}
        maxWidth={0.62}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
        outlineWidth={0.009}
        outlineColor="#000000"
      >
        {technology.name}
      </Text>

    </group>
  );
}


/*
=====================================================
  SCENE
=====================================================
*/

function TechScene() {

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const { viewport } = useThree();


  /*
  ===================================================
    CUBE BOUNDARIES

    Based directly on the actual Canvas viewport.
    This means the cubes stay inside the visible
    technology plane even if the screen changes size.
  ===================================================
  */

  const padding = 0.45;

  const bounds = {
    minX:
      -viewport.width / 2 +
      cubeSize / 2 +
      padding,

    maxX:
      viewport.width / 2 -
      cubeSize / 2 -
      padding,

    minY:
      -viewport.height / 2 +
      cubeSize / 2 +
      padding,

    maxY:
      viewport.height / 2 -
      cubeSize / 2 -
      padding,
  };


  /*
  ===================================================
    POINTER MOVEMENT

    Convert mouse NDC [-1,1] into actual 3D
    coordinates of the Canvas.
  ===================================================
  */

  const handlePointerMove = (event) => {

    mouse.current.x =
      (event.pointer.x *
        viewport.width) /
      2;

    mouse.current.y =
      (event.pointer.y *
        viewport.height) /
      2;


    /*
    Keep cursor interaction inside plane.
    */

    mouse.current.x =
      THREE.MathUtils.clamp(
        mouse.current.x,
        bounds.minX,
        bounds.maxX
      );

    mouse.current.y =
      THREE.MathUtils.clamp(
        mouse.current.y,
        bounds.minY,
        bounds.maxY
      );
  };


  return (
    <>

      <ambientLight intensity={1.4} />

      <directionalLight
        position={[3, 5, 6]}
        intensity={2.4}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={1.8}
      />

      <pointLight
        position={[4, -2, 3]}
        intensity={1.3}
      />


      <group
        onPointerMove={handlePointerMove}
      >

        {technologies.map(
          (technology, index) => (
            <TechCubeItem
              key={technology.name}
              technology={technology}
              index={index}
              mouse={mouse}
              bounds={bounds}
            />
          )
        )}

      </group>

    </>
  );
}


/*
=====================================================
  MAIN COMPONENT
=====================================================
*/

export default function TechCube() {

  return (
    <div className="technology-cubes">

      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 50,
        }}
        shadows
        dpr={[1, 2]}
      >

        <TechScene />

      </Canvas>

    </div>
  );
}