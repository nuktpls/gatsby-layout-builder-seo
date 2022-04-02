"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _SchemaOrg = _interopRequireDefault(require("../components/SchemaOrg"));

var _gatsbyPluginImage = require("gatsby-plugin-image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SchemaOrgContainer = _ref => {
  let {
    schemaType,
    siteUrl,
    title,
    image,
    featuredImage,
    description,
    datePublished,
    author,
    organization,
    socialSameAs,
    blogListing,
    articleBody,
    keywords,
    dateCreated,
    organizationLogo,
    serverUrl,
    brandDescription,
    brandName,
    brandUrl,
    email,
    inLanguage,
    keywordsSchema,
    sameAs,
    telephone,
    alternateName,
    appName,
    contactType,
    datePublishedSchema,
    potentialAction,
    version
  } = _ref;
  const orgImageSrc = (0, _gatsbyPluginImage.getSrc)(organizationLogo === null || organizationLogo === void 0 ? void 0 : organizationLogo.childrenImageSharp[0]);
  const organizationLogoVar = siteUrl + orgImageSrc;
  return /*#__PURE__*/_react.default.createElement(_SchemaOrg.default, {
    telephone: telephone,
    sameAs: sameAs,
    email: email,
    brandName: brandName,
    brandDescription: brandDescription,
    brandUrl: brandUrl,
    inLanguage: inLanguage,
    schemaType: schemaType,
    keywordsSchema: keywordsSchema,
    url: siteUrl,
    title: title,
    image: image,
    featuredImage: featuredImage,
    description: description,
    datePublished: datePublished,
    siteUrl: siteUrl,
    author: author,
    organization: organization,
    defaultTitle: title,
    socialSameAs: socialSameAs,
    blogListing: blogListing,
    articleBody: articleBody,
    keywords: keywords,
    dateCreated: dateCreated,
    organizationLogo: organizationLogoVar
  });
};

var _default = SchemaOrgContainer;
exports.default = _default;