import React from 'react'
import { NavLink } from 'react-router-dom'
import ROUTES from '../routes'

const Navigation: React.FunctionComponent = () => {
  return (
    <nav>
      <NavLink to={ROUTES.SELECT_SIZE}>Choose your Size</NavLink>
      <NavLink to={ROUTES.SELECT_CRUST}>Choose your Crust</NavLink>
      <NavLink to={ROUTES.SELECT_TOPPINGS}>Choose yor Toppings</NavLink>
      <NavLink to={ROUTES.CHECK_YOUR_PIZZA}>Check your pizza</NavLink>
    </nav>
  )
}

export default Navigation
