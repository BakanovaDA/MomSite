import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/MomSite/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // ✅ Критически важно для Docker!
    port: 5173,
    strictPort: true,
    cors: true
  }
})
