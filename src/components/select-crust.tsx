import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import ROUTES from '../routes'

import { usePizzaBuilder } from '../context/pizza-context'
import { PizzaCrust, useApiData } from '../context/api-data-context'

const SelectCrust: React.FunctionComponent = () => {
  const { size, crust, setCrust } = usePizzaBuilder()
  const { pizzaCrusts } = useApiData()

  const selectCrustOption = (selectedCrustOption: PizzaCrust) => {
    setCrust(selectedCrustOption)
  }

  if (!size.label) {
    return <Redirect to={ROUTES.SELECT_SIZE} />
  }

  return (
    <>
      <h2>Choose your Crust</h2>

      {pizzaCrusts.map((crust, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              selectCrustOption(crust)
            }}
          >
            {crust.label}
          </button>
        )
      })}

      <div>Selected Crust: {crust.label}</div>

      <Link
        to={ROUTES.SELECT_TOPPINGS}
        style={!crust.label ? { pointerEvents: 'none' } : {}}
      >
        Choose your Toppings
      </Link>
    </>
  )
}

export default SelectCrust
