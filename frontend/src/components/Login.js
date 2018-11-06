import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Please sign in</div>
                <div className="card-body">
                    <form method="post">
                        <div className="form-group">
                            <label htmlFor="username-input">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="username-input" 
                                placeholder="Enter username" 
                                name="username"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-input">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password-input" 
                                placeholder="Enter password" 
                                name="password" 
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;