import React from 'react'
import { Link } from 'react-router-dom'

const SelectSize: React.FunctionComponent = () => {
  return (
    <>
      <h2>Choose your Size</h2>
      <Link to='/choose-your-crust'>Choose your Crust</Link>
    </>
  )
}

export default SelectSize
