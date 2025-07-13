// HomeAnime.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Center, Html } from '@react-three/drei';

const Model = () => (
  <Center top>
    <group position={[0, 1.5, 0]}>
      {/* Desk - light wood/white */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[3.2, 0.2, 1.6]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.7} />
      </mesh>

      {/* Monitor Frame */}
      <mesh position={[0, 0.5, -0.55]}>
        <boxGeometry args={[1.5, 1, 0.08]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Monitor Screen */}
      <mesh position={[0, 0.5, -0.515]}>
        <planeGeometry args={[1.4, 0.9]} />
        <meshStandardMaterial color="#e0f7fa" emissive="#bbdefb" emissiveIntensity={1.2} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, 0.1, -0.55]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 32]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      <mesh position={[0, -0.05, -0.55]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.25, 0.3]}>
        <boxGeometry args={[1.2, 0.05, 0.4]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Mug */}
      <mesh position={[1, -0.1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.3, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  </Center>
);



const HomeAnime = () => {
  return (
    <div className="w-full h-screen bg-black rounded-2xl">
      <Canvas camera={{ position: [4, 3, 7], fov: 60 }}>
  <ambientLight intensity={0.5} />
  <directionalLight position={[10, 10, 5]} intensity={1.2} />

  <Suspense fallback={<Html><p style={{ color: 'white' }}>Loading model...</p></Html>}>
    <Model />
    <ContactShadows
      position={[0, -1.2, 0]}
      opacity={0.5}
      scale={10}
      blur={2}
      far={5}
    />
  </Suspense>

  <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={2} />
</Canvas>

    </div>
  );
};

export default HomeAnime;
