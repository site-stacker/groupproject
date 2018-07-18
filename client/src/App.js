import React, { Component } from 'react';
import LandingPage from "./landing_page/LandingPage"
import Sidebar from './sidebar/index';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <LandingPage/>
      </div>
    );
  }
}

export default App;
