import { b as mv, e as tG } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
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

const m = {};
function a(r, t, o, p) {
  const e = tG;
  t(`<div${ssrRenderAttrs(p)}><div class="app-container">`), ssrRenderSlot(r.$slots, "default", {}, null, t, o), t("</div>"), t(ssrRenderComponent(e, null, null, o)), t("</div>");
}
const i = m.setup;
m.setup = (r, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue"), i ? i(r, t) : void 0;
};
const ot = mv(m, [["ssrRender", a]]);

export { ot as default };
//# sourceMappingURL=admin.ec3b1a1e.mjs.map
