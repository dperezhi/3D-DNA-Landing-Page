import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Dna from '../models/Dna';
import Loader from "../components/Loader";

const ScrollModel = () => {
    const adjustDnaForSize = () => {
        let screenScale = null;
        let screenPosition = [0, -4.5, -4.5];
        let rotation = [0, 0, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    };

    const [dnaScale, dnaPosition, dnaRotation] = adjustDnaForSize();
    const sceneRef = useRef();
    const [scrollY, setScrollY] = useState(0);
    const [hoverOffset, setHoverOffset] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const maxScroll = 2000; 
        const maxRotation = Math.PI;

        setRotationY((scrollY / maxScroll) * maxRotation);
    }, [scrollY]);

    useEffect(() => {
        let frameId;
        const animateHover = (time) => {
            const newHoverOffset = Math.sin(time * 0.0017) * 0.5;
            setHoverOffset(newHoverOffset);
            frameId = requestAnimationFrame(animateHover);
        };

        frameId = requestAnimationFrame(animateHover);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <Canvas style={{ zIndex: 0, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Suspense fallback={<Loader />}>
                <group ref={sceneRef}>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                    <ambientLight intensity={1.5} />
                    <spotLight position={[10, 10, 10]} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#f65e41" intensity={1.5} />
                    <hemisphereLight skyColor="#f65e41" groundColor="#000000" intensity={1} />
                    <Dna
                        name="Dna"
                        position={[dnaPosition[0], dnaPosition[1] + hoverOffset, dnaPosition[2]]}
                        scale={dnaScale}
                        rotation={[dnaRotation[0], rotationY, dnaRotation[2]]}
                    />
                </group>
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
};

export default ScrollModel;