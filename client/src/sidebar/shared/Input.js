import React, {Component} from "react"
import styled from "styled-components";
import {lightGrey, violet} from "./colors"

export default class Input extends Component{
  constructor(){
    super();

    this.state={
      input: ""
    }
  }
  handler = (str) =>{
    this.props.handleInput(str)
    this.setState({input: str})
  }
  render(){
    return(
      <Div>
        <Inputs onChange={(e) => this.handler(e.target.value)}/>
        <Label top={!this.state.input ? 0 : "-16px"}>{this.props.name}</Label>
        <FocusBorder width={!this.state.input ? 0 : "100%"}/>
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  position: relative;
  margin: 50px 0;


`;

const Inputs = styled.input`
  width: 100%;
  border: 0; 
  padding: 4px 20px; 
  box-sizing: border-box; 
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