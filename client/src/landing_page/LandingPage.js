import React from "react";
import Header from "./Header/index";
import About from "./About/index"
import Features from "./Features/index";
import {connect} from "react-redux";

function LandingPage(props){
  const about = props.about ? <About /> : null
  const features = props.features ? <Features /> : null
  return(
    <div id="lp">
    <Header/>
    {about}
    {features}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    about: state.currentProject.about,
    features: state.currentProject.features
  }
}
export default connect(mapStateToProps)(LandingPage)