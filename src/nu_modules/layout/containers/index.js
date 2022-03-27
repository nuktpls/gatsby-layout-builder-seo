import React from 'react'
import SeoContainer from './SeoContainer'
const LayoutResolver = ({ opt }) => (
  <SeoContainer
    title={opt.titleSeo}
    author={opt.authorSeo}
    datePublished={opt.datePublished}
    schemaType={opt.schemaType}
    titleSeo={opt.titleSeo}
    authorSeo={opt.authorSeo}
    featuredImage={opt.featuredImage}
    blogListing={opt.blogListing}
    articleBody={opt.articleBody}
    mainLogo={opt.mainLogo}
    description={opt.description || null}
    cardImage={opt.cardImage || null}
    serverUrl={opt.serverUrl || null}
  />
)

export default LayoutResolver
