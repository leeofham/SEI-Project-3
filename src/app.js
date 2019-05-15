import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'


import FlashMessages from './components/common/FlashMessages'


import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import Login from './components/auth/Login'
import Register from './components/auth/Register'


import PremadeShow from './components/premade/Show'
import PremadeIndex from './components/premade/Index'
import BoxesChoice from './components/common/Boxes'
import MyCratesIndex from './components/mycrates/Index'
import MyCratesNew from './components/mycrates/New'
import MyCratesEdit from './components/mycrates/Edit'
import MyCratesShow from './components/mycrates/Show'

import BoxesOrdered from './components/common/OrderedBox'
import CheckoutForm from './components/common/CheckoutForm'
import Basket from './components/common/Basket'

import 'bulma'
import './style.scss'

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <FlashMessages />
          <Switch>
            <Route path="/basket" component={Basket} />
            <Route path="/mycrates/new" component={MyCratesNew} />
            <Route path="/mycrates/:id/edit" component={MyCratesEdit} />
            <Route path="/mycrates/:id" component={MyCratesShow} />
            <Route path="/premade/:id" component={PremadeShow} />
            <Route path="/checkout" component={CheckoutForm} />
            <Route path="/mycrates" component={MyCratesIndex} />
            <Route path="/ordered" component={BoxesOrdered} />
            <Route path="/premade" component={PremadeIndex} />
            <Route path="/boxes" component={BoxesChoice} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
