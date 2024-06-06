import { create } from "zustand";
import { login } from "../Login/login-service";

interface UserStore {
  id: string;
  userName: string;
  coins: number;
  email: string;
  error: unknown;
  login: (reqBody) => Promise<void>;
}

export const useUserStore = create<UserStore>(
  (set) => ({
    id: "",
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
        });
      } catch (err) {
        set({ error: err });
      }
    },
  })
);
