<template>
  <div class="app" @touchmove.prevent>
    <div class="btns">
      <button v-for="v of allPage" @click="onChangeIndex(v-1)">{{v-1}}</button>
    </div>
    <First v-if="pageIndex==0"> </First>
    <Particle v-if="pageIndex==1"> </Particle>
    <StarrySky v-if="pageIndex==2"> </StarrySky>
    <GLTFloading v-if="pageIndex==3"></GLTFloading>
    <Earth v-if="pageIndex==4"></Earth>
    <Game v-if="pageIndex==5"></Game>
  </div>
</template>
<script setup lang="ts">
import { onMounted,ref} from 'vue';
import Particle from './components/Particle.vue';
const allPage = 4
let pageIndex = $ref(5)

const onChangeIndex = (params:number) => {
  pageIndex = params
}
onMounted(()=>{
  onChangeIndex(5)
})
</script>

<style lang="scss">
.app {
  width: 100%;height: 100%;overflow: hidden;
  canvas{
    width: 100%;
    height: 100%;
  }
  .btns{
    position:absolute;
    width: 100%;
    height: 50px;
    top:0;
    background:rgba($color: #ffffff, $alpha: 0.5);
    button{
      width: 50px;
      height: 50px;
    }
  }
}
.text{
  width: 100%;
  animation:hm 10s linear infinite;
}
@keyframes hm{
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(-100%);
  }
}
</style>
