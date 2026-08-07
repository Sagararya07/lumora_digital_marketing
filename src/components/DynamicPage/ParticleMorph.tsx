import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 8000;
const DEFAULT_COLOR = new THREE.Color('#5B8EE2');

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
    x += (Math.random() - 0.5) * 0.2;
    y += (Math.random() - 0.5) * 0.2;
    z += (Math.random() - 0.5) * 0.2;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

function generateLotus(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const h = Math.random();
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

function fallbackShape(count: number) {
  const positions = generateSphere(count, 3.5);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    colors[i * 3] = DEFAULT_COLOR.r;
    colors[i * 3 + 1] = DEFAULT_COLOR.g;
    colors[i * 3 + 2] = DEFAULT_COLOR.b;
  }
  return { positions, colors };
}

function generateImageShape(imageUrl: string, count: number): Promise<{ positions: Float32Array, colors: Float32Array }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 100;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        resolve(fallbackShape(count));
        return;
      }
      
      let drawWidth = size;
      let drawHeight = size;
      let offsetX = 0;
      let offsetY = 0;
      
      if (img.width > img.height) {
        drawHeight = size * (img.height / img.width);
        offsetY = (size - drawHeight) / 2;
      } else {
        drawWidth = size * (img.width / img.height);
        offsetX = (size - drawWidth) / 2;
      }
      
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      const imgData = ctx.getImageData(0, 0, size, size).data;
      
      const validPixels: {x: number, y: number, r: number, g: number, b: number}[] = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const i = (y * size + x) * 4;
          const alpha = imgData[i + 3];
          if (alpha > 20) {
            validPixels.push({
              x, y,
              r: imgData[i] / 255,
              g: imgData[i + 1] / 255,
              b: imgData[i + 2] / 255,
            });
          }
        }
      }

      if (validPixels.length === 0) {
        resolve(fallbackShape(count));
        return;
      }

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const bounds = 7.0; 
      
      for (let i = 0; i < count; i++) {
        const p = validPixels[Math.floor(Math.random() * validPixels.length)];
        const noiseX = (Math.random() - 0.5) * (bounds / size);
        const noiseY = (Math.random() - 0.5) * (bounds / size);
        
        const px = (p.x / size - 0.5) * bounds + noiseX;
        const py = -(p.y / size - 0.5) * bounds + noiseY;
        const pz = (Math.random() - 0.5) * 1.5; 
        
        positions[i * 3] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = pz;
        
        colors[i * 3] = p.r;
        colors[i * 3 + 1] = p.g;
        colors[i * 3 + 2] = p.b;
      }
      resolve({ positions, colors });
    };
    img.onerror = () => {
      resolve(fallbackShape(count));
    };
    img.src = imageUrl;
  });
}

