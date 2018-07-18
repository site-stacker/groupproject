import React, {Component} from "react";
import styled from "styled-components";
import {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection} from "./../../../redux/reducer"
import {connect} from "react-redux"

class HeaderEditor extends Component{
  constructor(){
    super()

    this.state={

    }
  }

  render(){
    return(
      <div>
        <p onClick={() => this.props.changeSelectedSection("general")}>BACK</p>
      <Input onChange={(e) => this.props.updateHeaderHeading(e.target.value)}/>
      <Input onChange={(e) => this.props.updateHeaderSubheading(e.target.value)}/>
      <Input onChange={(e) => this.props.updateHeaderButton(e.target.value)}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.sections)
  return{
    sections: state.sectionSelected
  }
}
export default connect(mapStateToProps, {updateHeaderHeading, updateHeaderSubheading, updateHeaderButton, changeSelectedSection})(HeaderEditor)

const Input = styled.input`
  width: 100%;
`;