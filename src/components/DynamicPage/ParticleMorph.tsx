import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 8000;

function generateSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    const sinPhi = Math.sin(phi);
    positions[i * 3] = r * sinPhi * Math.cos(theta);
    positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function generateTorus(count: number, radius: number, tube: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    
    const rTube = tube * Math.random();
    
    const x = (radius + rTube * Math.cos(v)) * Math.cos(u);
    const y = (radius + rTube * Math.cos(v)) * Math.sin(u);
    const z = rTube * Math.sin(v);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

function generateBox(count: number, size: number) {
  const positions = new Float32Array(count * 3);
  const halfSize = size / 2;
  for (let i = 0; i < count; i++) {
    const face = Math.floor(Math.random() * 6);
    let x = (Math.random() - 0.5) * size;
    let y = (Math.random() - 0.5) * size;
    let z = (Math.random() - 0.5) * size;
    
    if (face === 0) x = halfSize;
    if (face === 1) x = -halfSize;
    if (face === 2) y = halfSize;
    if (face === 3) y = -halfSize;
    if (face === 4) z = halfSize;
    if (face === 5) z = -halfSize;

    // Add a tiny bit of noise so it's not a perfectly flat plane
    x += (Math.random() - 0.5) * 0.2;
    y += (Math.random() - 0.5) * 0.2;
    z += (Math.random() - 0.5) * 0.2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

// Lotus/Flame shape
function generateLotus(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const h = Math.random();
    
    // Taper
    const w = Math.sin(h * Math.PI) * (1 - h) * radius;
    
    const petals = 5;
    const petalShape = Math.abs(Math.sin(theta * petals / 2));
    
    const finalRadius = w * (0.5 + 0.5 * petalShape) + (Math.random() * 0.3);
    
    positions[i * 3] = finalRadius * Math.cos(theta);
    positions[i * 3 + 1] = (h - 0.5) * radius * 2;
    positions[i * 3 + 2] = finalRadius * Math.sin(theta);
  }
  return positions;
}

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [targetIndex, setTargetIndex] = useState(0);

  const shapes = useMemo(() => [
    generateLotus(PARTICLE_COUNT, 3),
    generateSphere(PARTICLE_COUNT, 3.5),
    generateBox(PARTICLE_COUNT, 4.5),
    generateTorus(PARTICLE_COUNT, 3, 1),
  ], []);

  const currentPositions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    pos.set(shapes[0]);
    return pos;
  }, [shapes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prev) => (prev + 1) % shapes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [shapes.length]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    // Base rotation
    pointsRef.current.rotation.y += delta * 0.15;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const target = shapes[targetIndex];
    
    // Smooth morphing interpolation
    const lerpFactor = 1.0 - Math.exp(-delta * 2.0); 
    
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      positions[i] += (target[i] - positions[i]) * lerpFactor;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={currentPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#D6A67B" // Logo Purple Color
        transparent
        opacity={0.9}
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const ParticleMorph: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Particles />
      </Canvas>
    </div>
  );
};
