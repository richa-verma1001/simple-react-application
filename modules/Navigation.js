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
                <li><a href="#">Page1</a></li>
                <li><a href="#">Page2</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Page3</a></li>
                <li role="separator" className="divider"></li>
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
