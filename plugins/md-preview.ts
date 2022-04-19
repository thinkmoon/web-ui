import { defineNuxtPlugin } from '#app';
import VMdPreview from '@kangc/v-md-editor/lib/preview.js';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import externalLinks from 'markdown-it-external-links';


export default defineNuxtPlugin((nuxtApp) => {
  VMdPreview.xss.extend({
    // 扩展白名单
    whiteList: {
      a: ['target', 'href', 'title', 'rel'],
    },
  });
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
    extend(md) {
      md.use(externalLinks, {
        externalClassName: 'custom-external-link',
        internalClassName: 'custom-internal-link',
        internalDomains: ['thinkmoon.cn'],
        externalRel: 'nofollow noopener noreferrer',
      });
    },
  });
  nuxtApp.vueApp.use(VMdPreview);
});
