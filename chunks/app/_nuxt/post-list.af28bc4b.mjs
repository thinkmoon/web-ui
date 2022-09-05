import { defineComponent, ref, reactive, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { A as cy, l as Ra, f as oO } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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

const N = defineComponent({ __name: "post-list", __ssrInlineRender: true, setup(A) {
  const $ = useRouter(), g = ref([]), a = reactive({ total: 0, index: 0, size: 10 });
  D();
  function D() {
    cy.getList({ current: a.index, size: a.size }).then((s) => {
      g.value = s.records, g.value.forEach((d) => {
        if (d.fields instanceof Array) {
          const Y = {};
          d.fields.forEach((C) => {
            Y[C.name] = C.value;
          }), d.fields = Y;
        }
      }), a.index = s.current, a.total = s.total;
    });
  }
  function V(s) {
    a.size = s, D();
  }
  function j(s) {
    a.index = s, D();
  }
  function k(s, d) {
    $.push(`/admin/editor?cid=${d.cid}`);
  }
  return (s, d, Y, C) => {
    const U = Ra.ElTable, l = Ra.ElTableColumn, H = Ra.ElImage, M = Ra.ElTag, z = Ra.ElLink, q = Ra.ElPagination;
    d(`<div${ssrRenderAttrs(C)}>`), d(ssrRenderComponent(U, { data: g.value, height: "960", stripe: "" }, { default: withCtx((T, p, c, w) => {
      if (p)
        p(ssrRenderComponent(l, { prop: "cid", label: "\u5E8F\u53F7", width: "80", align: "center" }, null, c, w)), p(ssrRenderComponent(l, { label: "\u7F29\u7565\u56FE", prop: "title", width: "100" }, { default: withCtx((e, t, f, u) => {
          if (t)
            t(ssrRenderComponent(H, { src: e.row.fields.thumb, fit: "cover", style: { width: "180px", height: "60px" } }, null, f, u));
          else
            return [createVNode(H, { src: e.row.fields.thumb, fit: "cover", style: { width: "180px", height: "60px" } }, null, 8, ["src"])];
        }), _: 1 }, c, w)), p(ssrRenderComponent(l, { label: "\u6807\u7B7E", prop: "title", width: "160" }, { default: withCtx((e, t, f, u) => {
          if (t)
            t("<!--[-->"), ssrRenderList(e.row.tag, (m) => {
              t(ssrRenderComponent(M, { key: m.tid, class: "margin-xs" }, { default: withCtx((y, B, R, I) => {
                if (B)
                  B(`${ssrInterpolate(m.name)}`);
                else
                  return [createTextVNode(toDisplayString(m.name), 1)];
              }), _: 2 }, f, u));
            }), t("<!--]-->");
          else
            return [(openBlock(true), createBlock(Fragment, null, renderList(e.row.tag, (m) => (openBlock(), createBlock(M, { key: m.tid, class: "margin-xs" }, { default: withCtx(() => [createTextVNode(toDisplayString(m.name), 1)]), _: 2 }, 1024))), 128))];
        }), _: 1 }, c, w)), p(ssrRenderComponent(l, { prop: "title", label: "\u6807\u9898", width: "320" }, { default: withCtx((e, t, f, u) => {
          if (t)
            t(ssrRenderComponent(z, { onClick: (m) => k(e.$index, e.row) }, { default: withCtx((m, y, B, R) => {
              if (y)
                y(`<strong${R}>${ssrInterpolate(e.row.title)}</strong>`);
              else
                return [createVNode("strong", null, toDisplayString(e.row.title), 1)];
            }), _: 2 }, f, u));
          else
            return [createVNode(z, { onClick: (m) => k(e.$index, e.row) }, { default: withCtx(() => [createVNode("strong", null, toDisplayString(e.row.title), 1)]), _: 2 }, 1032, ["onClick"])];
        }), _: 1 }, c, w)), p(ssrRenderComponent(l, { prop: "desc", label: "\u6458\u8981", width: "600" }, { default: withCtx((e, t, f, u) => {
          if (t)
            t(`${ssrInterpolate(e.row.fields.desc)}`);
          else
            return [createTextVNode(toDisplayString(e.row.fields.desc), 1)];
        }), _: 1 }, c, w)), p(ssrRenderComponent(l, { prop: "created", label: "\u521B\u5EFA\u65F6\u95F4", width: "110" }, { default: withCtx((e, t, f, u) => {
          if (t)
            t(`<span${u}>${ssrInterpolate(unref(oO)(e.row.created * 1e3, "YYYY/MM/DD HH:mm:ss"))}</span>`);
          else
            return [createVNode("span", null, toDisplayString(unref(oO)(e.row.created * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)];
        }), _: 1 }, c, w)), p(ssrRenderComponent(l, { prop: "modified", label: "\u66F4\u65B0\u65F6\u95F4", width: "110" }, { default: withCtx((e, t, f, u) => {
          if (t)
            t(`<span${u}>${ssrInterpolate(unref(oO)(e.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss"))}</span>`);
          else
            return [createVNode("span", null, toDisplayString(unref(oO)(e.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)];
        }), _: 1 }, c, w));
      else
        return [createVNode(l, { prop: "cid", label: "\u5E8F\u53F7", width: "80", align: "center" }), createVNode(l, { label: "\u7F29\u7565\u56FE", prop: "title", width: "100" }, { default: withCtx((e) => [createVNode(H, { src: e.row.fields.thumb, fit: "cover", style: { width: "180px", height: "60px" } }, null, 8, ["src"])]), _: 1 }), createVNode(l, { label: "\u6807\u7B7E", prop: "title", width: "160" }, { default: withCtx((e) => [(openBlock(true), createBlock(Fragment, null, renderList(e.row.tag, (t) => (openBlock(), createBlock(M, { key: t.tid, class: "margin-xs" }, { default: withCtx(() => [createTextVNode(toDisplayString(t.name), 1)]), _: 2 }, 1024))), 128))]), _: 1 }), createVNode(l, { prop: "title", label: "\u6807\u9898", width: "320" }, { default: withCtx((e) => [createVNode(z, { onClick: (t) => k(e.$index, e.row) }, { default: withCtx(() => [createVNode("strong", null, toDisplayString(e.row.title), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }), createVNode(l, { prop: "desc", label: "\u6458\u8981", width: "600" }, { default: withCtx((e) => [createTextVNode(toDisplayString(e.row.fields.desc), 1)]), _: 1 }), createVNode(l, { prop: "created", label: "\u521B\u5EFA\u65F6\u95F4", width: "110" }, { default: withCtx((e) => [createVNode("span", null, toDisplayString(unref(oO)(e.row.created * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)]), _: 1 }), createVNode(l, { prop: "modified", label: "\u66F4\u65B0\u65F6\u95F4", width: "110" }, { default: withCtx((e) => [createVNode("span", null, toDisplayString(unref(oO)(e.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)]), _: 1 })];
    }), _: 1 }, Y)), d(ssrRenderComponent(q, { currentPage: a.index, "onUpdate:currentPage": (T) => a.index = T, "page-sizes": [10, 20, 30, 40], "page-size": a.size, layout: "total, sizes, prev, pager, next, jumper", total: a.total, onSizeChange: V, onCurrentChange: j }, null, Y)), d("</div>");
  };
} }), P = N.setup;
N.setup = (A, $) => {
  const g = useSSRContext();
  return (g.modules || (g.modules = /* @__PURE__ */ new Set())).add("pages/admin/post-list.vue"), P ? P(A, $) : void 0;
};

export { N as default };
//# sourceMappingURL=post-list.af28bc4b.mjs.map
