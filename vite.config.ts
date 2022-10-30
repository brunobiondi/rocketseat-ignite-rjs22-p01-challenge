import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
        {
          find: '@public',
          replacement: resolve(__dirname, 'public'),
        },
      ],
    }),
  ],
})
