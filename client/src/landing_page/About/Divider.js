import React from "react"
import styled from "styled-components"

export default function Divider(props){
  return (
    <HR />
  )
}

export const HR = styled.div`
  width: 50%;
  height: 2px;
  background: red;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;