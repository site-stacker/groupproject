import React from "react";
import {connect} from "react-redux";

function Logo(props){
  return(
    <div>
    {
     props.logo ?
     <img src={props.logo} style={{ position: "absolute", top:"40px", left: "40px", width: "150px", border: "none", zIndex: 1}}/>
      :
      <h3 style={{position: "absolute", top:"10px", left: "40px", border: "none",zIndex: "1", fontFamily: `${props.font_family}`}}>{props.title}</h3>
    }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    logo: state.currentProject.logo,
    title: state.currentProject.title,
    font_family: state.currentProject.font
  }
}

export default connect(mapStateToProps)(Logo)
