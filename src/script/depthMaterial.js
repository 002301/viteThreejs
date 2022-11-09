import * as THREE from 'three/build/three.module';
import * as dat from 'dat.gui';
import { createMultiMaterialObject} from 'three/examples/jsm/utils/SceneUtils'
import { camera, scene, renderer, createWorld } from './createWorld';

let group = null;
function init(dom) {
  group = new THREE.Object3D();
  createWorld(dom,true);
  // scene.overrideMaterial = new THREE.MeshDepthMaterial();
  setCube();
  guiInit();
}

function setCube(){
  var cubeMaterial = new THREE.MeshDepthMaterial();
  var colorMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    blending: THREE.MultiplyBlending
  });
  // var cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
  let box = new THREE.BoxGeometry(4,4,4);
  for(var i=0;i<100;i++){
    let cube = createMultiMaterialObject(box, [colorMaterial, cubeMaterial]);
    // cube.children[1].scale.set(0.99, 0.99, 0.99);
    // let cube = new THREE.Mesh(box, cubeMaterial)
    cube.position.x = Math.random()*50-20;
    cube.position.z = Math.random()*50-20;
    cube.castShadow = true;
    // console.log('cube', cube)
    group.add(cube);
  }
  scene.add(group)
}

function guiInit() {
  var controls = new function () {
    this.cameraNear = camera.near;
    this.cameraFar = camera.far;
  }
  const gui = new dat.GUI();
  gui.add(controls, 'cameraNear', 0, 50).onChange(function (e) {
    camera.near = e;
    camera.updateProjectionMatrix();
  });
  gui.add(controls, 'cameraFar', 50, 200).onChange(function (e) {
    camera.far = e;
    camera.updateProjectionMatrix();
  });
}

export default init;