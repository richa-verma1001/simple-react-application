import React from 'react'

export default React.createClass({
  render() {
    return (
        <div>
        	<p>{this.state.isToggleOn ? 'partialDescription' : 'fullDescription'}</p>
        	<a href="#" onClick={this.toggleDescription}>{this.state.isToggleOn ? 'Show More' : 'Show Less'}</a>
        </div>
    )
  },

  getInitialState() {
  	return{
  		isToggleOn: true,
  	};
  }, 

  toggleDescription(e) {
  	console.log('called');
  	e.preventDefault();
  	this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }


})