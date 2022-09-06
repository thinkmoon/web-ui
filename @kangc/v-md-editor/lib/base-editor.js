(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("VMdEditor", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["VMdEditor"] = factory(require("vue"));
	else
		root["VMdEditor"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return h1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return h3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return h5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return h6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return italic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return redo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return strikethrough; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return syncScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return undo; });
var bold = 'bold';
var clear = 'clear';
var code = 'code';
var fullscreen = 'fullscreen';
var h1 = 'h1';
var h2 = 'h2';
var h3 = 'h3';
var h4 = 'h4';
var h5 = 'h5';
var h6 = 'h6';
var hr = 'hr';
var image = 'image';
var italic = 'italic';
var link = 'link';
var ol = 'ol';
var quote = 'quote';
var redo = 'redo';
var strikethrough = 'strikethrough';
var syncScroll = 'sync-scroll';
var table = 'table';
var ul = 'ul';
var undo = 'undo';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arraytoObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return importAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return inBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isKorean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generatorText; });
var toString = Object.prototype.toString;
var isObject = function isObject(target) {
  return toString.call(target) === '[object Object]';
};

function extend(to, _from) {
  Object.keys(_from).forEach(function (key) {
    to[key] = _from[key];
  });
  return to;
}

function arraytoObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
function importAll(map, r) {
  r.keys().forEach(function (filePath) {
    map[filePath] = r(filePath);
  });
}
var inBrowser = typeof window !== 'undefined';
function isKorean(text) {
  var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
function generatorText(_ref) {
  var selected = _ref.selected,
      InsertGetter = _ref.InsertGetter,
      _ref$selectedGetter = _ref.selectedGetter,
      selectedGetter = _ref$selectedGetter === void 0 ? function (selected) {
    return selected;
  } : _ref$selectedGetter,
      _ref$ignoreEmptyLine = _ref.ignoreEmptyLine,
      ignoreEmptyLine = _ref$ignoreEmptyLine === void 0 ? true : _ref$ignoreEmptyLine;
  var insertContent;
  var newSelected;

  if (selected) {
    newSelected = selectedGetter(selected);
    insertContent = InsertGetter(selected, 1); // 如果当前选中的文本包含换行 则插入后选中插入的所有文本

    if (selected.indexOf('\n') !== -1) {
      insertContent = selected.split('\n').map(function (rowText, index) {
        var isEmptyLine = !rowText;
        if (ignoreEmptyLine && isEmptyLine) return '';
        return InsertGetter(rowText, index + 1).replace(selectedGetter(null), '');
      }).join('\n');
      newSelected = insertContent;
    }
  } else {
    insertContent = InsertGetter(null, 1);
    newSelected = selectedGetter(selected);
  }

  return {
    insertContent: insertContent,
    newSelected: newSelected
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LINE_MARKUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HEADING_MARKUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANCHOR_MARKUP; });
var LINE_MARKUP = 'data-v-md-line';
var HEADING_MARKUP = 'data-v-md-heading';
var ANCHOR_MARKUP = 'data-v-md-anchor';

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  PREVIEW: 'preview',
  EDITABLE: 'editable',
  EDIT: 'edit'
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scrollTo; });
function getScrollTop(target) {
  var result = 0;

  if (target === window) {
    result = target.pageYOffset;
  } else if (target) {
    result = target.scrollTop;
  }

  return result;
}
function scrollTo(target, scrollTop) {
  if (target === window) {
    window.scrollTo(window.pageYOffset, scrollTop);
  } else if (target) {
    target.scrollTop = scrollTop;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/xss/lib/index.js
var lib = __webpack_require__(11);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/utils/xss/svg.js
/* harmony default export */ var svg = ({
  svg: [],
  altGlyph: [],
  altGlyphDef: [],
  altGlyphItem: [],
  animate: [],
  animateColor: [],
  animateMotion: [],
  animateTransform: [],
  circle: [],
  clipPath: [],
  'color-profile': [],
  cursor: [],
  'definition-src': [],
  defs: [],
  desc: [],
  ellipse: [],
  feBlend: [],
  feColorMatrix: [],
  feComponentTransfer: [],
  feComposite: [],
  feConvolveMatrix: [],
  feDiffuseLighting: [],
  feDisplacementMap: [],
  feDistantLight: [],
  feFlood: [],
  feFuncA: [],
  feFuncB: [],
  feFuncG: [],
  feFuncR: [],
  feGaussianBlur: [],
  feImage: [],
  feMerge: [],
  feMergeNode: [],
  feMorphology: [],
  feOffset: [],
  fePointLight: [],
  feSpecularLighting: [],
  feSpotLight: [],
  feTile: [],
  feTurbulence: [],
  filter: [],
  font: [],
  foreignObject: [],
  g: [],
  glyph: [],
  glyphRef: [],
  hkern: [],
  image: [],
  line: [],
  linearGradient: [],
  marker: [],
  mask: [],
  metadata: [],
  'missing-glyph': [],
  mpath: [],
  path: [],
  pattern: [],
  polygon: [],
  polyline: [],
  radialGradient: [],
  rect: [],
  set: [],
  stop: [],
  style: [],
  switch: [],
  symbol: [],
  text: [],
  textPath: [],
  title: [],
  tref: [],
  tspan: [],
  use: [],
  view: [],
  vkern: []
});
// CONCATENATED MODULE: ./src/utils/xss/KaTex.js
/* harmony default export */ var KaTex = ({
  math: [],
  annotation: [],
  semantics: [],
  mtext: [],
  mn: [],
  mo: [],
  mi: [],
  mspace: [],
  mover: [],
  munder: [],
  munderover: [],
  msup: [],
  msub: [],
  msubsup: [],
  mfrac: [],
  mroot: [],
  msqrt: [],
  mtable: [],
  mtr: [],
  mtd: [],
  mlabeledtr: [],
  mrow: [],
  menclose: [],
  mstyle: [],
  mpadded: [],
  mphantom: [],
  mglyph: []
});
// CONCATENATED MODULE: ./src/utils/xss/common.js
var attrWhiteList = ['style', 'align', 'class', 'id'];
var prefixAttrWhiteList = ['data-'];
var tags = {
  input: ['type'],
  ol: ['reversed', 'start', 'type'],
  button: ['type'],
  summary: []
};
// CONCATENATED MODULE: ./src/utils/xss/index.js






var tagWhiteList = Object(esm_extends["a" /* default */])({}, tags, KaTex, svg);

var options = {
  whiteList: Object(esm_extends["a" /* default */])({}, lib_default.a.getDefaultWhiteList(), tagWhiteList),
  onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value) {
    if (svg[tag] || KaTex[tag] || attrWhiteList.find(function (attr) {
      return attr === name;
    }) || prefixAttrWhiteList.find(function (prefix) {
      return name.startsWith(prefix);
    })) {
      return name + "=\"" + lib_default.a.escapeAttrValue(value) + "\"";
    }
  }
};
var xssFilterInstance = new lib_default.a.FilterXSS(options);

xssFilterInstance.extend = function (extendOptions) {
  var instanceOptions = xssFilterInstance.options;
  Object.keys(extendOptions).forEach(function (optionName) {
    // extend whiteList
    if (optionName === 'whiteList') {
      Object.keys(extendOptions.whiteList).forEach(function (tagName) {
        var tagAttrWhiteList = extendOptions.whiteList[tagName];
        var instanceWhiteList = instanceOptions.whiteList;

        if (instanceWhiteList[tagName]) {
          instanceWhiteList[tagName] = [].concat(instanceWhiteList[tagName], tagAttrWhiteList);
        } else {
          instanceWhiteList[tagName] = tagAttrWhiteList;
        }
      });
    } else if (optionName === 'onIgnoreTagAttr') {
      var oldHandler = instanceOptions.onIgnoreTagAttr;

      instanceOptions.onIgnoreTagAttr = function () {
        var _extendOptions$onIgno;

        for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        var oldReturnVal = oldHandler.call.apply(oldHandler, [this].concat(arg));

        var newReturnVal = (_extendOptions$onIgno = extendOptions.onIgnoreTagAttr).call.apply(_extendOptions$onIgno, [this].concat(arg));

        return oldReturnVal || newReturnVal;
      };
    } else {
      instanceOptions[optionName] = extendOptions[optionName];
    }
  });
};

/* harmony default export */ var xss = __webpack_exports__["a"] = (xssFilterInstance);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return smoothScroll; });
/* harmony import */ var _scroll_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function smooth(_ref) {
  var currentScrollTop = _ref.currentScrollTop,
      scrollToTop = _ref.scrollToTop,
      scrollFn = _ref.scrollFn,
      _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 10 : _ref$percent,
      onScrollEnd = _ref.onScrollEnd;
  var scrollWay = scrollToTop > currentScrollTop ? 'down' : 'up';
  var step = (scrollToTop - currentScrollTop) * (percent / 100);
  var id;

  var scroll = function scroll() {
    currentScrollTop += step;

    if (scrollWay === 'down' && currentScrollTop >= scrollToTop || scrollWay === 'up' && currentScrollTop <= scrollToTop) {
      scrollFn(scrollToTop);
      window.cancelAnimationFrame(id);
      if (onScrollEnd) window.requestAnimationFrame(onScrollEnd);
    } else {
      scrollFn(currentScrollTop);
      window.requestAnimationFrame(scroll);
    }
  };

  window.requestAnimationFrame(scroll);
}
function smoothScroll(_ref2) {
  var scrollTarget = _ref2.scrollTarget,
      scrollToTop = _ref2.scrollToTop,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 10 : _ref2$percent,
      onScrollEnd = _ref2.onScrollEnd;
  var currentScrollTop = Object(_scroll_top__WEBPACK_IMPORTED_MODULE_0__[/* getScrollTop */ "a"])(scrollTarget);
  smooth({
    currentScrollTop: currentScrollTop,
    scrollToTop: scrollToTop,
    scrollFn: function scrollFn(scrollTop) {
      return Object(_scroll_top__WEBPACK_IMPORTED_MODULE_0__[/* scrollTo */ "b"])(scrollTarget, scrollTop);
    },
    percent: percent,
    onScrollEnd: onScrollEnd
  });
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/preview.vue?vue&type=template&id=2d66424c&bindings={}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", {
    class: "v-md-editor-preview",
    style: {
      tabSize: _ctx.tabSize,
      '-moz-tab-size': _ctx.tabSize,
      '-o-tab-size': _ctx.tabSize
    },
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.handlePreviewClick.apply(_ctx, arguments);
    })
  }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
    class: [_ctx.previewClass],
    innerHTML: _ctx.html
  }, null, 10
  /* CLASS, PROPS */
  , ["innerHTML"])], 4
  /* STYLE */
  );
}
// CONCATENATED MODULE: ./src/preview.vue?vue&type=template&id=2d66424c&bindings={}

// EXTERNAL MODULE: ./src/utils/xss/index.js + 3 modules
var xss = __webpack_require__(7);

// EXTERNAL MODULE: ./src/utils/lang.js + 1 modules
var lang = __webpack_require__(13);

// CONCATENATED MODULE: ./src/utils/v-md-parser.js

var v_md_parser_VMdParser = /*#__PURE__*/function () {
  function VMdParser() {
    this.lang = new lang["a" /* default */]();
  }

  var _proto = VMdParser.prototype;

  _proto.defaultMarkdownLoader = function defaultMarkdownLoader(text) {
    return text;
  };

  _proto.use = function use(optionsOrInstall, opt) {
    if (typeof optionsOrInstall === 'function') {
      optionsOrInstall(this, opt);
    } else {
      optionsOrInstall.install(this, opt);
    }

    return this;
  };

  _proto.theme = function theme(themeConfig) {
    this.themeConfig = themeConfig;
  };

  _proto.extendMarkdown = function extendMarkdown(extender) {
    if (!this.themeConfig) {
      return console.error('Please use theme before using plugins');
    }

    var markdownParser = this.themeConfig.markdownParser;
    extender(markdownParser);
  };

  _proto.parse = function parse(text) {
    var _markdownParser$rende;

    var markdownParser = this.themeConfig.markdownParser;
    var markdownLoader = (markdownParser == null ? void 0 : (_markdownParser$rende = markdownParser.render) == null ? void 0 : _markdownParser$rende.bind(markdownParser)) || this.defaultMarkdownLoader;

    if (typeof markdownLoader !== 'function' || markdownLoader === this.defaultMarkdownLoader) {
      console.error('Please configure your markdown parser');
    }

    return markdownLoader(text);
  };

  return VMdParser;
}();
// EXTERNAL MODULE: ./src/mixins/preview.js
var preview = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/preview.vue?vue&type=script&lang=js


 // mixins


var component = {
  name: 'v-md-preview',
  mixins: [preview["a" /* default */]],
  props: {
    text: {
      type: String,
      default: ''
    },
    theme: Object,
    beforeChange: Function
  },
  emits: ['change'],
  data: function data() {
    return {
      html: ''
    };
  },
  watch: {
    text: function text() {
      this.handleTextChange();
    },
    langConfig: function langConfig() {
      this.handleTextChange();
    }
  },
  computed: {
    vMdParser: function vMdParser() {
      return this.$options.vMdParser;
    },
    previewClass: function previewClass() {
      return this.vMdParser.themeConfig.previewClass;
    },
    langConfig: function langConfig() {
      return this.vMdParser.lang.langConfig;
    }
  },
  created: function created() {
    this.handleTextChange();
  },
  methods: {
    handleTextChange: function handleTextChange() {
      var _this = this;

      var next = function next(text) {
        _this.html = xss["a" /* default */].process(_this.$options.vMdParser.parse(text));

        _this.$emit('change', text, _this.html);
      };

      if (this.beforeChange) {
        this.beforeChange(this.text, next);
      } else {
        next(this.text);
      }
    }
  }
};
var vMdParser = new v_md_parser_VMdParser();
vMdParser.lang.config = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["reactive"])(vMdParser.lang.config);
component.vMdParser = new v_md_parser_VMdParser();
/* harmony default export */ var previewvue_type_script_lang_js = (component);
// CONCATENATED MODULE: ./src/preview.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/preview.vue



previewvue_type_script_lang_js.render = render

/* harmony default export */ var src_preview = (previewvue_type_script_lang_js);
// EXTERNAL MODULE: ./src/assets/css/font.css
var font = __webpack_require__(18);

// CONCATENATED MODULE: ./src/preview.js
// This file is auto generated by build/build-entry.js

 // font css


var version = '2.3.15';

var preview_install = function install(app) {
  app.component(src_preview.name, src_preview);
};

src_preview.version = version;
src_preview.install = preview_install;
src_preview.xss = xss["a" /* default */];

src_preview.use = function (optionsOrInstall, opt) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(src_preview, opt);
  } else {
    optionsOrInstall.install(src_preview, opt);
  }

  return src_preview;
};

/* harmony default export */ var src_preview_0 = __webpack_exports__["default"] = (src_preview);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(19);
var parser = __webpack_require__(22);
var FilterXSS = __webpack_require__(26);

/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */
function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];
for (var i in parser) exports[i] = parser[i];

// using `xss` on the browser, output `filterXSS` to the globals
if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
}

