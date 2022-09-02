import { v as vue_cjs_prod, A as ArticleApi, T as TagApi, C as CategoryApi, a as AttachmentApi, _ as __nuxt_component_1 } from '../server.mjs';
import { s as serverRenderer } from '../../handlers/renderer.mjs';
import * as qiniu from 'qiniu-js';
import dayjs from 'dayjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import 'defu';
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
import 'stream';

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
const __default__ = vue_cjs_prod.defineComponent({
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
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  ...__default__,
  __name: "editor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = vue_cjs_prod.resolveComponent("el-input");
      const _component_v_md_editor = vue_cjs_prod.resolveComponent("v-md-editor");
      const _component_ClientOnly = __nuxt_component_1;
      const _component_el_select = vue_cjs_prod.resolveComponent("el-select");
      const _component_el_option = vue_cjs_prod.resolveComponent("el-option");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "editor-wrapper" }, _attrs))}><div class="flex-1"></div><div class="editor-container">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_el_input, {
        modelValue: _ctx.article.title,
        "onUpdate:modelValue": ($event) => _ctx.article.title = $event,
        class: "title-input"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_v_md_editor, {
        modelValue: _ctx.article.text,
        "onUpdate:modelValue": ($event) => _ctx.article.text = $event,
        mode: "edit",
        height: "560px",
        "disabled-menus": [],
        onSave: _ctx.saveArticle,
        onUploadImage: _ctx.handleUploadImage
      }, null, _parent));
      _push(`<div class="custom-options"><!--[-->`);
      serverRenderer.exports.ssrRenderList(_ctx.article.fields, (custom, index) => {
        _push(`<!--[--><span>${serverRenderer.exports.ssrInterpolate(custom.name)}</span>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_el_input, {
          modelValue: _ctx.article.fields[index].value,
          "onUpdate:modelValue": ($event) => _ctx.article.fields[index].value = $event,
          type: "textarea",
          class: "input-with-select",
          placeholder: "\u8BF7\u8F93\u5165"
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div><div class="flex-2 right"><section><span class="title">\u6587\u7AE0\u5206\u7C7B</span><div class="content">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_select, {
              key: "category",
              modelValue: _ctx.article.category_id,
              "onUpdate:modelValue": ($event) => _ctx.article.category_id = $event
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  serverRenderer.exports.ssrRenderList(_ctx.categoryList, (item) => {
                    _push3(serverRenderer.exports.ssrRenderComponent(_component_el_option, {
                      key: item.mid,
                      label: item.name,
                      value: item.mid
                    }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.categoryList, (item) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_el_option, {
                        key: item.mid,
                        label: item.name,
                        value: item.mid
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
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
              vue_cjs_prod.createVNode(_component_el_select, {
                key: "category",
                modelValue: _ctx.article.category_id,
                "onUpdate:modelValue": ($event) => _ctx.article.category_id = $event
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.categoryList, (item) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_el_option, {
                      key: item.mid,
                      label: item.name,
                      value: item.mid
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
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
      _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_el_select, {
              key: "category",
              modelValue: _ctx.article.selectedTag,
              "onUpdate:modelValue": ($event) => _ctx.article.selectedTag = $event,
              filterable: "",
              multiple: ""
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  serverRenderer.exports.ssrRenderList(_ctx.tagList, (item) => {
                    _push3(serverRenderer.exports.ssrRenderComponent(_component_el_option, {
                      key: item.tid,
                      label: item.name,
                      value: item.tid
                    }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
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
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.tagList, (item) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_el_option, {
                        key: item.tid,
                        label: item.name,
                        value: item.tid
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
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
              vue_cjs_prod.createVNode(_component_el_select, {
                key: "category",
                modelValue: _ctx.article.selectedTag,
                "onUpdate:modelValue": ($event) => _ctx.article.selectedTag = $event,
                filterable: "",
                multiple: ""
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.tagList, (item) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_el_option, {
                      key: item.tid,
                      label: item.name,
                      value: item.tid
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(item.name), 1)
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
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=editor.c66c9ffa.mjs.map
