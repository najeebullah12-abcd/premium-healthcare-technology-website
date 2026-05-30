import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, TorusKnot, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0F6FFF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingRing({ radius, speed, color, tiltX, tiltZ }: {
  radius: number; speed: number; color: string; tiltX: number; tiltZ: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });
  return (
    <Torus ref={ref} args={[radius, 0.02, 16, 100]} rotation={[tiltX, 0, tiltZ]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} metalness={0.9} roughness={0.1} />
    </Torus>
  );
}

function FloatingParticles() {
  const points = useMemo(() => {
    const pts = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      pts[i * 3] = (Math.random() - 0.5) * 12;
      pts[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pts[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pts;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00D1B2" size={0.04} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function HelixStructure() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8} position={[3.5, 1, -1]}>
      <TorusKnot ref={ref} args={[0.6, 0.15, 128, 16]}>
        <meshStandardMaterial
          color="#00D1B2"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </TorusKnot>
    </Float>
  );
}

function SmallOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });
  return (
    <Sphere ref={ref} args={[0.15, 32, 32]} position={position}>
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.05} transparent opacity={0.9} />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#0F6FFF" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#00D1B2" />
      <pointLight position={[0, 0, 3]} intensity={2} color="#0F6FFF" distance={8} />
      <pointLight position={[4, 2, 1]} intensity={1} color="#00D1B2" distance={6} />

      <Stars radius={50} depth={50} count={2000} factor={3} saturation={0.5} fade speed={0.5} />

      <RotatingSphere />
      <OrbitingRing radius={2.5} speed={0.4} color="#0F6FFF" tiltX={Math.PI / 6} tiltZ={0} />
      <OrbitingRing radius={3.2} speed={-0.25} color="#00D1B2" tiltX={Math.PI / 3} tiltZ={Math.PI / 8} />
      <OrbitingRing radius={2.0} speed={0.6} color="#ffffff" tiltX={Math.PI / 2.5} tiltZ={Math.PI / 4} />

      <HelixStructure />
      <FloatingParticles />

      <SmallOrb position={[-3.5, 1.5, 0]} color="#0F6FFF" />
      <SmallOrb position={[-2.5, -1.8, 1]} color="#00D1B2" />
      <SmallOrb position={[2, -2, 0.5]} color="#0F6FFF" />
      <SmallOrb position={[4, -0.5, -0.5]} color="#ffffff" />
    </Canvas>
  );
}
