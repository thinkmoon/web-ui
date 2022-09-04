import { b as _export_sfc$1, u as useRuntimeConfig, T as TagApi } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode } from 'vue';
import { u as useAsyncData } from './asyncData.7e2dfb79.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("tag", () => TagApi.getTag(), "$qM7mDDnpFG")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = resolveComponent("Title");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_link = resolveComponent("el-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))} data-v-9617272d>`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6807\u7B7E | ${ssrInterpolate(unref(config).TITLE)}`);
          } else {
            return [
              createTextVNode("\u6807\u7B7E | " + toDisplayString(unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(data), (tag) => {
        _push(ssrRenderComponent(_component_el_tag, {
          key: tag.tid,
          type: "info",
          class: "tag-list"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_link, {
                href: `/tag/${tag.name}/1`,
                type: "info"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tag.name)}(${ssrInterpolate(tag.count)}) `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tag.name) + "(" + toDisplayString(tag.count) + ") ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_link, {
                  href: `/tag/${tag.name}/1`,
                  type: "info"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tag.name) + "(" + toDisplayString(tag.count) + ") ", 1)
                  ]),
                  _: 2
                }, 1032, ["href"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tag/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-9617272d"]]);

export { index as default };
//# sourceMappingURL=index.3f0a5fa3.mjs.map
