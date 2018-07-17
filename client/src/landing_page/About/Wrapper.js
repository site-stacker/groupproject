import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Divider from "./Divider";

export default function AboutWrapper(){
  return(
    <Wrapper>
      <Heading />
      <Paragraph />
      <Divider />
    </Wrapper>  
  )
}

export const Wrapper = styled.div`
background-color: #F8F9FC;
padding: 100px 0;
position: relative;
`;