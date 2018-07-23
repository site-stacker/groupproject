import React from "react"
import styled from "styled-components";

export default function Back(props){
  return(
    <Btn onClick={() => props.updatePosition("general")}>
    <MenuIcon className="pe-7s-angle-left"></MenuIcon>
    <P>BACK</P>
    </Btn>
  )
}
export const Btn = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  cursor: pointer;
  width: 80px;
  
  &:hover :nth-child(1){
    left: -5px;
  }
  `;
const MenuIcon = styled.span`
       position: relative;
      text-align: right;
      left: 0px;
      -webkit-transition: 0.2s ease-in;
      transition: 0.2s ease-in;
      transform: scale(2);
      top: 35px;
  `;

const P = styled.p`

`;