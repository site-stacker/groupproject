import React, {Component} from "react";
import {changeSelectedSection, updateAboutHeading, updateAboutText} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import Textarea from "./../../shared/Textarea"
import styled from "styled-components";
import Back from "./../../shared/Back"

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
        <Back updatePosition={this.props.updatePosition}/>
        <p>About Us</p>
        <Input handleInput={this.handleInput} name="Heading" id={this.props.id} value={this.props.about_header}/>
        <Textarea rows="6" cols="50" value={this.props.about_text} handleTextarea={this.handleTextarea}/>
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