import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Welcome</div>
        <div className="card-body">
          <p>Hello. How are you today?</p>
          <button type="submit" className="btn btn-primary">Sign out</button>
        </div>
      </div>
      );
  }
}

export default App;
