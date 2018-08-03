import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"

function Logo(props){
  console.log(props.color)
  return(
    <div>
    {
     props.logo !== ""?
     <CompanyLogo src={props.logo} />
      :
      <CompanyTitle font={props.font_family} color={props.color}>{props.title}</CompanyTitle>
    }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    logo: state.currentProject.logo,
    title: state.currentProject.title,
    font_family: state.currentProject.font,
    color: state.currentProject.color_palette[1],
  }
}

export default connect(mapStateToProps)(Logo)

export const CompanyLogo = styled.img`
  position: absolute;
  top:40px;
  left: 40px;
  width: 150px;
  border: none;
  z-index: 1;
`;

export const CompanyTitle = styled.h3`
  position: absolute;
  top:40px;
  left: 40px;
  width: 150px;
  border: none;
  z-index: 1;
  font-family: ${props => props.font};
  color:${props => props.color};
`;