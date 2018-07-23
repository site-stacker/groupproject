import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"


function Heading(props){
    return(
      <Header color={props.font_color}>{props.heading}</Header>
    )
  }

const mapStateToProps = state => {
  return {
    heading: state.currentProject.heading,
    font_color: state.header.font_color
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
`;