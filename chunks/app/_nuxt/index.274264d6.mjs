import { u as Ec, l as Ra, b as mv, e as tG } from '../server.mjs';
import { defineComponent, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const d = defineComponent({ __name: "index", __ssrInlineRender: true, setup(a) {
  const e = Ec();
  return (n, t, p, y) => {
    const B = resolveComponent("Title"), C = Ra.ElLink, l = Ra.ElButton, b = tG;
    t("<!--[-->"), t(ssrRenderComponent(B, null, { default: withCtx((T, o, _, u) => {
      if (o)
        o(`${ssrInterpolate(unref(e).TITLE)}`);
      else
        return [createTextVNode(toDisplayString(unref(e).TITLE), 1)];
    }), _: 1 }, p)), t(`<div class="app-container" data-v-ed12b214><div class="shadow center-read" data-v-ed12b214><div class="title" data-v-ed12b214>${ssrInterpolate(unref(e).TITLE)}</div><div class="read" data-v-ed12b214>`), t(ssrRenderComponent(C, { href: "/page/1", underline: false }, { default: withCtx((T, o, _, u) => {
      if (o)
        o(ssrRenderComponent(l, { size: "large" }, { default: withCtx((k, c, z, N) => {
          if (c)
            c(" \u5F00\u59CB\u9605\u8BFB ");
          else
            return [createTextVNode(" \u5F00\u59CB\u9605\u8BFB ")];
        }), _: 1 }, _, u));
      else
        return [createVNode(l, { size: "large" }, { default: withCtx(() => [createTextVNode(" \u5F00\u59CB\u9605\u8BFB ")]), _: 1 })];
    }), _: 1 }, p)), t("</div></div></div>"), t(ssrRenderComponent(b, null, null, p)), t("<!--]-->");
  };
} });
const x = d.setup;
d.setup = (a, e) => {
  const n = useSSRContext();
  return (n.modules || (n.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), x ? x(a, e) : void 0;
};
const gt = mv(d, [["__scopeId", "data-v-ed12b214"]]);

export { gt as default };
//# sourceMappingURL=index.274264d6.mjs.map
