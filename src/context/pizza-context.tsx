import React, { useContext, useEffect, useState } from 'react'

import {
  PizzaCrust,
  PizzaSize,
  PizzaTopping,
  useApiData,
} from './api-data-context'

type PizzaContext = {
  setSize: Function
  setCrust: Function
  setToppings: Function
  size: PizzaSize
  crust: PizzaCrust
  toppings: Array<PizzaTopping>
  price: number
}

const PizzaContext = React.createContext<PizzaContext>({} as PizzaContext)

export const usePizzaBuilder = () => {
  return useContext(PizzaContext) as PizzaContext
}

export const PizzaConsumer: React.FunctionComponent = ({ children }) => {
  const [size, setSize] = useState({} as PizzaSize)
  const [crust, setCrust] = useState({} as PizzaCrust)
  const [toppings, setToppings] = useState([])
  const [price, setPrice] = useState(0)

  const { pizzaToppingLimits } = useApiData()

  const calculatePizzaPrice = (): number => {
    let totalPrice = 0

    if (size.price) {
      totalPrice += size.price
    }

    if (crust.price) {
      totalPrice += crust.price
    }

    if (toppings.length <= 0) {
      return totalPrice
    }

    const totalToppings = toppings.length
    const exceededToppings =
      totalToppings - pizzaToppingLimits.limitWithoutAdditional

    debugger
    if (exceededToppings > 0) {
      totalPrice += exceededToppings * pizzaToppingLimits.additionalToppingCost
    }

    return totalPrice || 0
  }

  useEffect(() => {
    const totalPizzaPrice = calculatePizzaPrice()
    setPrice(totalPizzaPrice)
  }, [size, crust, toppings])

  return (
    <PizzaContext.Provider
      value={{
        setSize,
        setCrust,
        setToppings,
        size,
        crust,
        toppings,
        price,
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}
