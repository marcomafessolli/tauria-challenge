import React from 'react'
import { Link } from 'react-router-dom'

const SelectCrust: React.FunctionComponent = () => {
  return (
    <>
      <h2>Choose your Crust</h2>
      <Link to='choose-your-toppings'>Choose your Toppings</Link>
    </>
  )
}

export default SelectCrust
