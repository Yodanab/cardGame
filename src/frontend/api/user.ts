import axios from "axios";

const baseUserURL = '/api/user';

export const login = async ({
  userName,
  password,
}) => {
  const url = `${baseUserURL}/login`;
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
  const url = `${baseUserURL}/register`;
  const { data } = await axios.post(url, {
    userName,
    password,
    confirmPassword,
    email,
  });
  return data;
};
