import * as THREE from "three";
export { THREE }
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/**
 * 初始化Threejs环境
 * import { THREE, scene, camera, renderer, createWorld } from '../script/createWorld'
 * 
 * createWorld(dom,true)
 * renderer.setAnimationLoop(()=>{
 *    update()
 *     renderer.render(scene, camera);
  })
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
export let camera: any
// 初始化抗锯齿渲染器
export let renderer: THREE.WebGLRenderer;

export function createWorld(dom:string, debug:boolean) {
  const parent = document.querySelector(dom) as HTMLElement
  if (parent == null){
    console.warn('找不到父节点')
    return false
  }
  let { width, height } = parent.getBoundingClientRect()
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  addLight()
  renderer = new THREE.WebGLRenderer({antialias: true })
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(WIDTH, HEIGHT)
  // 配置渲染器清除颜色
  renderer.setClearColor("#000000")
  parent.append(renderer.domElement)
  // 配置渲染器尺寸
  renderer.setSize(width, height)
  
  camera.position.set(0, 1, 5)
  camera.lookAt(new THREE.Vector3(0,0,0))
  renderer.render(scene, camera);
  // parent.setAttribute('style','width:100%;height:100%;')
  if (debug){
    debugInit()
  }
  window.addEventListener('resize',()=>{
    let { width, height } = parent.getBoundingClientRect()
    renderer.setSize(width, height);
  })
  console.log('CreateWorld')
  return true
}
// 初始化debug
const debugInit = () => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  }); 
}