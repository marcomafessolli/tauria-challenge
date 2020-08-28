import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'

const CheckYourPizza: React.FunctionComponent = () => {
  const { size, crust, toppings, price } = usePizzaBuilder()
  const priceFormat = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  if (toppings.length === 0) {
    return <Redirect to={ROUTES.SELECT_TOPPINGS} />
  }

  return (
    <>
      <h2>Check your Pizza</h2>

      <div>Selected Size: {size.label}</div>
      <div>Selected Crust: {crust.label}</div>
      <div>Selected Toppings:</div>

      <ul>
        {toppings.map((topping, index) => {
          return <li key={index}>{topping.label}</li>
        })}
      </ul>

      <div>Total price: {priceFormat}</div>

      <Link to={ROUTES.SELECT_SIZE}>Order Again</Link>
    </>
  )
}

export default CheckYourPizza
