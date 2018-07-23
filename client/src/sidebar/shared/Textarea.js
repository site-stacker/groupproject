import styled from "styled-components";
import {grey, greyBlue} from "./colors"

export const Textarea = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${grey};
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  color: ${greyBlue};

  &:focus{
    outline: none;
  }
`;