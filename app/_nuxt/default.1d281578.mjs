import { v as vue_cjs_prod, b as _export_sfc, c as vueRouter_cjs_prod, j as __nuxt_component_0$2, _ as __nuxt_component_1, g as __nuxt_component_2 } from '../server.mjs';
import { Search } from '@element-plus/icons-vue';
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
import 'element-plus';
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

const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "DefaultMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter_cjs_prod.exports.useRoute();
    const defaultActive = route.path;
    function select(url) {
      location.href = url;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_link = vue_cjs_prod.resolveComponent("el-link");
      const _component_el_menu = vue_cjs_prod.resolveComponent("el-menu");
      const _component_el_menu_item = vue_cjs_prod.resolveComponent("el-menu-item");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_el_icon = vue_cjs_prod.resolveComponent("el-icon");
      const _component_icon_User = vue_cjs_prod.resolveComponent("icon-User");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "top-menu" }, _attrs))} data-v-6b25f595><div class="left" data-v-6b25f595>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_link, { href: "/" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6307\u5C16\u9B54\u6CD5\u5C4B `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" \u6307\u5C16\u9B54\u6CD5\u5C4B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_menu, {
        "default-active": vue_cjs_prod.unref(defaultActive),
        mode: "horizontal",
        onSelect: select
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_menu_item, { index: "/page/1" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9996\u9875 `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" \u9996\u9875 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_menu_item, { index: "/category" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/category" }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5206\u7C7B `);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode(" \u5206\u7C7B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_NuxtLink, { to: "/category" }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(" \u5206\u7C7B ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_menu_item, { index: "/tag" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/tag" }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6807\u7B7E `);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode(" \u6807\u7B7E ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_NuxtLink, { to: "/tag" }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(" \u6807\u7B7E ")
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
              vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/page/1" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode(" \u9996\u9875 ")
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/category" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_NuxtLink, { to: "/category" }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(" \u5206\u7C7B ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/tag" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_NuxtLink, { to: "/tag" }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(" \u6807\u7B7E ")
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
      _push(`<div class="right" data-v-6b25f595>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_link, {
        underline: false,
        href: "/admin"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_icon, {
              size: 26,
              class: "pointer"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_icon_User, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_icon_User)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_el_icon, {
                size: 26,
                class: "pointer"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_icon_User)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DefaultMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6b25f595"]]);
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const keywords = vue_cjs_prod.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = vue_cjs_prod.resolveComponent("el-input");
      const _component_el_button = vue_cjs_prod.resolveComponent("el-button");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "section" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_input, {
        modelValue: keywords.value,
        "onUpdate:modelValue": ($event) => keywords.value = $event,
        class: "input-with-select",
        placeholder: "\u7AD9\u5185\u641C\u7D22"
      }, {
        append: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_button, { icon: vue_cjs_prod.unref(Search) }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_el_button, { icon: vue_cjs_prod.unref(Search) }, null, 8, ["icon"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Search.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "section" }, _attrs))}><ins class="adsbygoogle" data-ad-client="ca-pub-3208634444966567" data-ad-format="auto" data-ad-slot="2184618903" data-full-width-responsive="true" style="${serverRenderer.exports.ssrRenderStyle({ "display": "block" })}"></ins></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/GoogleAd.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GoogleAd = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultMenu = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_el_backtop = vue_cjs_prod.resolveComponent("el-backtop");
      const _component_Footer = __nuxt_component_2;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-934978de><div data-v-934978de>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DefaultMenu, null, null, _parent));
      _push(`<div class="app-container" data-v-934978de><div class="layout" data-v-934978de><div class="main-content" data-v-934978de>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="page-section" data-v-934978de>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(GoogleAd, null, null, _parent));
      _push(`</div></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_backtop, { bottom: 100 }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_el_backtop, { bottom: 100 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-934978de"]]);

export { _default as default };
//# sourceMappingURL=default.1d281578.mjs.map
