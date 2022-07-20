import * as THREE from "three";
export { THREE }
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// 初始化Threejs环境
/**
 * import { THREE, scene, camera, renderer, createThree } from '../script/createThree'
 * 
 * createThree(dom,true)
 */

// 初始化场景
export const scene = new THREE.Scene();
// 初始化环境光
function addLight(color = 0xFFFFFF,intensity = 1){
  const light = new THREE.AmbientLight(color, intensity);
  scene.add(light);
}
// 初始化透视相机 camera
const WIDTH = window.innerWidth 
const HEIGHT = window.innerHeight 
export const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
// 初始化抗锯齿渲染器
export let renderer: THREE.WebGLRenderer;

export function createThree(dom:string, debug:boolean) {
  addLight()
  camera.position.set(0,1,5)
  const canvas = document.querySelector(dom) as HTMLElement
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  // 配置渲染器清除颜色
  renderer.setClearColor("#000000");

  // 配置渲染器尺寸
  renderer.setSize(WIDTH, HEIGHT);
  canvas.style = 'width:100%;height:100%;'
  if (debug){
    debugInit()
  }
  window.addEventListener('resize',()=>{
    renderer.setSize(WIDTH, HEIGHT);
  })
}
// 初始化debug
const debugInit = () => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  }); //监听鼠标、键盘事件
}