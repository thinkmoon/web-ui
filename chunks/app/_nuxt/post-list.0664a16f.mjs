import { v as vue_cjs_prod, c as vueRouter_cjs_prod, A as ArticleApi, f as formatTime } from '../server.mjs';
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
import '@element-plus/icons-vue';
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
  __name: "post-list",
  __ssrInlineRender: true,
  setup(__props) {
    const router = vueRouter_cjs_prod.exports.useRouter();
    const tableData = vue_cjs_prod.ref([]);
    const pagination = vue_cjs_prod.reactive({
      total: 0,
      index: 0,
      size: 10
    });
    loadData();
    function loadData() {
      ArticleApi.getList({
        current: pagination.index,
        size: pagination.size
      }).then((res) => {
        tableData.value = res.records;
        tableData.value.forEach((item) => {
          if (item.fields instanceof Array) {
            const fields = {};
            item.fields.forEach((i) => {
              fields[i.name] = i.value;
            });
            item.fields = fields;
          }
        });
        pagination.index = res.current;
        pagination.total = res.total;
      });
    }
    function handleSizeChange(val) {
      pagination.size = val;
      loadData();
    }
    function handleCurrentChange(val) {
      pagination.index = val;
      loadData();
    }
    function handleEdit(index, row) {
      router.push(`/admin/editor?cid=${row.cid}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table = vue_cjs_prod.resolveComponent("el-table");
      const _component_el_table_column = vue_cjs_prod.resolveComponent("el-table-column");
      const _component_el_image = vue_cjs_prod.resolveComponent("el-image");
      const _component_el_tag = vue_cjs_prod.resolveComponent("el-tag");
      const _component_el_link = vue_cjs_prod.resolveComponent("el-link");
      const _component_el_pagination = vue_cjs_prod.resolveComponent("el-pagination");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_table, {
        data: tableData.value,
        height: "960",
        stripe: ""
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              prop: "cid",
              label: "\u5E8F\u53F7",
              width: "80",
              align: "center"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              label: "\u7F29\u7565\u56FE",
              prop: "title",
              width: "100"
            }, {
              default: vue_cjs_prod.withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_image, {
                    src: scope.row.fields.thumb,
                    fit: "cover",
                    style: { "width": "180px", "height": "60px" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_el_image, {
                      src: scope.row.fields.thumb,
                      fit: "cover",
                      style: { "width": "180px", "height": "60px" }
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              label: "\u6807\u7B7E",
              prop: "title",
              width: "160"
            }, {
              default: vue_cjs_prod.withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  serverRenderer.exports.ssrRenderList(scope.row.tag, (item) => {
                    _push3(serverRenderer.exports.ssrRenderComponent(_component_el_tag, {
                      key: item.tid,
                      class: "margin-xs"
                    }, {
                      default: vue_cjs_prod.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer.exports.ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(scope.row.tag, (item) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_el_tag, {
                        key: item.tid,
                        class: "margin-xs"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              prop: "title",
              label: "\u6807\u9898",
              width: "320"
            }, {
              default: vue_cjs_prod.withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_el_link, {
                    onClick: ($event) => handleEdit(scope.$index, scope.row)
                  }, {
                    default: vue_cjs_prod.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<strong${_scopeId3}>${serverRenderer.exports.ssrInterpolate(scope.row.title)}</strong>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("strong", null, vue_cjs_prod.toDisplayString(scope.row.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_el_link, {
                      onClick: ($event) => handleEdit(scope.$index, scope.row)
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("strong", null, vue_cjs_prod.toDisplayString(scope.row.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              prop: "desc",
              label: "\u6458\u8981",
              width: "600"
            }, {
              default: vue_cjs_prod.withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.exports.ssrInterpolate(scope.row.fields.desc)}`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(scope.row.fields.desc), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              prop: "created",
              label: "\u521B\u5EFA\u65F6\u95F4",
              width: "110"
            }, {
              default: vue_cjs_prod.withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(formatTime)(scope.row.created * 1e3, "YYYY/MM/DD HH:mm:ss"))}</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(formatTime)(scope.row.created * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_table_column, {
              prop: "modified",
              label: "\u66F4\u65B0\u65F6\u95F4",
              width: "110"
            }, {
              default: vue_cjs_prod.withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(formatTime)(scope.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss"))}</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(formatTime)(scope.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_el_table_column, {
                prop: "cid",
                label: "\u5E8F\u53F7",
                width: "80",
                align: "center"
              }),
              vue_cjs_prod.createVNode(_component_el_table_column, {
                label: "\u7F29\u7565\u56FE",
                prop: "title",
                width: "100"
              }, {
                default: vue_cjs_prod.withCtx((scope) => [
                  vue_cjs_prod.createVNode(_component_el_image, {
                    src: scope.row.fields.thumb,
                    fit: "cover",
                    style: { "width": "180px", "height": "60px" }
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_table_column, {
                label: "\u6807\u7B7E",
                prop: "title",
                width: "160"
              }, {
                default: vue_cjs_prod.withCtx((scope) => [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(scope.row.tag, (item) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_el_tag, {
                      key: item.tid,
                      class: "margin-xs"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_table_column, {
                prop: "title",
                label: "\u6807\u9898",
                width: "320"
              }, {
                default: vue_cjs_prod.withCtx((scope) => [
                  vue_cjs_prod.createVNode(_component_el_link, {
                    onClick: ($event) => handleEdit(scope.$index, scope.row)
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("strong", null, vue_cjs_prod.toDisplayString(scope.row.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_table_column, {
                prop: "desc",
                label: "\u6458\u8981",
                width: "600"
              }, {
                default: vue_cjs_prod.withCtx((scope) => [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(scope.row.fields.desc), 1)
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_table_column, {
                prop: "created",
                label: "\u521B\u5EFA\u65F6\u95F4",
                width: "110"
              }, {
                default: vue_cjs_prod.withCtx((scope) => [
                  vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(formatTime)(scope.row.created * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_el_table_column, {
                prop: "modified",
                label: "\u66F4\u65B0\u65F6\u95F4",
                width: "110"
              }, {
                default: vue_cjs_prod.withCtx((scope) => [
                  vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(formatTime)(scope.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_pagination, {
        currentPage: pagination.index,
        "onUpdate:currentPage": ($event) => pagination.index = $event,
        "page-sizes": [10, 20, 30, 40],
        "page-size": pagination.size,
        layout: "total, sizes, prev, pager, next, jumper",
        total: pagination.total,
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/post-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=post-list.0664a16f.mjs.map
