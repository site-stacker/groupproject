import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import HomePage from './home_page/index';
import LoggedIn from './home_page/LoggedIn';
import ProjectSelections from './project_selections/ProjectSelections';
import CompletedSite from './completed/CompletedSite';
import LandingPage from './landing_page/LandingPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/projects' component={LoggedIn}/>
        <Route path='/edit/:project_id' component={App}/>
        <Route path='/selections' component={ProjectSelections}/>
        <Route path='/z/:project_id/:domain' component={CompletedSite}/>
    </Switch>
)