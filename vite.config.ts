import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue({
    reactivityTransform: true
  }),
  Components()
],
  server: {
    open: true, // 运行自动打开浏览器
  },
  build:{
    outDir:'docs',
    
  }
})
