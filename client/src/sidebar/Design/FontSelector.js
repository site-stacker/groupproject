import React, {Component} from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import FontSample from "./FontSample";
import {grey} from "./../shared/colors"

class FontSelector extends Component{

  render(){
    const mapped = this.props.fonts.map((obj, i) => {
     return <FontSample key={obj.family} name={obj.family} />
    })
    return(
      <div>
      <H2>FONTS GALLERY</H2>
      <SampleWrapper mb={this.props.mb}>
      {mapped}
      </SampleWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    fonts: state.fonts_list
  }
}
export default connect(mapStateToProps)(FontSelector)

const H2 = styled.h2`
  color: ${grey};
  text-align: center;
`;
const SampleWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: ${props => props.mb};
`;
