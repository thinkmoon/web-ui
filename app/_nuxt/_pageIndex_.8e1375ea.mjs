import { u as Ec, l as Ra, b as mv, A as cy, c as eG } from '../server.mjs';
import { defineComponent, withAsyncContext, reactive, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { R } from './asyncData.55e7a736.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u } from './BaiduSite.6f90474b.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
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

const l = defineComponent({ __name: "[pageIndex]", __ssrInlineRender: true, async setup(_) {
  let i, p;
  const f = Ec(), n = useRoute(), a = n.params.pageIndex, { data: m } = ([i, p] = withAsyncContext(() => R("res", () => cy.getList({ current: a }), "$66Eht5WzLu")), i = await i, p(), i), v = reactive(m.value.records);
  return v.forEach((s) => {
    if (s.fields instanceof Array) {
      const e = {};
      s.fields.forEach((r) => {
        e[r.name] = r.value;
      }), s.fields = e;
    }
  }), m.value.total, u(`/page/${n.params.pageIndex}`), (s, e, r, L) => {
    const T = resolveComponent("Title"), $ = eG, g = Ra.ElLink;
    e(`<div${ssrRenderAttrs(mergeProps({ class: "page-content" }, L))} data-v-631eddd1>`), e(ssrRenderComponent(T, null, { default: withCtx((x, o, I, E) => {
      if (o)
        o(`\u7B2C${ssrInterpolate(unref(n).params.pageIndex)}\u9875 | ${ssrInterpolate(unref(f).TITLE)}`);
      else
        return [createTextVNode("\u7B2C" + toDisplayString(unref(n).params.pageIndex) + "\u9875 | " + toDisplayString(unref(f).TITLE), 1)];
    }), _: 1 }, r)), e('<div class="post-container" data-v-631eddd1>'), e(ssrRenderComponent($, { "post-list": v }, null, r)), e('<div class="pagination-div" data-v-631eddd1><div data-v-631eddd1>'), Number(unref(a)) !== 1 ? e(ssrRenderComponent(g, { href: `/page/${Number(unref(a)) - 1}`, type: "primary" }, { default: withCtx((x, o, I, E) => {
      if (o)
        o(" \u4E0A\u4E00\u9875 ");
      else
        return [createTextVNode(" \u4E0A\u4E00\u9875 ")];
    }), _: 1 }, r)) : e("<!---->"), e("</div><div data-v-631eddd1>"), Number(unref(a)) !== unref(m).pages ? e(ssrRenderComponent(g, { href: `/page/${Number(unref(a)) + 1}`, type: "primary" }, { default: withCtx((x, o, I, E) => {
      if (o)
        o(" \u4E0B\u4E00\u9875 ");
      else
        return [createTextVNode(" \u4E0B\u4E00\u9875 ")];
    }), _: 1 }, r)) : e("<!---->"), e("</div></div></div></div>");
  };
} });
const A = l.setup;
l.setup = (_, i) => {
  const p = useSSRContext();
  return (p.modules || (p.modules = /* @__PURE__ */ new Set())).add("pages/page/[pageIndex].vue"), A ? A(_, i) : void 0;
};
const Be = mv(l, [["__scopeId", "data-v-631eddd1"]]);

export { Be as default };
//# sourceMappingURL=_pageIndex_.8e1375ea.mjs.map
