import { defineComponent, ref, reactive, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { A as ArticleApi, f as formatTime$1 } from '../server.mjs';
import { useRouter } from 'vue-router';
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
  __name: "post-list",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const tableData = ref([]);
    const pagination = reactive({
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
      const _component_el_table = resolveComponent("el-table");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_image = resolveComponent("el-image");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_link = resolveComponent("el-link");
      const _component_el_pagination = resolveComponent("el-pagination");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_table, {
        data: tableData.value,
        height: "960",
        stripe: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "cid",
              label: "\u5E8F\u53F7",
              width: "80",
              align: "center"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u7F29\u7565\u56FE",
              prop: "title",
              width: "100"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_image, {
                    src: scope.row.fields.thumb,
                    fit: "cover",
                    style: { "width": "180px", "height": "60px" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_image, {
                      src: scope.row.fields.thumb,
                      fit: "cover",
                      style: { "width": "180px", "height": "60px" }
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6807\u7B7E",
              prop: "title",
              width: "160"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(scope.row.tag, (item) => {
                    _push3(ssrRenderComponent(_component_el_tag, {
                      key: item.tid,
                      class: "margin-xs"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(scope.row.tag, (item) => {
                      return openBlock(), createBlock(_component_el_tag, {
                        key: item.tid,
                        class: "margin-xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "title",
              label: "\u6807\u9898",
              width: "320"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_link, {
                    onClick: ($event) => handleEdit(scope.$index, scope.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<strong${_scopeId3}>${ssrInterpolate(scope.row.title)}</strong>`);
                      } else {
                        return [
                          createVNode("strong", null, toDisplayString(scope.row.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_link, {
                      onClick: ($event) => handleEdit(scope.$index, scope.row)
                    }, {
                      default: withCtx(() => [
                        createVNode("strong", null, toDisplayString(scope.row.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "desc",
              label: "\u6458\u8981",
              width: "600"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(scope.row.fields.desc)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(scope.row.fields.desc), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "created",
              label: "\u521B\u5EFA\u65F6\u95F4",
              width: "110"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(formatTime$1)(scope.row.created * 1e3, "YYYY/MM/DD HH:mm:ss"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref(formatTime$1)(scope.row.created * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "modified",
              label: "\u66F4\u65B0\u65F6\u95F4",
              width: "110"
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(formatTime$1)(scope.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref(formatTime$1)(scope.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                prop: "cid",
                label: "\u5E8F\u53F7",
                width: "80",
                align: "center"
              }),
              createVNode(_component_el_table_column, {
                label: "\u7F29\u7565\u56FE",
                prop: "title",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_image, {
                    src: scope.row.fields.thumb,
                    fit: "cover",
                    style: { "width": "180px", "height": "60px" }
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u6807\u7B7E",
                prop: "title",
                width: "160"
              }, {
                default: withCtx((scope) => [
                  (openBlock(true), createBlock(Fragment, null, renderList(scope.row.tag, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: item.tid,
                      class: "margin-xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "title",
                label: "\u6807\u9898",
                width: "320"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_link, {
                    onClick: ($event) => handleEdit(scope.$index, scope.row)
                  }, {
                    default: withCtx(() => [
                      createVNode("strong", null, toDisplayString(scope.row.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "desc",
                label: "\u6458\u8981",
                width: "600"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString(scope.row.fields.desc), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "created",
                label: "\u521B\u5EFA\u65F6\u95F4",
                width: "110"
              }, {
                default: withCtx((scope) => [
                  createVNode("span", null, toDisplayString(unref(formatTime$1)(scope.row.created * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "modified",
                label: "\u66F4\u65B0\u65F6\u95F4",
                width: "110"
              }, {
                default: withCtx((scope) => [
                  createVNode("span", null, toDisplayString(unref(formatTime$1)(scope.row.modified * 1e3, "YYYY/MM/DD HH:mm:ss")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_pagination, {
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/post-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=post-list.891165a9.mjs.map
