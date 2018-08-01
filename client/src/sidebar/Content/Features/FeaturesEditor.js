import React, {Component} from "react";
import {changeSelectedSection, updateFeaturesHeading, updateFeaturesText, getFeatures} from "./../../../redux/reducer"
import {connect} from "react-redux"
import Input from "./../../shared/Input"
import {Textarea} from "./../../shared/Textarea"
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

  handleTextarea = (id, str) => {
    this.props.updateAboutText(id, str)
  }

  addFeature = () =>{
    axios.post(`/api/createFeature/${this.props.currentProject.project_id}`).then(res => this.props.getFeatures(this.props.currentProject.project_id)).catch(error=>console.log(error))
    
  }

  render(){
    const mappedFeature = this.props.features.map((f,i) => {
      return(
        <Div key={i}>
          <H3>Feature {i+1}</H3>
          <Input handleInput={this.handleInput} name="Heading" id={f.feature_component_id} value={f.feature_title} />
          <Textarea rows="3" cols="50" onChange={(e) => this.handleTextarea(f.feature_id, e.target.value)} value={f.feature_text}/>
        </Div>  
      )
    })
    return(
      <Wrapper>
        {/* <Back updatePosition={this.props.updatePosition}/> */}
        <button onClick={() => this.addFeature()}>add</button>
        {mappedFeature}
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state.currentObject.feature_components)
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
`;

const H3 = styled.div`
  color: green
`;