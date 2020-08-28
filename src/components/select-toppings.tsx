import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'
import { PizzaTopping, useApiData } from '../context/api-data-context'

const SelectToppings: React.FunctionComponent = () => {
  const { toppings, setToppings } = usePizzaBuilder()
  const { pizzaToppings, pizzaToppingLimits } = useApiData()

  const selectToppingOption = (selectedToppingOption: PizzaTopping) => {
    setToppings([...toppings, selectedToppingOption])
  }

  return (
    <>
      <h2>Choose your Toppings</h2>

      {pizzaToppings.map((topping, index) => {
        const alreadySelected = toppings.find(
          (selectedTopping) => selectedTopping.label === topping.label
        )

        return (
          <button
            key={index}
            disabled={alreadySelected ? true : false}
            onClick={() => {
              selectToppingOption(topping)
            }}
          >
            {topping.label}
          </button>
        )
      })}

      <div>Selected Toppings:</div>
      <ul>
        {toppings.map((topping, index) => {
          return <li key={index}>{topping.label}</li>
        })}
      </ul>

      <Link
        to={ROUTES.CHECK_YOUR_PIZZA}
        style={toppings.length === 0 ? { pointerEvents: 'none' } : {}}
      >
        Check your Custom Pizza
      </Link>
    </>
  )
}

export default SelectToppings
