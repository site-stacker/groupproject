import React from "react";
import styled from "styled-components";
import Design from "./Design/Design";

export default function Wrapper(){
  return(
    <Sidebar>
      <Menu>
        <MenuItem>Design</MenuItem>
        <MenuItem>Content</MenuItem>
      </Menu>
      <Design />
    </Sidebar>  
  )
}

const Sidebar = styled.div`
  display:flex;
  flex-flow: column;
  padding: 50px;
  width: 500px;
  height: 100vh;
  background: red;
  position: fixed;
  z-index: 40;
  box-sizing: border-box;
  overflow-y: scroll;
  align-items: center;
  box-shadow: 0 0 30px black;

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
  margin-bottom: 40px;
`;

const MenuItem = styled.div`
  width: 50%;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px 0;
  cursor: pointer;
`;