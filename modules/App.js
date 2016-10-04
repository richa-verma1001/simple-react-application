import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'

export default React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <div className="page-header">
            <div className="jumbotron"><Banner/></div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            {this.props.children || <Home/> }
          </div>
        </div>
        <div className="panel-footer">
          Footer
        </div>
      </div>
    )
  }
})
