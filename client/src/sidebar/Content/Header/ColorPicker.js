import React, {Component} from "react"
import {connect} from "react-redux"
import {updateHeaderBackgroundColor, updateTheme} from "./../../../redux/reducer"
import styled from "styled-components"

class ColorPicker extends Component {
  constructor(){
    super()

    this.state = {
      togglePicker: false
    }
  }

  handleTogglePicker = () =>{
    this.setState({togglePicker: !this.state.togglePicker})
  }

  handleSelection = (num) => {
    let cloneTheme = [...this.props.theme];
    let arrTheme = cloneTheme.splice(num)
    arrTheme.forEach( (c,i) => cloneTheme.splice(i,0, c))
    this.props.updateTheme(cloneTheme)
    this.props.updateHeaderBackgroundColor(0)
    this.handleTogglePicker();
  }

  render(){
    const mappedSamples = this.props.theme.map((color, i) => {
      return(
        <Sample key={color} background={color} onClick={() => this.handleSelection(i)}/>
      )
    })
    return(
      <ColorPickerWrapper>
        <P>Choose main color</P>
        <Div>
        <Samples width={this.state.togglePicker ? "160px" : 0}>
          {mappedSamples}
        </Samples>
        <ColorSample background={this.props.theme[this.props.backgroundColor]} onClick={() => this.handleTogglePicker()}/>
        </Div>
      </ColorPickerWrapper>
    )
  }
}
const mapStateToProp = (state) =>{
  return {
    theme: state.currentProject.color_palette,
    backgroundColor: state.currentProject.background_color
  }
}

export default connect(mapStateToProp, {updateHeaderBackgroundColor, updateTheme})(ColorPicker)

const Div = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  position: relative;
  right: 0;
`;

const ColorPickerWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const P = styled.p``;

const ColorSample = styled.div`
  height: 40px;
  width: 40px;
  background: ${props => props.background};
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 0 6px rgba(0,0,0,0.4);
`;

const Samples = styled.div`
  width: ${props => props.width};
  height: 40px;
  display: flex;
  flex-flow: row;
  align-items: center;
  transition: 0.4s all;
  
`;

const Sample = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.background};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    width: 44px;
    height: 44px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    positon: relative;
    z-index: 1;
  }
`;