import React, {Component} from "react";
import {changeSelectedSection, updateGeneralTitle} from "./../../../redux/reducer"
import {connect} from "react-redux"
import {Input} from "./../../shared/Input"
import styled from "styled-components";
import LogoUploader from "./LogoUploader"

class GeneralEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false
    }
  }

  render(){
    return(
      <Wrapper>
        <p onClick={() => this.props.updatePosition()}>BACK</p>
        <p>General</p>
        <Input onChange={(e) => this.props.updateGeneralTitle(e.target.value)}/>
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