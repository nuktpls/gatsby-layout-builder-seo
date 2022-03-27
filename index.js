/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import AgentResolver from './src/nu_modules/layout/containers'

const SEO = ({ opt }) => {
  return <AgentResolver opt={opt} />
}

export default SEO
