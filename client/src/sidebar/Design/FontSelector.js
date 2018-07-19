import React, {Component} from "react";
import styled from "styled-components"
import {connect} from "react-redux";
// import {getFontsList} from "./../../redux/reducer";
import FontSample from "./FontSample";

class FontSelector extends Component{

  render(props){
    const mapped = this.props.fonts.map((obj, i) => {
     return <FontSample key={obj.family} name={obj.family} />
    })
    return(
      <div>
      <p>FONTS</p>
      <SampleWrapper>
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

const SampleWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
