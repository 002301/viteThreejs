<template>
  <div class="one" ><canvas id="three"></canvas></div>
</template>

<script setup lang="ts">
import { onMounted, ref , reactive } from 'vue';
import { THREE, scene, camera, renderer, createThree } from '../script/createThree'
import plane from '../script/basic/plane'
const update = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
let cube:THREE.Mesh
onMounted(()=>{
  createThree('#three',true)
  // 将立方体到场景中
  plane.rotation.x = Math.PI * -.5
  plane.receiveShadow = true
  scene.add(plane)
  const geometry = new THREE.BoxBufferGeometry(1, 1, 1); // 生成几何体
  const material = new THREE.MeshLambertMaterial({ // 生成材质
    color: 0x00ff00,
  });
  cube = new THREE.Mesh(geometry, material); // 生成网格
  cube.castShadow = true; // 对象是否渲染到阴影贴图中，默认值为false
  cube.position.y = 1
  scene.add(cube)

  const light = new THREE.PointLight(0xffffff, 1, 10);
  light.position.set(0,5, 5);
  light.castShadow = true; // default false
  scene.add(light);

  // const helper = new THREE.CameraHelper(light.shadow.camera);
  // scene.add(helper);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setAnimationLoop(()=>{
      update()
      renderer.render(scene, camera);
  })
  }
)

</script>

<style lang="scss" scoped>
.one {

}
</style>
