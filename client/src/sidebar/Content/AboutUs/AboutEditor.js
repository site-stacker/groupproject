import React, {Component} from "react";
import {changeSelectedSection, updateAboutHeading, updateAboutText} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import Textarea from "./../../shared/Textarea"
import styled from "styled-components";
import Back from "./../../shared/Back"
import {greyBlue} from "./../../shared/colors"

class AboutEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false
    }
  }
  handleInput = (str) => {
    this.props.updateAboutHeading(str)
  };

  handleTextarea = (str) => {
    this.props.updateAboutText(str)
  }
  

  render(){
    return(
      <Wrapper>
        <HeaderWrapper>
          <H3 mb="50px">About Us</H3>
          <Back updatePosition={this.props.updatePosition}/>
        </HeaderWrapper>
        <Input handleInput={this.handleInput} name="Heading" id={this.props.id} value={this.props.about_header}/>
        <Textarea row="10" value={this.props.about_text} handleTextarea={this.handleTextarea}/>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    sections: state.sectionSelected,
    id: state.currentProject.project_id,
    about_header: state.currentProject.about_header,
    about_text: state.currentProject.about_text
  }
}
export default connect(mapStateToProps, {changeSelectedSection, updateAboutHeading, updateAboutText})(AboutEditor)

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const H3 = styled.h3`
  position: relative;
  margin: 0;
  color: ${greyBlue}
`;