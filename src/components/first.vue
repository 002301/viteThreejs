<script setup lang="ts">
import { onMounted} from 'vue';
import { THREE, scene, camera, renderer, createWorld } from '../script/createWorld'
import plane from '../script/basic/plane'
/**
 * 一个演示框架基本场景的例子
 */
let cube:THREE.Mesh
onMounted(()=>{
  let cw = createWorld('.one',true)
  if (!cw) return
  // 将立方体到场景中
  plane.rotation.x = Math.PI * -.5
  scene.add(plane)
  const geometry = new THREE.BoxBufferGeometry(1, 1, 1); // 生成几何体
  const material = new THREE.MeshLambertMaterial({ // 生成材质
    color: 0x00ff00,
  });
  cube = new THREE.Mesh(geometry, material); // 生成网格
  cube.castShadow = true; // 对象是否渲染到阴影贴图中，默认值为false
  cube.position.y = 1
  scene.add(cube)

  renderer.setAnimationLoop(()=>{
      update()
      renderer.render(scene, camera);
  })
  }
)
const update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
</script>
<template>
  <div class="one"></div>
</template>
<style>
  .one{
    width: 100%;height: 100%;
  }
</style>
