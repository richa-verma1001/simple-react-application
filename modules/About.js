import React from 'react';
import LinkWrapper from './wrappers/LinkWrapper';

export default React.createClass({
  getInitialState() {
    return {
      companyInfo: []
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
            companyInfo: result
          }
        );
      })
      .catch((error) => {
        reject(error);
      });
  },
  render() {
    const listItems = this.state.companyInfo.map(function(item){
      const path = `/about/${item.id}`;

      return (
        <div>
          <li key={item.id}><LinkWrapper to={path} company={item}>{item.name}</LinkWrapper></li>          
        </div>
      );
    }, this);
    return (
        <ul>{listItems}</ul>
    );
  }
})
