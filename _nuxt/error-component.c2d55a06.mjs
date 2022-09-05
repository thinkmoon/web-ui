import { useSSRContext, defineAsyncComponent, unref, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const o = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(r) {
  var c;
  const { error: s } = r;
  (s.stack || "").split(`
`).splice(1).map((e) => ({ text: e.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e.includes("node_modules") && !e.includes(".cache") || e.includes("internal") || e.includes("new Promise") })).map((e) => `<span class="stack${e.internal ? " internal" : ""}">${e.text}</span>`).join(`
`);
  const t = Number(s.statusCode || 500), a = t === 404, i = (c = s.statusMessage) != null ? c : a ? "Page Not Found" : "Internal Server Error", m = s.message || s.toString(), l = void 0, _ = defineAsyncComponent(() => import('./error-404.72fbadd7.mjs')), f = defineAsyncComponent(() => import('./error-500.9faeca89.mjs')), x = a ? _ : f;
  return (e, u, g, C) => {
    u(ssrRenderComponent(unref(x), mergeProps({ statusCode: unref(t), statusMessage: unref(i), description: unref(m), stack: unref(l) }, C), null, g));
  };
} }, d = o.setup;
o.setup = (r, s) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), d ? d(r, s) : void 0;
};
const v = o;

export { v as default };
//# sourceMappingURL=error-component.c2d55a06.mjs.map
