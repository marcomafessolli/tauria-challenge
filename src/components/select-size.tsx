import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'

const PIZZA_SIZES = [
  'Small', // $8
  'Medium', // $10
  'Large', // $12
]

const SelectSize: React.FunctionComponent = () => {
  const { setSize, size } = usePizzaBuilder()

  const selectPizzaSize = (selectedPizzaSize: string) => {
    setSize(selectedPizzaSize)
  }

  return (
    <>
      <h2>Choose your Size</h2>

      {PIZZA_SIZES.map((pizzaSize, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              selectPizzaSize(pizzaSize)
            }}
          >
            {pizzaSize}
          </button>
        )
      })}

      <div>Selected Size: {size}</div>

      <Link to={ROUTES.SELECT_CRUST}>Choose your Crust</Link>
    </>
  )
}

export default SelectSize
