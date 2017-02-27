/**
 * @overview: Routes
 * @author: txBoy
 * @created: 2017-02-22.
 */

import React from "react";
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory} from 'react-router';

import Index from "./HelloWorld";
import List from "./BlogList";
import About from "./About";

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                  <li><IndexLink to="/">首页</IndexLink></li>
                  <li><Link to="/list">list</Link></li>
                  <li><Link to="/About">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

const routes = [
    { path: 'list', component: List },
    { path: 'about', component: About }
]

module.exports = {
    path: '/',
    component: App,
    childRoutes: routes,
    defaultIndex: List
}
