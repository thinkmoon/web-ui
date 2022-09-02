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
import 'unctx';
import 'defu';
import 'qiniu-js';
import 'dayjs';
import 'cookie-es';
import '@element-plus/icons-vue';
import 'lodash-unified';
import '@popperjs/core';
import '@ctrl/tinycolor';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import 'async-validator';
import 'memoize-one';
import 'escape-html';
import 'normalize-wheel-es';
import '@floating-ui/dom';
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
//# sourceMappingURL=auth.e3b10034.mjs.map
