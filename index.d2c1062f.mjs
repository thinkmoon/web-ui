import { useSSRContext } from 'vue';
import { b as mv } from '../server.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'vue/server-renderer';
import 'axios';
import 'qiniu-js';
import 'dayjs';
import 'lodash-unified';
import '@element-plus/icons-vue';
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
import '@vue/reactivity';
import 'async-validator';
import 'memoize-one';
import 'escape-html';
import 'normalize-wheel-es';
import '@floating-ui/dom';
import 'cookie-es';
import 'ohash';
import '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/theme/github.js';
import 'highlight.js';
import '@kangc/v-md-editor/lib/preview.js';
import 'markdown-it-external-links';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const r = {};
function s(p, t, o, n) {
  t(" \u6982\u89C8 ");
}
const i = r.setup;
r.setup = (p, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue"), i ? i(p, t) : void 0;
};
const X = mv(r, [["ssrRender", s]]);

export { X as default };
//# sourceMappingURL=index.d2c1062f.mjs.map
