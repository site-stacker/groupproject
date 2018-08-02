import React, {Component} from "react"
import {connect} from "react-redux";
import {changeSelectedSection} from "./../redux/reducer";
import styled from "styled-components"
import {darkwhite, lightblue, darkTurquoise} from "./shared/colors"
import {Link} from "react-router-dom"
import { extend } from "../../node_modules/@firebase/util";

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
  }

  render(){
    return (
      <SectionMenu>
        <Btn to={this.props.user ? "/projects" : "/"}>
          <MenuIcon className="pe-7s-angle-left"></MenuIcon>
          <P>BACK</P>
        </Btn>
        <Left toggled={!this.state.toggle ? lightblue : null} onClick={() => this.selected("design")}>Design</Left>
        <Right toggled={this.state.toggle ? lightblue : null} onClick={() => this.selected("content")}>Content</Right>
      </SectionMenu>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, {changeSelectedSection})(Menu)

const SectionMenu = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 50px;
  height: 50px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 41;
  background-color: ${darkwhite};
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
`;

const MenuItem = styled.div`
  width: 100px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 15px 0;
  background: ${props => props.toggled};
  cursor: pointer;
  border: none;
  transition: 0.4s ease-in;

  &:hover{
  color: ${darkTurquoise};
  }
`;

const Left = MenuItem.extend`
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;

const Right = MenuItem.extend`
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
`;

const Btn = styled(Link)`
  display: flex;
  flex-flow: row;
  position: absolute;
  cursor: pointer;
  width: 80px;
  left: 15px;
  text-decoration: none;
  color: inherit;
  
  &:hover :nth-child(1){
    left: -5px;
  }
  `;
const MenuIcon = styled.span`
       position: relative;
      text-align: right;
      left: 0px;
      -webkit-transition: 0.2s ease-in;
      transition: 0.2s ease-in;
      transform: scale(2);
      top: 35px;
  `;

const P = styled.p`

`;