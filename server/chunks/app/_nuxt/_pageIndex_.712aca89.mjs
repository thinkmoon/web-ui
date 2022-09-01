import { v as vue_cjs_prod, u as useRuntimeConfig, d as vueRouter_cjs_prod, e as useAsyncData, C as CategoryApi, A as ArticleApi, g as __nuxt_component_0$1 } from '../server.mjs';
import { s as serverRenderer } from '../../handlers/renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'destr';
import 'cookie-es';
import 'h3';
import 'ohash';
import 'dayjs';
import 'axios';
import 'ohmyfetch';
import 'ufo';
import 'defu';
import 'unctx';
import 'qiniu-js';
import 'element-plus';
import '@element-plus/icons-vue';
import '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/theme/github.js';
import 'highlight.js';
import '@kangc/v-md-editor/lib/preview.js';
import 'markdown-it-external-links';
import 'hookable';
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
import 'stream';

const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "[pageIndex]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = vueRouter_cjs_prod.exports.useRoute();
    const pageData = {
      total: 0,
      current: 0
    };
    pageData.current = Number(route.params.pageIndex);
    const [{ data: category }, { data: post }] = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => Promise.all([
      useAsyncData("category", () => CategoryApi.getCategory({ name: route.params.name }), "$EkkhNl6e4o"),
      useAsyncData("post", () => ArticleApi.getList({ ...pageData, category: route.params.name }), "$sWFld4Glrr")
    ])), __temp = await __temp, __restore(), __temp);
    const postList = vue_cjs_prod.reactive(post.value.records);
    postList.forEach((item) => {
      if (item.fields instanceof Array) {
        const fields = {};
        item.fields.forEach((i) => {
          fields[i.name] = i.value;
        });
        item.fields = fields;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_PostList = __nuxt_component_0$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5206\u7C7B&quot;${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(category)[0].name)}&quot;\u4E0B\u7684\u6587\u7AE0 | ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(config).TITLE)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode('\u5206\u7C7B"' + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(category)[0].name) + '"\u4E0B\u7684\u6587\u7AE0 | ' + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_PostList, { "post-list": postList }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[name]/[pageIndex].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_pageIndex_.712aca89.mjs.map
