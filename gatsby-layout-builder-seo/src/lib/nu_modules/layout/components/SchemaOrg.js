import React from 'react'
import { Helmet } from 'react-helmet'

export default React.memo(
  ({ orgSchema, websiteSchema, articleSchema, schemaType }) => {
    return (
      <Helmet>
        {/* Schema.org tags */}
        {schemaType === 'article' ? (
          <script type="application/ld+json" data-schema="Article">
            {JSON.stringify(articleSchema)}
          </script>
        ) : null}
        <script type="application/ld+json" data-schema="WebSite">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json" data-schema="Organization">
          {JSON.stringify(orgSchema)}
        </script>
      </Helmet>
    )
  }
)
