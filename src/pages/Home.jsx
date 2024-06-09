import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import Loader from "../components/Loader"
import Dna from "../models/Dna";

const Home = () => {

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
  
  const ScrollEffects = () => {
    const {camera} = useThree();
    const [objectPosition, setObjectPosition] = useState(dnaPosition);

    useEffect(() => {
      const onScroll = () => {
        const scrollY = window.scrollY;
        {/*camera.position.z = 5 - scrollY *0.01;*/}
        setObjectPosition([-1.25,-3 - scrollY * 0.01, -5]);
      };

      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll',onScroll);
      };
    }, []);

    return <Dna scale={dnaScale} position={objectPosition} rotation = {dnaRotation}/>;
  };

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Landing-Page/popup
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ScrollEffects/>
          <directionalLight position={[-1,-1,0.5]} intensity={2} />
          <ambientLight intensity={0.4}/>
          <pointLight/>
          <spotLight/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
        </Suspense>
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 z-10 text-center">
        <p>This text will remain visible even when scrolling.</p>
      </div>
      <div style={{ height: '200vh' }}></div> 
    </section>
  )
}

export default Home