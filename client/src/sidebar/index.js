import React, {Component} from "react";
import ContentWrapper from "./Content/ContentWrapper";
import Wrapper from "./Design/Wrapper";
import {getFontsList, getProject} from "./../redux/reducer";
import {connect} from "react-redux"

class Sidebar extends Component{

  componentDidMount(){
    this.props.getProject(1, 1)
    this.props.getFontsList()
  }

  render(){
    console.log(this.props.project)
    return(
      <div>
        <ContentWrapper />
        {/* <Wrapper /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      project: state.currentProject
    }
}

export default connect(mapStateToProps, {getFontsList, getProject})(Sidebar)