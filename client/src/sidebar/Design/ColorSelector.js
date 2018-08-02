import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"
import ColorSample from "./ColorSample"
import {grey} from "./../shared/colors"


function ColorSelector(props){
  const sample = props.themes.map( theme => {
    return <ColorSample 
            key={theme.color_id} 
            name={theme.color_palette_name}  
            color_id={theme.color_id} 
            palette={theme.color_palette} 
             />
  })
  return(
    <Div>
      <H2>THEMES GALLERY</H2>
      <SampleWrapper>
      {sample}
      </SampleWrapper>
    </Div>
  )
}

const mapStateToProps = state => {
  return{
    themes: state.color_themes
  }
}
export default connect(mapStateToProps)(ColorSelector)

const Div = styled.div`
  
`;

const H2 = styled.h2`
  color: ${grey};
  text-align: center;
`;

const SampleWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;