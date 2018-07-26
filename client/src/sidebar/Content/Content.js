import React, {Component} from "react";
import ContentSelector from "./ContentSelector";
import GeneralEditor from "./General/GeneralEditor";
import HeaderEditor from "./Header/HeaderEditor.js"
import AboutEditor from "./AboutUs/AboutEditor";
import FeaturesEditor from "./Features/FeaturesEditor";
import styled from "styled-components";
import {connect} from "react-redux"

class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      left: this.props.resetPosition,
      selectedSection: ""
    }
  }

  componentDidMount(){
    this.setState({selectedSection: this.props.sectionSelected})
  }

  updatePosition = (str) => {
   this.state.left === 0 ? this.setState({left: "-500px", selectedSection: str}) : this.setState({left: 0})
   
  }

  renderEditor = (s) => {
    switch(s){
      case "general":
        return <GeneralEditor updatePosition={this.updatePosition}/>
      case "header":
        return <HeaderEditor updatePosition={this.updatePosition}/>
      case "About Us":
        return <AboutEditor updatePosition={this.updatePosition}/>
      case "Features":
        return <FeaturesEditor updatePosition={this.updatePosition}/>
      default:
        return <GeneralEditor updatePosition={this.updatePosition}/>
    }
  }

  render(){
return(
  <SliderWrapper left={this.state.left}>
    <ContentSelector updatePosition={this.updatePosition}/>
    {this.renderEditor(this.state.selectedSection)}
  </SliderWrapper >
)
}
}


const SliderWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  height: 100%;
  position: relative;
  left: ${props => props.left};
  width: 1000px;
  transition: 0.3s ease-in;
  margin-top: 50px;
`;

const mapStateToProps = state => {
  return {
    sectionSelected: state.sectionSelected,
    resetPosition: state.resetPosition
  }
}
export default connect(mapStateToProps)(Content);