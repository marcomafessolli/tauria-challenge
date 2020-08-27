import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation: React.FunctionComponent = () => {
  return (
    <nav>
      <NavLink to='/choose-your-size'>Choose your Size</NavLink>
      <NavLink to='/choose-your-crust'>Choose your Crust</NavLink>
      <NavLink to='/choose-your-toppings'>Choose yor Toppings</NavLink>
      <NavLink to='/check-your-custom-pizza'>Check your pizza</NavLink>
    </nav>
  )
}

export default Navigation
