<template>
  <div class="Game"  @click="bullet">
  </div>
</template>

<script setup>
import { onMounted, ref , reactive } from 'vue';
import { THREE, scene, camera, renderer, createWorld } from '../script/createWorld'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import GameBox from '../assets/GameBox.glb?url'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'

const defaultMaterial = new CANNON.Material('default')
const material = new THREE.MeshNormalMaterial()
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
})
onMounted(()=>{
  let cw = createWorld('.Game', true)
  if (!cw) return
  // cannonDebugger
  const cannonDebugger = CannonDebugger(scene, world)
  

  // sphere
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), material)
  scene.add(sphere)


  // const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
  //   friction: 0.1,
  //   restitution: 0.3,
  // })
  // world.addContactMaterial(defaultContactMaterial)

  const sphereShape = new CANNON.Sphere(1)
  const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 4, 0),
    shape: sphereShape,
    material: defaultMaterial,
  })
  world.addBody(sphereBody)

  // floor
  const halfExtents = new CANNON.Vec3(15, 15, 0.1)
  const boxShape = new CANNON.Box(halfExtents)
  const floorBody = new CANNON.Body({
    mass: 0,
    shape: boxShape,
    material: defaultMaterial,
  })
  floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
  world.addBody(floorBody)

  renderer.setAnimationLoop(() => {
    // update()
    sphere.position.copy(sphereBody.position)
    sphere.quaternion.copy(sphereBody.quaternion)
    // console.log(`Sphere y position: ${sphereBody.position.y}`)
    basicUpdate()
  })
  const basicUpdate = () => {
    cannonDebugger.update()
    world.fixedStep()
    renderer.render(scene, camera);
  }
  getGLB(GameBox)
})

const getGLB = urlPath => {
  let gltfLoader = new GLTFLoader()
  gltfLoader.load(urlPath,
    gltf => {
      // console.log('gltfLoader', gltf)
      gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          // console.log('---[ child.material ]-77', child)
          child.material.emissive = child.material.color;
          child.material.emissiveMap = child.material.map;
          const floorBody = new CANNON.Body({
            mass: 0,
            shape: new CANNON.Plane(),
            material: defaultMaterial,
          })
          // console.log('---[ child.material.position ]-87', child.position, floorBody)
          // floorBody.position.copy(child.position)
          // // floorBody.quaternion.copy(child.quaternion)
          // console.log('---[ floorBody ]-88', floorBody.quaternion, child.quaternion)
          // if (child.quaternion.w==1)floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
          // world.addBody(floorBody)
        }
      });
      gltf.scene.position.set(0, 0, 0) //定位
      scene.add(gltf.scene)
      console.log('gltfLoaderEnd', scene)
    }
  )
}
// 发射子弹
const bullet = (event)=>{
  let x = (event.clientX / window.innerWidth) * 2 - 1;
  let y = - (event.clientY / window.innerHeight) * 2 + 1;
  const direction = new THREE.Vector3(x, y, -1).applyQuaternion(camera.getWorldQuaternion(new THREE.Quaternion())).normalize();
  const t=20
  // sphere
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.2, 1, 1), material)
  scene.add(sphere)

  const sphereShape = new CANNON.Sphere(0.15)
  const bp = new CANNON.Vec3(camera.position.x, camera.position.y-2, camera.position.z)
  const sphereBody = new CANNON.Body({
    mass: 1,
    position: bp,
    shape: sphereShape,
    velocity: new CANNON.Vec3(direction.x * t, direction.y * t, direction.z * t),
    material: defaultMaterial,
  })
  world.addBody(sphereBody)
  const render = () => {
      if (sphereBody.position.y > -2) {
      requestAnimationFrame(render);
      sphere.position.copy(sphereBody.position)
      sphere.quaternion.copy(sphereBody.quaternion)
    }else{
      scene.remove(sphere)
      world.removeBody(sphereBody)
    }
  }
  render()
}
</script>

<style lang="scss" scoped>
.Game {
width: 100%;height: 100%;
}
</style>
