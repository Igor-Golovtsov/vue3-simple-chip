import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeStyle, createCommentVNode, renderSlot, createElementVNode, toDisplayString, pushScopeId, popScopeId } from 'vue';

var script = /* #__PURE__ */defineComponent({
  name: 'Vue3SimpleChip',
  emits: ['on-button-click'],
  props: {
    label: {
      type: String,
      default: ''
    },
    primaryColor: {
      type: String,
      default: '#e0e0e0'
    },
    secondaryColor: {
      type: String,
      default: '#000'
    },
    dotColor: {
      type: String,
      default: null
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    useButton: {
      type: Boolean,
      default: false
    },
    buttonClickCallbackData: {
      default: undefined
    }
  },

  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      primaryColor,
      secondaryColor,
      dotColor,
      outlined,
      rounded,
      useButton,
      buttonClickCallbackData
    } = toRefs(props);
    const chipStyle = computed(() => ({
      '--chip-padding-right': useButton.value ? '32px' : '8px',
      '--chip-border-radius': rounded.value ? '20px' : '4px',
      '--chip-background-color': outlined.value ? secondaryColor.value : primaryColor.value,
      '--chip-border-color': outlined.value ? primaryColor.value : primaryColor.value,
      '--chip-color': outlined.value ? primaryColor.value : secondaryColor.value
    }));
    const dotStyle = computed(() => dotColor.value ? {
      '--dot-background-color': dotColor.value
    } : null);
    const buttonStyle = computed(() => ({
      '--button-border-radius': rounded.value ? '0 20px 20px 0' : '0 4px 4px 0'
    }));
    const hasLeftIcon = computed(() => slots['left-icon']);
    const hasRightIcon = computed(() => slots['right-icon']);

    const onButtonClick = () => emit('on-button-click', buttonClickCallbackData.value);

    return {
      chipStyle,
      dotStyle,
      buttonStyle,
      hasLeftIcon,
      hasRightIcon,
      onButtonClick
    };
  }

});

var _imports_0 = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 458.5 458.5\" style=\"enable-background:new 0 0 458.5 458.5;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g>\r\n\t\t<g>\r\n\t\t\t<path d=\"M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421\r\n\t\t\t\tc-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508\r\n\t\t\t\tc32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z\r\n\t\t\t\t M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501\r\n\t\t\t\tc0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778\r\n\t\t\t\tc-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657\r\n\t\t\t\tc10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z\"/>\r\n\t\t\t<path d=\"M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705\r\n\t\t\t\tC214.249,385.607,220.965,392.323,229.249,392.323z\"/>\r\n\t\t\t<path d=\"M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705\r\n\t\t\t\tC291.671,385.607,298.387,392.323,306.671,392.323z\"/>\r\n\t\t\t<path d=\"M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705\r\n\t\t\t\tC136.828,385.607,143.544,392.323,151.828,392.323z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</svg>";

const _withScopeId = n => (pushScopeId("data-v-53e438a5"), n = n(), popScopeId(), n);

const _hoisted_1 = {
  key: 1,
  class: "vue3-simple-chip__icon vue3-simple-chip__icon--left"
};
const _hoisted_2 = {
  class: "vue3-simple-chip__label"
};
const _hoisted_3 = {
  key: 2,
  class: "vue3-simple-chip__icon vue3-simple-chip__icon--right"
};

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    style: normalizeStyle(_ctx.chipStyle),
    class: "vue3-simple-chip"
  }, [_ctx.dotColor ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: "vue3-simple-chip__dot",
    style: normalizeStyle(_ctx.dotStyle)
  }, null, 4)) : createCommentVNode("", true), _ctx.hasLeftIcon ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "left-icon")])) : createCommentVNode("", true), createElementVNode("div", _hoisted_2, toDisplayString(_ctx.label), 1), _ctx.hasRightIcon ? (openBlock(), createElementBlock("div", _hoisted_3, [renderSlot(_ctx.$slots, "right-icon")])) : createCommentVNode("", true), _ctx.useButton ? (openBlock(), createElementBlock("div", {
    key: 3,
    class: "vue3-simple-chip__button",
    style: normalizeStyle(_ctx.buttonStyle),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onButtonClick && _ctx.onButtonClick(...arguments);
    }),
    onKeypress: _cache[1] || (_cache[1] = function () {
      return _ctx.onButtonClick && _ctx.onButtonClick(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "button-icon", {}, () => [_hoisted_4])], 36)) : createCommentVNode("", true)], 4);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.vue3-simple-chip[data-v-53e438a5] {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    padding-top: 4px;\n    padding-right: var(--chip-padding-right);\n    padding-bottom: 4px;\n    padding-left: 8px;\n    margin-right: 8px;\n    margin-bottom: 8px;\n    border: 1px solid;\n    border-color: var(--chip-border-color);\n    border-radius: var(--chip-border-radius);\n    background-color: var(--chip-background-color);\n    color: var(--chip-color);\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n    cursor: default;\n}\n.vue3-simple-chip__dot[data-v-53e438a5] {\n    width: 6px;\n    height: 6px;\n    margin-right: 4px;\n    border-radius: 50%;\n    background-color: var(--dot-background-color);\n}\n.vue3-simple-chip__icon[data-v-53e438a5] {\n    width: 16px;\n    height: 16px;\n    flex-shrink: 0;\n}\n.vue3-simple-chip__button[data-v-53e438a5] {\n    position: absolute;\n    top: -1px;\n    right: 0;\n    padding: 4px 8px;\n    border-radius: var(--button-border-radius);\n    cursor: pointer;\n}\n.vue3-simple-chip__button img[data-v-53e438a5] {\n    width: 16px;\n    height: 16px;\n}\n.vue3-simple-chip__icon--left[data-v-53e438a5] {\n    margin-right: 4px;\n}\n.vue3-simple-chip__icon--right[data-v-53e438a5] {\n    margin-left: 4px;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-53e438a5";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /* #__PURE__ */(() => {
  // Assign InstallableComponent type
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('Vue3SimpleChip', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo'
// export const RollupDemoDirective = directive

export { entry_esm as default };
