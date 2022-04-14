import React from 'react'
import Helmet from 'react-helmet'
import SchemaOrgContainer from '../containers/SchemaOrgContainer'

const Seo = ({
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
  preSchema,
}) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ websiteLanguage }}
        titleTemplate={`%s | ${pageTitle}`}
      >
        <title>{pageTitle}</title>
        <link rel="canonical" href={actualPage} />
        {metaTags?.map((meta, indx) => {
          if (meta.data === null) {
            return null
          }
          return <meta name={meta.name} content={meta.data} key={indx} />
        })}
      </Helmet>
      <SchemaOrgContainer preSchema={preSchema} />
    </>
  )
}

export default Seo
