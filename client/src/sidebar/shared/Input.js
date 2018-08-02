import React, {Component} from "react"
import styled from "styled-components";
import {lightGrey, violet, greyBlue} from "./colors"

export default class Input extends Component{
  constructor(){
    super();

    this.state={
      input: ""
    }
  }
  handler = (str) =>{
    this.props.handleInput(str, this.props.id)
    this.setState({input: str})
  }
  render(){
    return(
      <Div mb={this.props.mb ? this.props.mb : "50px"}>
        <Inputs onChange={(e) => this.handler(e.target.value)} value={this.props.value}/>
        <Label top={this.state.input ? "-20px" : "-20px"}>{this.props.name}</Label>
        <FocusBorder width={!this.state.input ? 0 : "100%"}/>
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: ${props => props.mb};
`;

const Inputs = styled.input`
  width: 100%;
  border: 0; 
  padding: 4px 20px; 
  box-sizing: border-box; 
  border-bottom: 1px solid #ccc; 
  background-color: transparent;
  color: ${greyBlue};
  font-size: 14px;

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