import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy';

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: "./",
  base:"./",
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
  ],
  server:{
    port: 8089,
    proxy:{
      '/dev':{
        target:'http://localhost:8081',
        rewrite:(path)=>path.replace(/^\/dev/,''),
      }
    }
  },

})

