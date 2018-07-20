import React, { Component } from 'react';
import LandingPage from "./landing_page/LandingPage"
import Sidebar from './sidebar/index';
<<<<<<< HEAD
import EditIcon from "./sidebar/EditIcon/index"
=======
import Login from './sidebar/Login/Login'
>>>>>>> master

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Sidebar />
        <EditIcon />
        <LandingPage />
=======
        {/* <Sidebar />
        <LandingPage/> */}
        <Login />
>>>>>>> master
      </div>
    );
  }
}

export default App;
