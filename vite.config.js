import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  // If your repo is named "username.github.io", use base: '/'
  // Otherwise, use base: '/your-repo-name/'
  // Update this to match your GitHub repository name
  base: '/',
})
