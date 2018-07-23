import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import HomePage from './home_page/index';
import LoggedIn from './home_page/LoggedIn';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/projects' component={LoggedIn}/>
        <Route path='/edit/:project_id' component={App}/>
    </Switch>
)