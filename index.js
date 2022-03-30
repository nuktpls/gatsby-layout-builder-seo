/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import SeoAgentResolver from './src/nu_modules/layout/containers'

const Seo = ({ opt }) => {
  return <SeoAgentResolver opt={opt} />
}

export default Seo
