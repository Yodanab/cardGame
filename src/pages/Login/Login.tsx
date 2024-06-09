import React, { useState } from "react";
import { TextInput } from "../../inputs/TextInput/TextInput";
import {
  LoginModal,
  LoginWrap,
  Title,
  CreateAccount,
  ErrorMsg,
} from "./Login.style";
import { Button } from "../../inputs/Button/Button.style";
import {
  signUp,
  initForm,
} from "./login-service";
import { useUserStore } from "../../store/useUserStore";

interface IForm {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  error: string | null;
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
  const { error, login } = useUserStore();

  const [mode, setMode] = useState("login");
  const [formData, setForm] = useState<IForm>(
    initForm
  );

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModeChange = () => {
    setForm(initForm);
    setMode((prev) =>
      prev === "login" ? "signUp" : "login"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      userName,
      password,
      confirmPassword,
      email,
    } = formData;
    if (mode === "login") {
      login({ userName, password });
    }
    if (mode === "signUp") {
      if (password !== confirmPassword) {
        setForm((prev) => ({
          ...prev,
          error: "password doesn't match",
        }));
        return;
      }
      signUp({ email, password, userName });
    }
  };

  return (
    <LoginWrap>
      <form onSubmit={handleSubmit}>
        <LoginModal>
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
          {error && <ErrorMsg>{error}</ErrorMsg>}

          <Button type="submit">Submit</Button>

          <CreateAccount>
            {accountString[mode].question}
            <span onClick={handleModeChange}>
              {accountString[mode].link}
            </span>
          </CreateAccount>
        </LoginModal>
      </form>
    </LoginWrap>
  );
};
