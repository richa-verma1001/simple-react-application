import React from 'react'
//import { Link } from 'react-router'
import Home from './Home'
import Banner from './Banner'
import LinkWrapper from './wrappers/LinkWrapper'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <a className="navbar-brand" href="#">React-Router</a>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <LinkWrapper className="nav-link" to="/">Home</LinkWrapper>
            </li>
            <li className="nav-item">
              <LinkWrapper className="nav-link" to="/about">About</LinkWrapper>
            </li>
            <li className="nav-item dropdown">
              <LinkWrapper
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                to="/repos">Repos<span className="caret"></span></LinkWrapper>
              <ul className="dropdown-menu">
                <li><LinkWrapper to="/repos/userA/react">UserA</LinkWrapper></li>
                <li><LinkWrapper to="/repos/userB/angular">UserB</LinkWrapper></li>
                <li role="separator" className="divider"></li>
                <li><LinkWrapper to="/repos/richa/JS">React</LinkWrapper></li>
              </ul>
            </li>
            <li className="nav-item">
              <LinkWrapper className="nav-link" to="/TBD">TBD</LinkWrapper>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})
