import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

function Orb({ color1, color2 }: { color1: string; color2: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5;
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.2) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.3;
      ring2Ref.current.rotation.y = t * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color1}
          distort={0.35}
          speed={1.5}
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.9}
        />
      </Sphere>
      <Ring ref={ring1Ref} args={[1.4, 1.45, 64]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color={color2} transparent opacity={0.6} metalness={1} roughness={0} />
      </Ring>
      <Ring ref={ring2Ref} args={[1.7, 1.73, 64]} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <meshStandardMaterial color={color1} transparent opacity={0.4} metalness={1} roughness={0} />
      </Ring>
    </Float>
  );
}

interface TechOrb3DProps {
  color1?: string;
  color2?: string;
  size?: string;
}

export default function TechOrb3D({ color1 = '#0F6FFF', color2 = '#00D1B2', size = '200px' }: TechOrb3DProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={2} color={color1} />
        <directionalLight position={[-2, -1, -2]} intensity={0.8} color={color2} />
        <pointLight position={[0, 0, 2]} intensity={1.5} color={color1} />
        <Orb color1={color1} color2={color2} />
      </Canvas>
    </div>
  );
}
