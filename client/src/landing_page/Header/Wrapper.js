import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components"



class Wrapper extends Component{
  
  componentDidMount(){

  }


  render(){
    return(
      <HeaderWrapper bg_img={`url("${this.props.bg_img}")`} bg_color={this.props.bg_color} bg_combined={this.props.bg_combined}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    bg_img: state.background_img,
    bg_color: state.background_color,
    bg_combined: state.bg_combined
  }
}

export default connect(mapStateToProps)(Wrapper)

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 600px;
  background-image: ${props => props.bg_img};
  background-color: ${props => props.bg_color};
  
  &:before{
    position:absolute;
    z-index: 1;
    height: 600px;
    top: 0;
    right: 0;
    left: 0;
    content:'';
    background-color: rgba(0,0,0,0.5);

  }
`;