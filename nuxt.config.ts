import viteCompression from 'vite-plugin-compression';

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'keywords', content: ['thinkmoon,指尖魔法屋,醉月思的博客'] },
        { name: 'description', content: '醉月思的博客——指尖魔法屋：总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！' },
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
