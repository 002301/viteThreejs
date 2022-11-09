import { THREE, camera, scene, renderer, createWorld } from './createWorld';
const basicMate = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0.1 })

export default function AllGeomInit (_dom:string){
  createWorld(_dom,true);
  addGeom(scene,new THREE.TetrahedronGeometry(1)).position.x=2;
  addGeom(scene,new THREE.OctahedronGeometry(1));
};

function addGeom(parent: any, obj: any) {
  let geom = new THREE.Mesh(obj, basicMate)
  parent.add(geom)
  return geom;
}