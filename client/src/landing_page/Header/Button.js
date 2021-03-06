import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"

function Button(props){
  return(
    <Btn style={{fontFamily: `${props.font_family}`, backgroundColor: `${props.bg_color}`, color: `${props.color}`}} onClick={()=> props.currentProject.about ? document.getElementById("About").scrollIntoView() : props.currentProject.features ? document.getElementById("About").scrollIntoView() : {}}>{props.btn_text}</Btn>
  )
}



const mapStateToProps = state => {
  if(state.currentProject.color_palette){
    return{
      btn_text: state.currentProject.button_text,
      font_family: state.currentProject.font,
      bg_color: state.currentProject.color_palette[2],
      color: state.currentProject.color_palette[0],
      currentProject: state.currentProject
    }
  }
}

export default connect(mapStateToProps)(Button)

const Btn = styled.button`
  padding: 15px;
  border: none;
  z-index:  3;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.color};
  background-color: ${props => props.bg_color};
  font-family: ${props => props.font};
  border-radius: 4px;
  margin: 30px 0;

  &:focus {
    outline: none;
  }
`;