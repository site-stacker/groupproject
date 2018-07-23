import React from "react";
import styled from "styled-components"

export default function ColorSample(props){
  const color = props.palette.match(/[#a-zA-Z0-9]+/g) 
  return(
    <ColorBox>
      <ColorPalette>
        <ThemeSample bg_color={color[1]}/>
        <ThemeSample bg_color={color[2]}/>
        <ThemeSample bg_color={color[3]}/>
        <ThemeSample bg_color={color[4]}/>
      </ColorPalette>
      <NameContainer>
        <ColorName>{props.name}</ColorName>
      </NameContainer>  
    </ColorBox>
  )
}

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
`;

const NameContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
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