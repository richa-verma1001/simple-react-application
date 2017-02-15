import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      personInfo: []
    };
  },
  componentDidMount() {
    fetch('../data/about.json')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState(
          {
            personInfo: result
          }
        );
      })
      .catch((error) => {
        reject(error);
      });
  },
  render() {
    const listItems = this.state.personInfo.map(function(item){
      return (
        <div>
          <li key="{item.id}">{item.name}</li>
        </div>
      );
    }, this);
    return (
        <ul>{listItems}</ul>
    );
  }
})
