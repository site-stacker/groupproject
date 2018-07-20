import React, {Component} from "react";
import {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection} from "./../../../redux/reducer"
import {connect} from "react-redux"
import ImageUploader from "./../../ImageUploader/ImageUploader"
import {Input} from "./../../shared/Input"
import styled from "styled-components";
import BackgroundImgPicker from "./BackgroundImgPicker";

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


  render(){
    return(
      <Wrapper>
        <p onClick={() => this.props.updatePosition("general")}>BACK</p>
        <p>Header</p>
        <Input onChange={(e) => this.props.updateHeaderHeading(e.target.value)}/>
        <Input onChange={(e) => this.props.updateHeaderSubheading(e.target.value)}/>
        <Input onChange={(e) => this.props.updateHeaderButton(e.target.value)}/>
        <ImageUploader />
        <Btn onClick={()=>this.handleTogle()}>asdfasdf</Btn>
        {this.state.toggleImgPicker ? <BackgroundImgPicker /> : null}
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
export default connect(mapStateToProps, {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection})(HeaderEditor)

const Btn = styled.button`
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;