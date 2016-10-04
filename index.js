import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Navigation from './modules/Navigation'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'

//render(<App/>, document.getElementById('app'))
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}/>
    </Route>
  </Router>
), document.getElementById('app'))
