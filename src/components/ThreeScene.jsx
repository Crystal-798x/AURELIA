import React, { useRef, useState } from 'react';
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

    // Create a simple procedural normal map for texture
    const normalMap = React.useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Create a subtle pattern
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = `rgba(128, 128, 255, ${Math.random() * 0.3})`;
            ctx.fillRect(
                Math.random() * 512,
                Math.random() * 512,
                Math.random() * 20,
                512
            );
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2, 4);
        return texture;
    }, []);

    return (
        <group {...props} ref={groupRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* BOTTLE GLASS SHELL - Rounded Rectangle */}
                <RoundedBox
                    args={[1.8, 3.2, 1.2]}
                    radius={0.15}
                    smoothness={4}
                    position={[0, 0, 0]}
                    castShadow
                    receiveShadow
                >
                    <meshPhysicalMaterial
                        color="#d08a1e"
                        transmission={0.6}
                        thickness={1.5}
                        roughness={0.1}
                        metalness={0.1}
                        ior={1.5}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        envMapIntensity={1.5}
                        normalMap={normalMap}
                        normalScale={new THREE.Vector2(0.3, 0.3)}
                    />
                </RoundedBox>

                {/* INTERNAL LIQUID - Rounded Rectangle (slightly smaller) */}
                <RoundedBox
                    args={[1.65, 3.0, 1.05]}
                    radius={0.12}
                    smoothness={4}
                    position={[0, 0, 0]}
                >
                    <meshStandardMaterial
                        color="#ffaa00"
                        roughness={0.3}
                        metalness={0.4}
                    />
                </RoundedBox>

                {/* Top Cap Transition - Rounded Rectangle to Circle (With Texture) */}
                <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.4, 0.6, 0.4, 32]} />
                    <meshPhysicalMaterial
                        color="#d08a1e"
                        transmission={0.6}
                        thickness={1.5}
                        roughness={0.1}
                        metalness={0.1}
                        ior={1.5}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        envMapIntensity={1.5}
                        normalMap={normalMap}
                        normalScale={new THREE.Vector2(0.3, 0.3)}
                    />
                </mesh>

                {/* NECK - Silver/White connector (Smaller and Shorter) */}
                <mesh position={[0, 2.05, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.25, 0.25, 0.3, 32]} />
                    <meshStandardMaterial
                        color="#e0e0e0"
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* CAP - Shiny Metallic Black with Enhanced Texture */}
                <mesh position={[0, 2.4, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.35, 0.35, 0.6, 32]} />
                    <meshStandardMaterial
                        color="#1a1a1a"
                        roughness={0.2}
                        metalness={0.9}
                        normalMap={normalMap}
                        normalScale={new THREE.Vector2(0.8, 0.8)}
                        envMapIntensity={1.5}
                    />
                </mesh>

                {/* Cap Top (Rounded, Shiny Metallic with Enhanced Texture) */}
                <mesh position={[0, 2.7, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[0.35, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
                    <meshStandardMaterial
                        color="#1a1a1a"
                        roughness={0.2}
                        metalness={0.9}
                        normalMap={normalMap}
                        normalScale={new THREE.Vector2(0.8, 0.8)}
                        envMapIntensity={1.5}
                    />
                </mesh>
            </Float>
        </group>
    );
};

const ThreeScene = () => {
    return (
        <>
            <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 9], fov: 40 }}
                    gl={{ antialias: true, alpha: true }}
                >
                    <ambientLight intensity={1} />

                    <directionalLight
                        position={[5, 5, 5]}
                        intensity={2}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />

                    <pointLight position={[-5, 2, -5]} intensity={1} color="#ffffff" />

                    {/* Studio environment for glass reflections */}
                    <Environment preset="studio" background={false} />

                    <Bottle position={[0, -0.5, 0]} />

                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2.5}
                        far={4}
                        color="#000000"
                    />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.5}
                    />
                </Canvas>
            </div>
            <Loader
                containerStyles={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(10px)'
                }}
                innerStyles={{
                    background: '#d4af37',
                    width: '200px',
                    height: '4px'
                }}
                barStyles={{
                    background: '#ffd700',
                    height: '4px'
                }}
                dataStyles={{
                    color: '#d4af37',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: '20px'
                }}
            />
        </>
    );
};

export default ThreeScene;
