import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"

function Logo(props){
  return(
    <CompanyLogo src={props.logo} />
  )
}

const mapStateToProps = state => {
  return {
    logo: state.header.logo
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