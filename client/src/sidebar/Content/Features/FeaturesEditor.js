import React, {Component} from "react";
import {changeSelectedSection, updateFeaturesHeading, updateAboutText} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import {Textarea} from "./../../shared/Textarea"
import Back from "./../../shared/Back"
import styled from "styled-components";

class AboutEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false
    }
  }

  handleInput = (str) => {
    this.props.updateFeaturesHeading(str)
  };

  render(){
    return(
      <Wrapper>
        <Back updatePosition={this.props.updatePosition}/>
        <Input handleInput={this.handleInput} name="Heading"/>
        <Textarea rows="6" cols="50" onChange={(e) => this.props.updateAboutText(e.target.value)}/>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.sectionSelected)
  return{
    sections: state.sectionSelected
  }
}
export default connect(mapStateToProps, {changeSelectedSection, updateFeaturesHeading, updateAboutText})(AboutEditor)

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;