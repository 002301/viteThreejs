<template>
  <div class="app" ref="app" @touchmove.prevent></div>
</template>
<script setup lang="ts">
import { onMounted,ref} from 'vue';
import {THREE,scene,camera,renderer} from './components/threeInit'
import {cube ,texture,plane} from './components/basic/box'
let app = $ref(null)
onMounted(()=>{
  document.querySelector('.app')?.appendChild(renderer.domElement);
  scene.debug(true)
  // 创建一个立方体网格
  

  // 将立方体到场景中
  scene.add(cube,plane)

  const render = function () {
      requestAnimationFrame(render);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
  };

  render();
  }
)
</script>

<style lang="scss">
.app {
  width: 100%;height: 100%;
}
</style>
