import React, {Component} from "react";
import {changeSelectedSection, updateFeaturesHeading, updateFeaturesText, getFeatures} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import Textarea from "./../../shared/Textarea"
import Back from "./../../shared/Back"
import styled from "styled-components";
import axios from "axios"
import {greyBlue, lightGrey} from "./../../shared/colors"


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
          <Input mb="20px" handleInput={this.handleInput} name="Heading" id={f.feature_component_id} value={f.feature_title} />
          <Textarea id={f.feature_component_id} handleTextarea={this.handleTextarea} value={f.feature_text} row="4"/>
          <RemoveBtn className="pe-7s-trash" onClick={() => this.deleteFeature(f.feature_component_id)}/>
        </Div>  
      )
    })
    return(
      <Wrapper>
        <HeaderWrapper>
          <Back updatePosition={this.props.updatePosition}/>
          <H3 mb="50px">Features</H3>
          <AddBtn className="pe-7s-plus" onClick={() => this.addFeature()}/>
        </HeaderWrapper>
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
  border-bottom: 1px solid ${lightGrey};
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 10px;
  position: relative;
  margin-bottom: 50px;
`;

const RemoveBtn = styled.div`
 
 position: relative;
    bottom: 0px;
    -webkit-transform: scale(1.6);
    -ms-transform: scale(1.6);
    transform: scale(1.6);
    margin-bottom: 50px;
    margin-top: 20px;

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


const AddBtn = styled.div`
  position: absolute;
  right: 0;
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

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const H3 = styled.h3`
  position: relative;
  margin: 0;
  color: ${greyBlue}
`;