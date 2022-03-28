import React from 'react'
import SeoContainer from './SeoContainer'
const LayoutResolver = ({ opt }) => {
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
  } = opt
  return (
    <SeoContainer
      datePublished={datePublished || null}
      schemaType={schemaType || null}
      titleSeo={titleSeo || null}
      descriptionOther={description || null}
      authorSeo={authorSeo || null}
      featuredImage={featuredImage || null}
      blogListing={blogListing || null}
      articleBody={articleBody || null}
      mainLogo={mainLogo || null}
      cardImage={cardImage || null}
      serverUrl={serverUrl || null}
      lang={lang}
    />
  )
}

export default LayoutResolver
