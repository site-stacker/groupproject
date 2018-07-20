import React from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import {toggleSidebar} from "./../../redux/reducer"

function EditIcon(props){
  return(
    <Edit onClick={() => props.toggleSidebar()}>
      toggle
    </Edit>
  )
}

const mapStateToProps = (state) => {
  return{
    toggled: state.toggleSidebar
  }
}

export default connect(mapStateToProps, {toggleSidebar})(EditIcon)

const Edit = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  position: absolute;
  z-index 10;
  right: 0;
  cursor: pointer;
`;