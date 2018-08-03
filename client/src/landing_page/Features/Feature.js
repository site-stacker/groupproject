import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {H2} from "./../shared/H2";

function Features(props){
  
  const Feature = props.features.map( (f, i) => {
    return(
    <FeatureWrapper key={i} >
      <H2 color={props.color_palette[1]} font_family={props.fontFamily}>{f.feature_title}</H2>
      <P font_family={props.fontFamily}>{f.feature_text}</P>
    </FeatureWrapper>
    )
  })

  return (
    <FeaturesWrapper justify={props.features.map.length > 1 ? "flex-start" : "center"}>
    {Feature}
    </FeaturesWrapper>
  )
}

const mapStateToProps = state => {
  return{
    features:state.currentProject.feature_components !== undefined ? state.currentProject.feature_components : [],
    fontFamily: state.currentProject.font,
    color_palette: state.currentProject.color_palette !== undefined ? state.currentProject.color_palette : []
  }
}

export default connect(mapStateToProps)(Features)

export const FeaturesWrapper = styled.div`
  display:flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: ${props => props.justify};
`;

export const FeatureWrapper = styled.div`
  width: 50%;
  display:flex;
  flex-flow: column;
  height: 200px;
  padding: 50px;
  box-sizing: border-box;
  justify-content: center;
`;

export const P = styled.p`
  color: #333;
  font-family: ${props => props.font_family};
  text-align: center;
`;
