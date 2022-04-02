import React from 'react'
import Seo from '../components/Seo'
// import PropTypes from 'prop-types'

const SeoResolver = ({ opt }) => {
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
    keywords,
    url,
    image,
  } = opt
  return (
    <Seo
      title={titleSeo || businessName || null}
      siteTitle={businessName || null}
      metaDescription={description || null}
      image={featuredImage || image || null}
      cardImage={cardImage || null}
      organizationLogo={mainLogo || null}
      description={description || null}
      author={authorSeo || businessName || null}
      organization={businessName || null}
      keywords={keywords || null}
      themeColor={themeColor || null}
      lang={lang || null}
      social={social || null}
      socialSameAs={social || null}
      datePublished={datePublished || null}
      dateCreated={dateCreated || null}
      schemaType={schemaType || null}
      blogListing={blogListing || null}
      articleBody={articleBody || null}
      url={url || null}
      siteUrl={url || null}
      serverUrl={url || serverUrl || null}
      brandName={businessName}
      brandUrl={url || null}
      brandPhone={brandPhone}
      brandEmail={brandEmail}
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
