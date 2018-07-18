import React, {Component} from "react";
import axios from "axios"
import {connect} from "react-redux"
import {getFontsList} from "./../redux/reducer"

class FontSelector extends Component{

  componentDidMount(){
    this.props.getFontsList()
  }

  render(props){
    const mapped = this.props.fonts.map((obj, i) => {
     return <p>{obj.family}</p>
    })
    return(
      <div>
      <p>FONTS</p>
      {mapped}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    fonts: state.fonts_list
  }
}
export default connect(mapStateToProps, {getFontsList})(FontSelector)

