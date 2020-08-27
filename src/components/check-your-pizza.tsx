import React from 'react'
import { Link } from 'react-router-dom'

const CheckYourPizza: React.FunctionComponent = () => {
  return (
    <>
      <h2>Check your Pizza</h2>
      <Link to='/choose-your-size'>Order Again</Link>
    </>
  )
}

export default CheckYourPizza
