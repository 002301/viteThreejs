<template>
  <div class="StarrySky" >
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { THREE, scene, camera, renderer, createWorld } from '../script/createWorld'
import plane from '../script/basic/plane'
import Box from '../script/basic/box'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
onMounted(()=>{
  let cw = createWorld('.StarrySky', true)
  if (!cw) return
  // 将立方体到场景中
  plane.rotation.x = Math.PI * -.5
  let box = Box()
  box.position.set(0,1,0)
  scene.add(plane, box)
  let effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
  effect.setSize(window.innerWidth, window.innerHeight);
  effect.domElement.style.color = 'white';
  effect.domElement.style.backgroundColor = 'black';
  let controls = new TrackballControls(camera, effect.domElement);

  let dom = document.querySelector('.StarrySky') as HTMLElement
  dom.appendChild(effect.domElement);

  renderer.setAnimationLoop(() => {
    // console.log('loop')
    renderer.render(scene, camera);
    controls.update();
    effect.render(scene, camera);
  })
  console.log('renderer');
  
})

</script>

<style lang="scss" scoped>
.StarrySky {
  width: 100%;height: 100%;
}
</style>
