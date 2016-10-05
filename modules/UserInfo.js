import React from 'react'

export default React.createClass({
  render() {
    return (
        <div><h3>
        {this.props.children}
        {this.props.params.username}
        </h3></div>
    )
  }
})
