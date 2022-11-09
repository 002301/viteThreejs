import * as THREE from 'three/build/three.module';
import { camera, scene, renderer, basicMate,ThreeInit } from './ThreeInit.js';
import fontJson from 'three/examples/fonts/helvetiker_bold.typeface.json'

let font = new THREE.Font(fontJson)
let options = {
  size: 90,
  height: 10,
  font: font
}

export default function textInit(_dom){
  ThreeInit(_dom,true)
  let text1 = new THREE.Mesh(
    new THREE.TextGeometry("马宁",options),
    basicMate
  )
  scene.add(text1)
}
