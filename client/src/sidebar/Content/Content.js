import React, {Component} from "react";
import ContentSelector from "./ContentSelector";
import HeaderEditor from "./Header/HeaderEditor";
import styled from "styled-components";
import {connect} from "react-redux"

class Content extends Component{
  constructor(){
    super();

    this.state = {
      left: 0
    }
  }

  componentDidMount(){
    this.setState({selectedSection: this.props.sectionSelected})
    switch(this.props.sectionSelected){
      case "general":
        this.setState({left: 0})
        break;
      case "header":
        this.setState({left: "-500px"})
        break;
    }
  }

  
  componentDidUpdate(prevProps, nextProps){
    if(nextProps.selectedSection !== this.props.sectionSelected){
      this.componentDidMount()
    }
  }
  render(){
  
return(
  <SliderWrapper left={this.state.left}>
    <ContentSelector />
    <HeaderEditor />
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
`;

const mapStateToProps = state => {
  return {
    sectionSelected: state.sectionSelected
  }
}
export default connect(mapStateToProps)(Content);