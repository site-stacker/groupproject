import React from "react";
import {connect} from "react-redux";
import {pickFont} from "./../../redux/reducer";
import styled from "styled-components";
import { greyBlue } from "../shared/colors";

function FontSample(props){
  return(
    <FontBox onClick={() => props.pickFont(props.name)}
            selectedFont={props.name === props.selectedFont ? 'solid 3px #5441D3' : 'none'}
    >
      <FontDisplay font_family={props.name}><TextSample>Aa</TextSample></FontDisplay>  
      <NameContainer>
        <FontName font_family={props.name}>{props.name}</FontName>
      </NameContainer>  
    </FontBox>  
  )
}
const mapStateToProps = state => {
  return{
    selectedFont: state.currentProject.font
  }
}

export default connect(mapStateToProps, {pickFont})(FontSample)

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
  border: ${props => props.selectedFont}
  padding: 0 20px;
  box-sizing: border-box;
`;

const NameContainer = styled.div`
  background-color: white;
  width: 70%;
  height: 50px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${greyBlue};
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