import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'

const TOPPING_OPTIONS = [
  'Pepperoni',
  'Mushrooms',
  'Onions',
  'Sausage',
  'Bacon',
  'Extra cheese',
  'Black Olives',
  'Green Peppers',
  'Pineapple',
  'Spinach',
]

const SelectToppings: React.FunctionComponent = () => {
  const { toppings, setToppings } = usePizzaBuilder()

  const selectToppingOption = (selectedToppingOption: string) => {
    setToppings([...toppings, selectedToppingOption])
  }

  return (
    <>
      <h2>Choose your Toppings</h2>

      {TOPPING_OPTIONS.map((toppingOption, index) => {
        const alreadySelected = toppings.includes(toppingOption)

        return (
          <button
            disabled={alreadySelected}
            key={index}
            onClick={() => {
              selectToppingOption(toppingOption)
            }}
          >
            {toppingOption}
          </button>
        )
      })}

      <div>Selected Toppings:</div>
      <ul>
        {toppings.map((topping, index) => {
          return <li key={index}>{topping}</li>
        })}
      </ul>

      <Link to={ROUTES.CHECK_YOUR_PIZZA}>Check your Custom Pizza</Link>
    </>
  )
}

export default SelectToppings
