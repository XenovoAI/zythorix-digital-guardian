import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: 'frontend',
  build: {
    outDir: '../dist'
  },

  // Server configuration
  server: {
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend/src"),
    },
  },
}));
