import { j as defineNuxtRouteMiddleware, i as useCookie, n as navigateTo } from '../server.mjs';
import 'unenv/runtime/mock/proxy';
import '../../handlers/renderer.mjs';
import 'ufo';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'axios';
import 'stream';
import 'cookie-es';
import 'dayjs';
import 'defu';
import 'unctx';
import 'qiniu-js';
import 'element-plus';
import '@element-plus/icons-vue';
import '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/theme/github.js';
import 'highlight.js';
import '@kangc/v-md-editor/lib/preview.js';
import 'markdown-it-external-links';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useCookie("auth");
  if (!auth2.value) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth.10584c5b.mjs.map
