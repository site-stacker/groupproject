import React, {Component} from "react";
import {changeSelectedSection, updateFeaturesHeading, updateFeaturesText, getFeatures} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import Textarea from "./../../shared/Textarea"
import Back from "./../../shared/Back"
import styled from "styled-components";
import axios from "axios"



class FeaturesEditor extends Component{
  constructor(props){
    super(props)

    this.state={
      
    }
  }

  handleInput = (str, id) => {
    const obj = {
      str: str,
      id: id
    }
    this.props.updateFeaturesHeading(obj)
  };

  handleTextarea = (str, id) => {
    const obj = {
      str: str,
      id: id
    }
    this.props.updateFeaturesText(obj)
  }

  addFeature = () =>{
    axios.post(`/api/createFeature/${this.props.currentProject.project_id}`).then(res => this.props.getFeatures(this.props.currentProject.project_id)).catch(error=>console.log(error))
    
  }

  deleteFeature = (id) => {
    axios.delete(`/api/deleteFeature/${id}`).then(res => this.props.getFeatures(this.props.currentProject.project_id)).catch(error=>console.log(error))
  }

  render(){
    const mappedFeature = this.props.features.map((f,i) => {
      return(
        <Div key={i}>
          {/* <H3>Feature {i+1}</H3> */}
          <RemoveBtn className="pe-7s-trash" onClick={() => this.deleteFeature(f.feature_component_id)}/>
          <Input handleInput={this.handleInput} name="Heading" id={f.feature_component_id}/>
          <Textarea id={f.feature_component_id} handleTextarea={this.handleTextarea}/>
        </Div>  
      )
    })
    return(
      <Wrapper>
        <Back updatePosition={this.props.updatePosition}/>
        <button onClick={() => this.addFeature()}>add</button>
        {mappedFeature}
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    sections: state.sectionSelected,
    features: state.currentProject.feature_components,
    currentProject: state.currentProject
  }
}
export default connect(mapStateToProps, {changeSelectedSection, updateFeaturesHeading, updateFeaturesText, getFeatures})(FeaturesEditor)

const Wrapper = styled.div`
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;

const Div = styled.div`
border-bottom: 1px solid black;
display: flex;
flex-flow: column;
/* justify-content: center; */
align-items: center;
`;

const H3 = styled.div`
  color: green;
`;

const RemoveBtn = styled.div`
  position: relative;
  transform: scale(1.6);

  &:before{
    content: '';
    background: #5D38DB;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    transform: scale(1);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in;
    opacity: 1;
    position: absolute;
    transform: translate(50%, -50%);
    top: 0%;
    right: 0%;
    cursor: pointer;
  }

  &:hover:before{
    width: 24px;
    height: 24px;
  }
  &:hover{
    color: #fff;
  }
`;
