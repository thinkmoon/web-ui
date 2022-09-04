import { b as _export_sfc$1, j as __nuxt_component_0$2, _ as __nuxt_component_1, e as __nuxt_component_2 } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { Search } from '@element-plus/icons-vue';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DefaultMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const defaultActive = route.path;
    function select(url) {
      location.href = url;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_link = resolveComponent("el-link");
      const _component_el_menu = resolveComponent("el-menu");
      const _component_el_menu_item = resolveComponent("el-menu-item");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_el_icon = resolveComponent("el-icon");
      const _component_icon_User = resolveComponent("icon-User");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top-menu" }, _attrs))} data-v-6b25f595><div class="left" data-v-6b25f595>`);
      _push(ssrRenderComponent(_component_el_link, { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6307\u5C16\u9B54\u6CD5\u5C4B `);
          } else {
            return [
              createTextVNode(" \u6307\u5C16\u9B54\u6CD5\u5C4B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_menu, {
        "default-active": unref(defaultActive),
        mode: "horizontal",
        onSelect: select
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu_item, { index: "/page/1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9996\u9875 `);
                } else {
                  return [
                    createTextVNode(" \u9996\u9875 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_menu_item, { index: "/category" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/category" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5206\u7C7B `);
                      } else {
                        return [
                          createTextVNode(" \u5206\u7C7B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/category" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5206\u7C7B ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_menu_item, { index: "/tag" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/tag" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6807\u7B7E `);
                      } else {
                        return [
                          createTextVNode(" \u6807\u7B7E ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/tag" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6807\u7B7E ")
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
              createVNode(_component_el_menu_item, { index: "/page/1" }, {
                default: withCtx(() => [
                  createTextVNode(" \u9996\u9875 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_menu_item, { index: "/category" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, { to: "/category" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5206\u7C7B ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_menu_item, { index: "/tag" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, { to: "/tag" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6807\u7B7E ")
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
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        href: "/admin"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, {
              size: 26,
              class: "pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon_User, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_icon_User)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, {
                size: 26,
                class: "pointer"
              }, {
                default: withCtx(() => [
                  createVNode(_component_icon_User)
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DefaultMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-6b25f595"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const keywords = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_button = resolveComponent("el-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: keywords.value,
        "onUpdate:modelValue": ($event) => keywords.value = $event,
        class: "input-with-select",
        placeholder: "\u7AD9\u5185\u641C\u7D22"
      }, {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, { icon: unref(Search) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, { icon: unref(Search) }, null, 8, ["icon"])
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Search.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))}><ins class="adsbygoogle" data-ad-client="ca-pub-3208634444966567" data-ad-format="auto" data-ad-slot="2184618903" data-full-width-responsive="true" style="${ssrRenderStyle({ "display": "block" })}"></ins></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/GoogleAd.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GoogleAd = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultMenu = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_el_backtop = resolveComponent("el-backtop");
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-934978de><div data-v-934978de>`);
      _push(ssrRenderComponent(_component_DefaultMenu, null, null, _parent));
      _push(`<div class="app-container" data-v-934978de><div class="layout" data-v-934978de><div class="main-content" data-v-934978de>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="page-section" data-v-934978de>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(GoogleAd, null, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_backtop, { bottom: 100 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_backtop, { bottom: 100 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-934978de"]]);

export { _default as default };
//# sourceMappingURL=default.f71f773f.mjs.map
