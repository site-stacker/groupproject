import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import {violet} from "./../../sidebar/shared/colors"



function Paragraph(props){
  return (
    <P style={{fontFamily: `${props.fontFamily}`, color: `${props.color_palette[4]}`}}>{props.text}</P>
    //  <p style={{fontFamily: `${this.props.fontFamily}`}}>{this.props.text}</p>
  )   
}


const mapStateToProps = state => {
  return{
    text: state.currentProject.about_text,
    fontFamily: state.currentProject.font,
    color_palette: state.currentProject.color_palette !== undefined ? state.currentProject.color_palette : []
  }
}

const P = styled.p`
  width: 50%;
  margin: 0 auto;
  color: ${violet};
  text-align: center;
`

export default connect(mapStateToProps)(Paragraph)

