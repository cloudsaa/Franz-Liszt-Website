import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Franz-Liszt-Website/',
  plugins: [
    tailwindcss(),
  ],
})
