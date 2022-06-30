import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' 
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir)
}
const alias: Record<string, string> = {
  '@': pathResolve("src")
}

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias 
  },
  server: {
    host: '0.0.0.0',
    port: 9527,
    open:true,
    proxy: {
      '/api': {
          target: 'http://localhost',
          changeOrigin: true,
          ws:true,
          rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/common.less";'
      }
    }
  },
})


