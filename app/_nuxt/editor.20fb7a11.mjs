import { A as cy, T as rO, C as nO, a as tO, l as Ra, _ as Q3 } from '../server.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import * as D$ from 'qiniu-js';
import an from 'dayjs';
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

const I = [{ name: "thumb", value: "" }, { name: "desc", value: "" }], W = defineComponent({ data() {
  return { article: { title: "", text: "", category_id: "", tag: [], selectedTag: [], fields: [] }, categoryList: [], tagList: [] };
}, activated() {
  this.$route.query.cid ? cy.getDetail({ cid: this.$route.query.cid }).then((i) => {
    this.article = { ...this.article, ...i }, this.article.selectedTag = this.article.tag.map((e) => e.tid), this.article.fields.length || (this.article.fields = I);
  }) : (this.data = {}, this.article.fields = I), this.getCategory(), this.getTag();
}, methods: { getTag() {
  rO.getTag().then((i) => {
    this.tagList = i;
  });
}, getCategory() {
  nO.getCategory().then((i) => {
    this.categoryList = i;
  });
}, saveArticle() {
  const i = this.$route.query.cid ? "update" : "add";
  if (!this.article.category_id)
    return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u5206\u7C7B");
  if (!this.article.fields.length)
    return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E");
  cy[i](this.article).then(() => {
    this.$message.success("\u4FDD\u5B58\u6210\u529F"), location.href = "/admin/post-list";
  }).catch((e) => {
    this.$message.error("\u4FDD\u5B58\u5931\u8D25"), console.error(e);
  });
}, handleUploadImage(i, e, a) {
  console.log(arguments), tO.getUploadToken().then((m) => {
    const V = an().format("YYYY-MM-DD/HH-mm-ss");
    D$.upload(a[0], V, m).subscribe(null, null, (A) => {
      e({ url: `https://blog.cdn.thinkmoon.cn/${A.key}` });
    });
  });
} } }), q = defineComponent({ ...W, __name: "editor", __ssrInlineRender: true, setup(i) {
  return (e, a, m, V) => {
    const k = Ra.ElInput, A = resolveComponent("v-md-editor"), E = Q3, h = Ra.ElSelect, p = Ra.ElOption;
    a(`<div${ssrRenderAttrs(mergeProps({ class: "editor-wrapper" }, V))}><div class="flex-1"></div><div class="editor-container">`), a(ssrRenderComponent(k, { modelValue: e.article.title, "onUpdate:modelValue": (c) => e.article.title = c, class: "title-input" }, null, m)), a(ssrRenderComponent(A, { modelValue: e.article.text, "onUpdate:modelValue": (c) => e.article.text = c, mode: "edit", height: "560px", "disabled-menus": [], onSave: e.saveArticle, onUploadImage: e.handleUploadImage }, null, m)), a('<div class="custom-options"><!--[-->'), ssrRenderList(e.article.fields, (c, s) => {
      a(`<!--[--><span>${ssrInterpolate(c.name)}</span>`), a(ssrRenderComponent(k, { modelValue: e.article.fields[s].value, "onUpdate:modelValue": (v) => e.article.fields[s].value = v, type: "textarea", class: "input-with-select", placeholder: "\u8BF7\u8F93\u5165" }, null, m)), a("<!--]-->");
    }), a('<!--]--></div></div><div class="flex-2 right"><section><span class="title">\u6587\u7AE0\u5206\u7C7B</span><div class="content">'), a(ssrRenderComponent(E, null, { default: withCtx((c, s, v, C) => {
      if (s)
        s(ssrRenderComponent(h, { key: "category", modelValue: e.article.category_id, "onUpdate:modelValue": (l) => e.article.category_id = l }, { default: withCtx((l, r, T, U) => {
          if (r)
            r("<!--[-->"), ssrRenderList(e.categoryList, (t) => {
              r(ssrRenderComponent(p, { key: t.mid, label: t.name, value: t.mid }, { default: withCtx((w, y, Y, O) => {
                if (y)
                  y(`${ssrInterpolate(t.name)}`);
                else
                  return [createTextVNode(toDisplayString(t.name), 1)];
              }), _: 2 }, T, U));
            }), r("<!--]-->");
          else
            return [(openBlock(true), createBlock(Fragment, null, renderList(e.categoryList, (t) => (openBlock(), createBlock(p, { key: t.mid, label: t.name, value: t.mid }, { default: withCtx(() => [createTextVNode(toDisplayString(t.name), 1)]), _: 2 }, 1032, ["label", "value"]))), 128))];
        }), _: 1 }, v, C));
      else
        return [createVNode(h, { key: "category", modelValue: e.article.category_id, "onUpdate:modelValue": (l) => e.article.category_id = l }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(e.categoryList, (l) => (openBlock(), createBlock(p, { key: l.mid, label: l.name, value: l.mid }, { default: withCtx(() => [createTextVNode(toDisplayString(l.name), 1)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
    }), _: 1 }, m)), a('</div></section><section><span class="title">\u6587\u7AE0\u6807\u7B7E</span><div class="content">'), a(ssrRenderComponent(E, null, { default: withCtx((c, s, v, C) => {
      if (s)
        s(ssrRenderComponent(h, { key: "category", modelValue: e.article.selectedTag, "onUpdate:modelValue": (l) => e.article.selectedTag = l, filterable: "", multiple: "" }, { default: withCtx((l, r, T, U) => {
          if (r)
            r("<!--[-->"), ssrRenderList(e.tagList, (t) => {
              r(ssrRenderComponent(p, { key: t.tid, label: t.name, value: t.tid }, { default: withCtx((w, y, Y, O) => {
                if (y)
                  y(`${ssrInterpolate(t.name)}`);
                else
                  return [createTextVNode(toDisplayString(t.name), 1)];
              }), _: 2 }, T, U));
            }), r("<!--]-->");
          else
            return [(openBlock(true), createBlock(Fragment, null, renderList(e.tagList, (t) => (openBlock(), createBlock(p, { key: t.tid, label: t.name, value: t.tid }, { default: withCtx(() => [createTextVNode(toDisplayString(t.name), 1)]), _: 2 }, 1032, ["label", "value"]))), 128))];
        }), _: 1 }, v, C));
      else
        return [createVNode(h, { key: "category", modelValue: e.article.selectedTag, "onUpdate:modelValue": (l) => e.article.selectedTag = l, filterable: "", multiple: "" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(e.tagList, (l) => (openBlock(), createBlock(p, { key: l.tid, label: l.name, value: l.tid }, { default: withCtx(() => [createTextVNode(toDisplayString(l.name), 1)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
    }), _: 1 }, m)), a("</div></section></div></div>");
  };
} });
const S = q.setup;
q.setup = (i, e) => {
  const a = useSSRContext();
  return (a.modules || (a.modules = /* @__PURE__ */ new Set())).add("pages/admin/editor.vue"), S ? S(i, e) : void 0;
};

export { q as default };
//# sourceMappingURL=editor.20fb7a11.mjs.map
