import React, { useRef, useEffect, Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Dna from '../models/Dna';
import Loader from "../components/Loader"

const ScrollModel = () => {
    const adjustDnaForSize = () => {
        let screenScale = null;
        let screenPosition = [-1.25, -3, -5];
        let rotation = [1.25, -0.07, 0.5]
    
        if(window.innerWidth <768) {
          screenScale = [0.9,0.9,0.9];
        } else {
          screenScale = [1,1,1];
        }
        return [screenScale, screenPosition, rotation]
      }
    const [dnaScale, dnaPosition, dnaRotation] = adjustDnaForSize();
    
    const cameraRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = scrollY/maxScroll;

            if (cameraRef.current) {
                cameraRef.current.position.set(0, 5 * scrollFraction, 10 - 10 * scrollFraction);
                cameraRef.current.lookAt(0, 0, 0);
            }
        };

        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    }, []);

    return  (
        <Canvas style={{zIndex:0, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%'}}>
            <Suspense fallback={<Loader />}>
                <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]}/>
                <ambientLight intensity={1.5}/>
                <spotLight position={[10,10,10]}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Dna 
                    position = {dnaPosition}
                    scale = {dnaScale}
                    rotation = {dnaRotation}
                />
                <OrbitControls enableZoom={false}/>
            </Suspense>
        </Canvas>
    );
};

export default ScrollModel;