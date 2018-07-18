import React from "react";
import styled from "styled-components";
import Features from "./Feature";

export default function FeaturesWrapper(){
  return(
    <Wrapper>
      <Features />
    </Wrapper>  
  )
}

export const Wrapper = styled.div`
background-color: #F8F9FC;
padding: 100px 0;
position: relative;
`;