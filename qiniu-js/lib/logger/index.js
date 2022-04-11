"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _iterator = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol"));

var _reportV = require("./report-v3");

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof _symbol["default"] === "function" && o[_iterator["default"]];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var Logger =
/** @class */
function () {
  function Logger(token, disableReport, level, prefix) {
    if (disableReport === void 0) {
      disableReport = true;
    }

    if (level === void 0) {
      level = 'OFF';
    }

    if (prefix === void 0) {
      prefix = 'UPLOAD';
    }

    this.token = token;
    this.disableReport = disableReport;
    this.level = level;
    this.prefix = prefix; // 为每个类分配一个 id
    // 用以区分不同的上传任务

    this.id = ++Logger.id;
  }

  Logger.prototype.getPrintPrefix = function (level) {
    return "Qiniu-JS-SDK [" + level + "][" + this.prefix + "#" + this.id + "]:";
  };
  /**
   * @param  {V3LogInfo} data 上报的数据。
   * @param  {boolean} retry 重试次数，可选，默认为 3。
   * @description 向服务端上报统计信息。
   */


  Logger.prototype.report = function (data, retry) {
    if (this.disableReport) return;

    try {
      (0, _reportV.reportV3)(this.token, data, retry);
    } catch (error) {
      this.warn(error);
    }
  };
  /**
   * @param  {unknown[]} ...args
   * @description 输出 info 级别的调试信息。
   */


  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var allowLevel = ['INFO'];

    if (allowLevel.includes(this.level)) {
      // eslint-disable-next-line no-console
      console.log.apply(console, __spread([this.getPrintPrefix('INFO')], args));
    }
  };
  /**
   * @param  {unknown[]} ...args
   * @description 输出 warn 级别的调试信息。
   */


  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var allowLevel = ['INFO', 'WARN'];

    if (allowLevel.includes(this.level)) {
      // eslint-disable-next-line no-console
      console.warn.apply(console, __spread([this.getPrintPrefix('WARN')], args));
    }
  };
  /**
   * @param  {unknown[]} ...args
   * @description 输出 error 级别的调试信息。
   */


  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var allowLevel = ['INFO', 'WARN', 'ERROR'];

    if (allowLevel.includes(this.level)) {
      // eslint-disable-next-line no-console
      console.error.apply(console, __spread([this.getPrintPrefix('ERROR')], args));
    }
  };

  Logger.id = 0;
  return Logger;
}();

var _default = Logger;
exports["default"] = _default;