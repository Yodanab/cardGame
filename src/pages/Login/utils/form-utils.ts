import { KeyIcon } from "core/icons/Key";
import { z } from "zod";

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

const requiredString = z.string().min(1, {
  message: "This field is required",
});

const SignUpSchema = z
  .object({
    userName: requiredString,
    password: z.string().min(6, {
      message:
        "Password must contain at least 6 character(s)",
    }),
    confirmPassword: z.string(),
    email: z.string().email({
      message: "Please enter a valid email",
    }),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

const LoginSchema = z.object({
  userName: requiredString,
  password: requiredString,
});

export const schema = {
  login: LoginSchema,
  signUp: SignUpSchema,
};
