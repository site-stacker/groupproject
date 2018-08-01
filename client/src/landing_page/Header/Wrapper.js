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
    const opactity = this.props.bg_combined ? 0.9 : !this.props.bg_img ? 1 : 0;
    return(
      <div style={{width: "100%", height: "700px", color: `${props => props.color}`,  position:"relative", zIndex: "0", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
      <Logo/>
      <TextWrapper>
        <Heading />
        <Subheading />
      </TextWrapper>
      <Button />
      <Image />
      <div style={{width: "100%", height: "700px", backgroundColor: `${this.props.color_palette[this.props.bg_color]}`,  position:"absolute", zIndex: "0", opacity: `${opactity}`, transition: "0.2s ease-in"}} />
      <div style={{width: "100%", height: "100%", backgroundImage: `url(${this.props.bg_img})`, backgroundSize: "cover", backgroundPosition: "center",  position:"absolute", zIndex: "-2",
        display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center",}}>
        </div>
      </div>

    )
  }
}
const mapStateToProps = state => {
  return {
    theme: state.currentProject.color_palette,
    bg_img: state.currentProject.background_img,
    bg_color: state.currentProject.background_color,
    bg_combined: state.currentProject.picture_and_color,
    color_palette: state.currentProject.color_palette !== undefined ? state.currentProject.color_palette : [],
    color: state.currentProject.color_palette ? state.currentProject.color_palette[0] : "#ffffff"
  }
}

export default connect(mapStateToProps)(Wrapper)


const TextWrapper = styled.div`
  width:50%;
`;