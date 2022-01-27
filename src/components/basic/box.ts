import * as THREE from "three";
import checker from '../../assets/checker.png'


const planeSize = 40;

const loader = new THREE.TextureLoader();
const texture = loader.load(checker);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.magFilter = THREE.NearestFilter;
const repeats = planeSize / 2;
texture.repeat.set(repeats, repeats);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshPhongMaterial({
    map: texture,
  })
);


const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
const planeMat = new THREE.MeshPhongMaterial({
  map: texture,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotation.x = Math.PI * -.5;


export { texture, cube , plane}