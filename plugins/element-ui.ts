import {defineNuxtPlugin} from '#app';
import ElementPlus, {ElMessage} from 'element-plus/dist/index.full';
import * as Icons from '@element-plus/icons-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
  Object.keys(Icons).forEach((key) => {
    nuxtApp.vueApp.component(`icon-${key}`, Icons[key]);
  });
  return {
    provide: {
      message: ElMessage,
    },
  };
});
