import * as THREE from "three";

import texture from './texture'

const planeGeo = new THREE.PlaneGeometry(10, 10);
const planeMat = new THREE.MeshPhongMaterial({
  map: texture,
  side: THREE.DoubleSide,
});


export default new THREE.Mesh(planeGeo, planeMat) as THREE.Mesh;