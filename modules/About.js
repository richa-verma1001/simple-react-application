import React from 'react'
import axios from 'axios'

export default React.createClass({
  getInitialState() {
    return {
      personInfo: []
    };
  },
  componentDidMount() {
    axios.get('../data/about.json')
      .then(this.processData)
      .catch(function(error){
        console.log(error)
      });
  },
  processData(response) {
    if(response.status == 200){
      console.log(this);
      this.setState({
        personInfo: response.data
      });
    }
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
