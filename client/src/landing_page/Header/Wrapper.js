import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Image from "./Image"
import Logo from "./Logo"
import Button from "./Button"


class Wrapper extends Component{
  
  componentDidMount(){}

  componentDidUpdate(prevProps){
    if(prevProps.bg_img !== this.props.bg_img){
      this.componentDidMount();
    }
  }

  render(){
    return(
      <Header bg_img={`url("${this.props.bg_img}")`} bg_color={this.props.theme[this.props.bg_color]} bg_combined={this.props.bg_combined ? 0.9 : 0} color={this.props.color}>
      <Logo/>
      <TextWrapper>
        <Heading />
        <Subheading />
      </TextWrapper>
      <Button />
      <Image />
      </Header>
    )
  }
}
const mapStateToProps = state => {
  let theme = []
  if(state.currentProject.color_palette){ theme = state.currentProject.color_palette}
  return {
    theme: theme,
    bg_img: state.currentProject.background_img,
    bg_color: state.currentProject.background_color,
    bg_combined: state.currentProject.picture_and_color,
    color: state.currentProject.color_palette ? state.currentProject.color_palette[0] : "#ffffff"
  }
}

export default connect(mapStateToProps)(Wrapper)

const Header = styled.div`
  width: 100%;
  height: 700px;
  color: ${props => props.color};
  background-image: ${props => props.bg_img};
  background-size: cover;
  background-position: center;
  background-color: ${props => props.bg_color};
  position:relative;
  z-index: 0;
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
    transition: 0.3s all;
  }
`;

const TextWrapper = styled.div`
  width:50%;
`;