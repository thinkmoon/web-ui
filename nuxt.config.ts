import { defineNuxtConfig } from 'nuxt';
import runtimeConfig from './runtime.config';

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtConfig({
  app: {
    buildAssetsDir: '/nuxt-asset/',
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
  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // build
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
  buildModules: [
    '@vueuse/nuxt',
  ],
});
