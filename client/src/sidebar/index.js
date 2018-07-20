import React, {Component} from "react";
import ContentWrapper from "./Content/ContentWrapper";
import DesignWrapper from "./Design/DesignWrapper";
import {getFontsList, getProject} from "./../redux/reducer";
import {connect} from "react-redux"
import styled from "styled-components"
import Menu from "./Menu"

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

    console.log(this.props.selected)
  }

  toggle = () =>{
    this.setState({toggle: this.props.toggle})
  }
  render(){
    console.log(this.props.selected)
    return(
      <SidebarDiv left={this.props.toggle ? 0 : "-500px"}>
      <Menu />
      <Div>
        <Container lefty={this.props.selected === "design" ? "500px" : "0px"}>
        <DesignWrapper /> 
        <ContentWrapper />
        </Container >  
        </Div>
      </SidebarDiv>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      project: state.currentProject,
      toggle: state.toggleSidebar,
      selected: state.sectionSelected
    }
}

export default connect(mapStateToProps, {getFontsList, getProject})(Sidebar)

const SidebarDiv = styled.div`
  font-family: "Raleway";
  position: absolute;
  left: ${props => props.left};
  transition: 0.3s ease-in;
  width: 500px;
  height: 100vh;
`;
const Container = styled.div`
  position: absolute;
  left: ${props => props.lefty};
  transition: 0.3s ease-in;
  width: 500px;
  height: 100%;
  display: flex;
  flex-flow: row;
`;
const Div = styled.div`
  position: absolute;
  background: red;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;