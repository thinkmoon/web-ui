import { v as vue_cjs_prod, b as _export_sfc$1, u as useRuntimeConfig, C as CategoryApi } from '../server.mjs';
import { u as useAsyncData } from './asyncData.0d50ce9e.mjs';
import { s as serverRenderer } from '../../handlers/renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import 'axios';
import 'qiniu-js';
import 'dayjs';
import '@element-plus/icons-vue';
import 'lodash-unified';
import '@vueuse/core';
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
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';

const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("category", () => CategoryApi.getCategory(), "$6No3WsCJtH")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_el_tag = vue_cjs_prod.resolveComponent("el-tag");
      const _component_el_link = vue_cjs_prod.resolveComponent("el-link");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "page-content" }, _attrs))} data-v-38bcea0b>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6240\u6709\u5206\u7C7B | ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(config).TITLE)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("\u6240\u6709\u5206\u7C7B | " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(data), (category) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_el_tag, {
          key: category.mid,
          type: "info",
          class: "category-list"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_el_link, {
                href: `/category/${category.name}/1`,
                type: "info"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.exports.ssrInterpolate(category.name)}(${serverRenderer.exports.ssrInterpolate(category.count)}) `);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(category.name) + "(" + vue_cjs_prod.toDisplayString(category.count) + ") ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_el_link, {
                  href: `/category/${category.name}/1`,
                  type: "info"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(category.name) + "(" + vue_cjs_prod.toDisplayString(category.count) + ") ", 1)
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
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-38bcea0b"]]);

export { index as default };
//# sourceMappingURL=index.5e3cdadf.mjs.map