// using `xss` on the WebWorker, output `filterXSS` to the globals
function isWorkerEnv() {
  return (
    typeof self !== "undefined" &&
    typeof DedicatedWorkerGlobalScope !== "undefined" &&
    self instanceof DedicatedWorkerGlobalScope
  );
}
if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filesFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilesFromClipboardData; });
// Modified from https://github.com/ElemeFE/element/blob/dev/packages/upload/src/upload-dragger.vue
function filesFilter(files, config) {
  var accept = config.accept;
  var filesKeys = Object.keys(files).filter(function (key) {
    var file = files[key];
    var type = file.type,
        name = file.name;
    var extension = name.indexOf('.') > -1 ? "." + name.split('.').pop() : '';
    var baseType = type.replace(/\/.*$/, '');
    return accept.split(',').map(function (type) {
      return type.trim();
    }).filter(function (type) {
      return type;
    }).some(function (acceptedType) {
      if (/\..+$/.test(acceptedType)) {
        return extension === acceptedType;
      }

      if (/\/\*$/.test(acceptedType)) {
        return baseType === acceptedType.replace(/\/\*$/, '');
      } // eslint-disable-next-line no-useless-escape


      if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
        return type === acceptedType;
      }

      return false;
    });
  });
  return filesKeys.map(function (key) {
    return files[key];
  });
}
function getFilesFromClipboardData(clipboardData) {
  var files = [];
  Object.keys(clipboardData.items).forEach(function (key) {
    var item = clipboardData.items[key];

    if (item.kind === 'file') {
      var file = item.getAsFile();
      if (file) files.push(file);
    }
  });
  return files;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ lang_Lang; });

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(2);

// CONCATENATED MODULE: ./src/utils/deep-assign.js

var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (val === undefined || val === null) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !Object(util["f" /* isObject */])(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
// CONCATENATED MODULE: ./src/utils/lang.js


var lang_Lang = /*#__PURE__*/function () {
  function Lang(options) {
    if (options === void 0) {
      options = {};
    }

    this.config = {
      lang: 'zh-CN',
      langConfig: {
        'zh-CN': {}
      }
    };
    this.options = options;
  }

  var _proto = Lang.prototype;

  _proto.use = function use(lang, config) {
    var _this$add;

    this.config.lang = lang;
    this.add((_this$add = {}, _this$add[lang] = config, _this$add));
    if (this.options.afterUse) this.options.afterUse(lang, config);
  };

  _proto.add = function add(config) {
    if (config === void 0) {
      config = {};
    }

    deepAssign(this.config.langConfig, config);
  };

  return Lang;
}();



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(20);
var FilterCSS = __webpack_require__(24);


/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  },
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_scroll_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _utils_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    tabSize: {
      type: Number,
      default: 2
    },
    scrollContainer: {
      type: Function,
      default: function _default() {
        return window;
      }
    },
    top: {
      type: Number,
      default: 0
    }
  },
  emits: ['image-click'],
  methods: {
    handlePreviewClick: function handlePreviewClick(e) {
      var target = e.target; // image preview

      if (target.tagName === 'IMG') {
        var src = target.getAttribute('src');
        if (!src) return;
        var imageEls = Array.from(this.$el.querySelectorAll('img'));
        var images = imageEls.map(function (el) {
          return el.getAttribute('src');
        }).filter(function (src) {
          return src;
        });
        var imagePreviewInitIndex = imageEls.indexOf(target);
        this.$emit('image-click', images, imagePreviewInitIndex);
        return;
      }

      var scrollToTargetId = target.getAttribute(_utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__[/* ANCHOR_MARKUP */ "a"]);
      var scrollToTarget = this.$el.querySelector("[" + _utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__[/* HEADING_MARKUP */ "b"] + "=\"" + scrollToTargetId + "\"]");

      if (scrollToTarget) {
        this.scrollToTarget({
          target: scrollToTarget
        });
      }
    },
    getOffsetTop: function getOffsetTop(target, container) {
      var rect = target.getBoundingClientRect();

      if (container === window || container === document.documentElement) {
        return rect.top;
      }

      return rect.top - container.getBoundingClientRect().top;
    },
    scrollToTarget: function scrollToTarget(_ref) {
      var target = _ref.target,
          _ref$scrollContainer = _ref.scrollContainer,
          scrollContainer = _ref$scrollContainer === void 0 ? this.scrollContainer() : _ref$scrollContainer,
          _ref$top = _ref.top,
          top = _ref$top === void 0 ? this.top : _ref$top,
          onScrollEnd = _ref.onScrollEnd;
      var offsetTop = this.getOffsetTop(target, scrollContainer);
      var scrollTop = Object(_utils_scroll_top__WEBPACK_IMPORTED_MODULE_0__[/* getScrollTop */ "a"])(scrollContainer) + offsetTop - top;
      Object(_utils_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        scrollTarget: scrollContainer,
        scrollToTop: scrollTop,
        onScrollEnd: onScrollEnd
      });
    },
    scrollToLine: function scrollToLine(_ref2) {
      var lineIndex = _ref2.lineIndex,
          onScrollEnd = _ref2.onScrollEnd;

      if (lineIndex) {
        var target = this.$el.querySelector("[" + _utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__[/* LINE_MARKUP */ "c"] + "=\"" + lineIndex + "\"]");
        if (target) this.scrollToTarget({
          target: target,
          onScrollEnd: onScrollEnd
        });
      }
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = __webpack_require__(14).FilterCSS;
var getDefaultCSSWhiteList = __webpack_require__(14).getDefaultWhiteList;
var _ = __webpack_require__(15);

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width",
    ],
  };
}

var defaultCSSFilter = new FilterCSS();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end,
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;
      _.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    },
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
}
var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _ = __webpack_require__(15);

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    var tagName = html.slice(1, -1);
  } else {
    var tagName = html.slice(1, i + 1);
  }
  tagName = _.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag(html, onTag, escapeHtml) {
  "use strict";

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c === '"' || c === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr(html, onAttr) {
  "use strict";

  var lastPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastPos &&
        (c === '"' || c === "'") &&
        html.charAt(i - 1) === "="
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _.trim(html.slice(lastPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
    }
  }

  return _.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

exports.parseTag = parseTag;
exports.parseAttr = parseAttr;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_2__[/* image */ "l"],
  icon: 'v-md-icon-img',
  title: function title(editor) {
    return editor.langConfig.image.toolbar;
  },
  menus: [{
    name: 'image-link',
    text: function text(editor) {
      return editor.langConfig.imageLink.toolbar;
    },
    action: function action(editor, config) {
      if (config == null ? void 0 : config.insertWithSize) {
        editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_2__[/* image */ "l"], {
          width: 'auto',
          height: 'auto'
        });
      } else {
        editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_2__[/* image */ "l"]);
      }
    }
  }, {
    name: 'upload-image',
    text: function text(editor) {
      return editor.langConfig.uploadImage.toolbar;
    },
    action: function action(editor) {
      editor.uploadConfig = editor.uploadImgConfig;
      editor.$nextTick( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var event, files;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return editor.$refs.uploadFile.upload();

              case 2:
                event = _context.sent;
                files = Object(_utils_file__WEBPACK_IMPORTED_MODULE_3__[/* filesFilter */ "a"])(event.target.files, editor.uploadImgConfig);
                editor.emitUploadImage(event, files);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }]
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(20);
var parseStyle = __webpack_require__(25);
var _ = __webpack_require__(21);


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS (options) {
  options = shallowCopyObject(options || {});
  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onAttr = options.onAttr || DEFAULT.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  this.options = options;
}

FilterCSS.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


module.exports = FilterCSS;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _ = __webpack_require__(21);


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle (css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _.trim(source.slice(0, j));
        var value = _.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {
        // 在圆括号里面，忽略
      } else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _.trim(retCSS);
}

module.exports = parseStyle;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = __webpack_require__(14).FilterCSS;
var DEFAULT = __webpack_require__(19);
var parser = __webpack_require__(22);
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = __webpack_require__(15);

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing,
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList, onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }

  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag),
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        var html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        var ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(86)))

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createEditor; });

// EXTERNAL MODULE: ./src/utils/lang.js + 1 modules
var utils_lang = __webpack_require__(13);

// CONCATENATED MODULE: ./src/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  undo: {
    toolbar: '撤销'
  },
  redo: {
    toolbar: '重做'
  },
  clear: {
    toolbar: '清空'
  },
  h: {
    toolbar: '标题'
  },
  h1: {
    toolbar: '一级标题',
    placeholder: '一级标题'
  },
  h2: {
    toolbar: '二级标题',
    placeholder: '二级标题'
  },
  h3: {
    toolbar: '三级标题',
    placeholder: '三级标题'
  },
  h4: {
    toolbar: '四级标题',
    placeholder: '四级标题'
  },
  h5: {
    toolbar: '五级标题',
    placeholder: '五级标题'
  },
  h6: {
    toolbar: '六级标题',
    placeholder: '六级标题'
  },
  bold: {
    toolbar: '粗体',
    placeholder: '粗体'
  },
  italic: {
    toolbar: '斜体',
    placeholder: '斜体'
  },
  strikethrough: {
    toolbar: '删除线',
    placeholder: '删除线'
  },
  quote: {
    toolbar: '插入引用',
    placeholder: '引用'
  },
  ul: {
    toolbar: '无序列表',
    placeholder: '无序列表'
  },
  ol: {
    toolbar: '有序列表',
    placeholder: '有序列表'
  },
  table: {
    toolbar: '表格'
  },
  hr: {
    toolbar: '插入分割线'
  },
  link: {
    toolbar: '插入链接',
    descPlaceholder: '链接'
  },
  image: {
    toolbar: '插入图片'
  },
  imageLink: {
    toolbar: '添加图片链接'
  },
  uploadImage: {
    toolbar: '上传本地图片'
  },
  code: {
    toolbar: '插入代码块'
  },
  save: {
    toolbar: '保存'
  },
  preview: {
    enabled: '开启预览',
    disabled: '关闭预览'
  },
  toc: {
    title: '目录导航',
    enabled: '开启目录导航',
    disabled: '关闭目录导航'
  },
  syncScroll: {
    enabled: '开启同步滚动',
    disabled: '关闭同步滚动'
  },
  fullscreen: {
    enabled: '全屏（按ESC还原）',
    disabled: '退出全屏'
  }
});
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(2);

// CONCATENATED MODULE: ./src/utils/command.js

var defaultCommands = {};
Object(util["c" /* importAll */])(defaultCommands, __webpack_require__(38));
function command_registerCommand(target, commandName, callback) {
  if (commandName) {
    if (!target[commandName]) {
      target[commandName] = callback;
    } else {
      console.error("The command name is already in use: " + commandName);
    }
  } else {
    console.error('Command name is required');
  }
}
function commandWrapper(component) {
  component.commands = {};

  component.command = function (commandName, callback) {
    command_registerCommand(component.commands, commandName, callback);
  };

  Object.keys(defaultCommands).forEach(function (key) {
    var module = defaultCommands[key];
    var name = module.name,
        callback = module.default;
    component.command(name, callback);
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5);

// CONCATENATED MODULE: ./src/utils/toolbar.js


var defaultToolbars = {};
Object(util["c" /* importAll */])(defaultToolbars, __webpack_require__(61));
function toolbar_registerToolbar(target, name, config) {
  if (name) {
    target[name] = Object(esm_extends["a" /* default */])({}, config);
  } else {
    console.error('Toolbar name is required');
  }
}
function toolbarWrapper(component) {
  component.toolbars = {};

  component.toolbar = function (name, config) {
    toolbar_registerToolbar(component.toolbars, name, config);
  };

  Object.keys(defaultToolbars).forEach(function (key) {
    var module = defaultToolbars[key];
    var config = module.default;
    component.toolbar(config.name, config);
  });
}
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(81);

// EXTERNAL MODULE: ./src/preview.js + 6 modules
var preview = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/container.vue?vue&type=template&id=e6b02356&bindings={"leftToolbar":"props","rightToolbar":"props","toolbars":"props","fullscreen":"props","height":"props","noresize":"props","disabledMenus":"props","leftAreaVisible":"props","leftAreaTitle":"props","leftAreaReverse":"props","leftAreaWidth":"props","mode":"props","toolbarHeight":"data","heightGetter":"options","leftToolbarGroup":"options","rightToolbarGroup":"options","isPreviewMode":"options","isEditMode":"options","handleResize":"options","handleToolbarWrapperResize":"options","getToolbarConfig":"options","handleEditorWrapperClick":"options","handleToolbarItemClick":"options","handleToolbarMenuClick":"options"}

var _hoisted_1 = {
  class: "v-md-editor__left-area-body"
};
var _hoisted_2 = {
  class: "v-md-editor__right-area"
};
var _hoisted_3 = {
  class: "v-md-editor__toolbar",
  ref: "toolbarWrapper"
};
var _hoisted_4 = {
  class: "v-md-editor__main"
};
var _hoisted_5 = {
  class: "v-md-editor__preview-wrapper",
  ref: "previewWrapper"
};
function containervue_type_template_id_e6b02356_bindings_leftToolbar_props_rightToolbar_props_toolbars_props_fullscreen_props_height_props_noresize_props_disabledMenus_props_leftAreaVisible_props_leftAreaTitle_props_leftAreaReverse_props_leftAreaWidth_props_mode_props_toolbarHeight_data_heightGetter_options_leftToolbarGroup_options_rightToolbarGroup_options_isPreviewMode_options_isEditMode_options_handleResize_options_handleToolbarWrapperResize_options_getToolbarConfig_options_handleEditorWrapperClick_options_handleToolbarItemClick_options_handleToolbarMenuClick_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_editor_toolbar = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("editor-toolbar");

  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", {
    class: ["v-md-editor", ["v-md-editor--" + $props.mode, {
      'v-md-editor--fullscreen': $props.fullscreen,
      'v-md-editor--left-area-reverse': $props.leftAreaReverse
    }]],
    style: {
      height: $options.heightGetter
    }
  }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
    class: "v-md-editor__left-area",
    style: {
      width: $props.leftAreaVisible ? $props.leftAreaWidth : 0,
      borderWidth: $props.leftAreaVisible ? '1px' : 0
    }
  }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
    class: "v-md-editor__left-area-title",
    style: {
      height: $data.toolbarHeight + "px",
      lineHeight: $data.toolbarHeight + "px"
    }
  }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.leftAreaTitle), 5
  /* TEXT, STYLE */
  ), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_1, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "left-area")])], 4
  /* STYLE */
  ), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isPreviewMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_3, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_editor_toolbar, {
    class: "v-md-editor__toolbar-left",
    groups: $options.leftToolbarGroup,
    toolbars: $props.toolbars,
    "disabled-menus": $props.disabledMenus,
    onItemClick: $options.handleToolbarItemClick,
    onToolbarMenuClick: $options.handleToolbarMenuClick
  }, null, 8
  /* PROPS */
  , ["groups", "toolbars", "disabled-menus", "onItemClick", "onToolbarMenuClick"]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_editor_toolbar, {
    class: "v-md-editor__toolbar-right",
    groups: $options.rightToolbarGroup,
    toolbars: $props.toolbars,
    "disabled-mens": $props.disabledMenus,
    onItemClick: $options.handleToolbarItemClick,
    onToolbarMenuClick: $options.handleToolbarMenuClick
  }, null, 8
  /* PROPS */
  , ["groups", "toolbars", "disabled-mens", "onItemClick", "onToolbarMenuClick"])], 512
  /* NEED_PATCH */
  ), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isPreviewMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_4, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
    ref: "editorWrapper",
    class: "v-md-editor__editor-wrapper",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleEditorWrapperClick.apply($options, arguments);
    })
  }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "editor")], 512
  /* NEED_PATCH */
  ), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isPreviewMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_5, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "preview")], 512
  /* NEED_PATCH */
  ), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isEditMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "default")])])], 6
  /* CLASS, STYLE */
  );
}
// CONCATENATED MODULE: ./src/components/container.vue?vue&type=template&id=e6b02356&bindings={"leftToolbar":"props","rightToolbar":"props","toolbars":"props","fullscreen":"props","height":"props","noresize":"props","disabledMenus":"props","leftAreaVisible":"props","leftAreaTitle":"props","leftAreaReverse":"props","leftAreaWidth":"props","mode":"props","toolbarHeight":"data","heightGetter":"options","leftToolbarGroup":"options","rightToolbarGroup":"options","isPreviewMode":"options","isEditMode":"options","handleResize":"options","handleToolbarWrapperResize":"options","getToolbarConfig":"options","handleEditorWrapperClick":"options","handleToolbarItemClick":"options","handleToolbarMenuClick":"options"}

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar.vue?vue&type=template&id=50c68f6d&bindings={"markdownEditor":"options","groups":"props","toolbars":"props","disabledMenus":"props","getConfig":"options"}

var toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_1 = {
  key: 0
};
var toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_2 = {
  key: 0,
  class: "v-md-editor__toolbar-divider"
};
function toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_toolbar_item = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("toolbar-item");

  return $props.groups.length ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("ul", toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_1, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.groups, function (group, idx) {
    return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])(group, function (toolbarName) {
      return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_toolbar_item, {
        key: toolbarName,
        name: toolbarName,
        title: $options.getConfig(toolbarName, 'title'),
        icon: $options.getConfig(toolbarName, 'icon'),
        text: $options.getConfig(toolbarName, 'text'),
        active: $options.getConfig(toolbarName, 'active'),
        menus: $options.getConfig(toolbarName, 'menus'),
        "disabled-menus": $props.disabledMenus,
        onClick: function onClick($event) {
          return _ctx.$emit('item-click', $props.toolbars[toolbarName]);
        },
        onMenuClick: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.$emit('toolbar-menu-click', $event);
        })
      }, null, 8
      /* PROPS */
      , ["name", "title", "icon", "text", "active", "menus", "disabled-menus", "onClick"]);
    }), 128
    /* KEYED_FRAGMENT */
    )), idx !== $props.groups.length - 1 ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_2)) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true);
}
// CONCATENATED MODULE: ./src/components/toolbar.vue?vue&type=template&id=50c68f6d&bindings={"markdownEditor":"options","groups":"props","toolbars":"props","disabledMenus":"props","getConfig":"options"}

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar-item/index.vue?vue&type=template&id=30f6176d&bindings={"name":"props","title":"props","active":"props","text":"props","icon":"props","menus":"props","disabledMenus":"props","menuActive":"data","hasMenu":"options","menuItems":"options","menuMode":"options","hideMenu":"options","showMenu":"options","handleClick":"options","showTooltip":"options","handleHideTooltip":"options"}

var toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_hoisted_1 = {
  key: 1,
  class: "v-md-icon-arrow-down v-md-editor__menu-ctrl",
  ref: "menuCtrl"
};
function toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_md_tooltip = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-tooltip");

  var _component_v_md_menu = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-menu");

  var _directive_clickoutside = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveDirective"])("clickoutside");

  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])((Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
    class: ["v-md-editor__toolbar-item", [$props.icon, "v-md-editor__toolbar-item-" + $props.name, {
      'v-md-editor__toolbar-item--active': $props.active || $data.menuActive
    }, {
      'v-md-editor__toolbar-item--menu': $options.hasMenu
    }]],
    onMousedown: _cache[3] || (_cache[3] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {}, ["prevent"])),
    onMouseleave: _cache[4] || (_cache[4] = function () {
      return $options.handleHideTooltip.apply($options, arguments);
    }),
    onMousemove: _cache[5] || (_cache[5] = function () {
      return $options.showTooltip.apply($options, arguments);
    }),
    onClick: _cache[6] || (_cache[6] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.handleClick.apply($options, arguments);
    }, ["stop"]))
  }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.text) + " ", 1
  /* TEXT */
  ), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_v_md_tooltip, {
    ref: "tooltip",
    text: $props.title
  }, null, 8
  /* PROPS */
  , ["text"]), $options.hasMenu ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_menu, {
    key: 0,
    ref: "menu",
    mode: $options.menuMode,
    menus: $options.menuItems,
    "item-width": $props.menus.itemWidth,
    "row-num": $props.menus.rowNum,
    visible: $data.menuActive,
    "onUpdate:visible": _cache[1] || (_cache[1] = function ($event) {
      return $data.menuActive = $event;
    }),
    onItemClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('menu-click', $event);
    })
  }, null, 8
  /* PROPS */
  , ["mode", "menus", "item-width", "row-num", "visible"])) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true), $options.hasMenu ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("i", toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_hoisted_1, null, 512
  /* NEED_PATCH */
  )) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)], 34
  /* CLASS, HYDRATE_EVENTS */
  )), [[_directive_clickoutside, $options.hideMenu, "hideMenu"]]);
}
// CONCATENATED MODULE: ./src/components/toolbar-item/index.vue?vue&type=template&id=30f6176d&bindings={"name":"props","title":"props","active":"props","text":"props","icon":"props","menus":"props","disabledMenus":"props","menuActive":"data","hasMenu":"options","menuItems":"options","menuMode":"options","hideMenu":"options","showMenu":"options","handleClick":"options","showTooltip":"options","handleHideTooltip":"options"}

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar-item/tooltip.vue?vue&type=template&id=047bb94e&bindings={"text":"props","position":"data","visible":"data","show":"options","hide":"options","calculateLayout":"options"}

function tooltipvue_type_template_id_047bb94e_bindings_text_props_position_data_visible_data_show_options_hide_options_calculateLayout_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Transition"], {
    name: "v-md-fade-in"
  }, {
    default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
      return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
        style: {
          left: $data.position.x + "px",
          top: $data.position.y + "px"
        },
        class: "v-md-editor__tooltip"
      }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.text), 5
      /* TEXT, STYLE */
      ), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], $data.visible]])];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./src/components/toolbar-item/tooltip.vue?vue&type=template&id=047bb94e&bindings={"text":"props","position":"data","visible":"data","show":"options","hide":"options","calculateLayout":"options"}

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar-item/tooltip.vue?vue&type=script&lang=js
/* harmony default export */ var tooltipvue_type_script_lang_js = ({
  name: 'v-md-tooltip',
  props: {
    text: String
  },
  data: function data() {
    return {
      position: {
        x: 0,
        y: 0
      },
      visible: false
    };
  },
  methods: {
    show: function show(position) {
      this.position = {
        x: position.x,
        y: position.y
      };
      this.visible = true;
      this.$nextTick(this.calculateLayout);
    },
    hide: function hide() {
      this.visible = false;
    },
    calculateLayout: function calculateLayout() {
      // 容器右边框距离可视区域左侧的距离
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          right = _this$$el$getBounding.right;

      var windowWidth = document.documentElement.clientWidth;

      if (windowWidth - right < 0) {
        this.position.x -= right - windowWidth;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/toolbar-item/tooltip.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/toolbar-item/tooltip.vue?vue&type=style&index=0&lang=scss
var tooltipvue_type_style_index_0_lang_scss = __webpack_require__(82);

// CONCATENATED MODULE: ./src/components/toolbar-item/tooltip.vue





tooltipvue_type_script_lang_js.render = tooltipvue_type_template_id_047bb94e_bindings_text_props_position_data_visible_data_show_options_hide_options_calculateLayout_options_render

/* harmony default export */ var tooltip = (tooltipvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar-item/menu.vue?vue&type=template&id=57354868&bindings={"markdownEditor":"options","mode":"props","menus":"props","itemWidth":"props","rowNum":"props","visible":"props","style":"data","rowCount":"options","isListMode":"options","calculateLayout":"options","getRowMenus":"options","getText":"options","hide":"options","handleClick":"options"}

var menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_1 = {
  key: 1
};
var menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_2 = {
  class: "v-md-editor__menu-row"
};
function menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_md_render = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-render");

  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Transition"], {
    name: "v-md-zoom-in-top"
  }, {
    default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
      return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("ul", {
        class: ["v-md-editor__menu", ["v-md-editor__menu--" + $props.mode]],
        style: $data.style,
        onMousemove: _cache[1] || (_cache[1] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {}, ["stop"])),
        onClick: _cache[2] || (_cache[2] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {}, ["stop"]))
      }, [$options.isListMode ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], {
        key: 0
      }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.menus, function (item) {
        return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
          key: item.name,
          class: ["v-md-editor__menu-item", ["v-md-editor__menu-item-" + item.name, item.class]],
          onClick: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function ($event) {
            return $options.handleClick(item);
          }, ["stop"])
        }, [item.render ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_render, {
          key: 0,
          render: item.render,
          editor: _ctx.$self
        }, null, 8
        /* PROPS */
        , ["render", "editor"])) : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], {
          key: 1
        }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($options.getText(item.text)), 1
        /* TEXT */
        )], 64
        /* STABLE_FRAGMENT */
        ))], 10
        /* CLASS, PROPS */
        , ["onClick"]);
      }), 128
      /* KEYED_FRAGMENT */
      )) : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_1, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($options.rowCount, function (rowIndex) {
        return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_2, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($options.getRowMenus(rowIndex), function (item) {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("span", {
            key: item.name,
            style: {
              width: $props.itemWidth
            },
            class: ["v-md-editor__menu-item", ["v-md-editor__menu-item-" + item.name, item.class]],
            onClick: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function ($event) {
              return $options.handleClick(item);
            }, ["stop"])
          }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(item.text), 15
          /* TEXT, CLASS, STYLE, PROPS */
          , ["onClick"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))]))], 38
      /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], $props.visible]])];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./src/components/toolbar-item/menu.vue?vue&type=template&id=57354868&bindings={"markdownEditor":"options","mode":"props","menus":"props","itemWidth":"props","rowNum":"props","visible":"props","style":"data","rowCount":"options","isListMode":"options","calculateLayout":"options","getRowMenus":"options","getText":"options","hide":"options","handleClick":"options"}

// CONCATENATED MODULE: ./src/components/render.js
var renderFn = function renderFn(props, _ref) {
  var data = _ref.data;
  return props.render.apply(props, data.$attrs);
};

