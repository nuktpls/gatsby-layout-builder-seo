import React from 'react'
import SchemaOrg from '../components/SchemaOrg'
import { getSrc } from 'gatsby-plugin-image'

const SchemaOrgContainer = ({
  schemaType,
  siteUrl,
  title,
  image,
  featuredImage,
  description,
  datePublished,
  author,
  organization,
  socialSameAs,
  blogListing,
  articleBody,
  keywords,
  dateCreated,
  organizationLogo,
  serverUrl,
  brandDescription,
  brandName,
  brandUrl,
  email,
  inLanguage,
  keywordsSchema,
  sameAs,
  telephone,

  alternateName,
  appName,
  contactType,
  datePublishedSchema,
  potentialAction,
  version,
}) => {
  const orgImageSrc = getSrc(organizationLogo?.childrenImageSharp[0])
  const organizationLogoVar = siteUrl + orgImageSrc

  return (
    <SchemaOrg
      telephone={telephone}
      sameAs={sameAs}
      email={email}
      brandName={brandName}
      brandDescription={brandDescription}
      brandUrl={brandUrl}
      inLanguage={inLanguage}
      schemaType={schemaType}
      keywordsSchema={keywordsSchema}
      url={siteUrl}
      title={title}
      image={image}
      featuredImage={featuredImage}
      description={description}
      datePublished={datePublished}
      siteUrl={siteUrl}
      author={author}
      organization={organization}
      defaultTitle={title}
      socialSameAs={socialSameAs}
      blogListing={blogListing}
      articleBody={articleBody}
      keywords={keywords}
      dateCreated={dateCreated}
      organizationLogo={organizationLogoVar}
    />
  )
}

export default SchemaOrgContainer
