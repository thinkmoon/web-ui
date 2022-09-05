import { b as mv, k as wc } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const o = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(t) {
  const e = t;
  return wc({ title: `${e.statusCode} - ${e.statusMessage} | ${e.appName}`, script: [], style: [{ children: '*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}' }] }), (r, a, u, p) => {
    a(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, p))} data-v-88f1b6ea><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-88f1b6ea></div><div class="max-w-520px text-center" data-v-88f1b6ea><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-88f1b6ea>${ssrInterpolate(t.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-88f1b6ea>${ssrInterpolate(t.description)}</p></div></div>`);
  };
} }, s = o.setup;
o.setup = (t, e) => {
  const r = useSSRContext();
  return (r.modules || (r.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/registry.npmmirror.com+@nuxt+ui-templates@0.3.2/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"), s ? s(t, e) : void 0;
};
const et = mv(o, [["__scopeId", "data-v-88f1b6ea"]]);

export { et as default };
//# sourceMappingURL=error-500.4c73535d.mjs.map
