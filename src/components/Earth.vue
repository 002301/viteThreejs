<template>
  <div class="Earth" ref="Earth">
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
// import * as THREE from "https://cdn.skypack.dev/three@0.142.0";
import * as THREE from "three";

// import CameraControls from 'https://cdn.skypack.dev/camera-controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// CameraControls.install({ THREE: THREE });
let Earth = $ref()
onMounted(()=>{
  //init
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
  camera.position.set(50, 10, 400);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  var renderer = new THREE.WebGLRenderer({ antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  Earth.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.autoRotate = true;


  //add stars
  var star;
  for (var i = 0; i < 5000; i++) {
    var starSize = Math.random() * 0.08 + 0.8;
    var starPosX = 0, starPosY = 0, starPosZ = 0;
    starPosX = Math.random() * 4000 - 2000;
    starPosY = (Math.random() * 4000 - 2000) * Math.random() * (Math.random() + 0.2);
    starPosZ = Math.random() * 4000 - 2000;

    while ((Math.sqrt(starPosX * starPosX + starPosY * starPosY + starPosZ * starPosZ)) < 300) {
      starPosX = Math.random() * 4000 - 2000;
      starPosY = (Math.random() * 4000 - 2000) * Math.random() * Math.random();
      starPosZ = Math.random() * 4000 - 2000;
    }

    var geometry = new THREE.SphereGeometry(starSize, 10, 10);
    var material = new THREE.MeshBasicMaterial(0xffffff);
    star = new THREE.Mesh(geometry, material);
    star.position.set(starPosX, starPosY, starPosZ);

    scene.add(star);
  }

  // add ball with texture
  // in this case earth
  let earth, moon
  var geometry = new THREE.SphereGeometry(63.5, 50, 50);
  THREE.ImageUtils.crossOrigin = true;
  var textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = true;
  //textureLoader.load('https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg', function(texture) {
  textureLoader.load('https://images.pexels.com/photos/87652/earth-map-summer-july-87652.jpeg', function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    var material = new THREE.MeshLambertMaterial({ map: texture });
    earth = new THREE.Mesh(geometry, material);
    earth.rotation.y = -3;
    scene.add(earth);
    
  });
  renderer.render(scene, camera);

  // //create lights
  var light;

  light = new THREE.DirectionalLight(0xffffff, 0.6);
  light.position.set(0, 150, 450);
  scene.add(light);

  light = new THREE.AmbientLight(0xffffff, 1.2);
  light.position.set(0, 0, 0);
  scene.add(light);

  light = new THREE.DirectionalLight(0x9999ff, 1);
  light.position.set(0, 156, -450);
  scene.add(light);

  // //render scene
  function render() {
    //renderer.render(scene, camera);
    requestAnimationFrame(render);
    // earth.rotation.y += 0.001;
    texture.offset.x -= 0.004
    controls.update();
    renderer.render(scene, camera);
  }



  const textImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAABkCAYAAADZqbVdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFxmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuOWNjYzRkZTkzLCAyMDIyLzAzLzE0LTE0OjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTExLTAxVDExOjE2OjI0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMS0wMVQxNTozMTo1NSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMS0wMVQxNTozMTo1NSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZWMwZGIyYy04YzMyLTRkOWUtYWM3ZC1mODdlZWU2ZDlkZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZBODY4QkI1MUFEMTFFREFEN0RGREQ1MDhBM0JGNDUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0RkE4NjhCQjUxQUQxMUVEQUQ3REZERDUwOEEzQkY0NSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkE4NjhCODUxQUQxMUVEQUQ3REZERDUwOEEzQkY0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkE4NjhCOTUxQUQxMUVEQUQ3REZERDUwOEEzQkY0NSIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZWMwZGIyYy04YzMyLTRkOWUtYWM3ZC1mODdlZWU2ZDlkZDgiIHN0RXZ0OndoZW49IjIwMjItMTEtMDFUMTU6MzE6NTUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4zIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqwjLnwAAA2YSURBVHic7d1NcuLIFobhzx090dB3CdwlcJdglmAvAWaamiWUp5qZJRRLMEtollAsoRlq6DtIFMY2GFAe5Y/yfSIqOqqqLVQYzKejkyfv3t/fBQAAACBtf8U+AQAAAACXEdwBAACADBDcAQAAgAz8HfsEgOS09YPRkXaqmp3RscrV1m8eX/2iqtmYnctP2vpR0sTwiGteP4imrV9l+3q+JNx7FcgYwR347pekqcFxlpJeen1lW/8r6d7jsReqmpXH16fBXUT5XEg9WZ3KFebyO9fPqqbfaydX7nvtc5F2i2Vxz+/tJrJ8PV+2OfwC8ANaZYDv9kbH6Re823ra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'
  const txtTextureLoader = new THREE.TextureLoader(); // 纹理加载器
  const texture = txtTextureLoader.load(textImg);
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(4, 1);
  const Tmaterial = new THREE.MeshBasicMaterial({
    map: texture, // 设置纹理贴图
    side: THREE.DoubleSide,
    transparent: true,
  });

  const cylinderGeometry = new THREE.CylinderGeometry(80, 80, 30, 30, 1, true);
  const cylinder = new THREE.Mesh(cylinderGeometry, Tmaterial);
  scene.add(cylinder);

  // //call rendering
  render();
})

</script>

<style lang="scss" scoped>
.Earth {
  width: 100%;height: 100%;
}
</style>
