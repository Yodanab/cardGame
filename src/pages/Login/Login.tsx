import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { z } from "zod";
import {
  LoginModal,
  LoginWrap,
  Title,
  CreateAccount,
  ErrorMsg,
} from "./Login.style";
import { signUp } from "./login-service";
import { useUserStore } from "../../store/useUserStore";
import { getErrorMessage } from "utils/get-error-message";
import { getFormState, inputsArr, accountString } from "./utils/form-utils";
import { Button } from "@nextui-org/react";

const FormSchema = z.object({
  userName: z.string({
    message: "This field is required",
  }),
  password: z.string().min(6),
  confirmPassword: z.string(),
  email: z.string().email({ message: "Not Valid Email" }),
});

const title = {
  login: "Login",
  signUp: "Sign Up",
};

type Mode = keyof typeof title;

export const Login = () => {
  const { login } = useUserStore();

  const [mode, setMode] = useState<Mode>("login");
  const [formData, setForm] = useState(getFormState());
  const [{ isLoading, error, formError }, setStatus] = useState({
    formError: getFormState(),
    isLoading: false,
    error: null,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // setForm((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  const handleModeChange = () => {
    setForm(getFormState());
    setMode((prev) => (prev === "login" ? "signUp" : "login"));
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
    const formValidation = FormSchema.safeParse(formData);
    if (!formValidation.success) {
      const inputsError = formValidation.error.issues.reduce(
        (f, issue) => {
          const field = issue.path[0];
          f[field] = issue.message;
          return f;
        },
        { ...formError }
      );
      setStatus((prev) => ({
        formError: inputsError,
        error: true,
        isLoading: false,
      }));
      return;
    }

    const { userName, password, confirmPassword, email } = formData;
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
      if (password !== confirmPassword) {
        setStatus({
          formError: getFormState(),
          isLoading: false,
          error: "password doesn't match",
        });
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

          {inputsArr[mode].map(({ title, key, type, Icon, validFun }, i) => {
            return (
              <Input
                isRequired
                label={title}
                onChange={onInputChange}
                name={key}
                value={formData[key].value}
                isInvalid={formError[key]}
                type={type}
                key={i}
                errorMessage={formError[key]}
                startContent={Icon && <Icon />}
              />
            );
          })}

          {error && <ErrorMsg>{error}</ErrorMsg>}

          <Button size="lg" color="primary" type="submit">
            Submit
          </Button>

          <CreateAccount>
            {accountString[mode].question}
            <span onClick={handleModeChange}>{accountString[mode].link}</span>
          </CreateAccount>
        </LoginModal>
      </form>
    </LoginWrap>
  );
};
