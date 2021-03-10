import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import NewHeader from './header/newnab';
import Home from './home/Home';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <NewHeader />
                <Switch>
                    <Route extact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Router>
        );
    }
}
