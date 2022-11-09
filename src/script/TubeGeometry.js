
import * as THREE from 'three/build/three.module';
import { camera, scene, renderer, gui,ThreeInit } from './ThreeInit.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshBasicMaterial } from 'three';

let orbitControls, material;
let mashList = []


export default function Tube(dom) {
  ThreeInit(dom,true)
  scene.fog = new THREE.Fog(0x4b2cc8, 0.015, 500);
  orbitControls = new OrbitControls(camera, renderer.domElement);
  getTube();
  getTube(80,120);
  getTube(-50,50);
  getTube(20,80);
  getTube(-30,160);
  setGeometry();
  camera.position.y-=50;
  initTetrahedron(scene)
  renderer.setAnimationLoop(animation);
}
function animation(time) {
  group.rotateX(0.005);
  renderer.render(scene, camera);
  
}
let group = new THREE.Object3D();
group.position.z = -890;
group.position.y = -650;
group.rotateY(0.05)

//设置管道
function getTube(_x=0,_y=0){
  console.log('getTubeInit')
  var points = [];
  let r =1000;
  let a=0,b=0,X=0;
  for (var times = 0; times < 60; times++) {
    var hudu = 6 * (Math.PI / 180) * times;

    var Y = a + Math.sin(hudu) * r;
    Y += Math.round(Math.random() * 10);
    var Z = b - Math.cos(hudu) * r    //  
    Z += Math.round(Math.random() * 10);
    var point = new THREE.Vector3(X, Y, Z);
    points.push(point);
  }
  var curve = new THREE.CatmullRomCurve3(points);
   const geometry = new THREE.TubeGeometry(curve, 500, 6, 8, true);
  material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0.05});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x=_x;
  mesh.position.y=_y;
  group.add(mesh)
  scene.add(group);
  
}
function setGeometry() {
  let geometry = [initTetrahedron, initSphere, initIcos]
  for (var i = 0; i < 360; i+=3) {
    let p1 = getPoint(1000, i);
    let rdm = Math.floor(Math.random() * 3);
    let geom = geometry[rdm](group);
    let _x = Math.floor(Math.random() * 200)-100;
    let _y = Math.floor(Math.random() * 200)-100;
    geom.position.set(_x, p1.y - _y, p1.x )
  }
}
function getPoint(r, angle) {
  let x = Math.floor(r * Math.cos(angle * Math.PI / 180));
  let y = Math.floor(r * Math.sin(angle * Math.PI / 180));
  console.log('getPoint', x, y)
  return { x, y }
}
function initTetrahedron(obj) {
  let geom = new THREE.Mesh(new THREE.TetrahedronGeometry(3,1), material)
  obj.add(geom)
  return geom;
}
function initSphere(obj) {
  let geom = new THREE.Mesh(new THREE.SphereGeometry(3,3,3), material)
  obj.add(geom);
  return geom;
}
function initIcos(obj) {
  let geom = new THREE.Mesh(new THREE.IcosahedronGeometry(3,3), material)
  obj.add(geom);
  return geom;
}

