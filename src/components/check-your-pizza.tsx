import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

const CheckYourPizza: React.FunctionComponent = () => {
  return (
    <>
      <h2>Check your Pizza</h2>
      <Link to={ROUTES.SELECT_SIZE}>Order Again</Link>
    </>
  )
}

export default CheckYourPizza
