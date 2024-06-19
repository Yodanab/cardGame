import { KeyIcon } from "frontend/core/icons/Key";

export const inputsArr = {
  login: [
    {
      key: "userName",
      label: "User Name",
      type: "text",
      Icon: null,
    },
    {
      key: "password",
      label: "Password",
      type: "password",
      Icon: KeyIcon,
    },
  ],
  signUp: [
    {
      key: "email",
      label: "Email",
      type: "text",
      Icon: null,
    },
    {
      key: "userName",
      label: "User Name",
      type: "text",
      Icon: null,
    },
    {
      key: "password",
      label: "Password",
      type: "password",

      Icon: null,
    },
    {
      key: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      Icon: null,
    },
  ],
};

export const accountString = {
  login: {
    question: `Don't have an account?`,
    link: "Sign up here",
  },
  signUp: {
    question: `Already have an account?`,
    link: "Login here",
  },
};

export function getFormState() {
  return {
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
}
