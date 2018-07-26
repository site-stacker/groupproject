import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"


function Heading(props){
    return(
      <Header font={props.font_family} color={props.color}>{props.heading}</Header>
    )
  }

const mapStateToProps = state => {
  return {
    heading: state.currentProject.heading,
    color: state.currentProject.color_palette ? state.currentProject.color_palette[0] : null,
    font_family: state.currentProject.font
  }
}

export default connect(mapStateToProps)(Heading)

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  color: ${props => props.color};
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: ${props => props.font};
`;