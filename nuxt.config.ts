import { defineNuxtConfig } from 'nuxt3';
export default defineNuxtConfig({
  publicRuntimeConfig: {
    TITLE: '指尖魔法屋-醉月思的博客',
    VERSION: '0.1.0'
  },
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'thinkmoon,醉月思,指尖魔法屋,醉月思的博客,web前端开发工程师,面向高保真编程' },
      { name: 'description', content: 'web前端开发工程师;面向高保真编程;总结与记录是两个极其优秀的学习习惯。对知识和技术保持敬畏之心！' },
    ],
  },
  css: [
    'assets/css/index.less',
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
});
