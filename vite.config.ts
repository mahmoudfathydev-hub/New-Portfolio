import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for root domain deployment
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/',
}))