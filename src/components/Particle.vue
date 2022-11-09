<template>
  <div class="Particle" >
  </div>
</template>

<script setup>
import { onMounted, ref , reactive } from 'vue';
import particleInit from '../script/particle.mjs'

//页面初始化
onMounted(()=>{
  particleInit('.Particle')
})

</script>

<style lang="scss" scoped>
.Particle {
  width: 100%;height: 100%;
}
</style>
