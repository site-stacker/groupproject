import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import ColorSelector from "./ColorSelector";
import FontSelector from "./FontSelector";

export default function Wrapper(){
  return(
    <Sidebar>
      <ColorSelector />
      <FontSelector />
    </Sidebar>  
  )
}

const Sidebar = styled.div`
  display:flex;
  flex-flow: column;
  padding: 50px;
  width: 500px;
  height: 100vh;
  background: rgba(255, 255 ,255 ,0.95);
  position: fixed;
  z-index: 40;
  box-sizing: border-box;
  overflow-y: scroll;

`;
