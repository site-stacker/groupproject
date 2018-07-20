import React, {Component} from "react";
import styled from "styled-components";
import Content from "./Content";
import {darkwhite, darkblue} from "./../shared/colors";


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
  /* align-items: center; */
  

  ::-webkit-scrollbar {
    width: 0;
}
`;



const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  width: 1000px;
`;
