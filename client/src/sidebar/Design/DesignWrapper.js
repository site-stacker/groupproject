import React from "react";
import styled from "styled-components";
import Design from "./Design";
import {darkwhite} from "./../shared/colors";

export default function Wrapper(){
  return(
    <Container>
      <Design />
    </Container>  
  )
}

const Container = styled.div`
  display:flex;
  flex-flow: column;
  padding: 50px;
  width: 500px;
  height: 100vh;
  background: ${darkwhite};
  position: absolute;
  left: -500px;
  z-index: 40;
  box-sizing: border-box;
  overflow-y: scroll;
  align-items: center;
  box-shadow: 0 0 30px black;

  ::-webkit-scrollbar {
    width: 0;
}
`;