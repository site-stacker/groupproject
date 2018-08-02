import React from "react"
import styled from "styled-components"
import { connect } from 'react-redux'

function Divider(props){
  return (
    <HR style={{background: props.color_palette ? props.color_palette[2] : 'black'}}/>
  )
}

function mapStateToProps(state) {
  return {
    color_palette: state.currentProject.color_palette !== undefined ? state.currentProject.color_palette : []
  }
}

export default connect(mapStateToProps)(Divider)

export const HR = styled.div`
  width: 50%;
  height: 2px;
  background: black;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

`;