renderFn.props = ['render'];
/* harmony default export */ var components_render = (renderFn);
// CONCATENATED MODULE: ./src/utils/constants/menu-mode.js
/* harmony default export */ var menu_mode = ({
  LIST: 'list',
  PANEL: 'panel'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar-item/menu.vue?vue&type=script&lang=js


/* harmony default export */ var menuvue_type_script_lang_js = ({
  name: 'v-md-menu',
  components: {
    VMdRender: components_render
  },
  inject: ['markdownEditor'],
  props: {
    mode: {
      type: String,
      default: menu_mode.PANEL
    },
    menus: Array,
    itemWidth: {
      type: String,
      default: '30px'
    },
    rowNum: {
      type: Number,
      default: 10
    },
    visible: Boolean
  },
  emits: ['update:visible', 'item-click'],
  data: function data() {
    return {
      style: {
        left: 0
      }
    };
  },
  computed: {
    rowCount: function rowCount() {
      return Math.ceil(this.menus.length / this.rowNum);
    },
    isListMode: function isListMode() {
      return this.mode === menu_mode.LIST;
    }
  },
  watch: {
    visible: function visible() {
      if (this.visible) this.$nextTick(this.calculateLayout);
    }
  },
  methods: {
    calculateLayout: function calculateLayout() {
      // 容器右边框距离可视区域左侧的距离
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          right = _this$$el$getBounding.right;

      var windowWidth = document.documentElement.clientWidth;
      if (windowWidth - right < 0) this.style = {
        right: 0
      };
    },
    getRowMenus: function getRowMenus(rowIndex) {
      var end = rowIndex * this.rowNum;
      var start = end - this.rowNum;
      return this.menus.slice(start, end);
    },
    getText: function getText(text) {
      if (typeof text === 'function') {
        return text(this.markdownEditor);
      }

      return text;
    },
    hide: function hide() {
      this.$emit('update:visible', false);
    },
    handleClick: function handleClick(item) {
      this.$emit('item-click', item);
      this.hide();
    }
  }
});
// CONCATENATED MODULE: ./src/components/toolbar-item/menu.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/toolbar-item/menu.vue?vue&type=style&index=0&lang=scss
var menuvue_type_style_index_0_lang_scss = __webpack_require__(83);

// CONCATENATED MODULE: ./src/components/toolbar-item/menu.vue





menuvue_type_script_lang_js.render = menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_render

/* harmony default export */ var menu = (menuvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/utils/clickoutside.js
// Modified from https://github.com/ElemeFE/element/blob/dev/src/utils/clickoutside.js

var nodeList = [];
var ctx = '@@clickoutsideContext';
var startClick;
var seed = 0;

if (util["d" /* inBrowser */]) {
  document.addEventListener('mousedown', function (e) {
    startClick = e;
  });
  document.addEventListener('mouseup', function (e) {
    nodeList.forEach(function (node) {
      return node[ctx].documentHandler(e, startClick);
    });
  });
}

function createDocumentHandler(el, binding, vnode) {
  return function (mouseup, mousedown) {
    if (mouseup === void 0) {
      mouseup = {};
    }

    if (mousedown === void 0) {
      mousedown = {};
    }

    if (!vnode || !binding || !binding.instance || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target) {
      return;
    }

    if (binding.arg && el[ctx].methodName && binding.instance[el[ctx].methodName]) {
      binding.instance[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/* harmony default export */ var clickoutside = ({
  beforeMount: function beforeMount(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.arg,
      bindingFn: binding.value
    };
  },
  updated: function updated(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.arg;
    el[ctx].bindingFn = binding.value;
  },
  unmounted: function unmounted(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }

    delete el[ctx];
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar-item/index.vue?vue&type=script&lang=js
var _components;






/* harmony default export */ var toolbar_itemvue_type_script_lang_js = ({
  name: 'toolbar-item',
  directives: {
    Clickoutside: clickoutside
  },
  components: (_components = {}, _components[tooltip.name] = tooltip, _components[menu.name] = menu, _components),
  props: {
    name: String,
    title: String,
    active: Boolean,
    text: String,
    icon: String,
    menus: [Array, Object],
    disabledMenus: Array
  },
  emits: ['click', 'menu-click'],
  data: function data() {
    return {
      menuActive: false
    };
  },
  computed: {
    hasMenu: function hasMenu() {
      var _this$menuItems;

      return (_this$menuItems = this.menuItems) == null ? void 0 : _this$menuItems.length;
    },
    menuItems: function menuItems() {
      var _this = this;

      var menus = Object(util["f" /* isObject */])(this.menus) ? this.menus.items : this.menus;
      return menus == null ? void 0 : menus.filter(function (_ref) {
        var _this$disabledMenus;

        var menuName = _ref.name;
        return !((_this$disabledMenus = _this.disabledMenus) == null ? void 0 : _this$disabledMenus.includes(_this.name + "/" + menuName));
      });
    },
    menuMode: function menuMode() {
      return Object(util["f" /* isObject */])(this.menus) ? this.menus.mode : menu_mode.LIST;
    }
  },
  methods: {
    hideMenu: function hideMenu() {
      if (this.hasMenu) {
        this.menuActive = false;
      }
    },
    showMenu: function showMenu() {
      if (this.hasMenu) {
        this.menuActive = true;
      }
    },
    handleClick: function handleClick(e) {
      this.$emit('click');
      this.menuActive ? this.hideMenu() : this.showMenu();

      if (this.hasMenu) {
        this.handleHideTooltip();
      } else {
        this.showTooltip(e);
      }
    },
    showTooltip: function showTooltip(e) {
      var _this2 = this;

      var selfEl = this.$el;
      var target = e.target;
      var menuCtrl = this.$refs.menuCtrl;

      if (target !== selfEl && target !== menuCtrl || this.menuActive) {
        this.handleHideTooltip();
        return;
      }

      if (this.timmer) clearTimeout(this.timmer);
      var selfElRect = selfEl.getBoundingClientRect();
      var x = e.clientX - selfElRect.left;
      var y = e.clientY - selfElRect.top;
      this.timmer = setTimeout(function () {
        var _this2$$refs$tooltip;

        (_this2$$refs$tooltip = _this2.$refs.tooltip) == null ? void 0 : _this2$$refs$tooltip.show({
          x: x - 2,
          y: y + 20
        });
      }, 100);
    },
    handleHideTooltip: function handleHideTooltip() {
      if (this.timmer) clearTimeout(this.timmer);
      this.$refs.tooltip.hide();
    }
  }
});
// CONCATENATED MODULE: ./src/components/toolbar-item/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/toolbar-item/index.vue?vue&type=style&index=0&lang=scss
var toolbar_itemvue_type_style_index_0_lang_scss = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/toolbar-item/index.vue





toolbar_itemvue_type_script_lang_js.render = toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_render

/* harmony default export */ var toolbar_item = (toolbar_itemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/toolbar.vue?vue&type=script&lang=js
var toolbarvue_type_script_lang_js_components;


/* harmony default export */ var toolbarvue_type_script_lang_js = ({
  name: 'editor-toolbar',
  components: (toolbarvue_type_script_lang_js_components = {}, toolbarvue_type_script_lang_js_components[toolbar_item.name] = toolbar_item, toolbarvue_type_script_lang_js_components),
  inject: ['markdownEditor'],
  props: {
    groups: Array,
    toolbars: Object,
    disabledMenus: Array
  },
  emits: ['item-click', 'toolbar-menu-click'],
  methods: {
    getConfig: function getConfig(toolbarName, configName) {
      var toolbarConfig = this.toolbars[toolbarName];
      var value = toolbarConfig[configName];
      return typeof value === 'function' ? value(this.markdownEditor) : value;
    }
  }
});
// CONCATENATED MODULE: ./src/components/toolbar.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/toolbar.vue?vue&type=style&index=0&lang=scss
var toolbarvue_type_style_index_0_lang_scss = __webpack_require__(85);

// CONCATENATED MODULE: ./src/components/toolbar.vue





toolbarvue_type_script_lang_js.render = toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_render

/* harmony default export */ var toolbar = (toolbarvue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(34);

// CONCATENATED MODULE: ./src/utils/resize-event.js
// Modified from https://github.com/ElemeFE/element/blob/dev/src/utils/resize-event.js

/* eslint-disable no-underscore-dangle */

var isServer = typeof window === 'undefined';
/* istanbul ignore next */

var resizeHandler = function resizeHandler(entries) {
  entries.forEach(function (entry) {
    var listeners = entry.target.__resizeListeners__ || [];

    if (listeners.length) {
      listeners.forEach(function (fn) {
        fn();
      });
    }
  });
};
/* istanbul ignore next */


var resize_event_addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;

  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver_es["a" /* default */](resizeHandler);

    element.__ro__.observe(element);
  }

  element.__resizeListeners__.push(fn);
};
/* istanbul ignore next */

var removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;

  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};
// EXTERNAL MODULE: ./src/utils/constants/editor-mode.js
var editor_mode = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/container.vue?vue&type=script&lang=js
var containervue_type_script_lang_js_components;




/* harmony default export */ var containervue_type_script_lang_js = ({
  name: 'v-md-container',
  components: (containervue_type_script_lang_js_components = {}, containervue_type_script_lang_js_components[toolbar.name] = toolbar, containervue_type_script_lang_js_components),
  props: {
    leftToolbar: String,
    rightToolbar: String,
    toolbars: Object,
    fullscreen: Boolean,
    height: String,
    noresize: Boolean,
    disabledMenus: Array,
    leftAreaVisible: Boolean,
    leftAreaTitle: String,
    leftAreaReverse: Boolean,
    leftAreaWidth: {
      type: String,
      default: '200px'
    },
    mode: {
      type: String,
      default: editor_mode["a" /* default */].EDITABLE
    }
  },
  emits: ['resize', 'editor-wrapper-click', 'toolbar-item-click', 'toolbar-menu-click'],
  data: function data() {
    return {
      toolbarHeight: 0
    };
  },
  computed: {
    heightGetter: function heightGetter() {
      return this.fullscreen ? 'auto' : this.height;
    },
    leftToolbarGroup: function leftToolbarGroup() {
      return this.getToolbarConfig(this.leftToolbar);
    },
    rightToolbarGroup: function rightToolbarGroup() {
      return this.getToolbarConfig(this.rightToolbar);
    },
    isPreviewMode: function isPreviewMode() {
      return this.mode === editor_mode["a" /* default */].PREVIEW;
    },
    isEditMode: function isEditMode() {
      return this.mode === editor_mode["a" /* default */].EDIT;
    }
  },
  mounted: function mounted() {
    if (!this.noresize) {
      resize_event_addResizeListener(this.$refs.editorWrapper, this.handleResize);
      resize_event_addResizeListener(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize);
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (!this.noresize) {
      removeResizeListener(this.$refs.editorWrapper, this.handleResize);
      removeResizeListener(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize);
    }
  },
  methods: {
    handleResize: function handleResize() {
      this.$emit('resize');
    },
    handleToolbarWrapperResize: function handleToolbarWrapperResize() {
      var toolbarWrapper = this.$refs.toolbarWrapper;
      if (toolbarWrapper) this.toolbarHeight = toolbarWrapper.offsetHeight;
    },
    getToolbarConfig: function getToolbarConfig(toolbarStr) {
      var _this = this;

      return toolbarStr.split('|').map(function (group) {
        return group.split(' ').filter(function (toolbarName) {
          return toolbarName && _this.toolbars[toolbarName];
        });
      });
    },
    handleEditorWrapperClick: function handleEditorWrapperClick(e) {
      this.$emit('editor-wrapper-click', e);
    },
    handleToolbarItemClick: function handleToolbarItemClick(toolbar) {
      this.$emit('toolbar-item-click', toolbar);
    },
    handleToolbarMenuClick: function handleToolbarMenuClick(menu) {
      this.$emit('toolbar-menu-click', menu);
    }
  }
});
// CONCATENATED MODULE: ./src/components/container.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/container.vue?vue&type=style&index=0&lang=scss
var containervue_type_style_index_0_lang_scss = __webpack_require__(87);

// CONCATENATED MODULE: ./src/components/container.vue





containervue_type_script_lang_js.render = containervue_type_template_id_e6b02356_bindings_leftToolbar_props_rightToolbar_props_toolbars_props_fullscreen_props_height_props_noresize_props_disabledMenus_props_leftAreaVisible_props_leftAreaTitle_props_leftAreaReverse_props_leftAreaWidth_props_mode_props_toolbarHeight_data_heightGetter_options_leftToolbarGroup_options_rightToolbarGroup_options_isPreviewMode_options_isEditMode_options_handleResize_options_handleToolbarWrapperResize_options_getToolbarConfig_options_handleEditorWrapperClick_options_handleToolbarItemClick_options_handleToolbarMenuClick_options_render

/* harmony default export */ var container = (containervue_type_script_lang_js);
// CONCATENATED MODULE: ./src/utils/scrollbar-width.js
// Modified from https://github.com/ElemeFE/element/blob/dev/src/utils/scrollbar-width.js
var scrollBarWidth;
var scrollbar_width_isServer = typeof window === 'undefined';
/* harmony default export */ var scrollbar_width = (function () {
  if (scrollbar_width_isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.className = 'scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
});
// CONCATENATED MODULE: ./src/components/scrollbar/util.js
// Modified from https://github.com/ElemeFE/element/tree/dev/packages/scrollbar
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};
function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;
  var style = {};
  var translate = "translate" + bar.axis + "(" + move + "%)";
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  return style;
}
// CONCATENATED MODULE: ./src/components/scrollbar/bar.js

// Modified from https://github.com/ElemeFE/element/tree/dev/packages/scrollbar

/* istanbul ignore next */

/* harmony default export */ var scrollbar_bar = ({
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },
  render: function render() {
    var size = this.size,
        move = this.move,
        bar = this.bar;
    return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
      "class": ['scrollbar__bar', 'is-' + bar.key],
      "onMousedown": this.clickTrackHandler,
      "onClick": function onClick(e) {
        return e.stopPropagation();
      }
    }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
      "ref": "thumb",
      "class": "scrollbar__thumb",
      "onMousedown": this.clickThumbHandler,
      "style": renderThumbStyle({
        size: size,
        move: move,
        bar: bar
      })
    }, null)]);
  },
  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }

      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];
      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;
      document.addEventListener('mousemove', this.mouseMoveDocumentHandler, false);
      document.addEventListener('mouseup', this.mouseUpDocumentHandler, false);

      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];
      if (!prevPage) return;
      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];
      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler() {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      document.removeEventListener('mousemove', this.mouseMoveDocumentHandler, false);
      document.onselectstart = null;
    }
  },
  unmounted: function unmounted() {
    document.removeEventListener('mouseup', this.mouseUpDocumentHandler, false);
  }
});
// EXTERNAL MODULE: ./src/utils/smooth-scroll.js
var smooth_scroll = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/scrollbar/index.vue?vue&type=script&lang=js

// Modified from https://github.com/ElemeFE/element/tree/dev/packages/scrollbar





/* harmony default export */ var scrollbarvue_type_script_lang_js = ({
  name: 'scrollbar',
  components: {
    Bar: scrollbar_bar
  },
  props: {
    native: Boolean,
    disabled: Boolean,
    wrapStyle: null,
    wrapClass: null,
    viewClass: null,
    viewStyle: null,
    noresize: Boolean,
    // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },
  emits: ['scroll'],
  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },
  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },
  mounted: function mounted() {
    if (this.native || this.disabled) return;
    this.$nextTick(this.update);
    !this.noresize && resize_event_addResizeListener(this.$refs.resize, this.update);
  },
  beforeUnmount: function beforeUnmount() {
    if (this.native || this.disabled) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  },
  methods: {
    getScrollInfo: function getScrollInfo() {
      var wrap = this.wrap;
      return {
        left: wrap.scrollLeft,
        top: wrap.scrollTop,
        width: wrap.scrollWidth,
        height: wrap.scrollHeight,
        clientWidth: wrap.clientWidth,
        clientHeight: wrap.clientHeight
      };
    },
    scrollTo: function scrollTo(scrollTop) {
      Object(smooth_scroll["a" /* default */])({
        scrollTarget: this.wrap,
        scrollToTop: scrollTop
      });
    },
    handleScroll: function handleScroll() {
      var wrap = this.wrap;
      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
      this.$emit('scroll');
    },
    update: function update() {
      var wrap = this.wrap;
      if (!wrap) return;
      var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      var widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },
  render: function render() {
    if (this.disabled) return this.$slots.default();
    var gutter = scrollbar_width();
    var style = this.wrapStyle;

    if (gutter) {
      var scrollView = this.$refs.resize;
      var wrapper = this.$refs.wrap;
      var scrollViewHeight = scrollView == null ? void 0 : scrollView.scrollHeight;
      var scrollViewWidth = scrollView == null ? void 0 : scrollView.scrollWidth;
      var wrapperHeight = wrapper == null ? void 0 : wrapper.clientHeight;
      var wrapperWidth = wrapper == null ? void 0 : wrapper.clientWidth;
      var gutterWith = "-" + gutter + "px";
      var marginBottom = scrollViewWidth > wrapperWidth ? gutterWith : 0;
      var marginRight = scrollViewHeight > wrapperHeight ? gutterWith : 0;
      var gutterStyle = "margin-bottom: " + marginBottom + "; margin-right: " + marginRight + ";";

      if (Array.isArray(this.wrapStyle)) {
        style = Object(util["a" /* arraytoObject */])(this.wrapStyle);
        style.marginRight = gutterWith;
        style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }

    var view = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["h"])(this.tag, {
      class: ['scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default());
    var wrap = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
      "ref": "wrap",
      "style": style,
      "onScroll": this.handleScroll,
      "class": [this.wrapClass, 'scrollbar__wrap', gutter ? '' : 'scrollbar__wrap--hidden-default']
    }, [[view]]);
    var nodes;

    if (!this.native) {
      nodes = [wrap, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(scrollbar_bar, {
        "move": this.moveX,
        "size": this.sizeWidth
      }, null), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(scrollbar_bar, {
        "vertical": true,
        "move": this.moveY,
        "size": this.sizeHeight
      }, null)];
    } else {
      nodes = [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
        "ref": "wrap",
        "class": [this.wrapClass, 'scrollbar__wrap'],
        "style": style
      }, [[view]])];
    }

    return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["h"])('div', {
      class: 'scrollbar'
    }, nodes);
  }
});
// CONCATENATED MODULE: ./src/components/scrollbar/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/scrollbar/index.vue?vue&type=style&index=0&lang=scss
var scrollbarvue_type_style_index_0_lang_scss = __webpack_require__(88);

// CONCATENATED MODULE: ./src/components/scrollbar/index.vue





