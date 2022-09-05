import { u as du, T as _T, A as gh, c as U6 } from '../server.mjs';
import { defineComponent, withAsyncContext, reactive, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { R } from './asyncData.0e34d6e1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const T = defineComponent({ __name: "[pageIndex]", __ssrInlineRender: true, async setup(s) {
  let o, e;
  const n = du(), p = useRoute();
  Number(p.params.pageIndex);
  const [{ data: a }, { data: x }] = ([o, e] = withAsyncContext(() => Promise.all([R("tag", () => _T.getTag({ name: p.params.name }), "$GbK67nOY82"), R("post", () => gh.getListByTag({ name: p.params.name }), "$vQsqaCTJpb")])), o = await o, e(), o), u = reactive(x.value);
  return u.forEach((i) => {
    if (i.fields instanceof Array) {
      const t = {};
      i.fields.forEach((r) => {
        t[r.name] = r.value;
      }), i.fields = t;
    }
  }), (i, t, r, A) => {
    const E = resolveComponent("Title"), v = U6;
    t(`<div${ssrRenderAttrs(A)}>`), t(ssrRenderComponent(E, null, { default: withCtx((P, c, G, J) => {
      if (c)
        c(`\u6807\u7B7E&quot; ${ssrInterpolate(unref(a)[0].name)}&quot;\u4E0B\u7684\u6587\u7AE0 | ${ssrInterpolate(unref(n).TITLE)}`);
      else
        return [createTextVNode('\u6807\u7B7E" ' + toDisplayString(unref(a)[0].name) + '"\u4E0B\u7684\u6587\u7AE0 | ' + toDisplayString(unref(n).TITLE), 1)];
    }), _: 1 }, r)), t(ssrRenderComponent(v, { "post-list": u }, null, r)), t("</div>");
  };
} }), g = T.setup;
T.setup = (s, o) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/tag/[name]/[pageIndex].vue"), g ? g(s, o) : void 0;
};

export { T as default };
//# sourceMappingURL=_pageIndex_.d3ee022a.mjs.map
