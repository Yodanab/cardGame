/** @format */

import React from "react";
import {
  Input,
  InputWrap,
} from "./TextInput.style";

export const TextInput = ({
  handelChange,
  label,
  name = "",
  value = "",
  type = "text",
}) => {
  return (
    <InputWrap>
      <label htmlFor={label}>{label}</label>
      <Input
        onChange={(e) => handelChange(e)}
        name={name}
        value={value}
        type={type}
      />
    </InputWrap>
  );
};
