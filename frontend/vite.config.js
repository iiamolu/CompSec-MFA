import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
// Imported tailwindcss
import tailwindcss from '@tailwind/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
    // Added tailwindcss to plugins
    tailwindcss()
  ],
})
