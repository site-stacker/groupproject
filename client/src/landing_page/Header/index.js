import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Image from "./Image";
import Wrapper from "./Wrapper";

export default function Header(){
  return(
    <Wrapper>
      <Heading />
      <Subheading />
      <Image />
    </Wrapper>
  )
}