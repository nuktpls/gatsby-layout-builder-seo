import React from 'react'
import SeoContainer from 'gatsby-layout-builder-seo'
// gatsby home page
const IndexPage = (props) => (
  <>
    <SeoContainer
      opt={{
        datePublished: '2020-05-01',
        schemaType: 'Blog',
        titleSeo: 'Olá enfermeira',
        description: 'Loren Ipsum',
        authorSeo: 'Miltão',
        brandPhone: '+5516981061234',
        brandEmail: 'miltonbolonha@gmail.com',
        businessName: 'Meu Negócio',
        dateCreated: '2020-05-02',
        themeColor: '#d2dd',
        keywords: ['something', 'another'],
        social: {
          fbAppID: '0',
        },
      }}
    />
    oi
  </>
)

export default IndexPage
