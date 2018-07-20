import styled from "styled-components";
import {grey, greyBlue} from "./colors"

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid ${grey};
  padding: 10px 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  color: ${greyBlue};

  &:focus{
    outline: none;
  }
`;