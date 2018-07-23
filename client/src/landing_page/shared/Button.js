import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"

function Button(props){
  return(
    <Btn onClick={()=>alert("fsdf")}>{props.btn_text}</Btn>
  )
}

const mapStateToProps = state => {
  return{
    btn_text: state.currentProject.button_text
  }
}

export default connect(mapStateToProps)(Button)

const Btn = styled.button`
  padding: 15px;
  background-color: red;
  border: none;
  z-index:  3;
  cursor: pointer;
`;
