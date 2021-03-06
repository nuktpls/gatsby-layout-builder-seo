"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _containers = _interopRequireDefault(require("./nu_modules/layout/containers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SeoContainer = _ref => {
  let {
    opt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_containers.default, {
    opt: opt
  });
};

var _default = SeoContainer;
exports.default = _default;