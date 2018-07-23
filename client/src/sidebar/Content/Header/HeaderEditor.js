import React, {Component} from "react";
import {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection} from "./../../../redux/reducer"
import {connect} from "react-redux"
import ImageUploader from "./../../ImageUploader/ImageUploader"
import Input from "./../../shared/Input"
import styled from "styled-components";
import BackgroundImgPicker from "./BackgroundImgPicker";
import Back from "./../../shared/Back"

class HeaderEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false
    }
  }
  
  handleTogle = () => {
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


  render(){
    return(
      <Wrapper>
        <Back updatePosition={this.props.updatePosition}/>
        <Input handleInput={this.handleHeading} name="Heading"/>
        <Input handleInput={this.handleSubheading} name="Subheading"/>
        <Input handleInput={this.handleButtonText} name="Button text"/>
        <ImageUploader />
        <Btn onClick={()=>this.handleTogle()}>asdfasdf</Btn>
        {this.state.toggleImgPicker ? <BackgroundImgPicker /> : null}
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    sections: state.sectionSelected
  }
}
export default connect(mapStateToProps, {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection})(HeaderEditor)

const Btn = styled.button`
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;
