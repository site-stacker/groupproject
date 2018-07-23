import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import { darkwhite, greyBlue, grey, green, cotton, violet } from "../shared/colors";

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
  /* color: white; */
/* background: ${green}; */
  /* border-bottom: 1px solid ${grey}; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 50px;
  margin: 5px 0;
  cursor: pointer;
  /* box-shadow: 2px 2px 6px ${grey};  */
  border-radius: 6px;
  position: relative;
  transition: 0.2s ease-in;

  &:hover{
    background: ${cotton};
    /* transform: scale(1.03); */
    /* box-shadow: 2px 2px 12px rgba(91, 108, 148, 0.4);  */
    /* font-size: 18px; */
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
  bottom: 0;
  left: 200px;
  transform: translateX(-50%);
  border: none;
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  
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