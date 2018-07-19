import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"
import ColorSample from "./ColorSample"

function ColorSelector(props){
  console.log(props.themes)
  const sample = props.themes.map( theme => {
    return <ColorSample key={theme.color_id} name={theme.color_palette_name} palette={theme.color_palette}/>
  })
  return(
    <div>
      <H2>COLOR THEMES</H2>
      <SampleWrapper>
      {sample}
      </SampleWrapper>
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

const SampleWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;