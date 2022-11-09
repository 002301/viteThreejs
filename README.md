 demo:https://002301.github.io/viteThreejs/
 
#### vue3架构下Three练习

```js
//  初始化Threejs环境
 import { THREE, scene, camera, renderer, createWorld } from '../script/createWorld'
 
 createWorld(dom,true)
 renderer.setAnimationLoop(()=>{
     update()
      renderer.render(scene, camera);
})
```
script/basic 目录下收集了一些基本组件

components 目录下放置例子

First.vue 一个基本场景的例子