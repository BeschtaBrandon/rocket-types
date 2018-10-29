/*
  Yahara Software Programming Challenge

 Author: Brandon Beschta
 Date: 10.26.2018
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Parent from './components/Parent.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Parent />
      </div>
    );
  }
}

export default App;
