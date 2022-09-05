import { l as ra, b as Cf, _ as K6 } from '../server.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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

const w = defineComponent({ __name: "admin", __ssrInlineRender: true, setup(H) {
  const i = useRoute().path;
  function s(O) {
    location.href = O;
  }
  return (O, k, D, G) => {
    const z = ra.ElContainer, I = ra.ElHeader, C = K6, p = ra.ElMenu, l = ra.ElMenuItem, m = ra.ElSubMenu, N = ra.ElScrollbar, h = ra.ElMain, E = ra.ElBreadcrumb, o = ra.ElBreadcrumbItem, A = resolveComponent("NuxtChild");
    k(ssrRenderComponent(z, mergeProps({ class: "app-container" }, G), { default: withCtx((oe, P, J, K) => {
      if (P)
        P(ssrRenderComponent(z, null, { default: withCtx((de, R, T, $) => {
          if (R)
            R(ssrRenderComponent(I, { class: "admin-header" }, { default: withCtx((L, x, g, y) => {
              if (x)
                x(ssrRenderComponent(C, null, { default: withCtx((Q, _, F, M) => {
                  if (_)
                    _(ssrRenderComponent(p, { collapse: false, "default-active": unref(i), "active-text-color": "#409eff", mode: "horizontal", "unique-opened": "", onSelect: s }, { default: withCtx((U, r, B, v) => {
                      if (r)
                        r(ssrRenderComponent(l, { index: "/admin" }, { default: withCtx((q, n, c, f) => {
                          if (n)
                            n(" \u4E3B\u9875 ");
                          else
                            return [createTextVNode(" \u4E3B\u9875 ")];
                        }), _: 1 }, B, v)), r(ssrRenderComponent(m, { index: "2" }, { title: withCtx((q, n, c, f) => {
                          if (n)
                            n(" \u6587\u7AE0 ");
                          else
                            return [createTextVNode(" \u6587\u7AE0 ")];
                        }), default: withCtx((q, n, c, f) => {
                          if (n)
                            n(ssrRenderComponent(l, { index: "/admin/editor" }, { default: withCtx((W, b, X, Y) => {
                              if (b)
                                b(" \u65B0\u589E\u6587\u7AE0 ");
                              else
                                return [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")];
                            }), _: 1 }, c, f)), n(ssrRenderComponent(l, { index: "/admin/post-list" }, { default: withCtx((W, b, X, Y) => {
                              if (b)
                                b(" \u6587\u7AE0\u5217\u8868 ");
                              else
                                return [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")];
                            }), _: 1 }, c, f));
                          else
                            return [createVNode(l, { index: "/admin/editor" }, { default: withCtx(() => [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")]), _: 1 }), createVNode(l, { index: "/admin/post-list" }, { default: withCtx(() => [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")]), _: 1 })];
                        }), _: 1 }, B, v));
                      else
                        return [createVNode(l, { index: "/admin" }, { default: withCtx(() => [createTextVNode(" \u4E3B\u9875 ")]), _: 1 }), createVNode(m, { index: "2" }, { title: withCtx(() => [createTextVNode(" \u6587\u7AE0 ")]), default: withCtx(() => [createVNode(l, { index: "/admin/editor" }, { default: withCtx(() => [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")]), _: 1 }), createVNode(l, { index: "/admin/post-list" }, { default: withCtx(() => [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")]), _: 1 })]), _: 1 })];
                    }), _: 1 }, F, M));
                  else
                    return [createVNode(p, { collapse: false, "default-active": unref(i), "active-text-color": "#409eff", mode: "horizontal", "unique-opened": "", onSelect: s }, { default: withCtx(() => [createVNode(l, { index: "/admin" }, { default: withCtx(() => [createTextVNode(" \u4E3B\u9875 ")]), _: 1 }), createVNode(m, { index: "2" }, { title: withCtx(() => [createTextVNode(" \u6587\u7AE0 ")]), default: withCtx(() => [createVNode(l, { index: "/admin/editor" }, { default: withCtx(() => [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")]), _: 1 }), createVNode(l, { index: "/admin/post-list" }, { default: withCtx(() => [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["default-active"])];
                }), _: 1 }, g, y));
              else
                return [createVNode(C, null, { default: withCtx(() => [createVNode(p, { collapse: false, "default-active": unref(i), "active-text-color": "#409eff", mode: "horizontal", "unique-opened": "", onSelect: s }, { default: withCtx(() => [createVNode(l, { index: "/admin" }, { default: withCtx(() => [createTextVNode(" \u4E3B\u9875 ")]), _: 1 }), createVNode(m, { index: "2" }, { title: withCtx(() => [createTextVNode(" \u6587\u7AE0 ")]), default: withCtx(() => [createVNode(l, { index: "/admin/editor" }, { default: withCtx(() => [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")]), _: 1 }), createVNode(l, { index: "/admin/post-list" }, { default: withCtx(() => [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["default-active"])]), _: 1 })];
            }), _: 1 }, T, $)), R(ssrRenderComponent(N, null, { default: withCtx((L, x, g, y) => {
              if (x)
                x(ssrRenderComponent(h, null, { default: withCtx((Q, _, F, M) => {
                  if (_)
                    _(ssrRenderComponent(E, { separator: "/" }, { default: withCtx((U, r, B, v) => {
                      if (r)
                        r(ssrRenderComponent(o, { to: { path: "/admin" } }, { default: withCtx((q, n, c, f) => {
                          if (n)
                            n(" \u7BA1\u7406\u7AEF ");
                          else
                            return [createTextVNode(" \u7BA1\u7406\u7AEF ")];
                        }), _: 1 }, B, v)), r(ssrRenderComponent(o, null, { default: withCtx((q, n, c, f) => {
                          if (n)
                            n(`<a href="/admin/post" data-v-31cf687d${f}>\u6587\u7AE0</a>`);
                          else
                            return [createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")];
                        }), _: 1 }, B, v));
                      else
                        return [createVNode(o, { to: { path: "/admin" } }, { default: withCtx(() => [createTextVNode(" \u7BA1\u7406\u7AEF ")]), _: 1 }), createVNode(o, null, { default: withCtx(() => [createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")]), _: 1 })];
                    }), _: 1 }, F, M)), _(ssrRenderComponent(A, null, null, F, M));
                  else
                    return [createVNode(E, { separator: "/" }, { default: withCtx(() => [createVNode(o, { to: { path: "/admin" } }, { default: withCtx(() => [createTextVNode(" \u7BA1\u7406\u7AEF ")]), _: 1 }), createVNode(o, null, { default: withCtx(() => [createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")]), _: 1 })]), _: 1 }), createVNode(A)];
                }), _: 1 }, g, y));
              else
                return [createVNode(h, null, { default: withCtx(() => [createVNode(E, { separator: "/" }, { default: withCtx(() => [createVNode(o, { to: { path: "/admin" } }, { default: withCtx(() => [createTextVNode(" \u7BA1\u7406\u7AEF ")]), _: 1 }), createVNode(o, null, { default: withCtx(() => [createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")]), _: 1 })]), _: 1 }), createVNode(A)]), _: 1 })];
            }), _: 1 }, T, $));
          else
            return [createVNode(I, { class: "admin-header" }, { default: withCtx(() => [createVNode(C, null, { default: withCtx(() => [createVNode(p, { collapse: false, "default-active": unref(i), "active-text-color": "#409eff", mode: "horizontal", "unique-opened": "", onSelect: s }, { default: withCtx(() => [createVNode(l, { index: "/admin" }, { default: withCtx(() => [createTextVNode(" \u4E3B\u9875 ")]), _: 1 }), createVNode(m, { index: "2" }, { title: withCtx(() => [createTextVNode(" \u6587\u7AE0 ")]), default: withCtx(() => [createVNode(l, { index: "/admin/editor" }, { default: withCtx(() => [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")]), _: 1 }), createVNode(l, { index: "/admin/post-list" }, { default: withCtx(() => [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["default-active"])]), _: 1 })]), _: 1 }), createVNode(N, null, { default: withCtx(() => [createVNode(h, null, { default: withCtx(() => [createVNode(E, { separator: "/" }, { default: withCtx(() => [createVNode(o, { to: { path: "/admin" } }, { default: withCtx(() => [createTextVNode(" \u7BA1\u7406\u7AEF ")]), _: 1 }), createVNode(o, null, { default: withCtx(() => [createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")]), _: 1 })]), _: 1 }), createVNode(A)]), _: 1 })]), _: 1 })];
        }), _: 1 }, J, K));
      else
        return [createVNode(z, null, { default: withCtx(() => [createVNode(I, { class: "admin-header" }, { default: withCtx(() => [createVNode(C, null, { default: withCtx(() => [createVNode(p, { collapse: false, "default-active": unref(i), "active-text-color": "#409eff", mode: "horizontal", "unique-opened": "", onSelect: s }, { default: withCtx(() => [createVNode(l, { index: "/admin" }, { default: withCtx(() => [createTextVNode(" \u4E3B\u9875 ")]), _: 1 }), createVNode(m, { index: "2" }, { title: withCtx(() => [createTextVNode(" \u6587\u7AE0 ")]), default: withCtx(() => [createVNode(l, { index: "/admin/editor" }, { default: withCtx(() => [createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")]), _: 1 }), createVNode(l, { index: "/admin/post-list" }, { default: withCtx(() => [createTextVNode(" \u6587\u7AE0\u5217\u8868 ")]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["default-active"])]), _: 1 })]), _: 1 }), createVNode(N, null, { default: withCtx(() => [createVNode(h, null, { default: withCtx(() => [createVNode(E, { separator: "/" }, { default: withCtx(() => [createVNode(o, { to: { path: "/admin" } }, { default: withCtx(() => [createTextVNode(" \u7BA1\u7406\u7AEF ")]), _: 1 }), createVNode(o, null, { default: withCtx(() => [createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")]), _: 1 })]), _: 1 }), createVNode(A)]), _: 1 })]), _: 1 })]), _: 1 })];
    }), _: 1 }, D));
  };
} });
const j = w.setup;
w.setup = (H, V) => {
  const i = useSSRContext();
  return (i.modules || (i.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue"), j ? j(H, V) : void 0;
};
const We = Cf(w, [["__scopeId", "data-v-31cf687d"]]);

export { We as default };
//# sourceMappingURL=admin.3a29204d.mjs.map
