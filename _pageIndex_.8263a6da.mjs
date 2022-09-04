import { u as useRuntimeConfig, C as CategoryApi, A as ArticleApi, c as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, withAsyncContext, reactive, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { u as useAsyncData } from './asyncData.7e2dfb79.mjs';
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
import 'cookie-es';
import 'ohash';
import '@element-plus/icons-vue';
import 'lodash-unified';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[pageIndex]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const pageData = {
      total: 0,
      current: 0
    };
    pageData.current = Number(route.params.pageIndex);
    const [{ data: category }, { data: post }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useAsyncData("category", () => CategoryApi.getCategory({ name: route.params.name }), "$EkkhNl6e4o"),
      useAsyncData("post", () => ArticleApi.getList({ ...pageData, category: route.params.name }), "$sWFld4Glrr")
    ])), __temp = await __temp, __restore(), __temp);
    const postList = reactive(post.value.records);
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
      const _component_Title = resolveComponent("Title");
      const _component_PostList = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5206\u7C7B&quot;${ssrInterpolate(unref(category)[0].name)}&quot;\u4E0B\u7684\u6587\u7AE0 | ${ssrInterpolate(unref(config).TITLE)}`);
          } else {
            return [
              createTextVNode('\u5206\u7C7B"' + toDisplayString(unref(category)[0].name) + '"\u4E0B\u7684\u6587\u7AE0 | ' + toDisplayString(unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PostList, { "post-list": postList }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[name]/[pageIndex].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_pageIndex_.8263a6da.mjs.map
