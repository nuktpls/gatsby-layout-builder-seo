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
    />
  )
}

SeoContainer.defaultProps = {
  lang: `pt-br`,
}

SeoContainer.propTypes = {
  lang: PropTypes.string,
  // meta: PropTypes.arrayOf(PropTypes.object),
  // title: PropTypes.string.isRequired,
}

export default SeoContainer
