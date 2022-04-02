"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _SchemaOrgContainer = _interopRequireDefault(require("../containers/SchemaOrgContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Seo = _ref => {
  let {
    // , image
    title,
    siteTitle,
    metaDescription,
    image,
    cardImage,
    organizationLogo,
    description,
    author,
    organization,
    keywords,
    themeColor,
    lang,
    social,
    socialSameAs,
    datePublished,
    dateCreated,
    schemaType,
    blogListing,
    articleBody,
    url,
    siteUrl,
    serverUrl,
    brandName,
    brandUrl,
    brandPhone,
    brandEmail,
    summary_large_image
  } = _ref;
  const hasBar = serverUrl === null || serverUrl === void 0 ? void 0 : serverUrl.charAt(serverUrl.length - 1);
  const servBar = hasBar === '/' ? serverUrl === null || serverUrl === void 0 ? void 0 : serverUrl.slice(0, -1) : serverUrl;
  const cardImagesrc = servBar + cardImage || servBar || cardImage;
  const metaTags = [{
    name: 'description',
    data: metaDescription || null
  }, {
    name: 'image',
    data: cardImagesrc || image || null
  }, {
    name: 'keywords',
    data: (keywords === null || keywords === void 0 ? void 0 : keywords.map(e => e)) || null
  }, {
    name: 'og:url',
    data: serverUrl || null
  }, {
    name: 'og:type',
    data: schemaType ? 'article' : 'blog' || null
  }, {
    name: 'og:title',
    data: title || null
  }, {
    name: 'og:description',
    data: description || null
  }, {
    name: 'og:image',
    data: cardImagesrc || image || null
  }, {
    name: 'fb:app_id',
    data: (social === null || social === void 0 ? void 0 : social.fbAppID) || null
  }, {
    name: 'twitter:card',
    data: summary_large_image || null
  }, {
    name: 'twitter:creator',
    data: (social === null || social === void 0 ? void 0 : social.twitter) || null
  }, {
    name: 'twitter:title',
    data: title || null
  }, {
    name: 'twitter:description',
    data: description || null
  }, {
    name: 'twitter:image:src',
    data: cardImagesrc || image || null
  }, {
    name: 'theme-color',
    data: themeColor || '#FF0081' || null
  }, {
    name: 'twitter:site',
    data: "@" + (social === null || social === void 0 ? void 0 : social.twitter) || null
  }, {
    name: 'author',
    data: author || null
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
    htmlAttributes: {
      lang
    },
    titleTemplate: "%s | ".concat(siteTitle)
  }, /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: serverUrl
  }), metaTags === null || metaTags === void 0 ? void 0 : metaTags.map((meta, indx) => {
    if (!meta.data) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement("meta", {
      name: meta.name,
      content: meta.data,
      key: indx
    });
  })), /*#__PURE__*/_react.default.createElement(_SchemaOrgContainer.default, {
    title: title,
    defaultTitle: title,
    image: cardImagesrc || image,
    organizationLogo: organizationLogo,
    description: description,
    author: author,
    keywords: keywords,
    organization: organization,
    socialSameAs: socialSameAs,
    schemaType: schemaType,
    articleBody: articleBody,
    blogListing: blogListing,
    dateCreated: dateCreated,
    datePublished: datePublished,
    url: siteUrl,
    siteUrl: siteUrl,
    serverUrl: serverUrl,
    brandName: brandName,
    brandUrl: brandUrl,
    telephone: brandPhone,
    email: brandEmail,
    inLanguage: lang,
    keywordsSchema: keywords,
    sameAs: socialSameAs
  }));
};

var _default = Seo;
exports.default = _default;