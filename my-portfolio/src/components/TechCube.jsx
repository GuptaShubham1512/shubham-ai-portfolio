import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

/* =====================================================
   TECHNOLOGIES
===================================================== */

const technologies = [
  { name: "React.js", color: "#61DAFB" },
  { name: "DSA", color: "#F59E0B" },
  { name: "Express", color: "#E5E7EB" },
  { name: "MongoDB", color: "#10B981" },
  { name: "C++", color: "#3B82F6" },

  { name: "JavaScript", color: "#FACC15" },
  { name: "LangChain", color: "#22C55E" },
  { name: "GenAI", color: "#A855F7" },
  { name: "LangGraph", color: "#F97316" },
  { name: "Docker", color: "#0EA5E9" },

  { name: "SQL", color: "#14B8A6" },
  { name: "Kubernetes", color: "#6366F1" },
  { name: "GitGitHub", color: "#F43F5E" },
  { name: "Postman", color: "#F97316" },
  { name: "VS Code", color: "#38BDF8" },
];


/* =====================================================
   GRID
   5 COLUMNS × 3 ROWS
===================================================== */

const COLUMNS = 5;
const ROWS = 3;

const CUBE_SIZE = 0.72;
const GAP = 0.36;

const HORIZONTAL_SPACING = CUBE_SIZE + GAP;
const VERTICAL_SPACING = CUBE_SIZE + GAP;


/* =====================================================
   GET ORIGINAL CUBE POSITION
===================================================== */

function getOriginalPosition(index) {
  const row = Math.floor(index / COLUMNS);
  const column = index % COLUMNS;

  const totalWidth =
    (COLUMNS - 1) * HORIZONTAL_SPACING;

  const totalHeight =
    (ROWS - 1) * VERTICAL_SPACING;

  return {
    x:
      column * HORIZONTAL_SPACING -
      totalWidth / 2,

    y:
      totalHeight / 2 -
      row * VERTICAL_SPACING,

    z: 0,
  };
}


/* =====================================================
   INDIVIDUAL CUBE
===================================================== */

function TechCubeItem({
  technology,
  index,
  mouse,
  bounds,
}) {
  const group = useRef();

  const originalPosition = useMemo(
    () => getOriginalPosition(index),
    [index]
  );

  const velocity = useRef({
    x: 0,
    y: 0,
    z: 0,
  });


  useFrame((state, delta) => {
    if (!group.current) return;

    const position = group.current.position;

    /* -----------------------------------------------
       MOUSE DISTANCE
    ------------------------------------------------ */

    const dx =
      position.x - mouse.current.x;

    const dy =
      position.y - mouse.current.y;

    const distance =
      Math.sqrt(dx * dx + dy * dy);


    /* -----------------------------------------------
       MOUSE REPULSION
    ------------------------------------------------ */

    const reactionRadius = 1.15;

    if (distance < reactionRadius) {
      const safeDistance =
        Math.max(distance, 0.15);

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


    /* -----------------------------------------------
       SPRING BACK TO ORIGINAL POSITION
    ------------------------------------------------ */

    velocity.current.x +=
      (originalPosition.x - position.x) *
      0.014;

    velocity.current.y +=
      (originalPosition.y - position.y) *
      0.014;

    velocity.current.z +=
      (originalPosition.z - position.z) *
      0.02;


    /* -----------------------------------------------
       FRICTION
    ------------------------------------------------ */

    velocity.current.x *= 0.90;
    velocity.current.y *= 0.90;
    velocity.current.z *= 0.88;


    /* -----------------------------------------------
       FRAME NORMALIZATION
    ------------------------------------------------ */

    const frameScale =
      Math.min(delta * 60, 1.5);


    /* -----------------------------------------------
       UPDATE POSITION
    ------------------------------------------------ */

    position.x +=
      velocity.current.x * frameScale;

    position.y +=
      velocity.current.y * frameScale;

    position.z +=
      velocity.current.z * frameScale;


    /* -----------------------------------------------
       HARD BOUNDARIES
    ------------------------------------------------ */

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

    position.z = THREE.MathUtils.clamp(
      position.z,
      -0.35,
      0.35
    );


    /* -----------------------------------------------
       ROTATION
    ------------------------------------------------ */

    group.current.rotation.x +=
      velocity.current.y * 0.06;

    group.current.rotation.y +=
      velocity.current.x * 0.06;


    /* -----------------------------------------------
       ROTATION LIMIT
    ------------------------------------------------ */

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

      {/* =========================================
          CUBE
      ========================================= */}

      <RoundedBox
        args={[
          CUBE_SIZE,
          CUBE_SIZE,
          CUBE_SIZE,
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


      {/* =========================================
          TECHNOLOGY NAME
      ========================================= */}

      <Text
        position={[
          0,
          0,
          CUBE_SIZE / 2 + 0.02,
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


/* =====================================================
   THREE.JS SCENE
===================================================== */

function TechScene() {
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const { viewport } = useThree();


  /* =================================================
     PLAYGROUND BOUNDARIES

     Keep enough space around the cubes.
  ================================================= */

  const bounds = useMemo(() => {
    const horizontalPadding = 0.55;
    const verticalPadding = 0.55;

    return {
      minX:
        -viewport.width / 2 +
        CUBE_SIZE / 2 +
        horizontalPadding,

      maxX:
        viewport.width / 2 -
        CUBE_SIZE / 2 -
        horizontalPadding,

      minY:
        -viewport.height / 2 +
        CUBE_SIZE / 2 +
        verticalPadding,

      maxY:
        viewport.height / 2 -
        CUBE_SIZE / 2 -
        verticalPadding,
    };
  }, [viewport.width, viewport.height]);


  /* =================================================
     MOUSE POSITION
  ================================================= */

  const handlePointerMove = (event) => {
    mouse.current.x =
      (event.pointer.x * viewport.width) / 2;

    mouse.current.y =
      (event.pointer.y * viewport.height) / 2;

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


  /* =================================================
     RESET MOUSE WHEN POINTER LEAVES
  ================================================= */

  const handlePointerLeave = () => {
    mouse.current.x = 0;
    mouse.current.y = 0;
  };


  return (
    <>
      {/* =========================================
          LIGHTING
      ========================================= */}

      <ambientLight intensity={1.4} />

      <directionalLight
        position={[3, 5, 6]}
        intensity={2.4}
        castShadow
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={1.8}
      />

      <pointLight
        position={[4, -2, 3]}
        intensity={1.3}
      />


      {/* =========================================
          CUBES
      ========================================= */}

      <group
        position={[1, 0, 0]}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
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


/* =====================================================
   MAIN TECH CUBE COMPONENT
===================================================== */

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