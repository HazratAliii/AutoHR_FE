import { create } from "zustand";

type TokenStore = {
  token: string | null;
  setToken: () => void;
  deleteToken: () => void;
};

export const useTokenStore = create<TokenStore>((set) => ({
  token:
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null,
  setToken: () => {
    const newToken = localStorage.getItem("accessToken") as string;
    set({ token: newToken });
  },
  deleteToken: () => {
    set({ token: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
    }
  },
}));
