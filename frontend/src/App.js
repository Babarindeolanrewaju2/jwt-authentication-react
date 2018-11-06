import React, { Component } from 'react';
import AuthService from './components/AuthService';
import withAuth from './components/WithAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Auth = new AuthService();

class App extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Welcome</div>
        <div className="card-body">
            <p>Hello {this.props.user.user.name}. How are you today?</p>
            <button type="submit" className="btn btn-primary" onClick={this.handleLogout.bind(this)}>Sign out</button>
        </div>
      </div>
      );
  }
}

export default withAuth(App);
