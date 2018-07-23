import React from "react"
import FontSelector from "./FontSelector"
import ColorSelector from "./ColorSelector";
import styled from "styled-components"

export default function Design(){
return(
  <SliderWrapper>
    <ColorSelector />
    <FontSelector />
  </SliderWrapper>
)
}

const SliderWrapper = styled.div`
  position: relative;
  left: 0;
  width: 500px;
  transition: 0.3s ease-in;
`;