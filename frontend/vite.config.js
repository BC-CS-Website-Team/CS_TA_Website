import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csvAdmin from './vite-plugin-csv-admin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csvAdmin()
  ],
  assetsInclude: ['**/*.JPG'], // Add support for .JPG files
})
