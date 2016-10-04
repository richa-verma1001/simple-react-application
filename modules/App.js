import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'

export default React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <div className="page-header">
          <div className="row">
            <div className="col-lg-1">
              <blockquote>
                <div><Banner/></div>
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
