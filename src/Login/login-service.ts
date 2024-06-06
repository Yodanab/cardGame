import axios from "axios";

export const login = async ({
  userName,
  password,
}) => {
  const url = "/user/login";
  try {
    const { data } = await axios.post(url, {
      username: userName,
      password,
    });
    return data;
  } catch {
    throw Error;
  }
};
