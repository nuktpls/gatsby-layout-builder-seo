import React from 'react'
import SchemaOrg from '../components/SchemaOrg'
import { getSrc } from 'gatsby-plugin-image'

const SchemaOrgContainer = ({ preSchema }) => {
  const {
    schemaType,
    authorWebsiteData,
    buildServerUrl,
    websiteLanguage,
    highlightImageSrc,
    alternativeImage,
  } = preSchema.websiteInfo

  const {
    name,
    email,
    type, // organization or person
    description,
    phone,
    website,
    mainLogoSrc,
    cardLogoSrc,
    socialArr,
    // themeColor,
    keywords,
    potentialAction,
    contactType,
  } = preSchema.brandInfo

  const {
    pageCreated,
    pageModified,
    pageTitle,
    pageDescription,
    pageUrl,
    pageKeywords,
  } = preSchema.pageInfo

  const {
    postCreated,
    postModified,
    body,
    // postsList,
    headline,
    authorName,
    authorType,
    authorWebsite,
  } = preSchema.postInfo

  // const dateNow = Date.now()
  const authorTypeVar =
    authorType === 'Organization' ? 'Organization' : 'Person'
  const orgSchema = [
    {
      '@type': ['Organization'],
      '@context': 'http://schema.org',
      name: name,
      url: website,
      email: email,
      description: description,
      sameAs: [
        socialArr?.instagram,
        socialArr?.facebook,
        socialArr?.linkedIn,
        socialArr?.youtube,
      ],
      potentialAction: potentialAction,
      logo: mainLogoSrc,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: phone,
          contactType: contactType,
        },
      ],
    },
  ]
  const nowKeywords = pageKeywords || keywords
  const websiteSchema = [
    {
      '@type': 'WebSite',
      '@context': 'http://schema.org',
      name: pageTitle || name,
      description: pageDescription || description,
      url: pageUrl || website,
      potentialAction: potentialAction,
      keywords: [nowKeywords?.map(e => e)],
      inLanguage: websiteLanguage,
      copyrightYear: new Date().getFullYear(),
      datePublished: pageCreated,
      dateModified: pageModified,
      image: alternativeImage || highlightImageSrc || cardLogoSrc,
      sameAs: [
        socialArr?.instagram,
        socialArr?.facebook,
        socialArr?.linkedIn,
        socialArr?.youtube,
      ],
    },
  ]

  // "potentialAction":
  // {
  // 	"@type": "SearchAction",
  // 	"target":
  // 	{
  // 		"@type": "EntryPoint",
  // 		"urlTemplate": "https://busca.uol.com.br/result.html?term={search_term_string}#gsc.tab=0&gsc.q={search_term_string}&gsc.page=1"
  // 	},
  // 	"query-input": "required name=search_term_string"
  // }

  const articleSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      name: name,
      headline: headline,
      description: description,
      author: {
        '@type': authorTypeVar,
        name: authorName,
        url: authorWebsite,
      },
      image: {
        '@type': 'ImageObject',
        url: highlightImageSrc || cardLogoSrc,
        height: 156,
        width: 60,
      },
      articleBody: body,
      publisher: {
        '@type': 'Organization',
        name: name,
        url: website,
        logo: {
          '@type': 'ImageObject',
          url: mainLogoSrc,
          width: 156,
          height: 60,
        },
      },
      datePublished: postCreated,
      dateModified: postModified,
    },
  ]

  // const orgImageSrc = getSrc(organizationLogo?.childrenImageSharp[0])
  // const organizationLogoVar = siteUrl + orgImageSrc

  return (
    <SchemaOrg
      schemaType={schemaType}
      orgSchema={orgSchema}
      websiteSchema={websiteSchema}
      articleSchema={articleSchema}
    />
  )
}

export default SchemaOrgContainer
