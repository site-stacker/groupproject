import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Image from "./Image"
import Logo from "./Logo"


function Wrapper(props){
    return(
      <Header bg_img={`url("${props.bg_img}")`} bg_color={props.bg_color} bg_combined={props.bg_combined ? 0.9 : 0} color={props.color}>
      <Logo/>
      <TextWrapper>
        <Heading />
        <Subheading />
      </TextWrapper>
      <Image />
      </Header>
    )
  }

const mapStateToProps = state => {
  return {
    bg_img: state.header.background_img,
    bg_color: state.header.background_color,
    bg_combined: state.header.background_combined,
    color: state.header.font_color
  }
}

export default connect(mapStateToProps)(Wrapper)

export const Header = styled.div`
  width: 100%;
  height: 700px;
  color: ${props => props.color};
  background-image: ${props => props.bg_img};
  background-size: cover;
  background-position: center;
  background-color: ${props => props.bg_color};
  position:relative;
  z-index: -1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  
  &:before{
    position:absolute;
    z-index: 0;
    height: 700px;
    top: 0;
    right: 0;
    left: 0;
    content:"";
    background-color: ${props => props.bg_color};
    opacity: ${props => props.bg_combined};
  }
`;

export const TextWrapper = styled.div`
  width:50%;
`;