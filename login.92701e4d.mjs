import { v as vue_cjs_prod, c as _export_sfc, u as useRuntimeConfig, i as useCookie, U as UserApi } from '../server.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const auth = useCookie("auth", { domain: "thinkmoon.cn", maxAge: 3600 });
    const form = vue_cjs_prod.reactive({
      account: "",
      password: ""
    });
    function onSubmit() {
      UserApi.login(form).then((res) => {
        auth.value = res;
      }).catch(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_el_form = vue_cjs_prod.resolveComponent("el-form");
      const _component_el_form_item = vue_cjs_prod.resolveComponent("el-form-item");
      const _component_el_input = vue_cjs_prod.resolveComponent("el-input");
      const _component_el_button = vue_cjs_prod.resolveComponent("el-button");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "app-container" }, _attrs))} data-v-cda3f1fb>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u767B\u5F55 | ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(config).TITLE)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("\u767B\u5F55 | " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="login-dialog" data-v-cda3f1fb>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_form, { model: form }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_form_item, { label: "\u8D26\u53F7" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_input, {
                    modelValue: form.account,
                    "onUpdate:modelValue": ($event) => form.account = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_el_input, {
                      modelValue: form.account,
                      "onUpdate:modelValue": ($event) => form.account = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_form_item, { label: "\u5BC6\u7801" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_input, {
                    modelValue: form.password,
                    "onUpdate:modelValue": ($event) => form.password = $event,
                    type: "password",
                    "show-password": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_el_input, {
                      modelValue: form.password,
                      "onUpdate:modelValue": ($event) => form.password = $event,
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_form_item, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    onClick: onSubmit
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u767B\u5F55 `);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode(" \u767B\u5F55 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_el_button, {
                      type: "primary",
                      onClick: onSubmit
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(" \u767B\u5F55 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_el_form_item, { label: "\u8D26\u53F7" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_el_input, {
                    modelValue: form.account,
                    "onUpdate:modelValue": ($event) => form.account = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_form_item, { label: "\u5BC6\u7801" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_el_input, {
                    modelValue: form.password,
                    "onUpdate:modelValue": ($event) => form.password = $event,
                    type: "password",
                    "show-password": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_form_item, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_el_button, {
                    type: "primary",
                    onClick: onSubmit
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(" \u767B\u5F55 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cda3f1fb"]]);

export { login as default };
//# sourceMappingURL=login.92701e4d.mjs.map
