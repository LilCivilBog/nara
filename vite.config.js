import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: "base" debe coincidir con el nombre de tu repositorio en GitHub.
// Si tu repo se llama "nara", la URL será https://TU_USUARIO.github.io/nara/
export default defineConfig({
  plugins: [react()],
  base: '/nara/',
})
