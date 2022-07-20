<template>
  <div class="app" @touchmove.prevent>
    <First></First>
  </div>
</template>
<script setup lang="ts">
import { onMounted,ref} from 'vue';
import First from './components/first.vue'
</script>

<style lang="scss">
.app {
  width: 100%;height: 100%;overflow: hidden;
  canvas{
    width: 100%;
    height: 100%;
  }
}
</style>