/* harmony default export */ var scrollbar = (scrollbarvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/toc-nav.vue?vue&type=template&id=035b0d52&bindings={"titles":"props","indent":"props"}

var toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_1 = {
  class: "v-md-editor__toc-nav"
};
var toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_2 = {
  class: "v-md-editor__toc-nav-title"
};
function toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("ul", toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_1, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.titles, function (item) {
    return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
      style: {
        paddingLeft: $props.indent * item.indent + "px"
      },
      onClick: function onClick($event) {
        return _ctx.$emit('nav-click', item);
      },
      class: "v-md-editor__toc-nav-item"
    }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("span", toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_2, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(item.title), 1
    /* TEXT */
    )], 12
    /* STYLE, PROPS */
    , ["onClick"]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]);
}
// CONCATENATED MODULE: ./src/components/toc-nav.vue?vue&type=template&id=035b0d52&bindings={"titles":"props","indent":"props"}

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/toc-nav.vue?vue&type=script&lang=js
/* harmony default export */ var toc_navvue_type_script_lang_js = ({
  name: 'toc-nav',
  props: {
    titles: Array,
    indent: {
      type: Number,
      default: 16
    }
  },
  emits: ['nav-click']
});
// CONCATENATED MODULE: ./src/components/toc-nav.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/toc-nav.vue?vue&type=style&index=0&lang=scss
var toc_navvue_type_style_index_0_lang_scss = __webpack_require__(89);

// CONCATENATED MODULE: ./src/components/toc-nav.vue





toc_navvue_type_script_lang_js.render = toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_render

