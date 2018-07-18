import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"
import ThemeSample from "./ThemeSample"

function ColorSelector(props){
  const sample = props.themes.map( theme => {
    return <ThemeSample name={theme.color_palette_name} palette={theme.color_palette}/>
  })
  return(
    <div>
      <H2>COLOR THEMES</H2>
    {sample}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    themes: state.color_themes
  }
}
export default connect(mapStateToProps)(ColorSelector)

const H2 = styled.h2`
  color: red;
`;