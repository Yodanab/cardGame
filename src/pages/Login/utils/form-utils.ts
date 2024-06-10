import { KeyIcon } from "core/icons/Key";

export const inputsArr = {
  login: [
    {
      key: "userName",
      title: "User Name",
      type: "text",
      Icon: null,
    },
    {
      key: "password",
      title: "Password",
      type: "password",
      Icon: KeyIcon,
    },
  ],
  signUp: [
    {
      key: "email",
      title: "Email",
      type: "email",
      Icon: null,
    },
    {
      key: "userName",
      title: "User Name",
      type: "text",
      Icon: null,
    },
    {
      key: "password",
      title: "Password",
      type: "password",

      Icon: null,
    },
    {
      key: "confirmPassword",
      title: "Confirm Password",
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
