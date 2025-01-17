import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  publicDir: './public',
  assetsInclude: ['public'],
  plugins: [
    react(), createHtmlPlugin({
      minify: true
    })
  ]
})
