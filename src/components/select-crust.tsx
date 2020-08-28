import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'

const CRUST_OPTIONS = [
  'Thin', // +$2
  'Thick', // +$4
]

const SelectCrust: React.FunctionComponent = () => {
  const { crust, setCrust } = usePizzaBuilder()

  const selectCrustOption = (selectedCrustOption: string) => {
    setCrust(selectedCrustOption)
  }

  return (
    <>
      <h2>Choose your Crust</h2>

      {CRUST_OPTIONS.map((crustOption, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              selectCrustOption(crustOption)
            }}
          >
            {crustOption}
          </button>
        )
      })}

      <div>Selected Crust: {crust}</div>

      <Link to={ROUTES.SELECT_TOPPINGS}>Choose your Toppings</Link>
    </>
  )
}

export default SelectCrust
