'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={meshRef} scale={1.7}>
      <sphereGeometry args={[1, 64, 64]} />
      <pointsMaterial
        color="#00AAFF"
        size={0.02}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const GeometricSphere = () => {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas className="w-full h-full bg-transparent" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default GeometricSphere;
