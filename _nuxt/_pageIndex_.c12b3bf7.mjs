import { b as _export_sfc$1, u as useRuntimeConfig, A as ArticleApi, c as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, reactive, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString } from 'vue';
import { useRoute } from 'vue-router';
import { u as useAsyncData } from './asyncData.7e2dfb79.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as pushUrl } from './BaiduSite.6f90474b.mjs';
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
    const pageIndex = route.params.pageIndex;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("res", () => ArticleApi.getList({ current: pageIndex }), "$66Eht5WzLu")), __temp = await __temp, __restore(), __temp);
    const postList = reactive(data.value.records);
    postList.forEach((item) => {
      if (item.fields instanceof Array) {
        const fields = {};
        item.fields.forEach((i) => {
          fields[i.name] = i.value;
        });
        item.fields = fields;
      }
    });
    data.value.total;
    pushUrl(`/page/${route.params.pageIndex}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = resolveComponent("Title");
      const _component_PostList = __nuxt_component_0$1;
      const _component_el_link = resolveComponent("el-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))} data-v-631eddd1>`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u7B2C${ssrInterpolate(unref(route).params.pageIndex)}\u9875 | ${ssrInterpolate(unref(config).TITLE)}`);
          } else {
            return [
              createTextVNode("\u7B2C" + toDisplayString(unref(route).params.pageIndex) + "\u9875 | " + toDisplayString(unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="post-container" data-v-631eddd1>`);
      _push(ssrRenderComponent(_component_PostList, { "post-list": postList }, null, _parent));
      _push(`<div class="pagination-div" data-v-631eddd1><div data-v-631eddd1>`);
      if (Number(unref(pageIndex)) !== 1) {
        _push(ssrRenderComponent(_component_el_link, {
          href: `/page/${Number(unref(pageIndex)) - 1}`,
          type: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4E0A\u4E00\u9875 `);
            } else {
              return [
                createTextVNode(" \u4E0A\u4E00\u9875 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-631eddd1>`);
      if (Number(unref(pageIndex)) !== unref(data).pages) {
        _push(ssrRenderComponent(_component_el_link, {
          href: `/page/${Number(unref(pageIndex)) + 1}`,
          type: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4E0B\u4E00\u9875 `);
            } else {
              return [
                createTextVNode(" \u4E0B\u4E00\u9875 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page/[pageIndex].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _pageIndex_ = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-631eddd1"]]);

export { _pageIndex_ as default };
//# sourceMappingURL=_pageIndex_.c12b3bf7.mjs.map
