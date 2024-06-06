/** @format */

import React, { useState } from "react";
import { TextInput } from "../inputs/TextInput/TextInput";
import {
  LoginModal,
  LoginWrap,
  Title,
  CreateAccount,
} from "./Login.style";
import { Button } from "../inputs/Button/Button.style";
import { login } from "./login-service";

interface IForm {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const title = {
  login: "Login",
  signUp: "Sign Up",
};

const inputsArr = {
  login: ["userName", "password"],
  signUp: [
    "email",
    "userName",
    "password",
    "confirmPassword",
  ],
};

const inputTitle = {
  userName: "User Name",
  password: "Password",
  email: "Email",
  confirmPassword: "Confirm Password",
};

const accountString = {
  login: {
    question: `Don't have an account?`,
    link: "Sign up here",
  },
  signUp: {
    question: `Already have an account?`,
    link: "Login here",
  },
};

const inputType = {
  userName: "text",
  password: "password",
  confirmPassword: "password",
  email: "email",
};

export const Login = () => {
  const [isAnimating, setIsAnimating] = useState(
    false
  );
  const [mode, setMode] = useState("login");
  const [formData, setForm] = useState<IForm>({
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModeChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setMode((prev) =>
        prev === "login" ? "signUp" : "login"
      );
      setIsAnimating(false);
    }, 200);
  };

  const handleSubmit = () => {
    const { userName, password } = formData;
    if (mode === "login") {
      login({ userName, password });
    }
  };

  return (
    <LoginWrap>
      <LoginModal
        style={{
          transform: isAnimating
            ? "scale(0)"
            : "scale(1)",
        }}
      >
        <Title>{title[mode]}</Title>

        {inputsArr[mode].map((inputItem, i) => {
          return (
            <TextInput
              label={inputTitle[inputItem]}
              handelChange={onInputChange}
              name={inputItem}
              value={formData[inputItem]}
              type={inputType[inputItem]}
              key={i}
            />
          );
        })}

        <Button onClick={() => handleSubmit()}>
          Submit
        </Button>
        <CreateAccount>
          {accountString[mode].question}
          <span onClick={handleModeChange}>
            {accountString[mode].link}
          </span>
        </CreateAccount>
      </LoginModal>
    </LoginWrap>
  );
};
