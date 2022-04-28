import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userId: 0,
      auth: null,
      isAdmin: true,
    };
  },
});
