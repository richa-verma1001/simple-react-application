import 'bootstrap'
import React from 'react'
import { render } from 'react-dom'
import { Route, IndexRoute } from 'react-router'
import App from '../modules/App'
import Navigation from '../modules/Navigation'
import About from '../modules/About'
import Repos from '../modules/Repos'
import Home from '../modules/Home'
import TBD from '../modules/TBD'
import UserInfo from '../modules/UserInfo'

module.exports = (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:username/:reponame" component={UserInfo}/>
      </Route>
    </Route>
)
