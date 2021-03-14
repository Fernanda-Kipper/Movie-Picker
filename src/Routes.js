import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home'
import MoviesListPage from './pages/MoviesListPage'

export default function AppRoutes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/recommended/:id" component={MoviesListPage}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}