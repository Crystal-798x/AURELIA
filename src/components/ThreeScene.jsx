import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, RoundedBox, Loader } from '@react-three/drei';
import * as THREE from 'three';

const Bottle = (props) => {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (groupRef.current && !hovered) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group
            {...props}
            ref={groupRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>

                {/* 1. MAIN BOTTLE BODY (Outer Glass) */}
                <RoundedBox
                    args={[2, 3.5, 1.2]}
                    radius={0.2}
                    smoothness={10}
                    castShadow
                    receiveShadow
                >
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.95}
                        thickness={2}
                        roughness={0.05}
                        metalness={0.05}
                        ior={1.45}
                        clearcoat={1}
                        envMapIntensity={1}
                    />
                </RoundedBox>

                {/* 2. INTERNAL LIQUID */}
                <RoundedBox
                    args={[1.8, 3.1, 1]}
                    radius={0.15}
                    smoothness={10}
                    position={[0, -0.1, 0]}
                >
                    <meshStandardMaterial
                        color="#d4af37"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                    />
                </RoundedBox>

                {/* 3. BRANDING LABEL */}
                <group position={[0, 0, 0.61]}>
                    <mesh>
                        <planeGeometry args={[1.2, 0.8]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                </group>

                {/* 4. NECK */}
                <mesh position={[0, 1.85, 0]}>
                    <cylinderGeometry args={[0.4, 0.45, 0.4, 32]} />
                    <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} />
                </mesh>

                {/* 5. CAP */}
                <group position={[0, 2.3 + (hovered ? 0.2 : 0), 0]}>
                    <mesh castShadow>
                        <cylinderGeometry args={[0.5, 0.5, 0.8, 32]} />
                        <meshStandardMaterial
                            color="#111111"
                            metalness={0.9}
                            roughness={0.1}
                        />
                    </mesh>
                    <mesh position={[0, 0.4, 0]}>
                        <cylinderGeometry args={[0.5, 0.3, 0.3, 32]} />
                        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.05} />
                    </mesh>
                </group>

                {/* 6. DIP TUBE */}
                <mesh position={[0, 0.3, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 3.2, 8]} />
                    <meshBasicMaterial color="#ffffff" opacity={0.2} transparent />
                </mesh>

            </Float>
        </group>
    );
};

const ThreeScene = () => {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas
                shadows
                camera={{ position: [0, 0, 8], fov: 35 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#d4af37" />

                    <Environment preset="studio" />

                    <Bottle position={[0, -0.5, 0]} scale={0.8} />

                    <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    );
};

export default ThreeScene;
