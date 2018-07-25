import React, { Component } from "react";
import Header from "./Header/index";
import About from "./About/index"
import Features from "./Features/index";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <About />
        <Features />
      </div>
    )
  }
}
