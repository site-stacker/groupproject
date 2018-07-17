import React from "react"
import {connect} from "react-redux";
import styled from "styled-components"

function Subheading(props){
  return(
    <Subheader>{props.subheading}</Subheader>
  )
}

const mapStateToProps = state => {
  return {
    subheading: state.header.subheading,
    font_color: state.header.font_color
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