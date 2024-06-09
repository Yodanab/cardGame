import { create } from "zustand";
import { login } from "../pages/Login/login-service";

interface UserStore {
  id: string | null;
  userName: string;
  coins: number;
  email: string;
  error: string | null;
  login: (reqBody) => Promise<void>;
}

export const useUserStore = create<UserStore>(
  (set) => ({
    id: null,
    userName: "",
    email: "",
    coins: 0,
    error: null,
    async login(reqBody) {
      try {
        const data = await login(reqBody);
        set({
          userName: data.userName,
          id: data.id,
          email: data.email,
          coins: data.coins,
          error: null,
        });
      } catch (err) {
        set({ error: err.response.data.msg });
      }
    },
  })
);
