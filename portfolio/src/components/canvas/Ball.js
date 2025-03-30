import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import BallSkeletonLoader from "../Global/SkeletonLoader";

const Ball = ({ imgUrl, skill }) => {
  const [decal] = useTexture([imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />

        {/* Tooltip (Only visible when hovered) */}
        {hovered && (
          <Html position={[1.5, 0, 0]} center>
            <div
              style={{
                background: "rgba(0,0,0,0.8)",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                fontSize: "12px",
                whiteSpace: "nowrap",
                textAlign: "center",
                transform: "translateX(-40px)", // Shift right slightly
              }}
            >
              <strong>{skill.name}</strong> <br />
              {skill.experiences}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, skill }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<BallSkeletonLoader />}>
        <OrbitControls enableZoom={true} />
        <Ball imgUrl={icon} skill={skill} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
