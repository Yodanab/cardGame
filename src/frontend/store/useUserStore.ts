import { create } from "zustand";
import {
  login,
  signUp,
  checkAuth,
} from "frontend/api/user";

interface UserStore {
  userInfo: {
    id: string | null;
    userName: string;
    coins: number;
    email: string;
  };
  loading: boolean;
  login: (reqBody) => Promise<void>;
  signUp: (reqBody) => Promise<void>;
  checkAuth: () => Promise<void>;
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
    async signUp(reqBody) {
      const data = await signUp(reqBody);
      set({
        userInfo: {
          userName: data.userName,
          id: data.id,
          email: data.email,
          coins: data.coins,
        },
      });
    },
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
    async checkAuth() {
      set({ loading: true });
      const useData = await checkAuth();
      set({
        userInfo: {
          userName: useData.userName,
          id: useData.id,
          email: useData.email,
          coins: useData.coins,
        },
        loading: false,
      });
    },
  })
);
