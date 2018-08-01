import React from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import {toggleSidebar} from "./../../redux/reducer"
import {darkwhite} from "./../shared/colors"

function EditIcon(props){
  return(
    <Edit onClick={() => props.toggleSidebar()}><Icon className="pe-7s-note" />
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
  background: ${darkwhite};
  position: absolute;
  z-index: 10;
  right: 30px;
  top: 30px;
  cursor: pointer;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 30px;
`;