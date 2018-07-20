import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";

function ContentSelector(props){
  const mappedSections = props.sections.map( (s, i) => {
    return (
      <SectionBtn key={i} onClick={() => action(s)}>
        <p>{s}</p>
      </SectionBtn>
    )
  })

  const action = section => {
    props.updatePosition(section)
  }

  return(
    <SectionWrapper>
      <Header>
      <h2>Sections</h2>
      <p>Choose the section you want to edit</p>
      </Header>
      <SectionBtn onClick={() => action("general")}>
        <p>GENERAL</p>
      </SectionBtn>
      <SectionBtn onClick={() => action("header")}>
        <p>HEADER</p>
      </SectionBtn>
    {mappedSections}
    <AddBtn onClick={()=>alert("dsf")}>Add New Section </AddBtn>
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
  width: 400px;
  margin-right: 100px;
  justify-content: center;
`;

const SectionBtn = FlexRow.extend`
  width: 150px;
  background: white;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px #ccc;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
`;
const AddBtn = styled.button`
  background: red;
  padding: 10px;
`;