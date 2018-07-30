import React from "react"
import {connect} from "react-redux";

function Subheading(props){
  return(
    <h3 style={{fontFamily: `${props.font_family}`, color: `${props.color}`, width: "100%", textAlign: "center", position: "relative", zIndex: "1", margin: "10px 0"}}>{props.subheading}</h3>
  )
}

const mapStateToProps = state => {
  if(state.currentProject.color_palette){
    return {
      subheading: state.currentProject.subheading,
      font_color:  state.currentProject.color_palette[0],
      font_family: state.currentProject.font
    }
  }
}

export default connect(mapStateToProps)(Subheading)