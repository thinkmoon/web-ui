import { useSSRContext, defineAsyncComponent, unref, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const o = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(r) {
  var a;
  const { error: s } = r;
  (s.stack || "").split(`
`).splice(1).map((e) => ({ text: e.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e.includes("node_modules") && !e.includes(".cache") || e.includes("internal") || e.includes("new Promise") })).map((e) => `<span class="stack${e.internal ? " internal" : ""}">${e.text}</span>`).join(`
`);
  const t = Number(s.statusCode || 500), c = t === 404, m = (a = s.statusMessage) != null ? a : c ? "Page Not Found" : "Internal Server Error", i = s.message || s.toString(), l = void 0, _ = defineAsyncComponent(() => import('./error-404.b45f1e3b.mjs')), f = defineAsyncComponent(() => import('./error-500.4c73535d.mjs')), g = c ? _ : f;
  return (e, u, x, C) => {
    u(ssrRenderComponent(unref(g), mergeProps({ statusCode: unref(t), statusMessage: unref(m), description: unref(i), stack: unref(l) }, C), null, x));
  };
} }, d = o.setup;
o.setup = (r, s) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/registry.npmmirror.com+nuxt@3.0.0-rc.9_k4742n67ugzeipejfosovj4tqy/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), d ? d(r, s) : void 0;
};
const b = o;

export { b as default };
//# sourceMappingURL=error-component.0b05a5a7.mjs.map
