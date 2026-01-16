import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration with base path for Vercel deployment
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/New-Portfolio/' : '/',
}))