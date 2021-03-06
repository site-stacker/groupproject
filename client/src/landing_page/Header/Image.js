import React from "react"
import {connect} from "react-redux";
import styled from "styled-components"

function Image(props){
  return(
    <ProductImg src={`${props.product_img}`} display={props.product_img ? "block" : "none"}/>
  )
}

const mapStateToProps = state => {
  return {
    product_img: state.currentProject.main_img
  }
}

export default connect(mapStateToProps)(Image)

export const ProductImg = styled.img`
  height: 400px;
  z-index: 1;
  display: ${props => props.display};
`;