import React from 'react'
import Seo from '../components/Seo'
// import PropTypes from 'prop-types'

const SeoResolver = ({ opt }) => {
  const schemaType = opt?.schemaType ? opt.schemaType : null
  const startedWebsiteDate = opt?.startedWebsiteDate
    ? opt.startedWebsiteDate
    : null
  const modifiedWebsiteDate = opt?.modifiedWebsiteDate
    ? opt.modifiedWebsiteDate
    : null
  const createdPageDate = opt?.createdPageDate ? opt.createdPageDate : null
  const modifiedPageDate = opt?.modifiedPageDate ? opt.modifiedPageDate : null
  const pageTitle = opt?.pageTitle ? opt.pageTitle : null
  const pageDescription = opt?.pageDescription ? opt.pageDescription : null
  const authorWebsiteData = opt?.authorWebsiteData
    ? opt.authorWebsiteData
    : null
  const authorPostData = opt?.authorPostData ? opt.authorPostData : null
  const highlightImageSrc = opt?.highlightImage ? opt.highlightImage : null
  const postsList = opt?.postsList ? opt.postsList : null
  const postBody = opt?.postBody ? opt.postBody : null
  const brandMainLogoSrc = opt?.brandMainLogo ? opt.brandMainLogo : null
  const brandCardLogoSrc = opt?.brandCardLogo ? opt.brandCardLogo : null
  const brandPhone = opt?.brandPhone ? opt.brandPhone : null
  const brandEmail = opt?.brandEmail ? opt.brandEmail : null
  const brandName = opt?.brandName ? opt.brandName : null
  const brandSocialArr = opt?.brandSocialArr ? opt.brandSocialArr : null
  const buildServerUrl = opt?.buildServerUrl ? opt.buildServerUrl : null
  const websiteLanguage = opt?.websiteLanguage ? opt.websiteLanguage : null
  const brandThemeColor = opt?.brandThemeColor ? opt.brandThemeColor : null
  const brandKeywords = opt?.brandKeywords ? opt.brandKeywords : null
  const brandWebsiteUrl = opt?.brandWebsiteUrl ? opt.brandWebsiteUrl : null
  const alternativeImage = opt?.alternativeImage ? opt.alternativeImage : null
  const websiteDescription = opt?.websiteDescription
    ? opt.websiteDescription
    : null
  const pageKeywords = opt?.pageKeywords ? opt.pageKeywords : null
  const postHeadline = opt?.postHeadline ? opt.postHeadline : null

  const preSchema = {
    websiteInfo: {
      schemaType: schemaType,
      authorWebsiteData: authorWebsiteData,
      buildServerUrl: buildServerUrl,
      websiteLanguage: websiteLanguage,
      highlightImageSrc: highlightImageSrc,
      alternativeImage: alternativeImage,
      description: websiteDescription,
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
      keywords: brandKeywords,
    },
    pageInfo: {
      siteCreated: startedWebsiteDate,
      siteModified: modifiedWebsiteDate,
      pageTitle: pageTitle,
      description: pageDescription,
      keywords: pageKeywords,
    },
    postInfo: {
      postCreated: createdPageDate,
      postModified: modifiedPageDate,
      body: postBody,
      postsList: postsList,
      authorPostData: authorPostData,
      headline: postHeadline,
    },
  }

  const hasBar = preSchema?.websiteInfo?.buildServerUrl?.charAt(
    preSchema?.websiteInfo?.buildServerUrl.length - 1
  )
  const servBar =
    hasBar === '/'
      ? preSchema?.websiteInfo?.buildServerUrl?.slice(0, -1)
      : preSchema?.websiteInfo?.buildServerUrl
  const cardImagesrc =
    servBar + preSchema?.brandInfo?.brandCardLogoSrc ||
    servBar ||
    preSchema?.brandInfo?.brandCardLogoSrc ||
    null
  const keywords =
    preSchema?.pageInfo?.keywords || preSchema?.brandInfo?.keywords
  const metaTags = [
    {
      name: 'description',
      data:
        preSchema?.postInfo?.description ||
        preSchema?.pageInfo?.description ||
        preSchema?.websiteInfo?.description,
    },
    {
      name: 'image',
      data:
        preSchema?.websiteInfo?.alternativeImage ||
        preSchema?.websiteInfo?.highlightImageSrc ||
        cardImagesrc ||
        preSchema?.brandInfo?.brandMainLogoSrc,
    },
    { name: 'keywords', data: keywords?.map(e => e) },
    { name: 'og:url', data: preSchema?.websiteInfo?.buildServerUrl },
    {
      name: 'og:type',
      data: preSchema?.websiteInfo?.schemaType ? 'article' : 'blog',
    },
    { name: 'og:title', data: preSchema?.pageInfo?.pageTitle },
    {
      name: 'og:description',
      data:
        preSchema?.postInfo?.description ||
        preSchema?.pageInfo?.description ||
        preSchema?.websiteInfo?.description,
    },
    {
      name: 'og:image',
      data:
        preSchema?.websiteInfo?.alternativeImage ||
        preSchema?.websiteInfo?.highlightImageSrc ||
        cardImagesrc ||
        preSchema?.brandInfo?.brandMainLogoSrc,
    },
    { name: 'twitter:card', data: brandCardLogoSrc },
    {
      name: 'twitter:creator',
      data: preSchema?.brandInfo?.brandSocialArr?.twitter,
    },
    { name: 'twitter:title', data: preSchema?.pageInfo?.pageTitle },
    {
      name: 'twitter:description',
      data:
        preSchema?.postInfo?.description ||
        preSchema?.pageInfo?.description ||
        preSchema?.websiteInfo?.description,
    },
    {
      name: 'twitter:image:src',
      data:
        alternativeImage ||
        preSchema?.websiteInfo?.highlightImageSrc ||
        cardImagesrc ||
        preSchema?.brandInfo?.brandMainLogoSrc,
    },
    {
      name: 'theme-color',
      data: preSchema?.brandInfo?.brandThemeColor || '#FF0081',
    },
    {
      name: 'twitter:site',
      data: `@` + preSchema?.brandInfo?.brandSocialArr?.twitter,
    },
    {
      name: 'author',
      data:
        preSchema?.postInfo?.authorPostData ||
        preSchema?.websiteInfo?.authorWebsiteData,
    },
  ]

  return (
    <Seo
      // schemaType={schemaType}
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
      websiteLanguage={websiteLanguage}
      pageTitle={pageTitle}
      buildServerUrl={buildServerUrl}
      metaTags={metaTags}
      preSchema={preSchema}
    />
  )
}

// SeoResolver.defaultProps = {
//   lang: `pt-br`,
// }

// SeoResolver.propTypes = {
//   lang: PropTypes.string,
//   // meta: PropTypes.arrayOf(PropTypes.object),
//   // title: PropTypes.string.isRequired,
// }

export default SeoResolver
