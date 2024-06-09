import axios from "axios";

export const initForm = {
  userName: "",
  password: "",
  confirmPassword: "",
  email: "",
  error: null,
};

export const login = async ({
  userName,
  password,
}) => {
  const url = "api/user/login";
  const { data } = await axios.post(url, {
    userName,
    password,
  });
  return data;
};

export const signUp = async ({
  userName,
  password,
  email,
}) => {
  const url = "user/register";
  try {
    const { data } = await axios.post(url, {
      userName,
      password,
      email,
    });
    return data;
  } catch (err) {
    throw Error;
  }
};
