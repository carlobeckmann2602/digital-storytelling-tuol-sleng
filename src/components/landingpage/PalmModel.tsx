/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform --types
Author: pizzaguyty (https://sketchfab.com/pizzaguyty)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/palm-tree-tall-557ea8d4527f47e8bbc657e2764b7cab
Title: Palm Tree tall
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial
    lambert2SG: THREE.MeshStandardMaterial
    lambert3SG: THREE.MeshStandardMaterial
    lambert5SG: THREE.MeshStandardMaterial
  }
}

export function Palm(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/palm-model.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.15}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.lambert3SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert5SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/palm-model.glb')
