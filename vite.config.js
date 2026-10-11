import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so built assets resolve on GitHub Pages project sites
  // (https://user.github.io/Portfolio/) as well as user sites and custom domains.
  base: './',
})
