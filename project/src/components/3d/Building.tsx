import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { useGesture } from '@use-gesture/react';
import { Mesh } from 'three';

interface BuildingProps {
  scrollY: number;
  isMobile?: boolean;
}

export const Building: React.FC<BuildingProps> = ({ scrollY, isMobile = false }) => {
  const meshRef = useRef<Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  
  const { rotation } = useSpring({
    rotation: [0, scrollY * 0.01, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useEffect(() => {
    targetRotation.current.y = scrollY * 0.01;
  }, [scrollY]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.1;
    }
  });

  const bind = useGesture(
    {
      onPinch: ({ offset: [d] }) => {
        if (meshRef.current && isMobile) {
          meshRef.current.scale.setScalar(Math.max(0.5, Math.min(2, 1 + d / 100)));
        }
      },
    },
    {
      target: meshRef.current as any,
    }
  );

  return (
    <animated.mesh
      ref={meshRef}
      rotation={rotation as any}
      {...(isMobile ? bind() : {})}
    >
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial
        color="#047857"
        metalness={0.6}
        roughness={0.2}
        envMapIntensity={1}
      />
    </animated.mesh>
  );
};