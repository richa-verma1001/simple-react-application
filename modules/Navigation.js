import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <a className="navbar-brand" href="#">React-Router</a>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/repos">Repos</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <blockquote>
            <div>{this.props.children || <Home/> }</div>
          </blockquote>
        </div>
      </div>
    )
  }
})
