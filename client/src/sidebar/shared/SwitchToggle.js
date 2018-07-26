import React, {Component} from "react";
import styled from "styled-components";
import {violet, lightGrey} from "./colors"

export default class Toggle extends Component{
  constructor(){
    super()

    this.state={
      toggleSwitch: false
    }
  }

  handleToggleSwitch = () => {
    this.setState({toggleSwitch: !this.state.toggleSwitch})
    // this.props.updateToggleCombination(!this.props.toggleSwitch)
  }

  render(){
    return (
      <Switch name="switch">
        <SwitchLabel for="switch" left={this.state.toggleSwitch ? "24px" : 0} bg_color={this.state.toggleSwitch ? violet : lightGrey}  onClick={() => this.handleToggleSwitch()}/>
      </Switch>
    )
  }
}

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  right: 0;
`;

const SwitchLabel = styled.label`
  display: block;
  width: 48px;
  height: 24px;
  text-indent: -150%;
  clip: rect(0 0 0 0);
  color: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

  &:before,
  &:after{
    content: "";
    display: block;
    position: absolute;
    cursor: pointer;
  }          

  &:before{
    width: 100%;
    height: 100%;
  background-color: ${props => props.bg_color};
    border-radius: 9999em;
    transition: background-color 0.25s ease;
  }

  &:after{
    top: 0;
    left: ${props => props.left};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    transition: left 0.25s ease;
  }
`;