import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h3> Repos </h3>
        {this.props.children}
      </div>
    )
  }
})
