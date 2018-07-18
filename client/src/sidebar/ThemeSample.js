import React from "react";
import styled from "styled-components"

export default function ThemeSample(props){
console.log(props.palette)
  return(
    <ColorBox>
      <ColorPalette>
        <ColorSample bg_color={props.palette[1]}/>
        <ColorSample bg_color={props.palette[2]}/>
        <ColorSample bg_color={props.palette[3]}/>
        <ColorSample bg_color={props.palette[4]}/>
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
  width: 300px;
  height: 100px;
  margin: 20px 0;
  position: relative;
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

const ColorSample = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: ${props => props.bg_color}
`;