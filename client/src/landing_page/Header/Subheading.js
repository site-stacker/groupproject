import React from "react"
import {connect} from "react-redux";
import styled from "styled-components"

function Subheading(props){
  return(
    <Subheader font={props.font_family} color={props.font_color}>{props.subheading}</Subheader>
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

export const Subheader = styled.h3`
  width: 100%;
  text-align: center;
  color: ${props => props.color};
  position: relative;
  z-index: 1;
  margin: 10px 0;
  font-family: ${props => props.font};
`;