import React from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import {pickColor} from "./../../redux/reducer"

function ColorSample(props){
  
  const color = props.palette.match(/[#a-zA-Z0-9]+/g) 
  



  return(
    <ColorBox onClick={() => props.pickColor(props.color_id, props.palette, props.name)} 
              selected={props.color_id === props.selectedColor ? 'solid 3px #5441D3' : 'none'} >
      <ColorPalette>
        <ThemeSample bg_color={color[0]}/>
        <ThemeSample bg_color={color[1]}/>
        <ThemeSample bg_color={color[2]}/>
        <ThemeSample bg_color={color[3]}/>
      </ColorPalette>
      <NameContainer>
        <ColorName>{props.name}</ColorName>
      </NameContainer>  
    </ColorBox>
  )
}
const mapStateToProps = state => {
  return{
    selectedColor: state.currentProject.color_id
  }
}

export default connect(mapStateToProps, {pickColor})(ColorSample);

const ColorBox = styled.div`
  display: flex;
  flex-flow: column;
  width: 180px;
  height: 150px;
  margin: 20px 0;
  position: relative;
  background: white;
  cursor: pointer;
  box-shadow: 0 0 10px #ccc;
  border: ${props => props.selected}
`;

const NameContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
    
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center; 
`;

const ColorName = styled.p`
  color: #333;
  font-size: 0.8em;
  font-weight: 700;
`;

const ColorPalette = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const ThemeSample = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.bg_color};
  transition: 0.2s ease-out;

    :hover{
    width: 250%
  }
`;