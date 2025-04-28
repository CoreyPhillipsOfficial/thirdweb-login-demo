import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import polyfillNode from "rollup-plugin-polyfill-node";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    polyfillNode(),
  ],
  build: {
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: { global: "globalThis" },
    },
  },
})
