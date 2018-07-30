import React from "react"
import {connect} from "react-redux";

function Image(props){
  return(
    <img src={`${props.product_img}`} style={{height: "400px", zIndex: "1"}}/>
  )
}

const mapStateToProps = state => {
  return {
    product_img: state.currentProject.main_img
  }
}

export default connect(mapStateToProps)(Image)