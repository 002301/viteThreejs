import { THREE, camera, scene, renderer, ThreeInit } from './ThreeInit.js';
import {img} from './image.js'
let pointLight
//初始化Three
// 
//设置背景色
let torus, basicMate
function Tube2Init(_dom) {
  ThreeInit(_dom,true);
  basicMate = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent:true, opacity:0.1})
  renderer.setClearColor(0x4b2cc8, 1.0);
  torus = new THREE.Mesh(new THREE.TorusGeometry(50, 5, 25, 40), basicMate);
  let image = new Image();
  image.src = img;
  document.body.appendChild(image);
  let texture = new THREE.Texture();
  texture.image = image;
  image.onload = function () {
    console.log('img_ok', image);
    torus = new THREE.Mesh(new THREE.TorusGeometry(50, 10, 25, 40), material);
    torus.rotateY(Math.PI / 2);
    scene.add(torus);
    texture.needsUpdate = true;
  };
  let material = new THREE.MeshPhongMaterial({
    color: 0xdfd730,
    emissive: 0xf000f0,
    specular: 0xa0ff32,
    shininess: 20,
    side: THREE.DoubleSide,
    map: texture,
    bumpMap: texture,
    bumpScale: 0.25
  });
  // torus = new THREE.Mesh(new THREE.TorusGeometry(50, 10, 25, 40),
  //   new THREE.MeshNormalMaterial({
  //     color: 0xff0000,
  //     shininess: 100,
  //     side: THREE.DoubleSide,
  //     flatShading: true,
  //     // wireframe:true
  //   })
  camera.lookAt(new THREE.Vector3(0, 290, 0));
  camera.position.z=50;
  // camera.position.y=50;
  
  renderer.setAnimationLoop(Tube2Animation);
  // let p1 = getPoint(50,45)
  // let cube = initCube(torus);
  // cube.position.set(p1.x,p1.y,0)
  //  setGeometry();
}
function setGeometry() {
  let geometry = [initCube, initSphere, initIcos]
  for(var i=0;i<360;i+=10){
    let p1 = getPoint(50, i);
    let rdm = Math.floor(Math.random()*3);
    let geom = geometry[rdm](torus);
    geom.position.set((p1.x - rdm*2), p1.y, 0)
  }
}
function del() {
  // console.log('del', scene.children.length)
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }
  renderer.setAnimationLoop(null);
}
function Tube2Animation() {
  // torus.rotateZ(0.002);
  renderer.render(scene, camera);
}

function getPoint(r,angle) {
  let x = Math.floor(r*Math.cos(angle*Math.PI/180));
  let y = Math.floor(r*Math.sin(angle*Math.PI/180));
  console.log('getPoint',x,y)
  return {x,y}
}
function initCube(obj){
  let geom =new THREE.Mesh(new THREE.BoxGeometry(1,1,1),basicMate)
  obj.add(geom)
  return geom;
}
function initSphere(obj){
  let geom = new THREE.Mesh(new THREE.SphereGeometry(3,3,3), basicMate)
  obj.add(geom);
  return geom;
}
function initIcos(obj){
  let geom = new THREE.Mesh(new THREE.IcosahedronGeometry(), basicMate)
  obj.add(geom);
  return geom;
}
function initlight(obj) {
  var pointColor = "#ccffcc";
  pointLight = new THREE.PointLight(pointColor);
  pointLight.distance = 500;
  obj.add(pointLight);
  pointLight.position.set(100, -100, 0);
}
export { Tube2Init, del};
