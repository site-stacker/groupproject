import React from "react";
import {connect} from "react-redux";
import {H2} from "./../shared/H2";

function Heading(props){
  return (
    <H2 style={{fontFamily: `${props.fontFamily}`, color: `${props.color_palette[1]}`}}>{props.heading}</H2>
  )
}

const mapStateToProps = state => {
  return{
    heading: state.currentProject.about_header,
    fontFamily: state.currentProject.font,
    color_palette: state.currentProject.color_palette !== undefined ? state.currentProject.color_palette : []
  }
}

export default connect(mapStateToProps)(Heading)