import React from 'react'
import { Link } from 'react-router-dom'

const SelectToppings: React.FunctionComponent = () => {
  return (
    <>
      <h2>Choose your Toppings</h2>
      <Link to='check-your-custom-pizza'>Check your Custom Pizza</Link>
    </>
  )
}

export default SelectToppings
