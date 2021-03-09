import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route extact path="/" component={Home}/>
                </Switch>
            </Router>
        );
    }
}
