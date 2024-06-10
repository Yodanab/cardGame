import { create } from "zustand";
import { login } from "../pages/Login/login-service";

interface UserStore {
  userInfo: {
    id: string | null;
    userName: string;
    coins: number;
    email: string;
  };

  login: (reqBody) => Promise<void>;
}

export const useUserStore = create<UserStore>(
  (set) => ({
    userInfo: {
      id: null,
      userName: "",
      email: "",
      coins: 0,
    },
    loading: false,
    error: null,
    async login(reqBody) {
      const data = await login(reqBody);
      set({
        userInfo: {
          userName: data.userName,
          id: data.id,
          email: data.email,
          coins: data.coins,
        },
      });
    },
  })
);
