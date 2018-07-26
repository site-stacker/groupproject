import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import { darkwhite, lightGrey, violet, green } from "../shared/colors";

function ContentSelector(props){
  const mappedSections = props.sections.map( (s, i) => {
    return (
      <SectionBtn key={i} onClick={() => action(s)}>
        <p>{s}</p>
        <MenuIcon className="pe-7s-angle-right"></MenuIcon>
      </SectionBtn>
    )
  })

  const action = section => {
    props.updatePosition(section)
  }

  return(
    <SectionWrapper>
      <Header>
      <p>Choose the section you want to edit</p>
      </Header>
      <SectionBtn onClick={() => action("general")}>
        <p>General</p>
        <MenuIcon className="pe-7s-angle-right"></MenuIcon>
      </SectionBtn>
      <SectionBtn onClick={() => action("header")}>
        <p>Header</p>
        <MenuIcon className="pe-7s-angle-right"></MenuIcon>
      </SectionBtn>
    {mappedSections}
    <AddBtn onClick={()=>alert("dsf")}><AddIcon className="pe-7s-plus"></AddIcon>Add New Section </AddBtn>
    <SaveBtn onClick={()=>alert("")}>Save</SaveBtn>
    </SectionWrapper>
  )
}

const mapStateTopProps = (state) => {
  return{
    sections: state.sections
  }
}
export default connect(mapStateTopProps)(ContentSelector);

const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
`;


const SectionWrapper = FlexRow.extend`
  flex-wrap: wrap;
  flex-flow: column;
  width: 400px;
  margin-right: 100px;
  justify-content: flex-start;
  height: 100%;
`;

const SectionBtn = FlexRow.extend`
  width: 75%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 50px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  transition: 0.2s ease-in;

  &:hover{
    background: ${lightGrey};
  }
  &:hover :nth-child(2){
    right: 230px;
    font-size: 36px;
  }
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
`;
const AddBtn = styled.button`
  background: ${violet};
  color: ${darkwhite};
  padding: 20px;
  position: absolute;
  bottom: 80px;
  left: 200px;
  transform: translateX(-50%);
  border: none;
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  cursor: pointer;
  
  &:focus{
    outline: none;
  }
`;

const MenuIcon = styled.span`
  position: absolute;
  text-align: right;
  right: 240px;
  font-size: 30px;
  transition: 0.2s ease-in;
`;

const AddIcon = styled.span`
  position: relative;
  left: 0;
  margin-right: 10px;
  transform: scale(2);
  line-height:1em;
  transition: 0.2s ease-in;
`;

const SaveBtn = styled.button`
  background: ${green};
  color: ${darkwhite};
  width: 100px;
  padding: 20px;
  position: absolute;
  bottom: 0px;
  left: 200px;
  transform: translateX(-50%);
  border: none;
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  cursor: pointer;

  &:focus{
    outline: none;
  }
`;