function generateThemeShape(theme: string, count: number): Promise<{ positions: Float32Array, colors: Float32Array }> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      resolve(fallbackShape(count));
      return;
    }
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);
    
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const s = size;

    switch(theme) {
      case 'lead-generation':
        ctx.beginPath();
        ctx.moveTo(s*0.2, s*0.2); ctx.lineTo(s*0.8, s*0.2);
        ctx.lineTo(s*0.6, s*0.6); ctx.lineTo(s*0.6, s*0.9);
        ctx.lineTo(s*0.4, s*0.9); ctx.lineTo(s*0.4, s*0.6);
        ctx.closePath();
        ctx.stroke();
        break;
      case 'social-media-marketing':
        ctx.beginPath();
        ctx.arc(s*0.5, s*0.5, s*0.12, 0, Math.PI*2);
        ctx.arc(s*0.2, s*0.2, s*0.08, 0, Math.PI*2);
        ctx.arc(s*0.8, s*0.3, s*0.08, 0, Math.PI*2);
        ctx.arc(s*0.3, s*0.8, s*0.08, 0, Math.PI*2);
        ctx.arc(s*0.7, s*0.7, s*0.08, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(s*0.5, s*0.5); ctx.lineTo(s*0.2, s*0.2);
        ctx.moveTo(s*0.5, s*0.5); ctx.lineTo(s*0.8, s*0.3);
        ctx.moveTo(s*0.5, s*0.5); ctx.lineTo(s*0.3, s*0.8);
        ctx.moveTo(s*0.5, s*0.5); ctx.lineTo(s*0.7, s*0.7);
        ctx.stroke();
        break;
      case 'seo':
        ctx.beginPath();
        ctx.moveTo(s*0.1, s*0.1); ctx.lineTo(s*0.1, s*0.9); ctx.lineTo(s*0.9, s*0.9);
        ctx.stroke();
        ctx.fillRect(s*0.2, s*0.6, s*0.15, s*0.3);
        ctx.fillRect(s*0.45, s*0.4, s*0.15, s*0.5);
        ctx.fillRect(s*0.7, s*0.2, s*0.15, s*0.7);
        break;
      case 'performance-marketing':
      case 'target-audience-reach':
        ctx.beginPath(); ctx.arc(s*0.5, s*0.5, s*0.35, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(s*0.5, s*0.5, s*0.2, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(s*0.5, s*0.5, s*0.05, 0, Math.PI*2); ctx.fill();
        ctx.beginPath();
        ctx.moveTo(s*0.5, s*0.05); ctx.lineTo(s*0.5, s*0.95);
        ctx.moveTo(s*0.05, s*0.5); ctx.lineTo(s*0.95, s*0.5);
        ctx.stroke();
        break;
      case 'retargeting-marketing':
        ctx.beginPath();
        ctx.arc(s*0.5, s*0.5, s*0.3, 0.5, Math.PI*2 - 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(s*0.85, s*0.65); ctx.lineTo(s*0.75, s*0.8); ctx.lineTo(s*0.95, s*0.75);
        ctx.stroke();
        break;
      case 'ai-marketing-automation':
        ctx.beginPath(); ctx.ellipse(s*0.5, s*0.5, s*0.1, s*0.4, Math.PI/4, 0, 2*Math.PI); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(s*0.5, s*0.5, s*0.1, s*0.4, -Math.PI/4, 0, 2*Math.PI); ctx.stroke();
        ctx.beginPath(); ctx.arc(s*0.5, s*0.5, s*0.05, 0, 2*Math.PI); ctx.fill();
        break;
      case 'paid-advertising-campaigns':
        ctx.beginPath();
        ctx.moveTo(s*0.3, s*0.4); ctx.lineTo(s*0.7, s*0.2);
        ctx.lineTo(s*0.7, s*0.8); ctx.lineTo(s*0.3, s*0.6);
        ctx.closePath();
        ctx.stroke();
        ctx.fillRect(s*0.2, s*0.4, s*0.1, s*0.2);
        break;
      case 'influencer-marketing':
        ctx.beginPath();
        for(let i=0; i<5; i++) {
          ctx.lineTo(s*0.5 + s*0.35*Math.cos(i * 2*Math.PI/5 - Math.PI/2), s*0.5 + s*0.35*Math.sin(i * 2*Math.PI/5 - Math.PI/2));
          ctx.lineTo(s*0.5 + s*0.15*Math.cos((i+0.5) * 2*Math.PI/5 - Math.PI/2), s*0.5 + s*0.15*Math.sin((i+0.5) * 2*Math.PI/5 - Math.PI/2));
        }
        ctx.closePath();
        ctx.stroke();
        break;
      default:
        // fallback to sphere/lotus is handled outside, but we can just draw a cube or something
        ctx.strokeRect(s*0.2, s*0.2, s*0.6, s*0.6);
        break;
    }

    const imgData = ctx.getImageData(0, 0, size, size).data;
    const validPixels: {x: number, y: number, r: number, g: number, b: number}[] = [];
    
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const i = (py * size + px) * 4;
        const r = imgData[i];
        if (r > 128) {
          validPixels.push({
            x: px, y: py,
            r: 0.35, 
            g: 0.55,
            b: 0.88,
          });
        }
      }
    }

    if (validPixels.length === 0) {
      resolve(fallbackShape(count));
      return;
    }

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const bounds = 8.0; 
    
    for (let i = 0; i < count; i++) {
      const p = validPixels[Math.floor(Math.random() * validPixels.length)];
      const noiseX = (Math.random() - 0.5) * (bounds / size) * 3.0;
      const noiseY = (Math.random() - 0.5) * (bounds / size) * 3.0;
      
      const px = (p.x / size - 0.5) * bounds + noiseX;
      const py = -(p.y / size - 0.5) * bounds + noiseY;
      const pz = (Math.random() - 0.5) * 2.0; 
      
      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;
      
      colors[i * 3] = p.r + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 1] = p.g + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 2] = p.b + (Math.random() - 0.5) * 0.2;
    }
    resolve({ positions, colors });
  });
}

