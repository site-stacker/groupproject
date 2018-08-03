import React, {Component} from "react";
import {changeSelectedSection, updateGeneralTitle, uploadGeneralLogo} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import styled from "styled-components";
import LogoUploader from "./LogoUploader";
import Back from "./../../shared/Back";
import { greyBlue } from "../../shared/colors";

class GeneralEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false
    }
  }

  handleInput = (str) => {
    this.props.updateGeneralTitle(str)
  };
  

  render(){
    return(
      <Wrapper>
        <HeaderWrapper>
          <H3 mb="50px">General</H3>
          <Back updatePosition={this.props.updatePosition}/>
        </HeaderWrapper>
        <Input handleInput={this.handleInput} name='Project name' value={this.props.title}/>
        <OptionWrapper>
          <P mb="0">Logo</P>
          <ButtonsWrapper>
            <RemoveBtn className="pe-7s-trash" onClick={()=>this.props.uploadGeneralLogo("")}/>
            <LogoUploader />
          </ButtonsWrapper>
        </OptionWrapper>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    title: state.currentProject.title
  }
}
export default connect(mapStateToProps, {changeSelectedSection, updateGeneralTitle, uploadGeneralLogo})(GeneralEditor)

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