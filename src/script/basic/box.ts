import * as THREE from "three";
import texture from "./texture";

interface option{
  g?:THREE.BoxGeometry,
  m?:THREE.MeshPhongMaterial
}
export default (option: option={}):THREE.Mesh=>{
  let _option = Object.assign({
    g: new THREE.BoxGeometry(1, 1, 1),
    m: new THREE.MeshPhongMaterial({ map: texture })
  }, option)
  return new THREE.Mesh(_option.g,_option.m);
}