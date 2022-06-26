import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor0: ['react', 'react-dom'],
          vendor1: ['@douyinfe/semi-ui'],
          vendor2: ['react-markdown', 'remark-gfm', 'markdown-navbar'],
        },
      },
    },
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/base.less')}";`,
      },
    },
  },
});
