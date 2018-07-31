import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { darkwhite, lightGrey, violet, green } from "../shared/colors";
import Toggle from "./../shared/SwitchToggle";
import axios from 'axios';
import LoginDuringProject from '../Login/LoginDuringProject';
import {toggleLoginOn, toggleLoginOff} from '../../redux/reducer';

class ContentSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleModal: false
    }
  }

  action = section => {
    this.props.updatePosition(section)
  }

  save = () => {
    if (this.props.user) {
      axios.put(`/api/updateProject/${this.props.currentProject.project_id}`, this.props.currentProject).then(res => {
        console.log('project updated!')
        axios.put(`/api/updateHeader/${this.props.currentProject.project_id}`, this.props.currentProject).then(res => {
          console.log('header updated!')
          axios.put(`/api/updateAbout/${this.props.currentProject.project_id}`, this.props.currentProject).then(res => {
            console.log('about updated!')
            this.props.currentProject.feature_components.forEach(feature => {
              axios.put(`/api/updateFeature/${feature.feature_component_id}`, feature).then(res => {
                console.log('features updated!')
              })
            })
          })
        })
      })
    } else {
      this.props.toggleLoginOn()
      console.log(this.props.toggleLogin)
    }
  }
  render() {
    const mappedSections = this.props.sections.map((s, i) => {
      return (
        <SectionBtn key={i} >
          <p>{s}</p>
          <MenuIcon className="pe-7s-angle-right"></MenuIcon>
          <ToggleWrapper>
            <Toggle />
          </ToggleWrapper>
        </SectionBtn>
      )
    })
    return (
      <SectionWrapper>
        <Header>
          <p>Choose the section you want to edit</p>
        </Header>
        <SectionBtn onClick={() => this.action("general")}>
          <p>General</p>
          <MenuIcon className="pe-7s-angle-right"></MenuIcon>
        </SectionBtn>
        <SectionBtn onClick={() => this.action("header")}>
          <p>Header</p>
          <MenuIcon className="pe-7s-angle-right"></MenuIcon>
        </SectionBtn>
        {mappedSections}
        {/* <AddBtn onClick={()=>alert("dsf")}><AddIcon className="pe-7s-plus"></AddIcon>Add New Section </AddBtn> */}
        <Modal show={this.props.toggleLogin}>
          <h3>You must login to save.</h3>
          <LoginDuringProject />
          <Exit className='pe-7s-close-circle' onClick={() => this.props.toggleLoginOff()}></Exit>
        </Modal>
        <SaveBtn onClick={() => this.save()}>Save</SaveBtn>
      </SectionWrapper>
    )
  }
}

const mapStateTopProps = (state) => {
  return {
    sections: state.sections,
    user: state.user,
    currentProject: state.currentProject,
    toggleLogin: state.toggleLogin
  }
}
export default connect(mapStateTopProps, {toggleLoginOn, toggleLoginOff})(ContentSelector);

const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
`;


const SectionWrapper = FlexRow.extend`
  flex-wrap: wrap;
  flex-flow: column;
  width: 400px;
  margin-right: 100px;
  justify-content: flex-start;
  height: 100%;
`;

const SectionBtn = FlexRow.extend`
  width: 75%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 50px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  transition: 0.2s ease-in;
  position: relative;

  &:hover{
    background: ${lightGrey};
  }
  &:hover :nth-child(2){
    right: 230px;
    font-size: 36px;
  }
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
`;
const AddBtn = styled.button`
  background: ${violet};
  color: ${darkwhite};
  padding: 20px;
  position: absolute;
  bottom: 80px;
  left: 200px;
  transform: translateX(-50%);
  border: none;
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  cursor: pointer;
  
  &:focus{
    outline: none;
  }
`;

const MenuIcon = styled.span`
  position: absolute;
  text-align: right;
  right: 240px;
  font-size: 30px;
  transition: 0.2s ease-in;
`;

const AddIcon = styled.span`
  position: relative;
  left: 0;
  margin-right: 10px;
  transform: scale(2);
  line-height:1em;
  transition: 0.2s ease-in;
`;

const SaveBtn = styled.button`
  background: ${green};
  color: ${darkwhite};
  width: 100px;
  padding: 20px;
  position: absolute;
  bottom: 0px;
  left: 200px;
  transform: translateX(-50%);
  border: none;
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  cursor: pointer;

  &:focus{
    outline: none;
  }
`;

const ToggleWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const Modal = styled.div`
  width: 400px;
  height: 100%;
  color: #5D38DB;
  background-color: ${darkwhite};
  position: absolute;
  display: ${props => props.toggleLogin ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Exit = styled.button`
    background: none;
    outline: none;
    border: none;
    color: #5D38DB;
    font-size: 40px;
    transition: .5s;
`