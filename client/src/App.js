import React, { Component } from 'react';
import LandingPage from "./landing_page/LandingPage"
import Sidebar from './sidebar/index';
import EditIcon from "./sidebar/EditIcon/index"
import Login from './sidebar/Login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <EditIcon />
        <LandingPage />
        <Login />
      </div>
    );
  }
}

export default App;
