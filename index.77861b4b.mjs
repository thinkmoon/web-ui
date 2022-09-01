import { v as vue_cjs_prod, c as _export_sfc, u as useRuntimeConfig, h as __nuxt_component_2 } from '../server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_el_link = vue_cjs_prod.resolveComponent("el-link");
      const _component_el_button = vue_cjs_prod.resolveComponent("el-button");
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(config).TITLE)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="app-container" data-v-ed12b214><div class="shadow center-read" data-v-ed12b214><div class="title" data-v-ed12b214>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(config).TITLE)}</div><div class="read" data-v-ed12b214>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_link, {
        href: "/page/1",
        underline: false
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_button, { size: "large" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5F00\u59CB\u9605\u8BFB `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" \u5F00\u59CB\u9605\u8BFB ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_el_button, { size: "large" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode(" \u5F00\u59CB\u9605\u8BFB ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed12b214"]]);

export { index as default };
//# sourceMappingURL=index.77861b4b.mjs.map
