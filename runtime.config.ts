const dayjs = require('dayjs');
export default {
  TITLE: '指尖魔法屋-醉月思的博客',
  VERSION: `${process.env.npm_package_version} · build-${dayjs().format('YYYYMMDD')}`,
  KEYWORDS: ['thinkmoon', '指尖魔法屋', '醉月思的博客'],
  DESCRIPTION: 'web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！',
  baseUrl: process.env.NUXT_BASE_URL,
};
