// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment',
  },
};
