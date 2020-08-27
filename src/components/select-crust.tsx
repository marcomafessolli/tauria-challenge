import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes'

const SelectCrust: React.FunctionComponent = () => {
  return (
    <>
      <h2>Choose your Crust</h2>
      <Link to={ROUTES.SELECT_TOPPINGS}>Choose your Toppings</Link>
    </>
  )
}

export default SelectCrust
