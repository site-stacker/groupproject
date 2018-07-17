import React from "react"
import {connect} from "react-redux";
import styled from "styled-components"

function Image(props){
  console.log(props.product_img)
  return(
    <Product_img src={`${props.product_img}`}/>
  )
}

const mapStateToProps = state => {
  return {
    product_img: state.header.product_img
  }
}

export default connect(mapStateToProps)(Image)

export const Product_img = styled.img`
  height: 400px;
  z-index: 1;
`;