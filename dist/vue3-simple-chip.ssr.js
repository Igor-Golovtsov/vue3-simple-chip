'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /* #__PURE__ */vue.defineComponent({
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
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var _toRefs = vue.toRefs(props),
        primaryColor = _toRefs.primaryColor,
        secondaryColor = _toRefs.secondaryColor,
        dotColor = _toRefs.dotColor,
        outlined = _toRefs.outlined,
        rounded = _toRefs.rounded,
        useButton = _toRefs.useButton,
        buttonClickCallbackData = _toRefs.buttonClickCallbackData;

    var chipStyle = vue.computed(function () {
      return {
        '--chip-padding-right': useButton.value ? '32px' : '8px',
        '--chip-border-radius': rounded.value ? '20px' : '4px',
        '--chip-background-color': outlined.value ? secondaryColor.value : primaryColor.value,
        '--chip-border-color': outlined.value ? primaryColor.value : primaryColor.value,
        '--chip-color': outlined.value ? primaryColor.value : secondaryColor.value
      };
    });
    var dotStyle = vue.computed(function () {
      return dotColor.value ? {
        '--dot-background-color': dotColor.value
      } : null;
    });
    var buttonStyle = vue.computed(function () {
      return {
        '--button-border-radius': rounded.value ? '0 20px 20px 0' : '0 4px 4px 0'
      };
    });
    var hasLeftIcon = vue.computed(function () {
      return slots['left-icon'];
    });
    var hasRightIcon = vue.computed(function () {
      return slots['right-icon'];
    });

    var onButtonClick = function onButtonClick() {
      return emit('on-button-click', buttonClickCallbackData.value);
    };

    return {
      chipStyle: chipStyle,
      dotStyle: dotStyle,
      buttonStyle: buttonStyle,
      hasLeftIcon: hasLeftIcon,
      hasRightIcon: hasRightIcon,
      onButtonClick: onButtonClick
    };
  }
});var _imports_0 = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 458.5 458.5\" style=\"enable-background:new 0 0 458.5 458.5;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g>\r\n\t\t<g>\r\n\t\t\t<path d=\"M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421\r\n\t\t\t\tc-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508\r\n\t\t\t\tc32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z\r\n\t\t\t\t M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501\r\n\t\t\t\tc0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778\r\n\t\t\t\tc-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657\r\n\t\t\t\tc10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z\"/>\r\n\t\t\t<path d=\"M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705\r\n\t\t\t\tC214.249,385.607,220.965,392.323,229.249,392.323z\"/>\r\n\t\t\t<path d=\"M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705\r\n\t\t\t\tC291.671,385.607,298.387,392.323,306.671,392.323z\"/>\r\n\t\t\t<path d=\"M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705\r\n\t\t\t\tC136.828,385.607,143.544,392.323,151.828,392.323z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</svg>";
var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-53e438a5"), n = n(), vue.popScopeId(), n;
};

var _hoisted_1 = {
  key: 1,
  class: "vue3-simple-chip__icon vue3-simple-chip__icon--left"
};
var _hoisted_2 = {
  class: "vue3-simple-chip__label"
};
var _hoisted_3 = {
  key: 2,
  class: "vue3-simple-chip__icon vue3-simple-chip__icon--right"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("img", {
    src: _imports_0,
    alt: ""
  }, null, -1);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    style: vue.normalizeStyle(_ctx.chipStyle),
    class: "vue3-simple-chip"
  }, [_ctx.dotColor ? (vue.openBlock(), vue.createElementBlock("span", {
    key: 0,
    class: "vue3-simple-chip__dot",
    style: vue.normalizeStyle(_ctx.dotStyle)
  }, null, 4)) : vue.createCommentVNode("", true), _ctx.hasLeftIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "left-icon")])) : vue.createCommentVNode("", true), vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(_ctx.label), 1), _ctx.hasRightIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "right-icon")])) : vue.createCommentVNode("", true), _ctx.useButton ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 3,
    class: "vue3-simple-chip__button",
    style: vue.normalizeStyle(_ctx.buttonStyle),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onButtonClick && _ctx.onButtonClick.apply(_ctx, arguments);
    }),
    onKeypress: _cache[1] || (_cache[1] = function () {
      return _ctx.onButtonClick && _ctx.onButtonClick.apply(_ctx, arguments);
    })
  }, [vue.renderSlot(_ctx.$slots, "button-icon", {}, function () {
    return [_hoisted_4];
  })], 36)) : vue.createCommentVNode("", true)], 4);
}function styleInject(css, ref) {
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
}var css_248z = "\n.vue3-simple-chip[data-v-53e438a5] {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    padding-top: 4px;\n    padding-right: var(--chip-padding-right);\n    padding-bottom: 4px;\n    padding-left: 8px;\n    margin-right: 8px;\n    margin-bottom: 8px;\n    border: 1px solid;\n    border-color: var(--chip-border-color);\n    border-radius: var(--chip-border-radius);\n    background-color: var(--chip-background-color);\n    color: var(--chip-color);\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n    cursor: default;\n}\n.vue3-simple-chip__dot[data-v-53e438a5] {\n    width: 6px;\n    height: 6px;\n    margin-right: 4px;\n    border-radius: 50%;\n    background-color: var(--dot-background-color);\n}\n.vue3-simple-chip__icon[data-v-53e438a5] {\n    width: 16px;\n    height: 16px;\n    flex-shrink: 0;\n}\n.vue3-simple-chip__button[data-v-53e438a5] {\n    position: absolute;\n    top: -1px;\n    right: 0;\n    padding: 4px 8px;\n    border-radius: var(--button-border-radius);\n    cursor: pointer;\n}\n.vue3-simple-chip__button img[data-v-53e438a5] {\n    width: 16px;\n    height: 16px;\n}\n.vue3-simple-chip__icon--left[data-v-53e438a5] {\n    margin-right: 4px;\n}\n.vue3-simple-chip__icon--right[data-v-53e438a5] {\n    margin-left: 4px;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-53e438a5";// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /* #__PURE__ */(function () {
  // Assign InstallableComponent type
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('Vue3SimpleChip', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo'
// export const RollupDemoDirective = directive
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;