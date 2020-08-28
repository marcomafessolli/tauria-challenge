import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'

const CheckYourPizza: React.FunctionComponent = () => {
  const { size, crust, toppings, price } = usePizzaBuilder()

  return (
    <>
      <h2>Check your Pizza</h2>

      <div>Selected Size: {size}</div>
      <div>Selected Crust: {crust}</div>
      <div>Selected Toppings:</div>
      <ul>
        {toppings.map((topping, index) => {
          return <li key={index}>{topping}</li>
        })}
      </ul>

      <div>Total price: {price}</div>

      <Link to={ROUTES.SELECT_SIZE}>Order Again</Link>
    </>
  )
}

export default CheckYourPizza
