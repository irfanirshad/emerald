import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const EmeraldParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();
  const [hovered, setHovered] = useState(false);
  
  // Create 500 particles
  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  // Mouse position in 3D space
  const mousePos = useMemo(() => new THREE.Vector3(), []);
  
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    
    // Convert mouse coords to 3D space
    mousePos.set(
      mouse.x * viewport.width / 2,
      mouse.y * viewport.height / 2,
      0
    );

    const particles = particlesRef.current.geometry.attributes.position.array;
    
    // Animate particles toward mouse with delay
    for (let i = 0; i < particles.length; i += 3) {
      const particle = new THREE.Vector3(
        particles[i],
        particles[i + 1],
        particles[i + 2]
      );
      
      // Calculate direction to mouse
      const direction = new THREE.Vector3().subVectors(mousePos, particle);
      const distance = direction.length();
      
      // Magnetic attraction effect
      if (distance < 5) {
        direction.normalize().multiplyScalar(0.05 * (5 - distance));
        particle.add(direction);
      }
      
      // Add some organic movement
      particle.x += Math.sin(clock.elapsedTime + i) * 0.01;
      particle.y += Math.cos(clock.elapsedTime + i * 0.5) * 0.01;
      
      // Update positions
      particles[i] = particle.x;
      particles[i + 1] = particle.y;
      particles[i + 2] = particle.z;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Pulsing effect when hovered
    particlesRef.current.scale.setScalar(
      hovered ? 1.2 : 1 + Math.sin(clock.elapsedTime) * 0.05
    );
  });

  return (
    <group 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Points ref={particlesRef} positions={particles}>
        <PointMaterial
          color={hovered ? "#7fffd4" : "#10b981"}
          size={0.15}
          sizeAttenuation
          transparent
          opacity={0.9}
          emissive={hovered ? "#7fffd4" : "#047857"}
          emissiveIntensity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};