import * as THREE from "three";
import checker from '../../assets/checker.png'

const planeSize = 40;

const loader = new THREE.TextureLoader();

const texture = loader.load(checker)
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.magFilter = THREE.NearestFilter
const repeats = planeSize / 2
texture.repeat.set(repeats, repeats)

export default texture