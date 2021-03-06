import React from "react"
import styled from "styled-components";
import {lightGrey, violet} from "./colors"

export default function SearchInput(props){
    return(
      <Div>
        <Inputs />
        <Label top={props.input ? 0 : "-16px"}>{props.name}</Label>
        <FocusBorder width={props.input ? 0 : "100%"}/>
      </Div>
    )
}

const Div = styled.div`
  width: 90%;
  position: relative;
  margin: 50px 0;
`;

const Inputs = styled.input`
  width: 100%;
  border: 0; 
  padding: 4px 20px; 
  border-bottom: 1px solid #ccc; 
  background-color: transparent;

  &:focus{
    outline: none;
  }
  &:focus ~ span{
    width: 100%; 
    transition: 0.4s;
  }
  &:focus ~ label{
    top: -16px; 
    font-size: 12px; 
    color: ${violet}; 
    transition: 0.3s;
  }
`;

const Label = styled.label`
  position: absolute; 
  left: 0; 
  top: ${props => props.top};
  color: ${lightGrey}; 
  transition: 0.3s; 
  z-index: -1; 
  letter-spacing: 0.5px;
`;

const FocusBorder = styled.span`
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: ${props => props.width}; 
  height: 2px; 
  background-color: ${violet}; 
  transition: 0.4s;
`;