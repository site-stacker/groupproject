import React, {Component} from "react"
import styled from "styled-components";
import {grey, greyBlue} from "./colors"

export default class Textarea extends Component{
  constructor(){
    super();

    this.state = {
      text: ""
    }
  }

  render(){
    return(
      <div>
        <TextInput rows="3" cols="50" onChange={(e) => this.props.handleTextarea(e.target.value, this.props.id)} value={this.props.value}/>
      </div>
    )
  }
}

const TextInput = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${grey};
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  color: ${greyBlue};

  &:focus{
    outline: none;
  }
`;