import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import 'normalize.css'

import styled from 'styled-components'

import ROUTES from './routes'

import SelectSize from './components/select-size'
import SelectCrust from './components/select-crust'
import SelectToppings from './components/select-toppings'
import CheckYourPizza from './components/check-your-pizza'

import Navigation from './components/navigation'

import { PizzaConsumer } from './context/pizza-context'
import { ApiDataConsumer } from './context/api-data-context'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2.5vh 3.5vw;
  box-sizing: border-box;

  background: rgb(229, 115, 115);
  background: radial-gradient(
    circle,
    rgba(229, 115, 115, 1) 0%,
    rgba(229, 57, 53, 1) 100%
  );
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
`

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <ApiDataConsumer>
        <PizzaConsumer>
          <AppContainer>
            <Navigation />
            <Switch>
              <Route path={ROUTES.SELECT_SIZE}>
                <SelectSize />
              </Route>
              <Route path={ROUTES.SELECT_CRUST}>
                <SelectCrust />
              </Route>
              <Route path={ROUTES.SELECT_TOPPINGS}>
                <SelectToppings />
              </Route>
              <Route path={ROUTES.CHECK_YOUR_PIZZA}>
                <CheckYourPizza />
              </Route>
              <Route exact path='/'>
                <Redirect to={ROUTES.SELECT_SIZE} />
              </Route>
            </Switch>
          </AppContainer>
        </PizzaConsumer>
      </ApiDataConsumer>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
