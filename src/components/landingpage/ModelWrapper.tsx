/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform --types
Author: pizzaguyty (https://sketchfab.com/pizzaguyty)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/palm-tree-tall-557ea8d4527f47e8bbc657e2764b7cab
Title: Palm Tree tall
*/

import { useScroll } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'
import { PrisonModel } from './PrisonModel'
import { Palm } from './PalmModel'
import { Floor } from './FloorModel'

export function ModelWrapper() {
  const scrollPosition = useScroll()

  const ref = useRef<Group>(null)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollPosition ? scrollPosition.offset / 1.5 : 0
      ref.current.position.y = scrollPosition ? scrollPosition.offset / 2 : 0
    }
  })

  return (
    <group rotation={[0, 10, 0]} ref={ref} position={[0, 1, 0]}>
      <group position={[0, -0.2, 0]}>
        <PrisonModel />
        <Palm position={[3, 0.2, 4]} />
        <Palm position={[-3, 0.2, 4]} />
      </group>
      <Floor />
    </group>
  )
}
