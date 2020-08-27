import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

const SelectToppings: React.FunctionComponent = () => {
  return (
    <>
      <h2>Choose your Toppings</h2>
      <Link to={ROUTES.CHECK_YOUR_PIZZA}>Check your Custom Pizza</Link>
    </>
  )
}

export default SelectToppings
