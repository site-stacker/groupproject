import React, {Component} from "react"
import {connect} from "react-redux";
import {changeSelectedSection} from "./../redux/reducer";
import styled from "styled-components"

class Menu extends Component{
  constructor(){
    super()

    this.state ={
      toggle: true
    }
    // this.selectede = this.selectede.bind(this)
  }

  selected = (str) =>{
    if(str === "content" && !this.state.toggle || str === "design" && this.state.toggle){
      this.props.changeSelectedSection(str)
      this.setState({toggle: !this.state.toggle})
    }
    console.log("hitr", str)
  }

  render(){
    return (
      <SectionMenu>
        <MenuItem toggled={!this.state.toggle ? "red" : null} onClick={() => this.selected("design")}>Design</MenuItem>
        <MenuItem toggled={this.state.toggle ? "red" : null} onClick={() => this.selected("content")}>Content</MenuItem>
      </SectionMenu>
    )
  }
}

export default connect(null, {changeSelectedSection})(Menu)

const SectionMenu = styled.div`
  display: flex;
  flex-flow: row;
  width: 60%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;
  position: relative;
  z-index: 41;
`;

const MenuItem = styled.div`
  width: 50%;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px 0;
  background: ${props => props.toggled};
  cursor: pointer;
`;