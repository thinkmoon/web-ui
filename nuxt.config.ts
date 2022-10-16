import viteCompression from 'vite-plugin-compression';
import runtimeConfig from './runtime.config';

export default defineNuxtConfig({
  app: {
    cdnURL: 'https://thinkmoon.github.io/thinkblog/',
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
        src: 'https://cdn.staticfile.org/qiniu-js/3.4.1/qiniu.min.js',
      },
      {
        async: true,
        src: '/ads.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  css: ['assets/css/index.less'],
  vite: {
    plugins: [viteCompression()],
  }
});
