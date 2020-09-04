import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'
import { PizzaSize, useApiData } from '../context/api-data-context'

const SelectSize: React.FunctionComponent = () => {
  const { setSize, size } = usePizzaBuilder()
  const { pizzaSizes } = useApiData()

  const selectPizzaSize = (selectedPizzaSize: PizzaSize) => {
    setSize(selectedPizzaSize)
  }

  return (
    <>
      <h2>Choose your Size</h2>

      {pizzaSizes.map((size, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              selectPizzaSize(size)
            }}
          >
            {size.label}
          </button>
        )
      })}

      <div>Selected Size: {size.label}</div>

      <Link
        to={ROUTES.SELECT_CRUST}
        style={!size.label ? { pointerEvents: 'none' } : {}}
      >
        Choose your Crust
      </Link>
    </>
  )
}

export default SelectSize
