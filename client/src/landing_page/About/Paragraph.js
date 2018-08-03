import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"

function Paragraph(props){
  return (
    <P font_family={props.fontFamily}>{props.text}</P>
  )
}

const mapStateToProps = state => {
  return{
    text: state.currentProject.about_text,
    fontFamily: state.currentProject.font,
    color_palette: state.currentProject.color_palette !== undefined ? state.currentProject.color_palette : []
  }
}

export default connect(mapStateToProps)(Paragraph)

export const P = styled.p`
  width: 50%;
  margin: 0 auto;
  color: #333;
  font-family: ${props => props.font_family};
  text-align: center;
  line-height: 1.8;
`;