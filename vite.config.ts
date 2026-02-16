import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // THIS LINE IS CRITICAL: It ensures assets are found at the root
  base: '/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Keeps your JS/CSS organized in an assets folder
  },
  // ... keep your define and resolve blocks
});
