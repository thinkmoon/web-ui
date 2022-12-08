import viteCompression from 'vite-plugin-compression';

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: ['thinkmoon', '指尖魔法屋', '醉月思的博客'] },
        { name: 'description', content: 'web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！' },
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
