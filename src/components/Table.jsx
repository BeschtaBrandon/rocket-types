/*
  Yahara Software Programming Challenge

 Author: Brandon Beschta
 Date: 10.26.2018
*/

import React, { Component } from 'react';
import moment from 'moment';

class Table extends Component {

  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        launches: []
      };
    }

    componentDidUpdate(prevProps) {
      console.log(prevProps)
    fetch("https://launchlibrary.net/1.4/launch/" + this.props.rocketTypeValue)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            launches: result.launches
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

  convertUTCDateToLocalDate(date) {
    var localDate = new Date(date);
    var newDate = new Date(localDate.getTime()+localDate.getTimezoneOffset()*60*1000);

    var offset = localDate.getTimezoneOffset() / 60;
    var hours = localDate.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}

  render() {

    const { error, isLoaded, launches } = this.state;
    const rocketTypeValue = this.props.rocketTypeValue;
    console.log(rocketTypeValue)
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-xs-3 col-lg-2">Name</th>
                <th scope="col-xs-3 col-lg-2">Date</th>
                <th scope="col-xs-1 col-lg-1">Status</th>
                <th scope="col-xs-3 col-lg-4">Location Name</th>
                <th scope="col-xs-2 col-lg-3">Rocket Name</th>
              </tr>
            </thead>
            <tbody>
            {launches.slice(0, 25).map((item, key) => (
              <tr key={key}>
              <td>
                {item.name}
              </td>
              <td>
              {moment(this.convertUTCDateToLocalDate(item.windowstart)).format('MMMM DD, YYYY kk:mm:ss zz')}
              </td>
              <td>
                {item.status}
              </td>
              <td>
                {item.location.name}
              </td>
              <td>
                {item.rocket.name}
              </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
        }
      }
}

export default Table;
