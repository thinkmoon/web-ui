import { u as Ec, l as Ra, b as mv, C as nO } from '../server.mjs';
import { defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { R } from './asyncData.55e7a736.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const d = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(u) {
  let e, o;
  const l = Ec(), { data: b } = ([e, o] = withAsyncContext(() => R("category", () => nO.getCategory(), "$6No3WsCJtH")), e = await e, o(), e);
  return (P, r, f, T) => {
    const I = resolveComponent("Title"), $ = Ra.ElTag, C = Ra.ElLink;
    r(`<div${ssrRenderAttrs(mergeProps({ class: "page-content" }, T))} data-v-38bcea0b>`), r(ssrRenderComponent(I, null, { default: withCtx((t, m, p, x) => {
      if (m)
        m(`\u6240\u6709\u5206\u7C7B | ${ssrInterpolate(unref(l).TITLE)}`);
      else
        return [createTextVNode("\u6240\u6709\u5206\u7C7B | " + toDisplayString(unref(l).TITLE), 1)];
    }), _: 1 }, f)), r("<!--[-->"), ssrRenderList(unref(b), (t) => {
      r(ssrRenderComponent($, { key: t.mid, type: "info", class: "category-list" }, { default: withCtx((m, p, x, R) => {
        if (p)
          p(ssrRenderComponent(C, { href: `/category/${t.name}/1`, type: "info" }, { default: withCtx((W, g, j, q) => {
            if (g)
              g(`${ssrInterpolate(t.name)}(${ssrInterpolate(t.count)}) `);
            else
              return [createTextVNode(toDisplayString(t.name) + "(" + toDisplayString(t.count) + ") ", 1)];
          }), _: 2 }, x, R));
        else
          return [createVNode(C, { href: `/category/${t.name}/1`, type: "info" }, { default: withCtx(() => [createTextVNode(toDisplayString(t.name) + "(" + toDisplayString(t.count) + ") ", 1)]), _: 2 }, 1032, ["href"])];
      }), _: 2 }, f));
    }), r("<!--]--></div>");
  };
} });
const y = d.setup;
d.setup = (u, e) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue"), y ? y(u, e) : void 0;
};
const St = mv(d, [["__scopeId", "data-v-38bcea0b"]]);

export { St as default };
//# sourceMappingURL=index.63252e16.mjs.map
