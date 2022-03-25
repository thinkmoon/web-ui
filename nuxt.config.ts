import { defineNuxtConfig } from 'nuxt3';
import runtimeConfig from './runtime.config';
export default defineNuxtConfig({
  publicRuntimeConfig: runtimeConfig,
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: runtimeConfig.KEYWORDS.join() },
      { name: 'description', content: runtimeConfig.DESCRIPTION },
    ],
  },
  css: [
    'assets/css/index.less',
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
});
