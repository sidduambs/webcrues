import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createRoot } from 'react-dom';

export default defineConfig({
  plugins: [
    react(),
  ],
  esbuild: {
    jsxFactory: 'createRoot' // Set the JSX factory to 'createRoot' as a string
  },
});
