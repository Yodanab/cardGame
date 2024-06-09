import styled from "styled-components";
import { text } from "core/colors";

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: white;
    padding-bottom: 5px;
    font-family: monospace;
  }
`;

export const Input = styled.input`
  box-shadow: inset 0 0.0625em 0.125em
    rgba(10, 10, 10, 0.05);
  width: 400px;
  padding: 10px;
  background-color: white;
  border: 1px solid #777;
  background: #1a2026;
  border-radius: 4px;
  color: ${text.white};
  &:focus {
    outline: 1px solid #a285a0;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1a2026 inset !important;
    box-shadow: 0 0 0 30px #1a2026 inset !important;
    -webkit-text-fill-color: ${text.white} !important;
  }
`;
