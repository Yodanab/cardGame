import axios from "axios";

export const login = async ({
  userName,
  password,
}) => {
  const url = "api/v1/mgmt/login";
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

export const checkAuth = async () => {
  try {
    const { data } = await axios.get(
      "api/v1/mgmt/auth"
    );
    return data;
  } catch (err) {
    return {
      userName: "",
      id: null,
      email: "",
      coins: 0,
    };
  }
};