const Particles: React.FC<{ imageUrl?: string, theme?: string }> = ({ imageUrl, theme }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [targetIndex, setTargetIndex] = useState(0);
  
  const defaultShapes = useMemo(() => [
    { positions: generateLotus(PARTICLE_COUNT, 3), colors: fallbackShape(PARTICLE_COUNT).colors },
    { positions: generateSphere(PARTICLE_COUNT, 3.5), colors: fallbackShape(PARTICLE_COUNT).colors },
    { positions: generateBox(PARTICLE_COUNT, 4.5), colors: fallbackShape(PARTICLE_COUNT).colors },
    { positions: generateTorus(PARTICLE_COUNT, 3, 1), colors: fallbackShape(PARTICLE_COUNT).colors },
  ], []);

  const [activeShapes, setActiveShapes] = useState(defaultShapes);

  useEffect(() => {
    let active = true;
    if (theme) {
      generateThemeShape(theme, PARTICLE_COUNT).then(shape => {
        if (active) {
          const breatheShape = {
            positions: new Float32Array(shape.positions),
            colors: new Float32Array(shape.colors)
          };
          for(let i = 0; i < PARTICLE_COUNT; i++) {
            breatheShape.positions[i*3+2] += (Math.random() - 0.5) * 4.0; // expand z
          }
          setActiveShapes([shape, breatheShape]);
          setTargetIndex(0);
        }
      });
    } else if (imageUrl) {
      generateImageShape(imageUrl, PARTICLE_COUNT).then(imgShape => {
        if (active) {
          const breatheShape = {
            positions: new Float32Array(imgShape.positions),
            colors: new Float32Array(imgShape.colors)
          };
          for(let i = 0; i < PARTICLE_COUNT; i++) {
            breatheShape.positions[i*3+2] += (Math.random() - 0.5) * 3.0; // expand z to breathe
          }
          setActiveShapes([imgShape, breatheShape]);
          setTargetIndex(0);
        }
      });
    } else {
      setActiveShapes(defaultShapes);
      setTargetIndex(0);
    }
    return () => { active = false; };
  }, [imageUrl, theme, defaultShapes]);

  const currentPositions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    pos.set(activeShapes[0].positions);
    return pos;
  }, [activeShapes]);
  
  const currentColors = useMemo(() => {
    const cols = new Float32Array(PARTICLE_COUNT * 3);
    cols.set(activeShapes[0].colors);
    return cols;
  }, [activeShapes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prev) => (prev + 1) % activeShapes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeShapes]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    if (theme || imageUrl) {
      pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    } else {
      pointsRef.current.rotation.y += delta * 0.15;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array;
    
    const targetPos = activeShapes[targetIndex].positions;
    const targetCol = activeShapes[targetIndex].colors;
    
    const lerpFactor = 1.0 - Math.exp(-delta * 2.0); 
    
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      positions[i] += (targetPos[i] - positions[i]) * lerpFactor;
      colors[i] += (targetCol[i] - colors[i]) * lerpFactor;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
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
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={currentColors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors={true}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const ParticleMorph: React.FC<{ imageUrl?: string, theme?: string }> = ({ imageUrl, theme }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles imageUrl={imageUrl} theme={theme} />
      </Canvas>
    </div>
  );
};
