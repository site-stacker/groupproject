import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"

function Paragraph(props){
  return (
    <P>{props.text}</P>
  )
}

const mapStateToProps = state => {
  return{
    text: state.currentProject.about_text
  }
}

export default connect(mapStateToProps)(Paragraph)

export const P = styled.p`
  width: 50%;
  margin: 0 auto;
`;