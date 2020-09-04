import React from 'react'
import { NavLink } from 'react-router-dom'

import ROUTES from '../routes'

import styled from 'styled-components'

import { usePizzaBuilder } from '../context/pizza-context'

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`

interface NavigationItem {
  isActive: boolean
}

const NavigationItem = styled.div<NavigationItem>`
  color: ${(props) => (props.isActive ? '#fff' : 'grey')};
  pointer-events: ${(props) => (props.isActive ? '' : 'none')};
`

const Navigation: React.FunctionComponent = () => {
  const { size, crust, toppings } = usePizzaBuilder()

  return (
    <NavigationContainer>
      <NavLinkStyled to={ROUTES.SELECT_SIZE}>
        <NavigationItem isActive={true}>Choose your Size</NavigationItem>
      </NavLinkStyled>

      <NavLinkStyled to={ROUTES.SELECT_CRUST}>
        <NavigationItem isActive={!!size.label}>
          Choose your Crust
        </NavigationItem>
      </NavLinkStyled>

      <NavLinkStyled to={ROUTES.SELECT_TOPPINGS}>
        <NavigationItem isActive={!!crust.label}>
          Choose yor Toppings
        </NavigationItem>
      </NavLinkStyled>

      <NavLinkStyled to={ROUTES.CHECK_YOUR_PIZZA}>
        <NavigationItem isActive={toppings.length > 0}>
          Check your pizza
        </NavigationItem>
      </NavLinkStyled>
    </NavigationContainer>
  )
}

export default Navigation
