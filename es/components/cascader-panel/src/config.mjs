import { computed } from 'vue';
import { NOOP } from '@vue/shared';

const CommonProps = {
  modelValue: [Number, String, Array],
  options: {
    type: Array,
    default: () => []
  },
  props: {
    type: Object,
    default: () => ({})
  }
};
const DefaultProps = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: NOOP,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
const useCascaderConfig = (props) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props
  }));
};

export { CommonProps, DefaultProps, useCascaderConfig };
//# sourceMappingURL=config.mjs.map
