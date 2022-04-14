"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _Seo = _interopRequireDefault(require("../components/Seo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types'
const SeoResolver = _ref => {
  var _preSchema$websiteInf, _preSchema$websiteInf2, _preSchema$websiteInf3, _preSchema$websiteInf4, _preSchema$websiteInf5, _preSchema$websiteInf6, _preSchema$brandInfo, _preSchema$brandInfo2, _preSchema$pageInfo, _preSchema$brandInfo3, _preSchema$postInfo, _preSchema$pageInfo2, _preSchema$websiteInf7, _preSchema$websiteInf8, _preSchema$websiteInf9, _preSchema$brandInfo4, _preSchema$websiteInf10, _preSchema$websiteInf11, _preSchema$pageInfo3, _preSchema$postInfo2, _preSchema$pageInfo4, _preSchema$websiteInf12, _preSchema$websiteInf13, _preSchema$websiteInf14, _preSchema$brandInfo5, _preSchema$brandInfo6, _preSchema$brandInfo7, _preSchema$pageInfo5, _preSchema$postInfo3, _preSchema$pageInfo6, _preSchema$websiteInf15, _preSchema$websiteInf16, _preSchema$brandInfo8, _preSchema$brandInfo9, _preSchema$brandInfo10, _preSchema$brandInfo11, _preSchema$postInfo4, _preSchema$websiteInf17;

  let {
    opt
  } = _ref;
  const schemaType = opt !== null && opt !== void 0 && opt.schemaType ? opt.schemaType : null;
  const startedWebsiteDate = opt !== null && opt !== void 0 && opt.startedWebsiteDate ? opt.startedWebsiteDate : null;
  const modifiedWebsiteDate = opt !== null && opt !== void 0 && opt.modifiedWebsiteDate ? opt.modifiedWebsiteDate : null;
  const createdPageDate = opt !== null && opt !== void 0 && opt.createdPageDate ? opt.createdPageDate : null;
  const modifiedPageDate = opt !== null && opt !== void 0 && opt.modifiedPageDate ? opt.modifiedPageDate : null;
  const pageTitle = opt !== null && opt !== void 0 && opt.pageTitle ? opt.pageTitle : null;
  const pageDescription = opt !== null && opt !== void 0 && opt.pageDescription ? opt.pageDescription : null;
  const authorWebsiteData = opt !== null && opt !== void 0 && opt.authorWebsiteData ? opt.authorWebsiteData : null;
  const authorPostData = opt !== null && opt !== void 0 && opt.authorPostData ? opt.authorPostData : null;
  const highlightImageSrc = opt !== null && opt !== void 0 && opt.highlightImage ? opt.highlightImage : null;
  const postsList = opt !== null && opt !== void 0 && opt.postsList ? opt.postsList : null;
  const postBody = opt !== null && opt !== void 0 && opt.postBody ? opt.postBody : null;
  const brandMainLogoSrc = opt !== null && opt !== void 0 && opt.brandMainLogo ? opt.brandMainLogo : null;
  const brandCardLogoSrc = opt !== null && opt !== void 0 && opt.brandCardLogo ? opt.brandCardLogo : null;
  const brandPhone = opt !== null && opt !== void 0 && opt.brandPhone ? opt.brandPhone : null;
  const brandEmail = opt !== null && opt !== void 0 && opt.brandEmail ? opt.brandEmail : null;
  const brandName = opt !== null && opt !== void 0 && opt.brandName ? opt.brandName : null;
  const brandSocialArr = opt !== null && opt !== void 0 && opt.brandSocialArr ? opt.brandSocialArr : null;
  const buildServerUrl = opt !== null && opt !== void 0 && opt.buildServerUrl ? opt.buildServerUrl : null;
  const websiteLanguage = opt !== null && opt !== void 0 && opt.websiteLanguage ? opt.websiteLanguage : null;
  const brandThemeColor = opt !== null && opt !== void 0 && opt.brandThemeColor ? opt.brandThemeColor : null;
  const brandKeywords = opt !== null && opt !== void 0 && opt.brandKeywords ? opt.brandKeywords : null;
  const brandWebsiteUrl = opt !== null && opt !== void 0 && opt.brandWebsiteUrl ? opt.brandWebsiteUrl : null;
  const alternativeImage = opt !== null && opt !== void 0 && opt.alternativeImage ? opt.alternativeImage : null;
  const websiteDescription = opt !== null && opt !== void 0 && opt.websiteDescription ? opt.websiteDescription : null;
  const pageKeywords = opt !== null && opt !== void 0 && opt.pageKeywords ? opt.pageKeywords : null;
  const postHeadline = opt !== null && opt !== void 0 && opt.postHeadline ? opt.postHeadline : null;
  const actualPage = opt !== null && opt !== void 0 && opt.actualPage ? opt.actualPage : null;
  const preSchema = {
    websiteInfo: {
      schemaType: schemaType,
      authorWebsiteData: authorWebsiteData,
      buildServerUrl: buildServerUrl,
      actualPage: actualPage,
      websiteLanguage: websiteLanguage,
      highlightImageSrc: highlightImageSrc,
      alternativeImage: alternativeImage,
      description: websiteDescription
    },
    brandInfo: {
      name: brandName,
      email: brandEmail,
      phone: brandPhone,
      website: brandWebsiteUrl,
      mainLogoSrc: brandMainLogoSrc,
      cardLogoSrc: brandCardLogoSrc,
      socialArr: brandSocialArr,
      themeColor: brandThemeColor,
      keywords: brandKeywords
    },
    pageInfo: {
      siteCreated: startedWebsiteDate,
      siteModified: modifiedWebsiteDate,
      pageTitle: pageTitle,
      description: pageDescription,
      keywords: pageKeywords
    },
    postInfo: {
      postCreated: createdPageDate,
      postModified: modifiedPageDate,
      body: postBody,
      postsList: postsList,
      authorPostData: authorPostData,
      headline: postHeadline
    }
  };
  const hasBar = preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf = preSchema.websiteInfo) === null || _preSchema$websiteInf === void 0 ? void 0 : (_preSchema$websiteInf2 = _preSchema$websiteInf.buildServerUrl) === null || _preSchema$websiteInf2 === void 0 ? void 0 : _preSchema$websiteInf2.charAt((preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf3 = preSchema.websiteInfo) === null || _preSchema$websiteInf3 === void 0 ? void 0 : _preSchema$websiteInf3.buildServerUrl.length) - 1);
  const servBar = hasBar === '/' ? preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf4 = preSchema.websiteInfo) === null || _preSchema$websiteInf4 === void 0 ? void 0 : (_preSchema$websiteInf5 = _preSchema$websiteInf4.buildServerUrl) === null || _preSchema$websiteInf5 === void 0 ? void 0 : _preSchema$websiteInf5.slice(0, -1) : preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf6 = preSchema.websiteInfo) === null || _preSchema$websiteInf6 === void 0 ? void 0 : _preSchema$websiteInf6.buildServerUrl;
  const cardImagesrc = servBar + (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo = preSchema.brandInfo) === null || _preSchema$brandInfo === void 0 ? void 0 : _preSchema$brandInfo.brandCardLogoSrc) || servBar || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo2 = preSchema.brandInfo) === null || _preSchema$brandInfo2 === void 0 ? void 0 : _preSchema$brandInfo2.brandCardLogoSrc) || null;
  const keywords = (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$pageInfo = preSchema.pageInfo) === null || _preSchema$pageInfo === void 0 ? void 0 : _preSchema$pageInfo.keywords) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo3 = preSchema.brandInfo) === null || _preSchema$brandInfo3 === void 0 ? void 0 : _preSchema$brandInfo3.keywords);
  const metaTags = [{
    name: 'description',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$postInfo = preSchema.postInfo) === null || _preSchema$postInfo === void 0 ? void 0 : _preSchema$postInfo.description) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$pageInfo2 = preSchema.pageInfo) === null || _preSchema$pageInfo2 === void 0 ? void 0 : _preSchema$pageInfo2.description) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf7 = preSchema.websiteInfo) === null || _preSchema$websiteInf7 === void 0 ? void 0 : _preSchema$websiteInf7.description)
  }, {
    name: 'image',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf8 = preSchema.websiteInfo) === null || _preSchema$websiteInf8 === void 0 ? void 0 : _preSchema$websiteInf8.alternativeImage) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf9 = preSchema.websiteInfo) === null || _preSchema$websiteInf9 === void 0 ? void 0 : _preSchema$websiteInf9.highlightImageSrc) || cardImagesrc || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo4 = preSchema.brandInfo) === null || _preSchema$brandInfo4 === void 0 ? void 0 : _preSchema$brandInfo4.brandMainLogoSrc)
  }, {
    name: 'keywords',
    data: keywords === null || keywords === void 0 ? void 0 : keywords.map(e => e)
  }, {
    name: 'og:url',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf10 = preSchema.websiteInfo) === null || _preSchema$websiteInf10 === void 0 ? void 0 : _preSchema$websiteInf10.buildServerUrl) + actualPage
  }, {
    name: 'og:type',
    data: preSchema !== null && preSchema !== void 0 && (_preSchema$websiteInf11 = preSchema.websiteInfo) !== null && _preSchema$websiteInf11 !== void 0 && _preSchema$websiteInf11.schemaType ? 'article' : 'blog'
  }, {
    name: 'og:title',
    data: preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$pageInfo3 = preSchema.pageInfo) === null || _preSchema$pageInfo3 === void 0 ? void 0 : _preSchema$pageInfo3.pageTitle
  }, {
    name: 'og:description',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$postInfo2 = preSchema.postInfo) === null || _preSchema$postInfo2 === void 0 ? void 0 : _preSchema$postInfo2.description) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$pageInfo4 = preSchema.pageInfo) === null || _preSchema$pageInfo4 === void 0 ? void 0 : _preSchema$pageInfo4.description) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf12 = preSchema.websiteInfo) === null || _preSchema$websiteInf12 === void 0 ? void 0 : _preSchema$websiteInf12.description)
  }, {
    name: 'og:image',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf13 = preSchema.websiteInfo) === null || _preSchema$websiteInf13 === void 0 ? void 0 : _preSchema$websiteInf13.alternativeImage) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf14 = preSchema.websiteInfo) === null || _preSchema$websiteInf14 === void 0 ? void 0 : _preSchema$websiteInf14.highlightImageSrc) || cardImagesrc || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo5 = preSchema.brandInfo) === null || _preSchema$brandInfo5 === void 0 ? void 0 : _preSchema$brandInfo5.brandMainLogoSrc)
  }, {
    name: 'twitter:card',
    data: brandCardLogoSrc
  }, {
    name: 'twitter:creator',
    data: preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo6 = preSchema.brandInfo) === null || _preSchema$brandInfo6 === void 0 ? void 0 : (_preSchema$brandInfo7 = _preSchema$brandInfo6.brandSocialArr) === null || _preSchema$brandInfo7 === void 0 ? void 0 : _preSchema$brandInfo7.twitter
  }, {
    name: 'twitter:title',
    data: preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$pageInfo5 = preSchema.pageInfo) === null || _preSchema$pageInfo5 === void 0 ? void 0 : _preSchema$pageInfo5.pageTitle
  }, {
    name: 'twitter:description',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$postInfo3 = preSchema.postInfo) === null || _preSchema$postInfo3 === void 0 ? void 0 : _preSchema$postInfo3.description) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$pageInfo6 = preSchema.pageInfo) === null || _preSchema$pageInfo6 === void 0 ? void 0 : _preSchema$pageInfo6.description) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf15 = preSchema.websiteInfo) === null || _preSchema$websiteInf15 === void 0 ? void 0 : _preSchema$websiteInf15.description)
  }, {
    name: 'twitter:image:src',
    data: alternativeImage || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf16 = preSchema.websiteInfo) === null || _preSchema$websiteInf16 === void 0 ? void 0 : _preSchema$websiteInf16.highlightImageSrc) || cardImagesrc || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo8 = preSchema.brandInfo) === null || _preSchema$brandInfo8 === void 0 ? void 0 : _preSchema$brandInfo8.brandMainLogoSrc)
  }, {
    name: 'theme-color',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo9 = preSchema.brandInfo) === null || _preSchema$brandInfo9 === void 0 ? void 0 : _preSchema$brandInfo9.brandThemeColor) || '#FF0081'
  }, {
    name: 'twitter:site',
    data: "@" + (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$brandInfo10 = preSchema.brandInfo) === null || _preSchema$brandInfo10 === void 0 ? void 0 : (_preSchema$brandInfo11 = _preSchema$brandInfo10.brandSocialArr) === null || _preSchema$brandInfo11 === void 0 ? void 0 : _preSchema$brandInfo11.twitter)
  }, {
    name: 'author',
    data: (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$postInfo4 = preSchema.postInfo) === null || _preSchema$postInfo4 === void 0 ? void 0 : _preSchema$postInfo4.authorPostData) || (preSchema === null || preSchema === void 0 ? void 0 : (_preSchema$websiteInf17 = preSchema.websiteInfo) === null || _preSchema$websiteInf17 === void 0 ? void 0 : _preSchema$websiteInf17.authorWebsiteData)
  }];
  return /*#__PURE__*/_react.default.createElement(_Seo.default // schemaType={schemaType}
  // startedWebsiteDate={startedWebsiteDate}
  // modifiedWebsiteDate={modifiedWebsiteDate}
  // createdPageDate={createdPageDate}
  // modifiedPageDate={modifiedPageDate}
  // pageTitle={pageTitle}
  // pageDescription={pageDescription}
  // authorWebsiteData={authorWebsiteData}
  // authorPostData={authorPostData}
  // highlightImage={highlightImage}
  // postsList={postsList}
  // postBody={postBody}
  // brandMainLogo={brandMainLogo}
  // brandCardLogo={brandCardLogo}
  // brandPhone={brandPhone}
  // brandEmail={brandEmail}
  // brandName={brandName}
  // brandSocialArr={brandSocialArr}
  // buildServerUrl={buildServerUrl}
  // websiteLanguage={websiteLanguage}
  // brandThemeColor={brandThemeColor}
  // brandKeywords={brandKeywords}
  // brandWebsiteUrl={brandWebsiteUrl}
  // alternativeImage={alternativeImage}
  , {
    websiteLanguage: websiteLanguage,
    pageTitle: pageTitle,
    buildServerUrl: buildServerUrl,
    actualPage: actualPage,
    metaTags: metaTags,
    preSchema: preSchema
  });
}; // SeoResolver.defaultProps = {
//   lang: `pt-br`,
// }
// SeoResolver.propTypes = {
//   lang: PropTypes.string,
//   // meta: PropTypes.arrayOf(PropTypes.object),
//   // title: PropTypes.string.isRequired,
// }


var _default = SeoResolver;
exports.default = _default;