import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import {
  LoginModal,
  LoginWrap,
  Title,
  CreateAccount,
  ErrorMsg,
} from "./Login.style";

import { useUserStore } from "../store/useUserStore";
import { getErrorMessage } from "frontend/utils/get-error-message";
import {
  getFormState,
  inputsArr,
  accountString,
} from "./utils/form-utils";
import {
  LoginSchema,
  SignUpSchema,
} from "shared/schema/schema";

const schema = {
  login: LoginSchema,
  signUp: SignUpSchema,
};

const title = {
  login: "Login",
  signUp: "Sign Up",
};

type Mode = keyof typeof title;

export const Login = () => {
  const { login, signUp } = useUserStore();

  const [mode, setMode] = useState<Mode>("login");
  const [formData, setForm] = useState(
    getFormState()
  );
  const [
    { isLoading, error, formError },
    setStatus,
  ] = useState({
    formError: getFormState(),
    isLoading: false,
    error: null,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModeChange = () => {
    setForm(getFormState());
    setMode((prev) =>
      prev === "login" ? "signUp" : "login"
    );
    setStatus({
      isLoading: false,
      error: null,
      formError: getFormState(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus((prev) => ({
      ...prev,
      error: false,
      isLoading: true,
    }));
    const formValidation = schema[mode].safeParse(
      formData
    );
    if (!formValidation.success) {
      const inputsError = formValidation.error.issues.reduce(
        (f, issue) => {
          const field = issue.path[0];
          f[field] = issue.message;
          return f;
        },
        getFormState()
      );
      setStatus((prev) => ({
        formError: inputsError,
        error: true,
        isLoading: false,
      }));
      return;
    }
    setStatus((prev) => ({
      ...prev,
      formError: getFormState(),
    }));
    const {
      userName,
      password,
      email,
      confirmPassword,
    } = formData;
    if (mode === "login") {
      try {
        await login({ userName, password });
      } catch (err) {
        setStatus({
          formError: getFormState(),
          isLoading: false,
          error: getErrorMessage(err),
        });
      }
    }
    if (mode === "signUp") {
      try {
        signUp({
          email,
          password,
          userName,
          confirmPassword,
        });
      } catch (err) {
        setStatus({
          formError: getFormState(),
          isLoading: false,
          error: getErrorMessage(err),
        });
      }
    }
  };
  return (
    <LoginWrap>
      <form onSubmit={handleSubmit}>
        <LoginModal>
          <Title>{title[mode]}</Title>

          {inputsArr[mode].map(
            ({ label, key, type, Icon }, i) => {
              return (
                <Input
                  isRequired
                  onChange={onInputChange}
                  label={label}
                  name={key}
                  value={formData[key]}
                  isInvalid={formError[key]}
                  type={type}
                  key={i}
                  errorMessage={formError[key]}
                  startContent={Icon && <Icon />}
                />
              );
            }
          )}

          <Button
            isLoading={isLoading}
            size="lg"
            color="primary"
            type="submit"
          >
            Submit
          </Button>

          <CreateAccount>
            {accountString[mode].question}
            <span onClick={handleModeChange}>
              {accountString[mode].link}
            </span>
          </CreateAccount>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </LoginModal>
      </form>
    </LoginWrap>
  );
};
