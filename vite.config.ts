import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { compression } from 'vite-plugin-compression2'


export default defineConfig({
  plugins: [
    react(
      {
        tsDecorators: true,
      }
    ),
    compression(
      {
        algorithm: "brotliCompress",
        include: [".js", ".json", ".css", ".html"]
      }
    ),
  ],
  build: {
    target: "es2022"
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
