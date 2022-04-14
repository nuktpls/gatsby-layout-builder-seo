"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _SchemaOrgContainer = _interopRequireDefault(require("../containers/SchemaOrgContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Seo = _ref => {
  let {
    // , image
    // title,
    // siteTitle,
    // metaDescription,
    // image,
    // cardImage,
    // organizationLogo,
    // description,
    // author,
    // organization,
    // keywords,
    // themeColor,
    // lang,
    // social,
    // socialSameAs,
    // datePublished,
    // dateCreated,
    // schemaType,
    // blogListing,
    // articleBody,
    // url,
    // siteUrl,
    // serverUrl,
    // brandName,
    // brandUrl,
    // brandPhone,
    // brandEmail,
    // summary_large_image,
    //
    //
    //
    // schemaType,
    // startedWebsiteDate,
    // modifiedWebsiteDate,
    // createdPageDate,
    // modifiedPageDate,
    // highlightImageSrc,
    // pageTitle,
    // pageDescription,
    // pageKeywords,
    // authorWebsiteData,
    // authorPostData,
    // postsList,
    // postBody,
    // postHeadline,
    // brandMainLogoSrc,
    // brandCardLogoSrc,
    // brandPhone,
    // brandEmail,
    // brandName,
    // brandSocialArr,
    // brandThemeColor,
    // brandKeywords,
    // brandWebsiteUrl,
    // buildServerUrl,
    // websiteLanguage,
    // alternativeImage,
    // websiteDescription,
    websiteLanguage,
    pageTitle,
    buildServerUrl,
    actualPage,
    metaTags,
    preSchema
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
    htmlAttributes: {
      websiteLanguage
    },
    titleTemplate: "%s | ".concat(pageTitle)
  }, /*#__PURE__*/_react.default.createElement("title", null, pageTitle), /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: actualPage
  }), metaTags === null || metaTags === void 0 ? void 0 : metaTags.map((meta, indx) => {
    if (meta.data === null) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement("meta", {
      name: meta.name,
      content: meta.data,
      key: indx
    });
  })), /*#__PURE__*/_react.default.createElement(_SchemaOrgContainer.default, {
    preSchema: preSchema
  }));
};

var _default = Seo;
exports.default = _default;