import { defineNuxtPlugin } from '#app';
import ElementPlus, { ID_INJECTION_KEY } from 'element-plus';
import * as Icons from '@element-plus/icons-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  });
  Object.keys(Icons).forEach((key) => {
    nuxtApp.vueApp.component(`icon-${key}`, Icons[key]);
  });
});