/* harmony default export */ var toc_nav = (toc_navvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/mixins/common.js
var common_components;

// base css






/* harmony default export */ var common = ({
  inheritAttrs: false,
  components: (common_components = {}, common_components[preview["default"].name] = preview["default"], common_components[container.name] = container, common_components[scrollbar.name] = scrollbar, common_components[toc_nav.name] = toc_nav, common_components),
  provide: function provide() {
    return {
      markdownEditor: this
    };
  },
  props: {
    height: String,
    theme: Object,
    mode: {
      type: String,
      default: editor_mode["a" /* default */].EDITABLE
    },
    autofocus: Boolean,
    placeholder: String,
    tocNavPositionRight: Boolean,
    tabSize: {
      type: Number,
      default: 2
    },
    beforePreviewChange: {
      type: Function,
      default: function _default(text, next) {
        next(text);
      }
    }
  },
  emits: ['blur', 'change', 'save', 'image-click'],
  data: function data() {
    return {
      currentMode: this.mode,
      uploadConfig: {}
    };
  },
  watch: {
    mode: function mode() {
      this.currentMode = this.mode;
    },
    currentMode: function currentMode() {
      if (this.currentMode === editor_mode["a" /* default */].EDITABLE && this.enableSyncScroll) {
        this.$nextTick(this.previewSyncScroll);
      }
    }
  },
  created: function created() {
    if (this.theme) this.$options.use(this.theme);
  },
  computed: {
    isPreviewMode: function isPreviewMode() {
      return this.currentMode === editor_mode["a" /* default */].PREVIEW;
    },
    isEditMode: function isEditMode() {
      return this.currentMode === editor_mode["a" /* default */].EDIT;
    }
  },
  mounted: function mounted() {
    if (this.autofocus) {
      this.$nextTick(this.setFocusEnd);
    }
  },
  methods: {
    setFocusEnd: function setFocusEnd() {
      this.editorFocusEnd();
      this.editorScrollToTop(9999);
      this.previewScrollTo(9999);
    },
    // change event
    handleChange: function handleChange(text, html) {
      this.$emit('change', text, html);
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
    },
    handlePreviewImageClick: function handlePreviewImageClick(images, currentIndex) {
      this.$emit('image-click', images, currentIndex);
    },
    save: function save() {
      this.$emit('save', this.text, this.$refs.preview.html);
    },
    insert: function insert(getInsertContent) {
      var _this = this;

      this.focus();
      var currentSelectedStr = this.getCurrentSelectedStr();

      var _getInsertContent = getInsertContent(currentSelectedStr),
          selected = _getInsertContent.selected,
          text = _getInsertContent.text;

      this.replaceSelectionText(text);
      this.$nextTick(function () {
        _this.changeSelctionTo(text, selected);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/v-model.js
/* harmony default export */ var v_model = ({
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data: function data() {
    return {
      text: this.modelValue
    };
  },
  methods: {
    handleInput: function handleInput(val) {
      this.text = val;
      this.$emit('update:modelValue', val);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/fullscreen.js
/* harmony default export */ var fullscreen = ({
  props: {
    defaultFullscreen: Boolean
  },
  emits: ['fullscreen-change'],
  data: function data() {
    return {
      fullscreen: false
    };
  },
  watch: {
    fullscreen: function fullscreen() {
      this.$emit('fullscreen-change', this.fullscreen);
    }
  },
  mounted: function mounted() {
    window.addEventListener('keyup', this.handleWindowKeyup, false);

    if (this.defaultFullscreen) {
      this.toggleFullScreen();
    }
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('keyup', this.handleWindowKeyup, false);
  },
  methods: {
    handleWindowKeyup: function handleWindowKeyup(e) {
      // esc
      if (e.keyCode === 27 && this.fullscreen) {
        this.toggleFullScreen(false);
      }
    },
    toggleFullScreen: function toggleFullScreen(fullscreen) {
      if (fullscreen === void 0) {
        fullscreen = !this.fullscreen;
      }

      this.fullscreen = fullscreen;

      var _document$querySelect = document.querySelectorAll('html, body'),
          html = _document$querySelect[0],
          body = _document$querySelect[1];

      var overflow = this.fullscreen ? 'hidden' : null;
      body.style.overflow = overflow;
      html.style.overflow = overflow;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/upload-file.vue?vue&type=template&id=e27464d6&bindings={"uploadConfig":"props","handleUpload":"data","key":"data","upload":"options","chooseFile":"options"}

function upload_filevue_type_template_id_e27464d6_bindings_uploadConfig_props_handleUpload_data_key_data_upload_options_chooseFile_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("input", {
    type: "file",
    style: {
      "display": "none"
    },
    key: $data.key,
    accept: $props.uploadConfig.accept,
    multiple: $props.uploadConfig.multiple,
    onInput: _cache[1] || (_cache[1] = function () {
      return $data.handleUpload.apply($data, arguments);
    }),
    ref: "fileInput"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["accept", "multiple"]);
}
// CONCATENATED MODULE: ./src/components/upload-file.vue?vue&type=template&id=e27464d6&bindings={"uploadConfig":"props","handleUpload":"data","key":"data","upload":"options","chooseFile":"options"}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/upload-file.vue?vue&type=script&lang=js


/* harmony default export */ var upload_filevue_type_script_lang_js = ({
  name: 'v-md-upload-file',
  props: {
    uploadConfig: Object
  },
  data: function data() {
    return {
      handleUpload: function handleUpload() {},
      key: 0
    };
  },
  methods: {
    upload: function upload() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var event;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.chooseFile();

              case 2:
                event = _context.sent;
                return _context.abrupt("return", event);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    chooseFile: function chooseFile() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.handleUpload = function (e) {
          resolve(e); // 解决上传同一文件不触发change事件的问题

          _this2.key++;
        };

        _this2.$refs.fileInput.click();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/upload-file.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/upload-file.vue



upload_filevue_type_script_lang_js.render = upload_filevue_type_template_id_e27464d6_bindings_uploadConfig_props_handleUpload_data_key_data_upload_options_chooseFile_options_render

/* harmony default export */ var upload_file = (upload_filevue_type_script_lang_js);
// EXTERNAL MODULE: ./src/toolbar/image.js
var toolbar_image = __webpack_require__(23);

// EXTERNAL MODULE: ./src/utils/file.js
var file = __webpack_require__(12);

// EXTERNAL MODULE: ./src/utils/constants/command.js
var command = __webpack_require__(1);

// CONCATENATED MODULE: ./src/mixins/upload-image.js


var upload_image_components;





var defaultConfig = {
  accept: 'image/*',
  multiple: false
};
/* harmony default export */ var upload_image = ({
  components: (upload_image_components = {}, upload_image_components[upload_file.name] = upload_file, upload_image_components),
  props: {
    uploadImageConfig: Object
  },
  emits: ['upload-image'],
  computed: {
    uploadImgConfig: function uploadImgConfig() {
      return Object(esm_extends["a" /* default */])({}, defaultConfig, this.uploadImageConfig);
    },
    hasUploadImage: function hasUploadImage() {
      return !this.disabledMenus.includes(toolbar_image["default"].name + "/upload-image");
    }
  },
  methods: {
    handleDrop: function handleDrop(e) {
      var files = Object(file["a" /* filesFilter */])(e.dataTransfer.files, this.uploadImgConfig);
      this.emitUploadImage(e, files);
    },
    handlePaste: function handlePaste(e) {
      var clipboardData = e.clipboardData;
      if (!clipboardData) return;
      var files = Object(file["a" /* filesFilter */])(Object(file["b" /* getFilesFromClipboardData */])(clipboardData), this.uploadImgConfig);
      this.emitUploadImage(e, files);
    },
    emitUploadImage: function emitUploadImage(e, files) {
      var _this = this;

      if (this.hasUploadImage && files.length) {
        e.preventDefault();
        this.$emit('upload-image', e, function (imageConfig) {
          _this.execCommand(command["l" /* image */], imageConfig);
        }, files);
      }
    }
  }
});
// EXTERNAL MODULE: ./src/utils/constants/markup.js
var markup = __webpack_require__(3);

// CONCATENATED MODULE: ./src/mixins/sync-scroll.js

/* harmony default export */ var sync_scroll = ({
  data: function data() {
    return {
      enableSyncScroll: true
    };
  },
  methods: {
    toggleSyncScroll: function toggleSyncScroll(isEnable) {
      if (isEnable === void 0) {
        isEnable = !this.enableSyncScroll;
      }

      this.enableSyncScroll = isEnable;
      if (isEnable) this.previewSyncScroll();
    },
    previewSyncScroll: function previewSyncScroll() {
      if (this.isEditMode) return;
      var previewEl = this.$refs.preview.$el;
      var previewScrollerEl = this.$refs.previewScroller.$el;
      var previewLines = previewEl.querySelectorAll("[" + markup["c" /* LINE_MARKUP */] + "]");

      var _this$getScrollInfo = this.getScrollInfo(),
          editorClientHeight = _this$getScrollInfo.clientHeight,
          editorScrollTop = _this$getScrollInfo.top,
          editorScrollHeight = _this$getScrollInfo.height;

      var previewScrollWrapper = previewScrollerEl.querySelector('.scrollbar__wrap');

      if (editorClientHeight + editorScrollTop === editorScrollHeight) {
        var clientHeight = previewScrollWrapper.clientHeight;
        var scrollHeight = previewScrollWrapper.scrollHeight;
        this.previewScrollTo(scrollHeight - clientHeight);
      } else {
        var currentLine;
        var nextLine;

        for (var i = 0; i < previewLines.length; i++) {
          var lineNumber = previewLines[i].getAttribute(markup["c" /* LINE_MARKUP */]);
          var height = this.heightAtLine(lineNumber - 1, 'local');

          if (height < editorScrollTop) {
            currentLine = lineNumber;
          } else {
            nextLine = lineNumber;
            break;
          }
        }

        var percent = 0;

        if (currentLine && nextLine && currentLine !== nextLine) {
          var currentLineTop = this.heightAtLine(currentLine - 1, 'local');
          var nextLineTop = this.heightAtLine(nextLine - 1, 'local');
          percent = (editorScrollTop - currentLineTop) / (nextLineTop - currentLineTop);
        }

        var newLineTop = 0;
        var newNextLineTop = previewScrollWrapper.scrollHeight - previewScrollWrapper.clientHeight;

        if (currentLine) {
          newLineTop = previewEl.querySelector("[" + markup["c" /* LINE_MARKUP */] + "=\"" + currentLine + "\"]").offsetTop;
        }

        if (nextLine) {
          newNextLineTop = previewEl.querySelector("[" + markup["c" /* LINE_MARKUP */] + "=\"" + nextLine + "\"]").offsetTop;
        }

        var newScrollTop = newLineTop + (newNextLineTop - newLineTop) * percent;
        this.previewScrollTo(newScrollTop);
      }
    },
    handleEditorScroll: function handleEditorScroll() {
      if (!this.enableSyncScroll || this.ignoreSyncScroll) return;
      clearTimeout(this.scrollTimmer);
      this.scrollTimmer = setTimeout(this.previewSyncScroll, 60);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/toolbar.js

/* harmony default export */ var mixins_toolbar = (function (Component) {
  return {
    props: {
      leftToolbar: {
        type: String,
        default: 'undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save'
      },
      rightToolbar: {
        type: String,
        default: 'preview toc sync-scroll fullscreen'
      },
      toolbar: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      disabledMenus: {
        type: Array,
        default: function _default() {
          return ['image/upload-image'];
        }
      },
      toolbarConfig: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    created: function created() {
      var _this = this;

      var toolbars = Component.toolbars;
      this.toolbars = {};
      Object.keys(toolbars).forEach(function (name) {
        _this.registerToolbar(name, toolbars[name]);
      });
      Object.keys(this.toolbar).forEach(function (name) {
        _this.registerToolbar(name, _this.toolbar[name]);
      });
    },
    methods: {
      registerToolbar: function registerToolbar(name, config) {
        toolbar_registerToolbar(this.toolbars, name, config);
      },
      handleToolbarItemClick: function handleToolbarItemClick(toolbar) {
        var _toolbar$menus;

        if (toolbar.action && !((_toolbar$menus = toolbar.menus) == null ? void 0 : _toolbar$menus.length) && typeof toolbar.action === 'function') {
          toolbar.action.call(toolbar, this, this.toolbarConfig[toolbar.name]);
        }
      },
      handleToolbarMenuClick: function handleToolbarMenuClick(menu) {
        if (menu.action && typeof menu.action === 'function') {
          menu.action.call(menu, this, this.toolbarConfig[menu.name]);
        }
      }
    }
  };
});
// CONCATENATED MODULE: ./src/mixins/command.js

/* harmony default export */ var mixins_command = (function (Component) {
  return {
    created: function created() {
      var _this = this;

      var commands = Component.commands;
      this.commands = {};
      Object.keys(commands).forEach(function (name) {
        _this.registerCommand(name, commands[name]);
      });
    },
    methods: {
      registerCommand: function registerCommand(name, callback) {
        command_registerCommand(this.commands, name, callback);
      },
      execCommand: function execCommand(name) {
        var commandCallBack = this.commands[name];

        if (commandCallBack) {
          for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            arg[_key - 1] = arguments[_key];
          }

          commandCallBack.apply(void 0, [this].concat(arg));
        } else {
          console.error("Command not found: " + name);
        }
      }
    }
  };
});
// CONCATENATED MODULE: ./src/mixins/toc.js

/* harmony default export */ var toc = ({
  data: function data() {
    return {
      tocVisible: this.defaultShowToc,
      titles: []
    };
  },
  props: {
    includeLevel: {
      type: Array,
      default: function _default() {
        return [2, 3];
      }
    },
    defaultShowToc: Boolean
  },
  watch: {
    text: {
      immediate: true,
      handler: function handler(newval, oldVal) {
        // render in the first time
        if (typeof oldVal === 'undefined') {
          this.$nextTick(this.updateTocNav);
          return;
        }

        if (this.updateTocNavTimmer) clearTimeout(this.updateTocNavTimmer);
        this.updateTocNavTimmer = setTimeout(this.updateTocNav, 800);
      }
    }
  },
  computed: {
    anchorsSelector: function anchorsSelector() {
      return this.includeLevel.map(function (level) {
        return "h" + level;
      }).join(',');
    }
  },
  methods: {
    toggleToc: function toggleToc(visible) {
      if (visible === void 0) {
        visible = !this.tocVisible;
      }

      this.tocVisible = visible;
    },
    updateTocNav: function updateTocNav() {
      var _this$$refs$preview;

      var previewEl = (_this$$refs$preview = this.$refs.preview) == null ? void 0 : _this$$refs$preview.$el;
      if (!previewEl) return;
      var anchors = previewEl.querySelectorAll(this.anchorsSelector);
      var titles = Array.from(anchors).filter(function (title) {
        return !!title.innerText.trim();
      });

      if (!titles.length) {
        this.titles = [];
        return;
      }

      var hTags = Array.from(new Set(titles.map(function (title) {
        return title.tagName;
      }))).sort();
      this.titles = titles.map(function (el) {
        return {
          title: el.innerText,
          lineIndex: el.getAttribute(markup["c" /* LINE_MARKUP */]),
          indent: hTags.indexOf(el.tagName)
        };
      });
    },
    handleNavClick: function handleNavClick(_ref) {
      var lineIndex = _ref.lineIndex;
      this.scrollToLine(lineIndex);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/scroll.js
/* harmony default export */ var mixins_scroll = ({
  props: {
    previewScrollContainer: Function
  },
  computed: {
    getPreviewScrollContainer: function getPreviewScrollContainer() {
      var _this = this;

      return function () {
        var previewScrollContainer = _this.$refs.previewScroller.$el.querySelector('.scrollbar__wrap');

        var defaultContainer = _this.isPreviewMode ? window : previewScrollContainer;
        return _this.previewScrollContainer ? _this.previewScrollContainer() : defaultContainer;
      };
    }
  },
  methods: {
    previewScrollTo: function previewScrollTo(scrollTop) {
      this.$refs.previewScroller.scrollTo(scrollTop);
    },
    scrollToLine: function scrollToLine(lineIndex) {
      var _this2 = this;

      if (!this.isPreviewMode) {
        this.editorScrollToLine(lineIndex);
      }

      if (!this.isEditMode) {
        this.ignoreSyncScroll = true;
        this.previewScrollToLine({
          lineIndex: lineIndex,
          onScrollEnd: function onScrollEnd() {
            _this2.ignoreSyncScroll = false;
          }
        });
      }
    },
    editorScrollToLine: function editorScrollToLine(lineIndex) {
      var offsetTop = this.heightAtLine(lineIndex - 1, 'local');
      this.editorScrollToTop(offsetTop);
    },
    previewScrollToTarget: function previewScrollToTarget() {
      var _this$$refs$preview;

      (_this$$refs$preview = this.$refs.preview).scrollToTarget.apply(_this$$refs$preview, arguments);
    },
    previewScrollToLine: function previewScrollToLine(_ref) {
      var lineIndex = _ref.lineIndex,
          onScrollEnd = _ref.onScrollEnd;
      this.$refs.preview.scrollToLine({
        lineIndex: lineIndex,
        onScrollEnd: onScrollEnd
      });
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/hotkeys.js

var defaultHotkeys = {};
Object(util["c" /* importAll */])(defaultHotkeys, __webpack_require__(90));
/* harmony default export */ var hotkeys = (function (Component) {
  return {
    mounted: function mounted() {
      var _this = this;

      if (this.isPreviewMode) return;
      var hotkeys = Component.hotkeys;
      Object.keys(defaultHotkeys).forEach(function (key) {
        _this.registerHotkeys(defaultHotkeys[key].default);
      });
      hotkeys.forEach(function (config) {
        _this.registerHotkeys(config);
      });
    },
    methods: {
      registerHotkeys: function registerHotkeys(_ref) {
        var _this2 = this;

        var modifier = _ref.modifier,
            key = _ref.key,
            _action = _ref.action,
            _ref$preventDefault = _ref.preventDefault,
            preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;
        this.editorRegisterHotkeys({
          modifier: modifier,
          key: key,
          preventDefault: preventDefault,
          action: function action() {
            for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
              arg[_key] = arguments[_key];
            }

            return _action.apply(void 0, [_this2].concat(arg));
          }
        });
      }
    }
  };
});
// CONCATENATED MODULE: ./src/mixins/list.js
var ol = /^\s*([\d]+\.)( \[[ xX]])? /;
var ul = /^\s*([-*])( \[[ xX]])? /;
var ulSyntax = /([*-] |[\d]+\. )/;
var olSyntax = /([\d])+\.( \[[ xX]])? /;
/* harmony default export */ var list = ({
  mounted: function mounted() {
    var _this = this;

    if (this.isPreviewMode) return;
    this.registerHotkeys({
      key: 'enter',
      preventDefault: false,
      action: function action(editor, e) {
        if (e.isComposing) return;

        var cursorLineLeftText = _this.getCursorLineLeftText();

        var suffix;
        var syntax;

        if (ol.test(cursorLineLeftText)) {
          suffix = 'x. ';
          syntax = olSyntax;
          e.preventDefault();
        } else if (ul.test(cursorLineLeftText)) {
          suffix = '- ';
          syntax = ulSyntax;
          e.preventDefault();
        } else {
          return;
        }

        var indent = cursorLineLeftText.search(syntax);
        var suffixIndex = indent + suffix.length;
        var beforeText = cursorLineLeftText.slice(0, suffixIndex);
        var content = cursorLineLeftText.slice(suffixIndex, cursorLineLeftText.length);

        if (content) {
          if (suffix === 'x. ') {
            beforeText = beforeText.replace(/(\d+)/, window.parseInt(beforeText) + 1);
          }

          _this.replaceSelectionText("\n" + beforeText, 'end');
        } else {
          // break
          _this.delLineLeft();

          _this.replaceSelectionText('\n', 'end');
        }
      }
    });
  }
});
// CONCATENATED MODULE: ./src/mixins/lang.js
/* harmony default export */ var mixins_lang = ({
  computed: {
    langConfig: function langConfig() {
      var lang = this.$options.lang.config;
      return lang.langConfig[lang.lang];
    }
  }
});
// CONCATENATED MODULE: ./src/create-editor.js




 // mixins














var create_editor_lang = new utils_lang["a" /* default */]({
  afterUse: function afterUse(lang) {
    preview["default"].vMdParser.lang.config.lang = lang;
  }
});
create_editor_lang.config = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["reactive"])(create_editor_lang.config);
create_editor_lang.add({
  'zh-CN': zh_CN
});
function createEditor(component) {
  commandWrapper(component);
  toolbarWrapper(component);
  component.name = 'v-md-editor';
  component.lang = create_editor_lang;
  component.vMdParser = preview["default"].vMdParser;
  component.Preview = preview["default"];
  component.hotkeys = [];

  component.hotkey = function (config) {
    component.hotkeys.push(config);
  };

  component.mixins = [common, v_model, mixins_toolbar(component), mixins_command(component), hotkeys(component), fullscreen, upload_image, sync_scroll, toc, mixins_scroll, list, mixins_lang];
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/utils/key-codes.js
var keyCodesToName = {
  // Numbers and letters
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  // Function keys
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12'
};
var keyNames = {
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  space: [' ', 'Spacebar'],
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  delete: ['Backspace', 'Delete', 'Del']
};
// CONCATENATED MODULE: ./src/utils/hotkeys.js


var hotkeys_Hotkeys = /*#__PURE__*/function () {
  function Hotkeys() {
    this.hotkeys = {
      ctrl: {},
      shift: {},
      ctrlAlt: {},
      ctrlShift: {},
      keys: {}
    };
  }

  var _proto = Hotkeys.prototype;

  _proto.dispatch = function dispatch(e) {
    var keyName = this.getKeyName(e).toLowerCase();
    var opt;
    if (!keyName) return;

    if (this.isKeyEnterExact(e)) {
      opt = this.hotkeys.keys[keyName];
    } else if (this.isCtrlEnterExact(e)) {
      opt = this.hotkeys.ctrl[keyName];
    } else if (this.isShiftEnterExact(e)) {
      opt = this.hotkeys.shift[keyName];
    } else if (this.isCtrlAltEnterExact(e)) {
      opt = this.hotkeys.ctrlAlt[keyName];
    } else if (this.isCtrlShiftEnterExact(e)) {
      opt = this.hotkeys.ctrlShift[keyName];
    }

    if (opt) {
      var _opt = opt,
          action = _opt.action,
          preventDefault = _opt.preventDefault;
      if (preventDefault) e.preventDefault();
      action(e);
    }
  };

  _proto.isKeyEnterExact = function isKeyEnterExact(e) {
    return !this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
  };

  _proto.isCtrlShiftEnterExact = function isCtrlShiftEnterExact(e) {
    return this.isCtrlEnter(e) && this.isShiftEnter(e) && !this.isAltEnter(e);
  };

  _proto.isCtrlAltEnterExact = function isCtrlAltEnterExact(e) {
    return this.isCtrlEnter(e) && this.isAltEnter(e) && !this.isShiftEnter(e);
  };

  _proto.isCtrlEnterExact = function isCtrlEnterExact(e) {
    return this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
  };

  _proto.isShiftEnterExact = function isShiftEnterExact(e) {
    return this.isShiftEnter(e) && !this.isCtrlEnter(e) && !this.isAltEnter(e);
  };

  _proto.isCtrlEnter = function isCtrlEnter(e) {
    return e.ctrlKey || e.metaKey;
  };

  _proto.isShiftEnter = function isShiftEnter(e) {
    return e.shiftKey;
  };

  _proto.isAltEnter = function isAltEnter(e) {
    return e.altKey;
  };

  _proto.registerHotkeys = function registerHotkeys(_ref) {
    var modifier = _ref.modifier,
        key = _ref.key,
        _ref$preventDefault = _ref.preventDefault,
        preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
        action = _ref.action;

    if (modifier) {
      this.hotkeys[modifier][key] = {
        preventDefault: preventDefault,
        action: action
      };
    } else {
      this.hotkeys.keys[key] = {
        preventDefault: preventDefault,
        action: action
      };
    }
  };

  _proto.getKeyName = function getKeyName(e) {
    var key = e.key,
        keyCode = e.keyCode;

    if (key !== undefined) {
      var keyName = Object.keys(keyNames).find(function (keyName) {
        var validNames = keyNames[keyName];
        return typeof validNames === 'string' ? validNames === key : validNames.indexOf(key) !== -1;
      });
      return keyName || key;
    }

    return keyCodesToName[keyCode];
  };

  return Hotkeys;
}();

/* harmony default export */ var hotkeys = __webpack_exports__["a"] = (hotkeys_Hotkeys);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bold.js": 39,
	"./clear.js": 40,
	"./code.js": 41,
	"./fullscreen.js": 42,
	"./h1.js": 43,
	"./h2.js": 44,
	"./h3.js": 45,
	"./h4.js": 46,
	"./h5.js": 47,
	"./h6.js": 48,
	"./hr.js": 49,
	"./image.js": 50,
	"./italic.js": 51,
	"./link.js": 52,
	"./ol.js": 53,
	"./quote.js": 54,
	"./redo.js": 55,
	"./strikethrough.js": 56,
	"./sync-scroll.js": 57,
	"./table.js": 58,
	"./ul.js": 59,
	"./undo.js": 60
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '**';
    var suffix = '**';
    var placeholder = editor.langConfig.bold.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return "" + prefix + selectedGetter(selected) + suffix;
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.clear();
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '``` language';
    var suffix = '```';
    var text = prefix + "\n" + suffix;

    if (selected) {
      text = prefix + "\n  " + selected + "\n" + suffix;
    }

    return {
      text: text,
      selected: 'language'
    };
  });
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor, fullScreen) {
  editor.toggleFullScreen(fullScreen);
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["e"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '#';
    var placeholder = editor.langConfig.h1.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return prefix + " " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["f"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '##';
    var placeholder = editor.langConfig.h2.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return prefix + " " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["g"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '###';
    var placeholder = editor.langConfig.h3.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return prefix + " " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["h"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '####';
    var placeholder = editor.langConfig.h4.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return prefix + " " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["i"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '#####';
    var placeholder = editor.langConfig.h5.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return prefix + " " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["j"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '######';
    var placeholder = editor.langConfig.h6.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return prefix + " " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["k"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function () {
    return {
      text: '------------------------------------'
    };
  });
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      url = _ref.url,
      desc = _ref.desc,
      width = _ref.width,
      height = _ref.height;

  editor.insert(function () {
    var urlPlaceholder = 'http://';
    var descPlaceholder = 'Description';
    var selected = urlPlaceholder;
    var text = "![" + (desc || descPlaceholder) + "](" + (url || urlPlaceholder) + ")";
    var style = [];

    if (width) {
      style.push("width=\"" + width + "\"");
    }

    if (height) {
      style.push("height=\"" + height + "\"");
    }

    if (style.length) {
      text += "{{{" + style.join(' ') + "}}}";
    }

    if (url && desc) {
      selected = null;
    } else if (url) {
      selected = descPlaceholder;
    } else if (desc) {
      selected = urlPlaceholder;
    }

    return {
      text: text,
      selected: selected
    };
  });
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["m"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '*';
    var suffix = '*';
    var placeholder = editor.langConfig.italic.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return "" + prefix + selectedGetter(selected) + suffix;
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["n"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var descPlaceholder = editor.langConfig.link.descPlaceholder;
    var linkPlaceholder = 'http://';

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return "[" + (selected || descPlaceholder) + "](" + linkPlaceholder + ")";
      },
      selectedGetter: function selectedGetter(selected) {
        return selected ? linkPlaceholder : descPlaceholder;
      }
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["o"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var placeholder = editor.langConfig.ol.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected, rowIndex) {
        return rowIndex + ". " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter,
      ignoreEmptyLine: false
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["p"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '>';
    var content = selected || editor.langConfig.quote.placeholder;
    return {
      text: prefix + " " + content,
      selected: content
    };
  });
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["q"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.redo();
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["r"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var prefix = '~~';
    var suffix = '~~';
    var placeholder = editor.langConfig.strikethrough.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return "" + prefix + selectedGetter(selected) + suffix;
      },
      selectedGetter: selectedGetter
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor, isEnable) {
  editor.toggleSyncScroll(isEnable);
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function () {
    var content = '|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|';
    return {
      text: content,
      selected: 'column1'
    };
  });
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["u"]; });



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.insert(function (selected) {
    var placeholder = editor.langConfig.ul.placeholder;

    var selectedGetter = function selectedGetter(selected) {
      return selected || placeholder;
    };

    var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* generatorText */ "b"])({
      selected: selected,
      InsertGetter: function InsertGetter(selected) {
        return "- " + selectedGetter(selected);
      },
      selectedGetter: selectedGetter,
      ignoreEmptyLine: false
    }),
        insertContent = _generatorText.insertContent,
        newSelected = _generatorText.newSelected;

    return {
      text: insertContent,
      selected: newSelected
    };
  });
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["v"]; });


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  editor.undo();
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bold.js": 62,
	"./clear.js": 63,
	"./code.js": 64,
	"./fullscreen.js": 65,
	"./h.js": 66,
	"./hr.js": 67,
	"./image.js": 23,
	"./italic.js": 68,
	"./link.js": 69,
	"./ol.js": 70,
	"./preview.js": 71,
	"./quote.js": 72,
	"./redo.js": 73,
	"./save.js": 74,
	"./strikethrough.js": 75,
	"./sync-scroll.js": 76,
	"./table.js": 77,
	"./toc.js": 78,
	"./ul.js": 79,
	"./undo.js": 80
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 61;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* bold */ "a"],
  icon: 'v-md-icon-bold',
  title: function title(editor) {
    return editor.langConfig.bold.toolbar + "\uFF08Ctrl+B\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* bold */ "a"]);
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* clear */ "b"],
  icon: 'v-md-icon-clear',
  title: function title(editor) {
    return editor.langConfig.clear.toolbar;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* clear */ "b"]);
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* code */ "c"],
  icon: 'v-md-icon-code',
  title: function title(editor) {
    return editor.langConfig.code.toolbar;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* code */ "c"]);
  }
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* fullscreen */ "d"],
  icon: 'v-md-icon-fullscreen',
  title: function title(editor) {
    var fullscreenLang = editor.langConfig.fullscreen;
    return editor.fullscreen ? fullscreenLang.disabled : fullscreenLang.enabled;
  },
  active: function active(editor) {
    return editor.fullscreen;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* fullscreen */ "d"], !editor.fullscreen);
  }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'h',
  text: 'H',
  title: function title(editor) {
    return editor.langConfig.h.toolbar + "\uFF08Ctrl+1~6\uFF09";
  },
  menus: [{
    name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h1 */ "e"],
    text: function text(editor) {
      return editor.langConfig.h1.toolbar;
    },
    action: function action(editor) {
      editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h1 */ "e"]);
    }
  }, {
    name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h2 */ "f"],
    text: function text(editor) {
      return editor.langConfig.h2.toolbar;
    },
    action: function action(editor) {
      editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h2 */ "f"]);
    }
  }, {
    name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h3 */ "g"],
    text: function text(editor) {
      return editor.langConfig.h3.toolbar;
    },
    action: function action(editor) {
      editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h3 */ "g"]);
    }
  }, {
    name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h4 */ "h"],
    text: function text(editor) {
      return editor.langConfig.h4.toolbar;
    },
    action: function action(editor) {
      editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h4 */ "h"]);
    }
  }, {
    name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h5 */ "i"],
    text: function text(editor) {
      return editor.langConfig.h5.toolbar;
    },
    action: function action(editor) {
      editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h5 */ "i"]);
    }
  }, {
    name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h6 */ "j"],
    text: function text(editor) {
      return editor.langConfig.h6.toolbar;
    },
    action: function action(editor) {
      editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h6 */ "j"]);
    }
  }]
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* hr */ "k"],
  icon: 'v-md-icon-horizontal',
  title: function title(editor) {
    return editor.langConfig.hr.toolbar;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* hr */ "k"]);
  }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* italic */ "m"],
  icon: 'v-md-icon-italic',
  title: function title(editor) {
    return editor.langConfig.italic.toolbar + "\uFF08Ctrl+I\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* italic */ "m"]);
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* link */ "n"],
  icon: 'v-md-icon-link',
  title: function title(editor) {
    return editor.langConfig.link.toolbar + "\uFF08Ctrl+L\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* link */ "n"]);
  }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* ol */ "o"],
  icon: 'v-md-icon-ol',
  title: function title(editor) {
    return editor.langConfig.ol.toolbar + "\uFF08Ctrl+O\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* ol */ "o"]);
  }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preview',
  icon: 'v-md-icon-preview',
  title: function title(editor) {
    var previewLang = editor.langConfig.preview;
    return editor.currentMode === _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EDITABLE ? previewLang.disabled : previewLang.enabled;
  },
  active: function active(editor) {
    return editor.currentMode === _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EDITABLE;
  },
  action: function action(editor) {
    editor.currentMode = editor.currentMode === _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EDITABLE ? _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EDIT : _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EDITABLE;
  }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* quote */ "p"],
  icon: 'v-md-icon-quote',
  title: function title(editor) {
    return editor.langConfig.quote.toolbar + "\uFF08Ctrl+Q\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* quote */ "p"]);
  }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* redo */ "q"],
  icon: 'v-md-icon-redo',
  title: function title(editor) {
    return editor.langConfig.redo.toolbar + "\uFF08Ctrl+Y\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* redo */ "q"]);
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'save',
  icon: 'v-md-icon-save',
  title: function title(editor) {
    return editor.langConfig.save.toolbar + "\uFF08Ctrl+S\uFF09";
  },
  action: function action(editor) {
    editor.save();
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* strikethrough */ "r"],
  icon: 'v-md-icon-strikethrough',
  title: function title(editor) {
    return editor.langConfig.strikethrough.toolbar;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* strikethrough */ "r"]);
  }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* syncScroll */ "s"],
  icon: 'v-md-icon-sync',
  title: function title(editor) {
    var syncScrollLang = editor.langConfig.syncScroll;
    return editor.enableSyncScroll ? syncScrollLang.disabled : syncScrollLang.enabled;
  },
  active: function active(editor) {
    return editor.enableSyncScroll;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* syncScroll */ "s"], !editor.enableSyncScroll);
  }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* table */ "t"],
  icon: 'v-md-icon-table',
  title: function title(editor) {
    return editor.langConfig.table.toolbar;
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* table */ "t"]);
  }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'toc',
  icon: 'v-md-icon-toc',
  title: function title(editor) {
    var tocLang = editor.langConfig.toc;
    return editor.tocVisible ? tocLang.disabled : tocLang.enabled;
  },
  active: function active(editor) {
    return editor.tocVisible;
  },
  action: function action(editor) {
    editor.toggleToc();
  }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* ul */ "u"],
  icon: 'v-md-icon-ul',
  title: function title(editor) {
    return editor.langConfig.ul.toolbar + "\uFF08Ctrl+U\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* ul */ "u"]);
  }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* undo */ "v"],
  icon: 'v-md-icon-undo',
  title: function title(editor) {
    return editor.langConfig.undo.toolbar + "\uFF08Ctrl+Z\uFF09";
  },
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* undo */ "v"]);
  }
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_tooltip_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_tooltip_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_tooltip_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_menu_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_menu_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_menu_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_toolbar_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_toolbar_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_toolbar_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 86 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_container_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_container_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_container_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_toc_nav_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_toc_nav_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_toc_nav_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bold.js": 91,
	"./h1.js": 92,
	"./h2.js": 93,
	"./h3.js": 94,
	"./h4.js": 95,
	"./h5.js": 96,
	"./h6.js": 97,
	"./italic.js": 98,
	"./link.js": 99,
	"./ol.js": 100,
	"./quote.js": 101,
	"./save.js": 102,
	"./ul.js": 103
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 90;

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 'b',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* bold */ "a"]);
  }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: '1',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h1 */ "e"]);
  }
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: '2',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h2 */ "f"]);
  }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: '3',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h3 */ "g"]);
  }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: '4',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h4 */ "h"]);
  }
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: '5',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h5 */ "i"]);
  }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: '6',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* h6 */ "j"]);
  }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 'i',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* italic */ "m"]);
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 'l',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* link */ "n"]);
  }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 'o',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* ol */ "o"]);
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 'q',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* quote */ "p"]);
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 's',
  action: function action(editor) {
    editor.save();
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  modifier: 'ctrl',
  key: 'u',
  action: function action(editor) {
    editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__[/* ul */ "u"]);
  }
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_textarea_editor_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_textarea_editor_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_2_0_textarea_editor_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/base-editor.vue?vue&type=template&id=3b490186&bindings={}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_toc_nav = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("toc-nav");

  var _component_scrollbar = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("scrollbar");

  var _component_v_md_textarea_editor = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-textarea-editor");

  var _component_v_md_preview = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-preview");

  var _component_v_md_upload_file = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-upload-file");

  var _component_v_md_container = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-container");

  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_container, {
    "left-toolbar": _ctx.leftToolbar,
    "right-toolbar": _ctx.rightToolbar,
    toolbars: _ctx.toolbars,
    "disabled-menus": _ctx.disabledMenus,
    height: _ctx.height,
    fullscreen: _ctx.fullscreen,
    "left-area-visible": _ctx.tocVisible,
    "left-area-title": _ctx.langConfig.toc.title,
    "left-area-reverse": _ctx.tocNavPositionRight,
    mode: _ctx.currentMode,
    onEditorWrapperClick: _ctx.handleEditorWrapperClick,
    onToolbarItemClick: _ctx.handleToolbarItemClick,
    onToolbarMenuClick: _ctx.handleToolbarMenuClick,
    ref: "contaner"
  }, {
    "left-area": Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
      return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_scrollbar, null, {
        default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
          return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_toc_nav, {
            titles: _ctx.titles,
            onNavClick: _ctx.handleNavClick
          }, null, 8
          /* PROPS */
          , ["titles", "onNavClick"])];
        }),
        _: 1
      })];
    }),
    editor: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
      return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_scrollbar, {
        onScroll: _ctx.handleEditorScroll,
        ref: "editorScroller"
      }, {
        default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
          return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_v_md_textarea_editor, {
            "model-value": _ctx.text,
            "min-height": _ctx.textEditorMinHeight,
            placeholder: _ctx.placeholder,
            "onUpdate:modelValue": _ctx.handleInput,
            onClick: _cache[1] || (_cache[1] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {}, ["stop"])),
            onDrop: _ctx.handleDrop,
            onPaste: _ctx.handlePaste,
            onBlur: _ctx.handleBlur,
            ref: "editorEgine"
          }, null, 8
          /* PROPS */
          , ["model-value", "min-height", "placeholder", "onUpdate:modelValue", "onDrop", "onPaste", "onBlur"])];
        }),
        _: 1
      }, 8
      /* PROPS */
      , ["onScroll"])];
    }),
    preview: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
      return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_scrollbar, {
        ref: "previewScroller"
      }, {
        default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
          return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_v_md_preview, {
            text: _ctx.text,
            "tab-size": _ctx.tabSize,
            "scroll-container": _ctx.getPreviewScrollContainer,
            "before-change": _ctx.beforePreviewChange,
            onChange: _ctx.handleChange,
            onImageClick: _ctx.handlePreviewImageClick,
            ref: "preview"
          }, null, 8
          /* PROPS */
          , ["text", "tab-size", "scroll-container", "before-change", "onChange", "onImageClick"])];
        }),
        _: 1
      }, 512
      /* NEED_PATCH */
      )];
    }),
    default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function () {
      return [_ctx.hasUploadImage ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_upload_file, {
        key: 0,
        "upload-config": _ctx.uploadConfig,
        ref: "uploadFile"
      }, null, 8
      /* PROPS */
      , ["upload-config"])) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)];
    }),
    _: 1
  }, 8
  /* PROPS */
  , ["left-toolbar", "right-toolbar", "toolbars", "disabled-menus", "height", "fullscreen", "left-area-visible", "left-area-title", "left-area-reverse", "mode", "onEditorWrapperClick", "onToolbarItemClick", "onToolbarMenuClick"]);
}
// CONCATENATED MODULE: ./src/base-editor.vue?vue&type=template&id=3b490186&bindings={}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./src/components/textarea-editor.vue?vue&type=template&id=31fed1ea&bindings={"modelValue":"props","minHeight":"props","placeholder":"props","historyDebounce":"props","historyMax":"props","isComposing":"data","textareaEl":"options","handleCompositionStart":"options","handleCompositionUpdate":"options","handleCompositionEnd":"options","handlePaste":"options","handleBlur":"options","registerHotkeys":"options","handleKeydown":"options","heightAtLine":"options","clearTimeout":"options","updateCurrentHistoryRange":"options","handleInput":"options","saveHistory":"options","updateHistory":"options","goHistory":"options","getRange":"options","setRange":"options","focus":"options","insertText":"options","undo":"options","redo":"options"}

