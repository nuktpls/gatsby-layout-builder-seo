"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.json.stringify.js");

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    orgSchema,
    websiteSchema,
    articleSchema,
    schemaType
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, schemaType === 'article' ? /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json",
    "data-schema": "Article"
  }, JSON.stringify(articleSchema)) : null, /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json",
    "data-schema": "WebSite"
  }, JSON.stringify(websiteSchema)), /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json",
    "data-schema": "Organization"
  }, JSON.stringify(orgSchema)));
});

exports.default = _default;