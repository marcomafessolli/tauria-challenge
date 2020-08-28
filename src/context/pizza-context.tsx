import React, { useContext, useEffect, useState } from 'react'

interface PizzaContext {
  setSize: Function
  setCrust: Function
  setToppings: Function
  size: string
  crust: string
  toppings: Array<string>
  price: number
}

const defaultContext: PizzaContext = {
  setSize: () => {},
  setCrust: () => {},
  setToppings: () => {},
  size: '',
  crust: '',
  toppings: [],
  price: 0,
}

const PizzaContext = React.createContext<PizzaContext>(defaultContext)

export const usePizzaBuilder = () => {
  return useContext(PizzaContext)
}

export const PizzaConsumer: React.FunctionComponent = ({ children }) => {
  const [size, setSize] = useState('')
  const [crust, setCrust] = useState('')
  const [toppings, setToppings] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setPrice((price) => {
      return price + 1
    })
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
