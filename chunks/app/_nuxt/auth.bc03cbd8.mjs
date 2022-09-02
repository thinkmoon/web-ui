import { i as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { u as useCookie } from './cookie.2d5a2fe0.mjs';
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
import 'unctx';
import 'defu';
import 'qiniu-js';
import 'dayjs';
import 'element-plus';
import '@element-plus/icons-vue';
import '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/theme/github.js';
import 'highlight.js';
import '@kangc/v-md-editor/lib/preview.js';
import 'markdown-it-external-links';
import 'cookie-es';
import './utils.a5972b0d.mjs';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useCookie("auth");
  if (!auth2.value) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth.bc03cbd8.mjs.map
