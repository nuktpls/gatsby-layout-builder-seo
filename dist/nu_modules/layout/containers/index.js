"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _SeoContainer = _interopRequireDefault(require("./SeoContainer"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LayoutResolver = _ref => {
  let {
    opt
  } = _ref;
  const {
    datePublished,
    schemaType,
    titleSeo,
    description,
    authorSeo,
    featuredImage,
    blogListing,
    articleBody,
    mainLogo,
    cardImage,
    serverUrl,
    lang,
    brandPhone,
    brandEmail,
    businessName,
    social,
    dateCreated,
    themeColor,
    keywords
  } = opt;
  return /*#__PURE__*/_react.default.createElement(Seo, {
    title: titleSeo || businessName || null,
    siteTitle: businessName || null,
    metaDescription: description || null,
    image: featuredImage || image || null,
    cardImage: cardImage || null,
    organizationLogo: mainLogo || null,
    description: description || null,
    author: authorSeo || businessName || null,
    organization: businessName || null,
    keywords: keywords || null,
    themeColor: themeColor || null,
    lang: lang || null,
    social: social || null,
    socialSameAs: social || null,
    datePublished: datePublished || null,
    dateCreated: dateCreated || null,
    schemaType: schemaType || null,
    blogListing: blogListing || null,
    articleBody: articleBody || null,
    url: url || null,
    siteUrl: url || null,
    serverUrl: url || serverUrl || null,
    brandName: businessName,
    brandUrl: url || null,
    brandPhone: brandPhone,
    brandEmail: brandEmail
  });
};

_SeoContainer.default.defaultProps = {
  lang: "pt-br"
};
_SeoContainer.default.propTypes = {
  lang: _propTypes.default.string // meta: PropTypes.arrayOf(PropTypes.object),
  // title: PropTypes.string.isRequired,

};
var _default = LayoutResolver;
exports.default = _default;