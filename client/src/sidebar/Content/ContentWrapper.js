import React, {Component} from "react";
import styled from "styled-components";
import Content from "./Content";
import {darkwhite} from "./../shared/colors";


class ContentWrapper extends Component{
  constructor(){
    super()

    this.state ={

    }
  }
  
  render(){
    return(
      <Container>
        <Content />
      </Container>  
    )
  }
}


export default ContentWrapper

const Container = styled.div`
  display:flex;
  flex-flow: column;
  padding: 50px;
  width: 500px;
  height: 100vh;
  background: ${darkwhite};
  position:absolute;
  left: 0px;
  z-index: 40;
  box-sizing: border-box;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
}
`;