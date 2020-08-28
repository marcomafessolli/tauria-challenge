import React from 'react'
import { NavLink } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'

const Navigation: React.FunctionComponent = () => {
  const { size, crust, toppings } = usePizzaBuilder()

  return (
    <nav>
      <NavLink to={ROUTES.SELECT_SIZE}>Choose your Size</NavLink>
      <NavLink
        to={ROUTES.SELECT_CRUST}
        style={!size ? { pointerEvents: 'none' } : {}}
      >
        Choose your Crust
      </NavLink>
      <NavLink
        to={ROUTES.SELECT_TOPPINGS}
        style={!crust ? { pointerEvents: 'none' } : {}}
      >
        Choose yor Toppings
      </NavLink>
      <NavLink
        to={ROUTES.CHECK_YOUR_PIZZA}
        style={toppings.length <= 0 ? { pointerEvents: 'none' } : {}}
      >
        Check your pizza
      </NavLink>
    </nav>
  )
}

export default Navigation
