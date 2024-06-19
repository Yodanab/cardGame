import axios from "axios";

export const login = async ({
  userName,
  password,
}) => {
  const url = "/api/user/login";
  const encoded = btoa(`${userName}:${password}`);
  const { data } = await axios.get(url, {
    headers: {
      Authorization: "Basic " + encoded,
    },
  });
  return data;
};

export const signUp = async ({
  userName,
  password,
  email,
  confirmPassword,
}) => {
  const url = "/api/user/register";
  const { data } = await axios.post(url, {
    userName,
    password,
    confirmPassword,
    email,
  });
  return data;
};
