import styled from "styled-components"
import {violet, darkwhite} from "./colors"

export const Btn = styled.button`
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