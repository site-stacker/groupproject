import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {H2} from "./../shared/H2";

function Features(props){
  
  const Feature = props.features.map( (f, i) => {
    return(
    <FeatureWrapper key={i}>
      <H2>{f.title}</H2>
      <P>{f.title}</P>
    </FeatureWrapper>
    )
  })

  return (
    <FeaturesWrapper>
    {Feature}
    </FeaturesWrapper>
  )
}

const mapStateToProps = state => {
  return{
    features: state.features
  }
}

export default connect(mapStateToProps)(Features)

export const FeaturesWrapper = styled.div`
  display:flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: flex-start;
`;

export const FeatureWrapper = styled.div`
  max-width: 100%;
  min-width: 50%;
  display:flex;
  flex-flow: column;
  height: 200px;
  padding: 50px;
  box-sizing: border-box;
`;

export const P = styled.p`
  color: red;
`;