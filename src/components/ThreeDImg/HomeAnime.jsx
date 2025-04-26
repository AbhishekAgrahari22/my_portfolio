// HomeAnime.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, ContactShadows, Center } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/model/programmer_desktop.glb');

  return (
    <Center top>
    <primitive
      object={scene}
      scale={0.8} // Slightly smaller model for "padding"
      position={[0, 1.5, 0]} // Lowered to sit above shadow
    />
    </Center>
  );
};

const HomeAnime = () => {
  return (
    <div className="w-full h-screen bg-black rounded-2xl">
      <Canvas camera={{ position: [4, 3, 7], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <Model />
          {/* Subtle soft shadow underneath */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={5}
          />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default HomeAnime;
