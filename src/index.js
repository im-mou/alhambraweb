import React from 'react';
import ReactDOM from 'react-dom';
import RoutesList from './Store/Routes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import 'antd/dist/antd.css';
import './index.css';

import HomePage from './Pages/HomePage';
import Notfound from './Pages/NotFound';

// import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <App>
            <Switch>
                <Route exact path={RoutesList.HOMEPAGE.link} component={HomePage} />
                <Route component={Notfound} />
            </Switch>
        </App>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
