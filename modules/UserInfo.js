import React from 'react'

export default React.createClass({
  render() {
    return (
        <div><h3>
        {this.props.children}
        {this.props.params.username}<br />
        {this.props.params.reponame}
        </h3></div>
    )
  }
})
