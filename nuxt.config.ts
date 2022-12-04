import viteCompression from 'vite-plugin-compression';
import runtimeConfig from './runtime.config';

export default defineNuxtConfig({
  app: {
    head: {
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
  },
  runtimeConfig,
  sourcemap: {
    "server": false,
    "client": false
  },
  css: ['assets/css/index.less'],
  vite: {
    plugins: [viteCompression()],
  },
  experimental: {
    writeEarlyHints: false
  },
  modules: [
    ['@pinia/nuxt', {
      autoImports: [
        // 自动引入 `usePinia()`
        'defineStore',
        // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
        ['defineStore', 'definePiniaStore'],
      ],
    }]
  ],
});
