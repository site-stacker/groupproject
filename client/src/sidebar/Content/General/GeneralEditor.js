import React, {Component} from "react";
import {changeSelectedSection, updateGeneralTitle, uploadGeneralLogo} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import styled from "styled-components";
import LogoUploader from "./LogoUploader";
import Back from "./../../shared/Back";

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
    console.log(this.props)
    return(
      <Wrapper>
        <Back updatePosition={this.props.updatePosition}/>
        <p>General</p>
        <Input handleInput={this.handleInput} name='Project name' value={this.props.title}/>
        <OptionWrapper>
          <p>Logo</p>
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