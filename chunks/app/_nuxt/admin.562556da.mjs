import { c as _export_sfc, v as vue_cjs_prod, h as __nuxt_component_2 } from '../server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Footer = __nuxt_component_2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="app-container">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { admin as default };
//# sourceMappingURL=admin.562556da.mjs.map
