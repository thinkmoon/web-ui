import { defineNuxtPlugin } from '#app';
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
  Object.keys(Icons).forEach((key) => {
    nuxtApp.vueApp.component(`icon-${key}`, Icons[key]);
  });
});
