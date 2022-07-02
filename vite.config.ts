import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitejs.dev/guide/static-deploy.html#github-pages
  base: '/site/',
  publicDir: 'site',
  plugins: [react(), svgr()],
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
      '@/': `${path.resolve(__dirname, './src')}/`,
      '~/': `${path.resolve(__dirname, './')}/`,
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
