import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 场景
const scene = new THREE.Scene();
// 环境光
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

scene.debug = (boolean:Boolean)=>{
  if (boolean){
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    }); //监听鼠标、键盘事件
  }
}
// 创建一个基本透视相机 camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;
camera.position.y = 6;

// 创建一个抗锯齿渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });

// 配置渲染器清除颜色
renderer.setClearColor("#000000");

// 配置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight);

// document.querySelector(dom)?.appendChild(renderer.domElement);



export { THREE, scene, camera, renderer}