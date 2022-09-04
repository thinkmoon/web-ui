import { b as _export_sfc$1, _ as __nuxt_component_1 } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const defaultActive = route.path;
    function select(url) {
      location.href = url;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = resolveComponent("el-container");
      const _component_el_header = resolveComponent("el-header");
      const _component_ClientOnly = __nuxt_component_1;
      const _component_el_menu = resolveComponent("el-menu");
      const _component_el_menu_item = resolveComponent("el-menu-item");
      const _component_el_sub_menu = resolveComponent("el-sub-menu");
      const _component_el_scrollbar = resolveComponent("el-scrollbar");
      const _component_el_main = resolveComponent("el-main");
      const _component_el_breadcrumb = resolveComponent("el-breadcrumb");
      const _component_el_breadcrumb_item = resolveComponent("el-breadcrumb-item");
      const _component_NuxtChild = resolveComponent("NuxtChild");
      _push(ssrRenderComponent(_component_el_container, mergeProps({ class: "app-container" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_header, { class: "admin-header" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu, {
                                collapse: false,
                                "default-active": unref(defaultActive),
                                "active-text-color": "#409eff",
                                mode: "horizontal",
                                "unique-opened": "",
                                onSelect: select
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_menu_item, { index: "/admin" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u4E3B\u9875 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u4E3B\u9875 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_sub_menu, { index: "2" }, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u6587\u7AE0 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u6587\u7AE0 ")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "/admin/editor" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \u65B0\u589E\u6587\u7AE0 `);
                                              } else {
                                                return [
                                                  createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "/admin/post-list" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \u6587\u7AE0\u5217\u8868 `);
                                              } else {
                                                return [
                                                  createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_menu_item, { index: "/admin" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u4E3B\u9875 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_sub_menu, { index: "2" }, {
                                        title: withCtx(() => [
                                          createTextVNode(" \u6587\u7AE0 ")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu, {
                                  collapse: false,
                                  "default-active": unref(defaultActive),
                                  "active-text-color": "#409eff",
                                  mode: "horizontal",
                                  "unique-opened": "",
                                  onSelect: select
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "/admin" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u4E3B\u9875 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_sub_menu, { index: "2" }, {
                                      title: withCtx(() => [
                                        createTextVNode(" \u6587\u7AE0 ")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["default-active"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_menu, {
                                collapse: false,
                                "default-active": unref(defaultActive),
                                "active-text-color": "#409eff",
                                mode: "horizontal",
                                "unique-opened": "",
                                onSelect: select
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "/admin" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u4E3B\u9875 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_sub_menu, { index: "2" }, {
                                    title: withCtx(() => [
                                      createTextVNode(" \u6587\u7AE0 ")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["default-active"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_scrollbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_main, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_breadcrumb, { separator: "/" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u7BA1\u7406\u7AEF `);
                                        } else {
                                          return [
                                            createTextVNode(" \u7BA1\u7406\u7AEF ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_breadcrumb_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a href="/admin/post" data-v-31cf687d${_scopeId6}>\u6587\u7AE0</a>`);
                                        } else {
                                          return [
                                            createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u7BA1\u7406\u7AEF ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_breadcrumb_item, null, {
                                        default: withCtx(() => [
                                          createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_NuxtChild, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_breadcrumb, { separator: "/" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u7BA1\u7406\u7AEF ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_breadcrumb_item, null, {
                                      default: withCtx(() => [
                                        createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtChild)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_main, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_breadcrumb, { separator: "/" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7BA1\u7406\u7AEF ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_breadcrumb_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NuxtChild)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_header, { class: "admin-header" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_menu, {
                              collapse: false,
                              "default-active": unref(defaultActive),
                              "active-text-color": "#409eff",
                              mode: "horizontal",
                              "unique-opened": "",
                              onSelect: select
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_menu_item, { index: "/admin" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u4E3B\u9875 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "2" }, {
                                  title: withCtx(() => [
                                    createTextVNode(" \u6587\u7AE0 ")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["default-active"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_scrollbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_main, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_breadcrumb, { separator: "/" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u7BA1\u7406\u7AEF ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_breadcrumb_item, null, {
                                  default: withCtx(() => [
                                    createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NuxtChild)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_container, null, {
                default: withCtx(() => [
                  createVNode(_component_el_header, { class: "admin-header" }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_menu, {
                            collapse: false,
                            "default-active": unref(defaultActive),
                            "active-text-color": "#409eff",
                            mode: "horizontal",
                            "unique-opened": "",
                            onSelect: select
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/admin" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u4E3B\u9875 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "2" }, {
                                title: withCtx(() => [
                                  createTextVNode(" \u6587\u7AE0 ")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["default-active"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_scrollbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_main, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_breadcrumb, { separator: "/" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u7BA1\u7406\u7AEF ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_breadcrumb_item, null, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtChild)
                        ]),
                        _: 1
                      })
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-31cf687d"]]);

export { admin as default };
//# sourceMappingURL=admin.5f6777c8.mjs.map
