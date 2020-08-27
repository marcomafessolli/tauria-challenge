import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import ROUTES from './routes'

import SelectSize from './components/select-size'
import SelectCrust from './components/select-crust'
import SelectToppings from './components/select-toppings'
import CheckYourPizza from './components/check-your-pizza'

import Navigation from './components/navigation'

const App: React.FunctionComponent = () => {
  return (
    <Router>
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
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
