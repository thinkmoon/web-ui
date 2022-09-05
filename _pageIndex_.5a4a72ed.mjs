import { u as Ec, C as nO, A as cy, c as eG } from '../server.mjs';
import { defineComponent, withAsyncContext, reactive, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { R } from './asyncData.55e7a736.mjs';
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

const x = defineComponent({ __name: "[pageIndex]", __ssrInlineRender: true, async setup(s) {
  let o, r;
  const n = Ec(), p = useRoute(), a = { total: 0, current: 0 };
  a.current = Number(p.params.pageIndex);
  const [{ data: u }, { data: y }] = ([o, r] = withAsyncContext(() => Promise.all([R("category", () => nO.getCategory({ name: p.params.name }), "$EkkhNl6e4o"), R("post", () => cy.getList({ ...a, category: p.params.name }), "$sWFld4Glrr")])), o = await o, r(), o), c = reactive(y.value.records);
  return c.forEach((i) => {
    if (i.fields instanceof Array) {
      const t = {};
      i.fields.forEach((e) => {
        t[e.name] = e.value;
      }), i.fields = t;
    }
  }), (i, t, e, A) => {
    const E = resolveComponent("Title"), v = eG;
    t(`<div${ssrRenderAttrs(A)}>`), t(ssrRenderComponent(E, null, { default: withCtx((b, l, h, F) => {
      if (l)
        l(`\u5206\u7C7B&quot;${ssrInterpolate(unref(u)[0].name)}&quot;\u4E0B\u7684\u6587\u7AE0 | ${ssrInterpolate(unref(n).TITLE)}`);
      else
        return [createTextVNode('\u5206\u7C7B"' + toDisplayString(unref(u)[0].name) + '"\u4E0B\u7684\u6587\u7AE0 | ' + toDisplayString(unref(n).TITLE), 1)];
    }), _: 1 }, e)), t(ssrRenderComponent(v, { "post-list": c }, null, e)), t("</div>");
  };
} }), C = x.setup;
x.setup = (s, o) => {
  const r = useSSRContext();
  return (r.modules || (r.modules = /* @__PURE__ */ new Set())).add("pages/category/[name]/[pageIndex].vue"), C ? C(s, o) : void 0;
};

export { x as default };
//# sourceMappingURL=_pageIndex_.5a4a72ed.mjs.map
