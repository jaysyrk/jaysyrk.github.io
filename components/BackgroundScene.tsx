"use client";

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      const time = state.clock.elapsedTime;
      
      // Calculate target rotation based on time and mouse
      const targetRotationX = time * 0.1 - mousePosition.y * 0.5;
      const targetRotationY = time * 0.15 + mousePosition.x * 0.5;

      // Lerp for smoothness
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Icosahedron ref={meshRef} args={[1.5, 1]} scale={1.8}>
        <meshBasicMaterial 
          color="#fda4af" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </Icosahedron>
      
      {/* A second slightly smaller one for a complex nested wireframe look */}
      <Icosahedron args={[1.5, 1]} scale={1.4}>
        <meshBasicMaterial 
          color="#d8b4fe" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </Icosahedron>
    </Float>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center mix-blend-multiply">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
