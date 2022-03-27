import React from 'react'
import PropTypes from 'prop-types'

import Seo from '../components/Seo'
import brandYAML from '@Content/brand.yaml'

function SeoContainer({
  datePublished,
  schemaType,
  titleSeo,
  descriptionOther,
  authorSeo,
  featuredImage,
  blogListing,
  articleBody,
  mainLogo,
  cardImage,
  serverUrl,
  lang,
}) {
  const {
    businessName,
    description,
    url,
    image,
    social,
    dateCreated,
    themeColor,
    keywords,
  } = brandYAML
  const metaDescription = description
  return (
    <Seo
      lang={lang}
      title={titleSeo || businessName}
      siteTitle={businessName}
      url={url}
      metaDescription={metaDescription}
      description={description}
      siteUrl={url}
      image={featuredImage || image}
      organizationLogo={mainLogo}
      author={authorSeo || businessName}
      organization={businessName}
      social={social}
      datePublished={datePublished}
      dateCreated={dateCreated}
      schemaType={schemaType}
      socialSameAs={social}
      blogListing={blogListing}
      articleBody={articleBody}
      keywords={keywords}
      cardImage={cardImage || null}
      serverUrl={url || serverUrl}
      themeColor={themeColor}
    />
  )
}

SeoContainer.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
}

SeoContainer.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SeoContainer
