import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.kmz'],
  base: '/chiclinnet/', // Cambiar esto al nombre de tu repositorio
})
