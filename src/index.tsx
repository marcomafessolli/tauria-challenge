import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

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
        <Route path='/choose-your-size'>
          <SelectSize />
        </Route>
        <Route path='/choose-your-crust'>
          <SelectCrust />
        </Route>
        <Route path='/choose-your-toppings'>
          <SelectToppings />
        </Route>
        <Route path='/check-your-custom-pizza'>
          <CheckYourPizza />
        </Route>
        <Route exact path='/'>
          <Redirect to='choose-your-size' />
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
