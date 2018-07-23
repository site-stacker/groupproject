import React from "react"
import {connect} from "react-redux";
import styled from "styled-components"

function Subheading(props){
  return(
    <Subheader color={props.font_color.length !== 0 ? props.font_color[0].substring(1, props.font_color[0].length-1) : null}>{props.subheading}</Subheader>
  )
}

const mapStateToProps = state => {
  const str = state.currentProject.color_palette
  const arr = str ? str.substring(1, str.length-1).split(", ") : []
  return {
    subheading: state.currentProject.subheading,
    font_color: arr
  }
}

export default connect(mapStateToProps)(Subheading)

export const Subheader = styled.h3`
  width: 100%;
  text-align: center;
  color: ${props => props.color};
  position: relative;
  z-index: 1;
  margin: 0;
`;