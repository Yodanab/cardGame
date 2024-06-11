import axios from "axios";

export const login = async ({
  email,
  password,
}) => {
  const url = "api/user/login";
  const { data } = await axios.post(url, {
    email,
    password,
  });
  return data;
};

export const signUp = async ({
  userName,
  password,
  email,
  confirmPassword,
}) => {
  const url = "api/user/register";

  const { data } = await axios.post(url, {
    userName,
    password,
    confirmPassword,
    email,
  });
  return data;
};
