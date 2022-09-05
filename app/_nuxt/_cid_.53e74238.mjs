import { u as du, b as Cf, A as gh } from '../server.mjs';
import { defineComponent, withAsyncContext, computed, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { R } from './asyncData.0e34d6e1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

const a = defineComponent({ __name: "[cid]", __ssrInlineRender: true, async setup(u$1) {
  let e, r;
  const m = du(), s = useRoute(), { data: t } = ([e, r] = withAsyncContext(() => R("article", () => gh.getDetail({ cid: s.params.cid }), "$o1yr1BdR3r")), e = await e, r(), e), C = `https://www.thinkmoon.cn/post/${s.params.cid}`;
  if (t.value.fields instanceof Array) {
    const p = {};
    t.value.fields.forEach((o) => {
      p[o.name] = o.value;
    }), t.value.fields = p;
  }
  const y = `> \u7248\u6743\u58F0\u660E: \u672C\u6587\u9996\u53D1\u4E8E[\u6307\u5C16\u9B54\u6CD5\u5C4B-${t.value.title}](${C}),\u8F6C\u8F7D\u6216\u5F15\u7528\u5FC5\u987B\u7533\u660E\u539F\u6307\u5C16\u9B54\u6CD5\u5C4B\u6765\u6E90\u53CA\u6E90\u5730\u5740\uFF01`, x = computed(() => `# ${t.value.title} \r
 ${t.value.text} \r
 ${y}`);
  return u(`/post/${s.params.cid}`), (p, o, n, $) => {
    const g = resolveComponent("Title"), w = resolveComponent("v-md-preview");
    o(`<div${ssrRenderAttrs(mergeProps({ class: "" }, $))} data-v-2f3d531b>`), o(ssrRenderComponent(g, null, { default: withCtx((U, d, V, j) => {
      if (d)
        d(`${ssrInterpolate(unref(t).title)} | ${ssrInterpolate(unref(m).TITLE)}`);
      else
        return [createTextVNode(toDisplayString(unref(t).title) + " | " + toDisplayString(unref(m).TITLE), 1)];
    }), _: 1 }, n)), o('<div class="article-content" data-v-2f3d531b>'), o(ssrRenderComponent(w, { text: unref(x) }, null, n)), o(`<ins class="adsbygoogle" data-ad-client="ca-pub-3208634444966567" data-ad-format="fluid" data-ad-layout="in-article" data-ad-slot="2621880404" style="${ssrRenderStyle({ display: "block", "text-align": "center", width: "100%" })}" data-v-2f3d531b></ins></div></div>`);
  };
} });
const v = a.setup;
a.setup = (u, e) => {
  const r = useSSRContext();
  return (r.modules || (r.modules = /* @__PURE__ */ new Set())).add("pages/post/[cid].vue"), v ? v(u, e) : void 0;
};
const Bt = Cf(a, [["__scopeId", "data-v-2f3d531b"]]);

export { Bt as default };
//# sourceMappingURL=_cid_.53e74238.mjs.map
