<template>
  <div class="GLTFloading" >
  </div>
</template>

<script setup>
import { onMounted, ref , reactive } from 'vue';
import { THREE, scene, camera, renderer, createWorld } from '../script/createWorld'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import tableGL from '../assets/table.glb?url'
console.log('---[ tableGL ]-11', tableGL)


const getGLB = urlPath => {
  let gltfLoader = new GLTFLoader()
  gltfLoader.load(urlPath,
    gltf => {
      console.log(scene)
      // camera = gltf.cameras[0]
      gltf.scene.position.set(0, 0, 0) //定位
      // // gltf.scene.rotation.y = -Math.PI / 2 //转动 这些有点类似canvas 或者 c3的动画
      // // 模型是否否需要阴影 
      gltf.scene.traverse(obj => {
        // console.log('---[ obj ]-24', obj)
        obj.castShadow = true
        obj.receiveShadow = true
      })
      scene.add(gltf.scene)
      // //遍历当前模型的动画
      // gltf.animations.forEach(i => {
      //   this.state.push(i.name)
      //   this[i.name] = this.animationMixer.clipAction(i)
      // })
      // // 执行第一个动画 
      // this[gltf.animations[0].name].play()
    }
  )
}
onMounted(() => {
  let cw = createWorld('.GLTFloading', true)
  if (!cw) return
  getGLB(tableGL)
  renderer.shadowMap.enabled = true;
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  })
})

</script>

<style lang="scss" scoped>
.GLTFloading {
  width: 100%;height: 100%;
}
</style>
