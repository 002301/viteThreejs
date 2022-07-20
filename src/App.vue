<template>
  <div class="app" @touchmove.prevent>
    <oneVue></oneVue>
  </div>
</template>
<script setup lang="ts">
import { onMounted,ref} from 'vue';
import oneVue from './components/one.vue'
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
