import React from "react";
import styled from "styled-components";
import Content from "./Content";
import {darkwhite, darkblue} from "./../shared/colors"

export default function ContentWrapper(){
  return(
    <Sidebar>
      <Menu>
        <MenuItem>Design</MenuItem>
        <MenuItem>Content</MenuItem>
      </Menu>
        <Content />
    </Sidebar>  
  )
}

const Sidebar = styled.div`
  display:flex;
  flex-flow: column;
  padding: 50px;
  width: 500px;
  height: 100vh;
  background: ${darkwhite};
  position: fixed;
  z-index: 40;
  box-sizing: border-box;
  overflow-y: scroll;
  /* align-items: center; */
  box-shadow: 0 0 30px ${darkblue};

  ::-webkit-scrollbar {
    width: 0;
}
`;

const Menu = styled.div`
  display: flex;
  flex-flow: row;
  width: 60%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;
`;

const MenuItem = styled.div`
  width: 50%;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px 0;
  cursor: pointer;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  width: 1000px;
`;
