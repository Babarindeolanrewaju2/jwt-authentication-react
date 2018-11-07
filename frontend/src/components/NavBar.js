import React, { Component } from 'react';
import AuthService from './AuthService';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <h1>Interview Authentication App</h1>
      </nav>
    );
  }
}

export default NavBar;