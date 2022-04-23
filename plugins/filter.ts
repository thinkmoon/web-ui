import {defineNuxtPlugin} from '#app';
import dayjs from 'dayjs';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$filters = {
    time(value) {
      return dayjs(value).format('YYYY/MM/DD');
    },
  };
});
