import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
import Banner from './Banner'

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
          <div className="row">
            <div className="col-lg-1">
              <blockquote>

                <div><Banner /></div>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container">
            <div>{this.props.children || <Home/> }</div>
        </div>
      </div>
    )
  }
})
