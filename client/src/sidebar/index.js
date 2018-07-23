import React, {Component} from "react";
import ContentWrapper from "./Content/ContentWrapper";
import Wrapper from "./Wrapper";
import {getFontsList, getProject} from "./../redux/reducer";
import {connect} from "react-redux"
import styled from "styled-components"

class Sidebar extends Component{
  constructor(){
    super();

    this.state = {
      toggle: false
    }
  }

  componentDidMount(){
    this.props.getProject(1, 1)
    this.props.getFontsList()
  }

  componentDidUpdate(pP, nP){
    if(nP.toggle !== this.props.toggle){
      this.toggle()
    }
  }

  toggle = () =>{
    this.setState({toggle: this.props.toggle})
  }
  render(){
    console.log(this.props.project)
    return(
      <Div left={this.props.toggle ? 0 : "-500px"}>
        <ContentWrapper />  
        {/* <Wrapper /> */}
      </Div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      project: state.currentProject,
      toggle: state.toggleSidebar
    }
}

export default connect(mapStateToProps, {getFontsList, getProject})(Sidebar)

const Div = styled.div`
  position: absolute;
  left: ${props => props.left};
  transition: 0.3s ease-in;
`;