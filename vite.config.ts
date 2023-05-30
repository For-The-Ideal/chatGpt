import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' 
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir)
}
const alias: Record<string, string> = {
  '@': pathResolve("src")
}

export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, './')  // 获取当前环境的配置
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias 
    },
    server: {
      proxy: {
        '/api': {
          target: config.VITE_BASE_HOST,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "@/assets/common.less";'
        }
      }
    },
  }
})
