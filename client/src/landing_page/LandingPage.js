import React from "react";
import Header from "./Header/index";
import About from "./About/index"
import Features from "./Features/index";
// import HomePage from '../home_page/index';

export default function LandingPage(){
  return(
    <div>
    <Header/>
    <About />
    <Features />
    {/* <HomePage /> */}
    </div>
  )
}