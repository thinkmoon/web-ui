import { b as _export_sfc$1, u as useRuntimeConfig, A as ArticleApi } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString } from 'vue';
import { useRoute } from 'vue-router';
import { u as useAsyncData } from './asyncData.975bb243.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { p as pushUrl } from './BaiduSite.6f90474b.mjs';
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
  __name: "[cid]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("article", () => ArticleApi.getDetail({ cid: route.params.cid }), "$o1yr1BdR3r")), __temp = await __temp, __restore(), __temp);
    const url = `https://www.thinkmoon.cn/post/${route.params.cid}`;
    if (article.value.fields instanceof Array) {
      const fields = {};
      article.value.fields.forEach((i) => {
        fields[i.name] = i.value;
      });
      article.value.fields = fields;
    }
    const copyRight = `> \u7248\u6743\u58F0\u660E: \u672C\u6587\u9996\u53D1\u4E8E[\u6307\u5C16\u9B54\u6CD5\u5C4B-${article.value.title}](${url}),\u8F6C\u8F7D\u6216\u5F15\u7528\u5FC5\u987B\u7533\u660E\u539F\u6307\u5C16\u9B54\u6CD5\u5C4B\u6765\u6E90\u53CA\u6E90\u5730\u5740\uFF01`;
    const content = computed(() => `# ${article.value.title} \r
 ${article.value.text} \r
 ${copyRight}`);
    pushUrl(`/post/${route.params.cid}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = resolveComponent("Title");
      const _component_v_md_preview = resolveComponent("v-md-preview");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-2f3d531b>`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(article).title)} | ${ssrInterpolate(unref(config).TITLE)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(article).title) + " | " + toDisplayString(unref(config).TITLE), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="article-content" data-v-2f3d531b>`);
      _push(ssrRenderComponent(_component_v_md_preview, { text: unref(content) }, null, _parent));
      _push(`<ins class="adsbygoogle" data-ad-client="ca-pub-3208634444966567" data-ad-format="fluid" data-ad-layout="in-article" data-ad-slot="2621880404" style="${ssrRenderStyle({ "display": "block", "text-align": "center", "width": "100%" })}" data-v-2f3d531b></ins></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[cid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _cid_ = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-2f3d531b"]]);

export { _cid_ as default };
//# sourceMappingURL=_cid_.b5fd6361.mjs.map
