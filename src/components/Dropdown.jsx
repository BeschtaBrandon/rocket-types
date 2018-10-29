/*
  Yahara Software Programming Challenge

 Author: Brandon Beschta
 Date: 10.26.2018
*/

import React, { Component } from 'react';
import moment from 'moment'

class Dropdown extends Component {

  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        rocketTypes: [],
        rocketTypeValue: this.props.rocketTypeValue,
      };

      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    fetch("https://launchlibrary.net/1.4/rocketfamily")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rocketTypes: result.RocketFamilies
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleChange(event) {
      this.setState({rocketTypeValue: event.target.value});
    }

  render() {

    const { error, isLoaded, rocketTypes } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="col-lg-8">
        <select className="form-control" onChange={this.props.handler}>
        {rocketTypes.map(item => (
          <option key={item.id} value={item.name}>{item.name}</option>
        ))}
        </select>
        </div>
      );
        }
      }
}

export default Dropdown;
