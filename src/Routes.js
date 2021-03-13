import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home'
import MyFeed from './MyFeed';

export default function AppRoutes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/auth" component={MyFeed}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}