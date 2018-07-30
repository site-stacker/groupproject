import React from "react";
import {connect} from "react-redux";

function Heading(props){
    return(
      <h1 style={{fontFamily: `${props.font_family}`, color: `${props.color}`, width: "100%",
      textAlign: "center", position: "relative", zIndex: "1", margin: "0"}}>{props.heading}</h1>
    )
  }

const mapStateToProps = state => {
  if(state.currentProject.color_palette){
    return {
      heading: state.currentProject.heading,
      color: state.currentProject.color_palette[2],
      font_family: state.currentProject.font
    }
  }
}

export default connect(mapStateToProps)(Heading)