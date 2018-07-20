import React, {Component} from "react";
import {changeSelectedSection, updateAboutHeading, updateAboutText} from "./../../../redux/reducer"
import {connect} from "react-redux"
import {Input} from "./../../shared/Input"
import {Textarea} from "./../../shared/Textarea"
import styled from "styled-components";

class AboutEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      toggleImgPicker: false
    }
  }

  render(){
    return(
      <Wrapper>
        <p onClick={() => this.props.updatePosition("general")}>BACK</p>
        <p>About Us</p>
        <Input onChange={(e) => this.props.updateAboutHeading(e.target.value)}/>
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
export default connect(mapStateToProps, {changeSelectedSection, updateAboutHeading, updateAboutText})(AboutEditor)

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;