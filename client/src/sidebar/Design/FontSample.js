import React from "react";
import {connect} from "react-redux";
import {pickFont} from "./../../redux/reducer";
import styled from "styled-components";

function FontSample(props){
  return(
    <FontBox onClick={() => props.pickFont(props.name)}>
      <FontDisplay font_family={props.name}><TextSample>Aa</TextSample></FontDisplay>  
      <NameContainer>
        <FontName font_family={props.name}>{props.name}</FontName>
      </NameContainer>  
    </FontBox>  
  )
}

export default connect(null, {pickFont})(FontSample)

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
  font-family: ${props => props.font_family};
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