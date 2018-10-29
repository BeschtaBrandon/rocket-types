/*
  Yahara Software Programming Challenge

 Author: Brandon Beschta
 Date: 10.26.2018
*/

import React from 'react';
import './Header.css';

export default function Header() {


  return (
    <header>
    <div className="row">
    <h1 className="col-lg-8 display-4">Recent Rocket Launches</h1>
    <i className="col-lg-1 fas fa-globe-americas"></i>
    <i className="col-lg-3 fas fa-space-shuttle"></i>
    </div>
    </header>
  );
}
