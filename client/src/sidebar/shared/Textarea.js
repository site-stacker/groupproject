import React, {Component} from "react"
import styled from "styled-components";
import {greyBlue} from "./colors"

export default class Textarea extends Component{
  constructor(){
    super();

    this.state = {
      text: ""
    }
  }

  render(){
    return(
        <TextInput rows={this.props.row} cols="50" onChange={(e) => this.props.handleTextarea(e.target.value, this.props.id)} value={this.props.value}/>
    )
  }
}

const TextInput = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  margin-bottom: 20px;
  box-sizing: border-box;
  color: ${greyBlue};
  background: none;
  line-height: 1.5;
  font-size: 14px;

  &:focus{
    outline: none;
  }
  &::-webkit-scrollbar { 
   width: 0;
  }
`;