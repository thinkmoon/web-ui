import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, withDirectives, isRef, vModelCheckbox, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from 'vue';
import '../../../hooks/index.mjs';
import { checkboxProps, checkboxEmits, useCheckbox, useCheckboxGroup } from './checkbox.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _hoisted_1 = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2 = ["name", "tabindex", "disabled", "value"];
const __default__ = {
  name: "ElCheckboxButton"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox(props, slots);
    const { checkboxGroup } = useCheckboxGroup();
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b("button"),
          unref(ns).bm("button", unref(size)),
          unref(ns).is("disabled", unref(isDisabled)),
          unref(ns).is("checked", unref(isChecked)),
          unref(ns).is("focus", unref(focus))
        ])
      }, [
        _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": _ctx.trueLabel,
          "false-value": _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => focus.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => focus.value = false)
        }, null, 42, _hoisted_1)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: _ctx.label,
          onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[6] || (_cache[6] = ($event) => focus.value = true),
          onBlur: _cache[7] || (_cache[7] = ($event) => focus.value = false)
        }, null, 42, _hoisted_2)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);

export { CheckboxButton as default };
//# sourceMappingURL=checkbox-button.mjs.map
