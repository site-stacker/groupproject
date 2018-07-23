import React, {Component} from "react";
import {changeSelectedSection, updateGeneralTitle} from "./../../../redux/reducer"
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
        <Input handleInput={this.handleInput} name="Project Name"/>
        <LogoUploader />
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    title: state.currentProject.title
  }
}
export default connect(mapStateToProps, {changeSelectedSection, updateGeneralTitle})(GeneralEditor)

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;