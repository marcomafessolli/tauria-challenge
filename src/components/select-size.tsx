import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

const SelectSize: React.FunctionComponent = () => {
  return (
    <>
      <h2>Choose your Size</h2>
      <Link to={ROUTES.SELECT_CRUST}>Choose your Crust</Link>
    </>
  )
}

export default SelectSize
