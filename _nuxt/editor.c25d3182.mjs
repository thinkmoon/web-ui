import { A as ArticleApi, T as TagApi, C as CategoryApi, a as AttachmentApi, _ as __nuxt_component_1 } from '../server.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import * as qiniu from 'qiniu-js';
import dayjs from 'dayjs';
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

const fields = [
  {
    name: "thumb",
    value: ""
  },
  {
    name: "desc",
    value: ""
  }
];
const __default__ = defineComponent({
  data() {
    return {
      article: {
        title: "",
        text: "",
        category_id: "",
        tag: [],
        selectedTag: [],
        fields: []
      },
      categoryList: [],
      tagList: []
    };
  },
  activated() {
    if (this.$route.query.cid) {
      ArticleApi.getDetail({ cid: this.$route.query.cid }).then((res) => {
        this.article = {
          ...this.article,
          ...res
        };
        this.article.selectedTag = this.article.tag.map((item) => item.tid);
        if (!this.article.fields.length) {
          this.article.fields = fields;
        }
      });
    } else {
      this.data = {};
      this.article.fields = fields;
    }
    this.getCategory();
    this.getTag();
  },
  methods: {
    getTag() {
      TagApi.getTag().then((res) => {
        this.tagList = res;
      });
    },
    getCategory() {
      CategoryApi.getCategory().then((res) => {
        this.categoryList = res;
      });
    },
    saveArticle() {
      const op = this.$route.query.cid ? "update" : "add";
      if (!this.article.category_id) {
        return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u5206\u7C7B");
      }
      if (!this.article.fields.length) {
        return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E");
      }
      ArticleApi[op](this.article).then(() => {
        this.$message.success("\u4FDD\u5B58\u6210\u529F");
        location.href = "/admin/post-list";
      }).catch((err) => {
        this.$message.error("\u4FDD\u5B58\u5931\u8D25");
        console.error(err);
      });
    },
    handleUploadImage(event, insertImage, files) {
      console.log(arguments);
      AttachmentApi.getUploadToken().then((token) => {
        const key = dayjs().format("YYYY-MM-DD/HH-mm-ss");
        const observable = qiniu.upload(files[0], key, token);
        observable.subscribe(null, null, (res) => {
          insertImage({
            url: `https://blog.cdn.thinkmoon.cn/${res.key}`
          });
        });
      });
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "editor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_v_md_editor = resolveComponent("v-md-editor");
      const _component_ClientOnly = __nuxt_component_1;
      const _component_el_select = resolveComponent("el-select");
      const _component_el_option = resolveComponent("el-option");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "editor-wrapper" }, _attrs))}><div class="flex-1"></div><div class="editor-container">`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: _ctx.article.title,
        "onUpdate:modelValue": ($event) => _ctx.article.title = $event,
        class: "title-input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_md_editor, {
        modelValue: _ctx.article.text,
        "onUpdate:modelValue": ($event) => _ctx.article.text = $event,
        mode: "edit",
        height: "560px",
        "disabled-menus": [],
        onSave: _ctx.saveArticle,
        onUploadImage: _ctx.handleUploadImage
      }, null, _parent));
      _push(`<div class="custom-options"><!--[-->`);
      ssrRenderList(_ctx.article.fields, (custom, index) => {
        _push(`<!--[--><span>${ssrInterpolate(custom.name)}</span>`);
        _push(ssrRenderComponent(_component_el_input, {
          modelValue: _ctx.article.fields[index].value,
          "onUpdate:modelValue": ($event) => _ctx.article.fields[index].value = $event,
          type: "textarea",
          class: "input-with-select",
          placeholder: "\u8BF7\u8F93\u5165"
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div><div class="flex-2 right"><section><span class="title">\u6587\u7AE0\u5206\u7C7B</span><div class="content">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_select, {
              key: "category",
              modelValue: _ctx.article.category_id,
              "onUpdate:modelValue": ($event) => _ctx.article.category_id = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.categoryList, (item) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key: item.mid,
                      label: item.name,
                      value: item.mid
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categoryList, (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.mid,
                        label: item.name,
                        value: item.mid
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_select, {
                key: "category",
                modelValue: _ctx.article.category_id,
                "onUpdate:modelValue": ($event) => _ctx.article.category_id = $event
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categoryList, (item) => {
                    return openBlock(), createBlock(_component_el_option, {
                      key: item.mid,
                      label: item.name,
                      value: item.mid
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><span class="title">\u6587\u7AE0\u6807\u7B7E</span><div class="content">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_select, {
              key: "category",
              modelValue: _ctx.article.selectedTag,
              "onUpdate:modelValue": ($event) => _ctx.article.selectedTag = $event,
              filterable: "",
              multiple: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.tagList, (item) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key: item.tid,
                      label: item.name,
                      value: item.tid
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tagList, (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.tid,
                        label: item.name,
                        value: item.tid
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_select, {
                key: "category",
                modelValue: _ctx.article.selectedTag,
                "onUpdate:modelValue": ($event) => _ctx.article.selectedTag = $event,
                filterable: "",
                multiple: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tagList, (item) => {
                    return openBlock(), createBlock(_component_el_option, {
                      key: item.tid,
                      label: item.name,
                      value: item.tid
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=editor.c25d3182.mjs.map
