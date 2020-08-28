import React, { useContext, useEffect, useState } from 'react'

interface PizzaContext {
  setSize: Function
  setCrust: Function
  setToppings: Function
  size: string
  crust: string
  toppings: Array<string>
  price: number
  canCheckout: boolean
}

const defaultContext: PizzaContext = {
  setSize: () => {},
  setCrust: () => {},
  setToppings: () => {},
  size: '',
  crust: '',
  toppings: [],
  price: 0,
  canCheckout: false,
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
  const [canCheckout, setCanCheckout] = useState(false)

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
        canCheckout,
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}
