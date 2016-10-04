import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <p>Render this route outside the application</p>
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </div>
    )
  }
})
