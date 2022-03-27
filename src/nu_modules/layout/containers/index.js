import React from 'react'
import SeoContainer from './SeoContainer'
const LayoutResolver = ({ opt }) => (
  <SeoContainer
    datePublished={opt.datePublished || null}
    schemaType={opt.schemaType || null}
    titleSeo={opt.titleSeo || null}
    descriptionOther={opt.description || null}
    authorSeo={opt.authorSeo || null}
    featuredImage={opt.featuredImage || null}
    blogListing={opt.blogListing || null}
    articleBody={opt.articleBody || null}
    mainLogo={opt.mainLogo || null}
    cardImage={opt.cardImage || null}
    serverUrl={opt.serverUrl || null}
    lang={opt.lang}
  />
)

export default LayoutResolver
