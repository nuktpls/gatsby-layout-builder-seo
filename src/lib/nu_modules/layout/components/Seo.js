import React from 'react'
import Helmet from 'react-helmet'
import SchemaOrgContainer from '../containers/SchemaOrgContainer'

const Seo = ({
  // , image

  title,
  siteTitle,
  metaDescription,
  image,
  cardImage,
  organizationLogo,
  description,
  author,
  organization,
  keywords,
  themeColor,
  lang,
  social,
  socialSameAs,
  datePublished,
  dateCreated,
  schemaType,
  blogListing,
  articleBody,
  url,
  siteUrl,
  serverUrl,
  brandName,
  brandUrl,
  brandPhone,
  brandEmail,
  summary_large_image,
}) => {
  const hasBar = serverUrl?.charAt(serverUrl.length - 1)
  const servBar = hasBar === '/' ? serverUrl?.slice(0, -1) : serverUrl
  const cardImagesrc = servBar + cardImage || servBar || cardImage
  const metaTags = [
    { name: 'description', data: metaDescription },
    { name: 'image', data: cardImagesrc || image },
    { name: 'keywords', data: keywords.map((e) => e) },
    { name: 'og:url', data: serverUrl },
    { name: 'og:type', data: schemaType ? 'article' : 'blog' },
    { name: 'og:title', data: title },
    { name: 'og:description', data: description },
    { name: 'og:image', data: cardImagesrc || image },
    { name: 'fb:app_id', data: social.fbAppID },
    { name: 'twitter:card', data: summary_large_image },
    { name: 'twitter:creator', data: social.twitter },
    { name: 'twitter:title', data: title },
    { name: 'twitter:description', data: description },
    { name: 'twitter:image:src', data: cardImagesrc || image },
    { name: 'theme-color', data: themeColor || '#FF0081' },
    { name: 'twitter:site', data: `@` + social.twitter },
    { name: 'author', data: author },
  ]
  return (
    <>
      <Helmet htmlAttributes={{ lang }} titleTemplate={`%s | ${siteTitle}`}>
        <title>{title}</title>
        <link rel="canonical" href={serverUrl} />
        {metaTags.map((meta, indx) => {
          if (!meta.data) {
            return null
          }
          return <meta name={meta.name} content={meta.data} key={indx} />
        })}
      </Helmet>
      <SchemaOrgContainer
        title={title}
        defaultTitle={title}
        image={cardImagesrc || image}
        organizationLogo={organizationLogo}
        description={description}
        author={author}
        keywords={keywords}
        organization={organization}
        socialSameAs={socialSameAs}
        schemaType={schemaType}
        articleBody={articleBody}
        blogListing={blogListing}
        dateCreated={dateCreated}
        datePublished={datePublished}
        url={siteUrl}
        siteUrl={siteUrl}
        serverUrl={serverUrl}
        brandName={brandName}
        brandUrl={brandUrl}
        telephone={brandPhone}
        email={brandEmail}
        inLanguage={lang}
        keywordsSchema={keywords}
        sameAs={socialSameAs}
      />
    </>
  )
}

export default Seo
