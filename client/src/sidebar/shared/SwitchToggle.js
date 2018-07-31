import React, {Component} from "react";
import styled from "styled-components";
import {violet, lightGrey} from "./colors"
import {connect} from "react-redux"
import { toggleAboutSection, toggleFeaturesSection} from "../../redux/reducer";

class Toggle extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleSwitch: ""
    }
  }
  componentDidMount(){
    this.setState({toggleSwitch: this.props.toggle})
  }

  componentDidUpdate(pP){
    if(pP.toggle !== this.props.toggle){
      this.setState({toggleSwitch: this.props.toggle})
    }
  }

  handleToggleSwitch = (section) => {
    this.setState({toggleSwitch: !this.state.toggleSwitch})
    switch(section){
      case "About Us":
      this.props.toggleAboutSection(!this.props.about);
      break;
      case "Features":
      this.props.toggleFeaturesSection(!this.props.features);
      break;
    }
  }

  render(){
    return (
      <Switch name="switch">
        <SwitchLabel for="switch" left={this.state.toggleSwitch ? "24px" : 0} bg_color={this.state.toggleSwitch ? violet : lightGrey}  onClick={() => this.handleToggleSwitch(this.props.name)}/>
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return{
    about: state.currentProject.about,
    features: state.currentProject.features
  }
}

export default connect(mapStateToProps, {toggleAboutSection, toggleFeaturesSection})(Toggle)

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