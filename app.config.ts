import dayjs from 'dayjs';
import packageInfo from './package.json';
export default defineAppConfig({
  TITLE: '指尖魔法屋-醉月思的博客',
  VERSION: `${packageInfo.version} · build-${dayjs().format('YYYYMMDD')}`,
  KEYWORDS: ['thinkmoon', '指尖魔法屋', '醉月思的博客'],
  DESCRIPTION: 'web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！',
  serviceUrl: 'https://service.thinkmoon.cn/api',
});
