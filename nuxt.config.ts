import {defineNuxtConfig} from 'nuxt';
import runtimeConfig from './runtime.config';

export default defineNuxtConfig({
  buildAssetsDir: 'nuxt-asset',
  publicRuntimeConfig: runtimeConfig,
  meta: {
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'keywords', content: runtimeConfig.KEYWORDS.join()},
      {name: 'description', content: runtimeConfig.DESCRIPTION},
    ],
    script: [
      {
        async: true,
        src: '/ads.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  css: ['assets/css/index.less', 'element-plus/dist/index.css'],
  components: true,
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
});
