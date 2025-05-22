import React from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

interface PortalProps {
  size?: number;
  borderGlowColor?: string;
  rotationSpeed?: number;
  children: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = ({
  size = 3,
  borderGlowColor = '#047857',
  rotationSpeed = 0.5,
  children
}) => {
  const portalRef = React.useRef<THREE.Group>(null);
  
  const { rotation } = useSpring({
    rotation: [0, Math.PI * 2, 0],
    config: { mass: 1, tension: 280, friction: 120 }
  });

  useFrame(({ clock }) => {
    if (portalRef.current) {
      portalRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
    }
  });

  return (
    <group ref={portalRef}>
      <mesh>
        <torusGeometry args={[size, 0.2, 16, 100]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.2}
          chromaticAberration={0.2}
          anisotropy={0.2}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color={borderGlowColor}
        />
      </mesh>
      <animated.group rotation={rotation as any}>
        {children}
      </animated.group>
    </group>
  );
};