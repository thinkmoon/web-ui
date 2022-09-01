import { v as vue_cjs_prod, c as _export_sfc, d as vueRouter_cjs_prod, b as __nuxt_component_1 } from '../server.mjs';
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
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter_cjs_prod.exports.useRoute();
    const defaultActive = route.path;
    function select(url) {
      location.href = url;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = vue_cjs_prod.resolveComponent("el-container");
      const _component_el_header = vue_cjs_prod.resolveComponent("el-header");
      const _component_ClientOnly = __nuxt_component_1;
      const _component_el_menu = vue_cjs_prod.resolveComponent("el-menu");
      const _component_el_menu_item = vue_cjs_prod.resolveComponent("el-menu-item");
      const _component_el_sub_menu = vue_cjs_prod.resolveComponent("el-sub-menu");
      const _component_el_scrollbar = vue_cjs_prod.resolveComponent("el-scrollbar");
      const _component_el_main = vue_cjs_prod.resolveComponent("el-main");
      const _component_el_breadcrumb = vue_cjs_prod.resolveComponent("el-breadcrumb");
      const _component_el_breadcrumb_item = vue_cjs_prod.resolveComponent("el-breadcrumb-item");
      const _component_NuxtChild = vue_cjs_prod.resolveComponent("NuxtChild");
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_container, vue_cjs_prod.mergeProps({ class: "app-container" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_container, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_header, { class: "admin-header" }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_el_menu, {
                                collapse: false,
                                "default-active": vue_cjs_prod.unref(defaultActive),
                                "active-text-color": "#409eff",
                                mode: "horizontal",
                                "unique-opened": "",
                                onSelect: select
                              }, {
                                default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(serverRenderer.exports.ssrRenderComponent(_component_el_menu_item, { index: "/admin" }, {
                                      default: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u4E3B\u9875 `);
                                        } else {
                                          return [
                                            vue_cjs_prod.createTextVNode(" \u4E3B\u9875 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(serverRenderer.exports.ssrRenderComponent(_component_el_sub_menu, { index: "2" }, {
                                      title: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u6587\u7AE0 `);
                                        } else {
                                          return [
                                            vue_cjs_prod.createTextVNode(" \u6587\u7AE0 ")
                                          ];
                                        }
                                      }),
                                      default: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(serverRenderer.exports.ssrRenderComponent(_component_el_menu_item, { index: "/admin/editor" }, {
                                            default: vue_cjs_prod.withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \u65B0\u589E\u6587\u7AE0 `);
                                              } else {
                                                return [
                                                  vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(serverRenderer.exports.ssrRenderComponent(_component_el_menu_item, { index: "/admin/post-list" }, {
                                            default: vue_cjs_prod.withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \u6587\u7AE0\u5217\u8868 `);
                                              } else {
                                                return [
                                                  vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                              default: vue_cjs_prod.withCtx(() => [
                                                vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                              ]),
                                              _: 1
                                            }),
                                            vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                              default: vue_cjs_prod.withCtx(() => [
                                                vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                                      vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin" }, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createTextVNode(" \u4E3B\u9875 ")
                                        ]),
                                        _: 1
                                      }),
                                      vue_cjs_prod.createVNode(_component_el_sub_menu, { index: "2" }, {
                                        title: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createTextVNode(" \u6587\u7AE0 ")
                                        ]),
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                            default: vue_cjs_prod.withCtx(() => [
                                              vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                            ]),
                                            _: 1
                                          }),
                                          vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                            default: vue_cjs_prod.withCtx(() => [
                                              vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                                vue_cjs_prod.createVNode(_component_el_menu, {
                                  collapse: false,
                                  "default-active": vue_cjs_prod.unref(defaultActive),
                                  "active-text-color": "#409eff",
                                  mode: "horizontal",
                                  "unique-opened": "",
                                  onSelect: select
                                }, {
                                  default: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createTextVNode(" \u4E3B\u9875 ")
                                      ]),
                                      _: 1
                                    }),
                                    vue_cjs_prod.createVNode(_component_el_sub_menu, { index: "2" }, {
                                      title: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createTextVNode(" \u6587\u7AE0 ")
                                      ]),
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                          default: vue_cjs_prod.withCtx(() => [
                                            vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                          default: vue_cjs_prod.withCtx(() => [
                                            vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                          vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode(_component_el_menu, {
                                collapse: false,
                                "default-active": vue_cjs_prod.unref(defaultActive),
                                "active-text-color": "#409eff",
                                mode: "horizontal",
                                "unique-opened": "",
                                onSelect: select
                              }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin" }, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createTextVNode(" \u4E3B\u9875 ")
                                    ]),
                                    _: 1
                                  }),
                                  vue_cjs_prod.createVNode(_component_el_sub_menu, { index: "2" }, {
                                    title: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createTextVNode(" \u6587\u7AE0 ")
                                    ]),
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                        ]),
                                        _: 1
                                      }),
                                      vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_scrollbar, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_el_main, null, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_el_breadcrumb, { separator: "/" }, {
                                default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(serverRenderer.exports.ssrRenderComponent(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                      default: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u7BA1\u7406\u7AEF `);
                                        } else {
                                          return [
                                            vue_cjs_prod.createTextVNode(" \u7BA1\u7406\u7AEF ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(serverRenderer.exports.ssrRenderComponent(_component_el_breadcrumb_item, null, {
                                      default: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a href="/admin/post" data-v-31cf687d${_scopeId6}>\u6587\u7AE0</a>`);
                                        } else {
                                          return [
                                            vue_cjs_prod.createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      vue_cjs_prod.createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createTextVNode(" \u7BA1\u7406\u7AEF ")
                                        ]),
                                        _: 1
                                      }),
                                      vue_cjs_prod.createVNode(_component_el_breadcrumb_item, null, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_NuxtChild, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vue_cjs_prod.createVNode(_component_el_breadcrumb, { separator: "/" }, {
                                  default: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createTextVNode(" \u7BA1\u7406\u7AEF ")
                                      ]),
                                      _: 1
                                    }),
                                    vue_cjs_prod.createVNode(_component_el_breadcrumb_item, null, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vue_cjs_prod.createVNode(_component_NuxtChild)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(_component_el_main, null, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode(_component_el_breadcrumb, { separator: "/" }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createTextVNode(" \u7BA1\u7406\u7AEF ")
                                    ]),
                                    _: 1
                                  }),
                                  vue_cjs_prod.createVNode(_component_el_breadcrumb_item, null, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              vue_cjs_prod.createVNode(_component_NuxtChild)
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
                    vue_cjs_prod.createVNode(_component_el_header, { class: "admin-header" }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(_component_el_menu, {
                              collapse: false,
                              "default-active": vue_cjs_prod.unref(defaultActive),
                              "active-text-color": "#409eff",
                              mode: "horizontal",
                              "unique-opened": "",
                              onSelect: select
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin" }, {
                                  default: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createTextVNode(" \u4E3B\u9875 ")
                                  ]),
                                  _: 1
                                }),
                                vue_cjs_prod.createVNode(_component_el_sub_menu, { index: "2" }, {
                                  title: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createTextVNode(" \u6587\u7AE0 ")
                                  ]),
                                  default: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                      ]),
                                      _: 1
                                    }),
                                    vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                    vue_cjs_prod.createVNode(_component_el_scrollbar, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_el_main, null, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(_component_el_breadcrumb, { separator: "/" }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                  default: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createTextVNode(" \u7BA1\u7406\u7AEF ")
                                  ]),
                                  _: 1
                                }),
                                vue_cjs_prod.createVNode(_component_el_breadcrumb_item, null, {
                                  default: vue_cjs_prod.withCtx(() => [
                                    vue_cjs_prod.createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode(_component_NuxtChild)
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
              vue_cjs_prod.createVNode(_component_el_container, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_el_header, { class: "admin-header" }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_el_menu, {
                            collapse: false,
                            "default-active": vue_cjs_prod.unref(defaultActive),
                            "active-text-color": "#409eff",
                            mode: "horizontal",
                            "unique-opened": "",
                            onSelect: select
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin" }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createTextVNode(" \u4E3B\u9875 ")
                                ]),
                                _: 1
                              }),
                              vue_cjs_prod.createVNode(_component_el_sub_menu, { index: "2" }, {
                                title: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createTextVNode(" \u6587\u7AE0 ")
                                ]),
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/editor" }, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createTextVNode(" \u65B0\u589E\u6587\u7AE0 ")
                                    ]),
                                    _: 1
                                  }),
                                  vue_cjs_prod.createVNode(_component_el_menu_item, { index: "/admin/post-list" }, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createTextVNode(" \u6587\u7AE0\u5217\u8868 ")
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
                  vue_cjs_prod.createVNode(_component_el_scrollbar, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_el_main, null, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_el_breadcrumb, { separator: "/" }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode(_component_el_breadcrumb_item, { to: { path: "/admin" } }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createTextVNode(" \u7BA1\u7406\u7AEF ")
                                ]),
                                _: 1
                              }),
                              vue_cjs_prod.createVNode(_component_el_breadcrumb_item, null, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode("a", { href: "/admin/post" }, "\u6587\u7AE0")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          vue_cjs_prod.createVNode(_component_NuxtChild)
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
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31cf687d"]]);

export { admin as default };
//# sourceMappingURL=admin.ffd1247a.mjs.map
