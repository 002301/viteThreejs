import { THREE, scene, camera, renderer, createWorld } from './createWorld'
import * as dat from 'dat.gui';
let system
export default function particleInit(dom){
  createWorld(dom, true)
  camera.position.z =120;
  constrolsInit()
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  })
}

var cloud;
function constrolsInit(){

  var controls = new function () {
    this.size = 15;
    this.transparent = true;
    this.opacity = 0.6;
    this.color = 0xffffff;
    this.rotateSystem = true;
    this.sizeAttenuation = true;
  
    this.redraw = function () {
      if (scene.getObjectByName("pointcloud")) {
        scene.remove(scene.getObjectByName("pointcloud"));
      }
      createPointCloud(controls.size, controls.transparent, controls.opacity, controls.sizeAttenuation, controls.color);
    };
  };
  
  const gui = new dat.GUI();
  gui.add(controls, 'size', 0, 20).onChange(controls.redraw);
  gui.add(controls, 'transparent').onChange(controls.redraw);
  gui.add(controls, 'opacity', 0, 1).onChange(controls.redraw);
  gui.addColor(controls, 'color').onChange(controls.redraw);
  gui.add(controls, 'sizeAttenuation').onChange(controls.redraw);
  
  gui.add(controls, 'rotateSystem');
  
  controls.redraw();
}

function createPointCloud(size,transparent,opacity,sizeAttenuation,color) {
  var material = new THREE.SpriteMaterial({
    map: getTexture(),
    color: 0xffffff
  });
  let range = 500;
  let grounp = new THREE.Object3D()
  grounp.name = 'pointcloud'
  for(let x=0;x<1000;x++){
    var sprite = new THREE.Sprite(material);
    sprite.position.set(Math.random() * range - range / 2, Math.random() * range - range / 2, Math.random() * range - range / 2);
    sprite.scale.set(4, 4, 4);
    grounp.add(sprite);
  }
  scene.add(grounp);
}
let getTexture = function () {
  var canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;

  var ctx = canvas.getContext('2d');
  // the body
  ctx.translate(-81, -84);

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();

  // the eyes
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  // the pupils
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();


  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};