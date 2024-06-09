/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {a} from '@react-spring/three'

import dnaScene from '../assets/3d/dna_model.glb'


const Dna = (props) => {
    const dnaRef = useRef();

    const { nodes, materials } = useGLTF(dnaScene)
    return (
        <a.group ref={dnaRef} {...props} >
            <mesh
                /*castShadow
                receiveShadow */
                geometry={nodes.Cube.geometry} 
                material={materials.DNA} 
            />
        </a.group>
    )
}

export default Dna;
