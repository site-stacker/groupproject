import React from "react";
import styled from "styled-components";

export default function FontSample(props){
  return(
    <FontBox>
      <FontDisplay font_family={props.name}><TextSample>Aa</TextSample></FontDisplay>  
      <NameContainer>
        <FontName>{props.name}</FontName>
      </NameContainer>  
    </FontBox>  
  )
}

const FontBox = styled.div`
  display: flex;
  flex-flow: column;
  width: 180px;
  height: 130px;
  position: relative;
  align-items: center;
  background: white;
  margin: 0 0 30px;
  cursor: pointer;
`;

const NameContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border-top: 2px solid red;
`;

const FontName = styled.p`
  color: #333;
  font-size: 0.8em;
  font-weight: 700;
`;

const FontDisplay = styled.div`
  font-family: ${props => props.font_family};
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextSample = styled.span`
  margin: 0 auto;
`;