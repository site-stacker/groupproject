import React, {Component} from "react";
import {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection, updateToggleCombination, updateHeaderImage, updateHeaderBg} from "./../../../redux/reducer"
import {connect} from "react-redux"
import ImageUploader from ".//ImageUploader"
import Input from "./../../shared/Input"
import styled from "styled-components";
import BackgroundImgPicker from "./BackgroundImgPicker";
import Back from "./../../shared/Back"
import {violet, lightGrey, greyBlue} from "./../../shared/colors";
import ColorPicker from "./ColorPicker";
import {Btn} from "./../../shared/Button"

class HeaderEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false,
      toggleSwitch: this.props.toggleSwitch
    }
  }
  
  handleToggle = () => {
    this.setState({toggleImgPicker: !this.state.toggleImgPicker})
  }

  handleHeading = (str) => {
    this.props.updateHeaderHeading(str)
  };

  handleSubheading = (str) => {
    this.props.updateHeaderSubheading(str)
  };

  handleButtonText = (str) => {
    this.props.updateHeaderButton(str)
  };

  handleToggleSwitch = () => {
    this.setState({toggleSwitch: !this.state.toggleSwitch})
    this.props.updateToggleCombination(!this.props.toggleSwitch)
  }

  removeImg = (str) => {
    switch(str){
      case "main":
        this.props.updateHeaderImage("");
      case "bg":
        this.props.updateHeaderBg("");
    }
  }

  render(){
    
    return(
      <Wrapper>
        <HeaderWrapper>
          <H3 mb="50px">Header</H3>
          <Back updatePosition={this.props.updatePosition}/>
        </HeaderWrapper>
        <Input handleInput={this.handleHeading} name="Heading" value={this.props.currentProject.heading}/>
        <Input handleInput={this.handleSubheading} name="Subheading" value={this.props.currentProject.subheading}/>
        <Input handleInput={this.handleButtonText} name="Button text" value={this.props.currentProject.button_text}/>
        <OptionWrapper>
          <p>Main image</p>
          <ButtonsWrapper>
            <RemoveBtn className="pe-7s-trash" onClick={()=>this.removeImg("main")}/>
            <ImageUploader />
          </ButtonsWrapper>
        </OptionWrapper>
        <OptionWrapper>
        <p>Background image</p>
        <ButtonsWrapper>
          <RemoveBtn className="pe-7s-trash" onClick={()=>this.removeImg("bg")}/>
          <Button onClick={()=>this.handleToggle()}>Choose</Button>
          <BackgroundImgPicker right={!this.state.toggleImgPicker ? "-500px" : "50px" } toggle={this.handleToggle}/>
        </ButtonsWrapper>
        </OptionWrapper>
        <ColorPicker/>
        <OptionWrapper>
          <p>Combine image with color</p>
          <Switch>
            <SwitchLabel for="switch" left={this.state.toggleSwitch ? "24px" : 0} bg_color={this.state.toggleSwitch ? violet : lightGrey} onClick={() => this.handleToggleSwitch()}/>
          </Switch>
        </OptionWrapper>
        
        
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    toggleSwitch: state.currentProject.picture_and_color,
    sections: state.sectionSelected,
    currentProject: state.currentProject 
  }
}
export default connect(mapStateToProps, {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection, updateToggleCombination, updateHeaderImage, updateHeaderBg})(HeaderEditor)

const Button = Btn.extend`
    padding: 15px;
    position: relative;
    bottom: 0;
    left: 0;
    margin: 5px 0; 
    transform: translateX(0);
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
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

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content:center;
  align-items: center;
`;

const RemoveBtn = styled.div`
  position: relative;
  right: 40px;
  transform: scale(1.6);

  &:before{
    content: '';
    background: #5D38DB;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    transform: scale(1);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in;
    opacity: 1;
    position: absolute;
    transform: translate(50%, -50%);
    top: 0%;
    right: 0%;
    cursor: pointer;
  }

  &:hover:before{
    width: 24px;
    height: 24px;
  }
  &:hover{
    color: #fff;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const P = styled.p`
  margin: 0;
  margin-bottom: ${props =>props.mb};
`;

const H3 = styled.h3`
  position: relative;
  margin: 0;
  color: ${greyBlue}
`;