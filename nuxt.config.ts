import { defineNuxtConfig } from 'nuxt';
import viteCompression from 'vite-plugin-compression';
import runtimeConfig from './runtime.config';

const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  app: {
    cdnURL: 'https://thinkmoon.github.io/thinkblog/_nuxt/public',
  },
  publicRuntimeConfig: runtimeConfig,
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: runtimeConfig.KEYWORDS.join() },
      { name: 'description', content: runtimeConfig.DESCRIPTION },
    ],
    script: [
      {
        async: true,
        src: '/ads.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  css: ['assets/css/index.less'],
  // build
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ?
        ['element-plus'] : [],
  },
  experimental: {
    externalVue: false
  },
  vite: {
    plugins: [viteCompression()]
  }
});
