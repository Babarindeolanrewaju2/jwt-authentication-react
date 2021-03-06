import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';
import Login from './components/Login';
import NavBar from './components/NavBar';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar />
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