var _hoisted_1 = {
  class: "v-md-textarea-editor"
};

var _hoisted_2 = /*#__PURE__*/Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("br", null, null, -1
/* HOISTED */
);

function textarea_editorvue_type_template_id_31fed1ea_bindings_modelValue_props_minHeight_props_placeholder_props_historyDebounce_props_historyMax_props_isComposing_data_textareaEl_options_handleCompositionStart_options_handleCompositionUpdate_options_handleCompositionEnd_options_handlePaste_options_handleBlur_options_registerHotkeys_options_handleKeydown_options_heightAtLine_options_clearTimeout_options_updateCurrentHistoryRange_options_handleInput_options_saveHistory_options_updateHistory_options_goHistory_options_getRange_options_setRange_options_focus_options_insertText_options_undo_options_redo_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("pre", {
    style: {
      minHeight: $props.minHeight
    }
  }, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.modelValue.split('\n'), function (row, idx) {
    return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("section", {
      "data-line": idx + 1
    }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(row || ' '), 1
    /* TEXT */
    ), _hoisted_2], 8
    /* PROPS */
    , ["data-line"]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 4
  /* STYLE */
  ), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("textarea", {
    ref: "textarea",
    value: $props.modelValue,
    placeholder: $props.placeholder,
    spellcheck: "false",
    onCompositionstart: _cache[1] || (_cache[1] = function () {
      return $options.handleCompositionStart.apply($options, arguments);
    }),
    onCompositionupdate: _cache[2] || (_cache[2] = function () {
      return $options.handleCompositionUpdate.apply($options, arguments);
    }),
    onCompositionend: _cache[3] || (_cache[3] = function () {
      return $options.handleCompositionEnd.apply($options, arguments);
    }),
    onInput: _cache[4] || (_cache[4] = function () {
      return $options.handleInput.apply($options, arguments);
    }),
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.updateCurrentHistoryRange.apply($options, arguments);
    }),
    onPaste: _cache[6] || (_cache[6] = function () {
      return $options.handlePaste.apply($options, arguments);
    }),
    onBlur: _cache[7] || (_cache[7] = function () {
      return $options.handleBlur.apply($options, arguments);
    }),
    onKeydown: [_cache[8] || (_cache[8] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {}, ["prevent"]), ["tab"])), _cache[9] || (_cache[9] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.undo.apply($options, arguments);
    }, ["ctrl", "prevent", "exact"]), ["z"])), _cache[10] || (_cache[10] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.undo.apply($options, arguments);
    }, ["meta", "prevent", "exact"]), ["z"])), _cache[11] || (_cache[11] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.redo.apply($options, arguments);
    }, ["ctrl", "prevent", "exact"]), ["y"])), _cache[12] || (_cache[12] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.redo.apply($options, arguments);
    }, ["meta", "prevent", "exact"]), ["y"]))],
    onKeyup: [_cache[13] || (_cache[13] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.updateCurrentHistoryRange.apply($options, arguments);
    }, ["shift", "exact"]), ["up"])), _cache[14] || (_cache[14] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.updateCurrentHistoryRange.apply($options, arguments);
    }, ["shift", "exact"]), ["down"])), _cache[15] || (_cache[15] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.updateCurrentHistoryRange.apply($options, arguments);
    }, ["shift", "exact"]), ["left"])), _cache[16] || (_cache[16] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function () {
      return $options.updateCurrentHistoryRange.apply($options, arguments);
    }, ["shift", "exact"]), ["right"]))]
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["value", "placeholder"])]);
}
// CONCATENATED MODULE: ./src/components/textarea-editor.vue?vue&type=template&id=31fed1ea&bindings={"modelValue":"props","minHeight":"props","placeholder":"props","historyDebounce":"props","historyMax":"props","isComposing":"data","textareaEl":"options","handleCompositionStart":"options","handleCompositionUpdate":"options","handleCompositionEnd":"options","handlePaste":"options","handleBlur":"options","registerHotkeys":"options","handleKeydown":"options","heightAtLine":"options","clearTimeout":"options","updateCurrentHistoryRange":"options","handleInput":"options","saveHistory":"options","updateHistory":"options","goHistory":"options","getRange":"options","setRange":"options","focus":"options","insertText":"options","undo":"options","redo":"options"}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/insert-text-at-cursor/dist/index.esm.js
var browserSupportsTextareaTextNodes;
/**
 * @param {HTMLElement} input
 * @return {boolean}
 */

