import axios from "axios";

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
  const url = "api/user/register";
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
