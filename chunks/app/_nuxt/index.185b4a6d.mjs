import { u as du, l as ra, b as Cf, T as _T } from '../server.mjs';
import { defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { R } from './asyncData.0e34d6e1.mjs';
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

const c = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(l) {
  let e, o;
  const u = du(), { data: C } = ([e, o] = withAsyncContext(() => R("tag", () => _T.getTag(), "$qM7mDDnpFG")), e = await e, o(), e);
  return (G, r, f, I) => {
    const $ = resolveComponent("Title"), E = ra.ElTag, x = ra.ElLink;
    r(`<div${ssrRenderAttrs(mergeProps({ class: "page-content" }, I))} data-v-9617272d>`), r(ssrRenderComponent($, null, { default: withCtx((t, p, m, T) => {
      if (p)
        p(`\u6807\u7B7E | ${ssrInterpolate(unref(u).TITLE)}`);
      else
        return [createTextVNode("\u6807\u7B7E | " + toDisplayString(unref(u).TITLE), 1)];
    }), _: 1 }, f)), r("<!--[-->"), ssrRenderList(unref(C), (t) => {
      r(ssrRenderComponent(E, { key: t.tid, type: "info", class: "tag-list" }, { default: withCtx((p, m, T, R) => {
        if (m)
          m(ssrRenderComponent(x, { href: `/tag/${t.name}/1`, type: "info" }, { default: withCtx((M, y, P, j) => {
            if (y)
              y(`${ssrInterpolate(t.name)}(${ssrInterpolate(t.count)}) `);
            else
              return [createTextVNode(toDisplayString(t.name) + "(" + toDisplayString(t.count) + ") ", 1)];
          }), _: 2 }, T, R));
        else
          return [createVNode(x, { href: `/tag/${t.name}/1`, type: "info" }, { default: withCtx(() => [createTextVNode(toDisplayString(t.name) + "(" + toDisplayString(t.count) + ") ", 1)]), _: 2 }, 1032, ["href"])];
      }), _: 2 }, f));
    }), r("<!--]--></div>");
  };
} });
const v = c.setup;
c.setup = (l, e) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("pages/tag/index.vue"), v ? v(l, e) : void 0;
};
const St = Cf(c, [["__scopeId", "data-v-9617272d"]]);

export { St as default };
//# sourceMappingURL=index.185b4a6d.mjs.map
