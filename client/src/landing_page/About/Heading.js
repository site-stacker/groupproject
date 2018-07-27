import React from "react";
import {connect} from "react-redux";
import {H2} from "./../shared/H2";

function Heading(props){
  return (
    <H2>{props.heading}</H2>
  )
}

const mapStateToProps = state => {
  return{
    heading: state.currentProject.about_header
  }
}

export default connect(mapStateToProps)(Heading)