import React, { useContext, useEffect, useState } from 'react'

export interface PizzaSize {
  label: string
  price: number
  toppingLimit: number
}

export interface PizzaCrust {
  label: string
  price: number
}

export interface PizzaTopping {
  label: string
}

export interface PizzaToppingLimits {
  limitWithoutAdditional: number
  additionalToppingCost: number
  allowRepeated: boolean
}

type ApiDataContext = {
  pizzaSizes: Array<PizzaSize>
  pizzaCrusts: Array<PizzaCrust>
  pizzaToppings: Array<PizzaTopping>
  pizzaToppingLimits: PizzaToppingLimits
  loadingData: boolean
}

const ApiDataContext = React.createContext<ApiDataContext>({} as ApiDataContext)

export const useApiData = () => {
  return useContext(ApiDataContext) as ApiDataContext
}

export const ApiDataConsumer: React.FunctionComponent = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const [pizzaSizes, setPizzaSizes] = useState([])
  const [pizzaCrusts, setPizzaCrusts] = useState([])
  const [pizzaToppings, setPizzaToppings] = useState([])
  const [pizzaToppingLimits, setPizzaToppingLimits] = useState(
    {} as PizzaToppingLimits
  )

  useEffect(() => {
    setLoading(true)

    const fetchPizzaConfigData = async () => {
      const response = await fetch('/pizza-config-data.json')
      const data = await response.json()

      /*
       * Considering scenario where which one of these would have their on
       * API endpoint. Otherwise, one useState should be enough
       */
      setPizzaSizes(data.pizzaSizes)
      setPizzaCrusts(data.pizzaCrusts)
      setPizzaToppings(data.pizzaToppings)
      setPizzaToppingLimits(data.pizzaToppingLimits)

      setLoading(false)
    }

    fetchPizzaConfigData()
  }, [])

  return (
    <ApiDataContext.Provider
      value={{
        pizzaSizes,
        pizzaCrusts,
        pizzaToppings,
        pizzaToppingLimits,
        loadingData: loading,
      }}
    >
      {children}
    </ApiDataContext.Provider>
  )
}
