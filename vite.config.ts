import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@utils": "/src/utils",
      "@config": "/config",
      "@service": "/business/service",
      "@interface": "/business/interface",
      "@request": "/business/models/request",
      "@response": "/business/models/response",
      "@enums": "/business/models/enums",
      "@types": "/business/models/commonTypes",
      "@pages": "/src/app/pages",
      "@shared": "/src/app/shared",
      "@store": "/src/Store",
      "@assets": "/src/assets",
    },
  },
})
