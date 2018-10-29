/*
  Yahara Software Programming Challenge

 Author: Brandon Beschta
 Date: 10.26.2018
*/

import React, { Component } from 'react';

import Dropdown from './Dropdown.jsx';
import Table from './Table.jsx';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rocketTypeValue:null};
    this.handler = this.handler.bind(this)
  }

  handler(e) {
   e.preventDefault()
   this.setState({
     rocketTypeValue: e.target.value
   })
 }

  render() {
    return(
      <div>
        <Dropdown handler={this.handler} {...this.state} />
        <Table handler={this.handler} {...this.state} />
      </div>
    );
  }
}

export default Parent;
