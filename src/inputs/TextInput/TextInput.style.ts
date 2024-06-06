/** @format */

import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: white;
    padding-bottom: 5px;
    font-family: fantasy;
  }
`;

export const Input = styled.input`
  box-shadow: inset 0 0.0625em 0.125em
    rgba(10, 10, 10, 0.05);
  width: 400px;
  height: 28px;
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  &:focus {
    outline: none;
  }
`;
