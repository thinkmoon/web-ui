import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const m = defineComponent({ __name: "404", __ssrInlineRender: true, setup(r) {
  return (o, t, _, i) => {
    t(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, i))}></div>`);
  };
} }), p = m.setup;
m.setup = (r, o) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("pages/404.vue"), p ? p(r, o) : void 0;
};

export { m as default };
//# sourceMappingURL=404.eb3ac2c7.mjs.map