function canManipulateViaTextNodes(input) {
  if (input.nodeName !== "TEXTAREA") {
    return false;
  }

  if (typeof browserSupportsTextareaTextNodes === "undefined") {
    var textarea = document.createElement("textarea");
    textarea.value = 1;
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }

  return browserSupportsTextareaTextNodes;
}
/**
 * @param {HTMLTextAreaElement|HTMLInputElement} input
 * @param {string} text
 * @returns {void}
 */


function index_esm_index (input, text) {
  // Most of the used APIs only work with the field selected
  input.focus(); // IE 8-10

  if (document.selection) {
    var ieRange = document.selection.createRange();
    ieRange.text = text; // Move cursor after the inserted text

    ieRange.collapse(false
    /* to the end */
    );
    ieRange.select();
    return;
  } // Webkit + Edge


  var isSuccess = document.execCommand("insertText", false, text);

  if (!isSuccess) {
    var start = input.selectionStart;
    var end = input.selectionEnd; // Firefox (non-standard method)

    if (typeof input.setRangeText === "function") {
      input.setRangeText(text);
    } else {
      // To make a change we just need a Range, not a Selection
      var range = document.createRange();
      var textNode = document.createTextNode(text);

      if (canManipulateViaTextNodes(input)) {
        var node = input.firstChild; // If textarea is empty, just insert the text

        if (!node) {
          input.appendChild(textNode);
        } else {
          // Otherwise we need to find a nodes for start and end
          var offset = 0;
          var startNode = null;
          var endNode = null;

          while (node && (startNode === null || endNode === null)) {
            var nodeLength = node.nodeValue.length; // if start of the selection falls into current node

            if (start >= offset && start <= offset + nodeLength) {
              range.setStart(startNode = node, start - offset);
            } // if end of the selection falls into current node


            if (end >= offset && end <= offset + nodeLength) {
              range.setEnd(endNode = node, end - offset);
            }

            offset += nodeLength;
            node = node.nextSibling;
          } // If there is some text selected, remove it as we should replace it


          if (start !== end) {
            range.deleteContents();
          }
        }
      } // If the node is a textarea and the range doesn't span outside the element
      //
      // Get the commonAncestorContainer of the selected range and test its type
      // If the node is of type `#text` it means that we're still working with text nodes within our textarea element
      // otherwise, if it's of type `#document` for example it means our selection spans outside the textarea.


      if (canManipulateViaTextNodes(input) && range.commonAncestorContainer.nodeName === "#text") {
        // Finally insert a new node. The browser will automatically split start and end nodes into two if necessary
        range.insertNode(textNode);
      } else {
        // If the node is not a textarea or the range spans outside a textarea the only way is to replace the whole value
        var value = input.value;
        input.value = value.slice(0, start) + text + value.slice(end);
      }
    } // Correct the cursor position to be at the end of the insertion


    input.setSelectionRange(start + text.length, start + text.length); // Notify any possible listeners of the change

    var e = document.createEvent("UIEvent");
    e.initEvent("input", true, false);
    input.dispatchEvent(e);
  }
}

/* harmony default export */ var index_esm = (index_esm_index);
//# sourceMappingURL=index.esm.js.map

// EXTERNAL MODULE: ./src/utils/hotkeys.js + 1 modules
var hotkeys = __webpack_require__(36);

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/components/textarea-editor.vue?vue&type=script&lang=js




/* harmony default export */ var textarea_editorvue_type_script_lang_js = ({
  name: 'v-md-textarea-editor',
  props: {
    modelValue: String,
    minHeight: String,
    placeholder: String,
    historyDebounce: {
      type: Number,
      default: 400
    },
    historyMax: {
      type: Number,
      default: 30
    }
  },
  emits: ['blur', 'paste', 'update:modelValue'],
  data: function data() {
    return {
      isComposing: false
    };
  },
  computed: {
    textareaEl: function textareaEl() {
      return this.$refs.textarea;
    }
  },
  watch: {
    modelValue: function modelValue() {
      var _this = this;

      this.clearTimeout();

      if (!this.triggerInputBySetHistory) {
        this.timmer = setTimeout(function () {
          _this.saveHistory();

          _this.clearTimeout();
        }, this.historyDebounce);
      }
    }
  },
  created: function created() {
    this.historyStack = [];
    this.historyIndex = 0;
    this.hotkeysManager = new hotkeys["a" /* default */]();
  },
  mounted: function mounted() {
    this.saveHistory();
    this.textareaEl.addEventListener('keydown', this.handleKeydown, false);
  },
  beforeUnmount: function beforeUnmount() {
    this.textareaEl.removeEventListener('keydown', this.handleKeydown, false);
  },
  methods: {
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate: function handleCompositionUpdate(event) {
      var text = event.target.value;
      var lastCharacter = text[text.length - 1] || '';
      this.isComposing = !Object(util["e" /* isKorean */])(lastCharacter);
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handlePaste: function handlePaste(e) {
      this.$emit('paste', e);
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
    },
    registerHotkeys: function registerHotkeys() {
      var _this$hotkeysManager;

      (_this$hotkeysManager = this.hotkeysManager).registerHotkeys.apply(_this$hotkeysManager, arguments);
    },
    handleKeydown: function handleKeydown(e) {
      this.hotkeysManager.dispatch(e);
    },
    heightAtLine: function heightAtLine(lineIndex) {
      var el = this.$el.querySelector("section[data-line=\"" + lineIndex + "\"]");
      return el ? el.offsetTop + el.offsetHeight : 0;
    },
    clearTimeout: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timmer) clearTimeout(this.timmer);
      this.timmer = null;
    }),
    updateCurrentHistoryRange: function updateCurrentHistoryRange() {
      if (!this.timmer) {
        this.updateHistory(this.historyIndex, {
          range: this.getRange()
        });
      }
    },
    handleInput: function handleInput(e) {
      if (this.isComposing) return;
      this.$emit('update:modelValue', e.target.value);
    },
    saveHistory: function saveHistory() {
      var range = this.getRange();
      var history = {
        value: this.modelValue,
        range: range
      };
      this.historyStack = this.historyStack.slice(0, this.historyIndex + 1);
      this.historyStack.push(history);
      if (this.historyStack.length > this.historyMax) this.historyStack.shift();
      this.historyIndex = this.historyStack.length - 1;
    },
    updateHistory: function updateHistory(index, data) {
      var history = this.historyStack[index];
      if ('value' in data) history.value = data.value;

      Object(esm_extends["a" /* default */])(history.range, data.range);
    },
    goHistory: function goHistory(index) {
      var _this2 = this;

      var _this$historyStack$in = this.historyStack[index],
          value = _this$historyStack$in.value,
          range = _this$historyStack$in.range;
      this.$emit('update:modelValue', value);
      this.triggerInputBySetHistory = true;
      this.$nextTick(function () {
        _this2.triggerInputBySetHistory = false;

        _this2.setRange(range);
      });
    },
    getRange: function getRange() {
      return {
        start: this.textareaEl.selectionStart,
        end: this.textareaEl.selectionEnd
      };
    },
    setRange: function setRange(_ref) {
      var start = _ref.start,
          end = _ref.end;
      this.textareaEl.setSelectionRange(start, end);
      this.updateCurrentHistoryRange();
    },
    focus: function focus() {
      this.textareaEl.focus();
    },
    insertText: function insertText(text) {
      index_esm(this.textareaEl, text);
    },
    undo: function undo() {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.goHistory(this.historyIndex);
      }
    },
    redo: function redo() {
      if (this.historyIndex < this.historyStack.length - 1) {
        this.historyIndex++;
        this.goHistory(this.historyIndex);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/textarea-editor.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/textarea-editor.vue?vue&type=style&index=0&lang=scss
var textarea_editorvue_type_style_index_0_lang_scss = __webpack_require__(106);

// CONCATENATED MODULE: ./src/components/textarea-editor.vue





textarea_editorvue_type_script_lang_js.render = textarea_editorvue_type_template_id_31fed1ea_bindings_modelValue_props_minHeight_props_placeholder_props_historyDebounce_props_historyMax_props_isComposing_data_textareaEl_options_handleCompositionStart_options_handleCompositionUpdate_options_handleCompositionEnd_options_handlePaste_options_handleBlur_options_registerHotkeys_options_handleKeydown_options_heightAtLine_options_clearTimeout_options_updateCurrentHistoryRange_options_handleInput_options_saveHistory_options_updateHistory_options_goHistory_options_getRange_options_setRange_options_focus_options_insertText_options_undo_options_redo_options_render

/* harmony default export */ var textarea_editor = (textarea_editorvue_type_script_lang_js);
// EXTERNAL MODULE: ./src/create-editor.js + 60 modules
var create_editor = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/dist??ref--2-0!./src/base-editor.vue?vue&type=script&lang=js



var _components;




var component = {
  components: (_components = {}, _components[textarea_editor.name] = textarea_editor, _components),
  watch: {
    modelValue: function modelValue() {
      this.text = this.modelValue;
    },
    height: {
      handler: function handler() {
        var _this = this;

        return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          var editorWrapper;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (util["d" /* inBrowser */]) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return _this.$nextTick();

                case 4:
                  if (_this.height) {
                    editorWrapper = _this.$el.querySelector('.v-md-editor__editor-wrapper');
                    _this.textEditorMinHeight = window.getComputedStyle(editorWrapper).height;
                  } else {
                    _this.textEditorMinHeight = '';
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      immediate: true
    }
  },
  data: function data() {
    return {
      textEditorMinHeight: ''
    };
  },
  methods: {
    handleEditorWrapperClick: function handleEditorWrapperClick() {
      this.setFocusEnd();
    },
    // Must implement
    editorFocusEnd: function editorFocusEnd() {
      this.focus();
      this.$refs.editorEgine.setRange({
        start: this.text.length,
        end: this.text.length
      });
    },
    // Must implement
    delLineLeft: function delLineLeft() {
      var editorEgine = this.$refs.editorEgine;

      var _editorEgine$getRange = editorEgine.getRange(),
          start = _editorEgine$getRange.start;

      var leftText = this.getCursorLineLeftText();
      editorEgine.setRange({
        start: start - leftText.length - 1,
        end: start
      });
      this.replaceSelectionText('\n');
    },
    // Must implement
    getCursorLineLeftText: function getCursorLineLeftText() {
      var _this$$refs$editorEgi = this.$refs.editorEgine.getRange(),
          start = _this$$refs$editorEgi.start,
          end = _this$$refs$editorEgi.end;

      return start === end ? this.text.slice(0, start).split('\n').pop() : null;
    },
    // Must implement
    editorRegisterHotkeys: function editorRegisterHotkeys() {
      var _this$$refs$editorEgi2;

      (_this$$refs$editorEgi2 = this.$refs.editorEgine).registerHotkeys.apply(_this$$refs$editorEgi2, arguments);
    },
    // Must implement
    editorScrollToTop: function editorScrollToTop(scrollTop) {
      this.$refs.editorScroller.scrollTo(scrollTop);
    },
    // Must implement
    getScrollInfo: function getScrollInfo() {
      return this.$refs.editorScroller.getScrollInfo();
    },
    // Must implement
    heightAtLine: function heightAtLine() {
      var _this$$refs$editorEgi3;

      return (_this$$refs$editorEgi3 = this.$refs.editorEgine).heightAtLine.apply(_this$$refs$editorEgi3, arguments);
    },
    // Must implement
    focus: function focus() {
      this.$refs.editorEgine.focus();
    },
    // Must implement
    undo: function undo() {
      this.$refs.editorEgine.undo();
    },
    // Must implement
    redo: function redo() {
      this.$refs.editorEgine.redo();
    },
    // Must implement
    clear: function clear() {
      this.focus();
      this.handleInput('');
    },
    // Must implement
    replaceSelectionText: function replaceSelectionText(text) {
      this.$refs.editorEgine.insertText(text);
    },
    // Must implement
    getCurrentSelectedStr: function getCurrentSelectedStr() {
      var _this$$refs$editorEgi4 = this.$refs.editorEgine.getRange(),
          start = _this$$refs$editorEgi4.start,
          end = _this$$refs$editorEgi4.end;

      return end > start ? this.text.slice(start, end) : null;
    },
    // Must implement
    changeSelctionTo: function changeSelctionTo(insertText, selectedText) {
      var editorEgine = this.$refs.editorEgine;
      var selectedIndexOfStr = insertText.indexOf(selectedText);
      var cursorEndIndex = editorEgine.getRange().end;
      if (selectedIndexOfStr === -1) return;
      var text = this.text.slice(0, cursorEndIndex);
      var insertTextIndex = text.length - insertText.length;
      var rangeStartIndex = insertTextIndex + selectedIndexOfStr;
      var rangeEndIndex = rangeStartIndex + selectedText.length;
      this.$refs.editorEgine.setRange({
        start: rangeStartIndex,
        end: rangeEndIndex
      });
    }
  }
};
Object(create_editor["a" /* default */])(component);
/* harmony default export */ var base_editorvue_type_script_lang_js = (component);
// CONCATENATED MODULE: ./src/base-editor.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/base-editor.vue



base_editorvue_type_script_lang_js.render = render

/* harmony default export */ var base_editor = (base_editorvue_type_script_lang_js);
// EXTERNAL MODULE: ./src/utils/xss/index.js + 3 modules
var xss = __webpack_require__(7);

// EXTERNAL MODULE: ./src/assets/css/font.css
var font = __webpack_require__(18);

// CONCATENATED MODULE: ./src/base-editor.js
// This file is auto generated by build/build-entry.js

 // font css


var version = '2.3.15';

var base_editor_install = function install(app) {
  app.component(base_editor.name, base_editor);
};

base_editor.version = version;
base_editor.install = base_editor_install;
base_editor.xss = xss["a" /* default */];

base_editor.use = function (optionsOrInstall, opt) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(base_editor, opt);
  } else {
    optionsOrInstall.install(base_editor, opt);
  }

  return base_editor;
};

/* harmony default export */ var src_base_editor = __webpack_exports__["default"] = (base_editor);

/***/ })
/******/ ])["default"];
});