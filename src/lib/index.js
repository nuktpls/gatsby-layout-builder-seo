/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import LayoutResolver from './src/nu_modules/layout/containers'

const SeoContainer = ({ opt }) => {
  return <LayoutResolver opt={opt} />
}

export default SeoContainer
