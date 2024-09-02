import { create } from "zustand";

type userType = {
  id: string | null;
  name: string | null;
  image: string | null;
};

type TokenStore = {
  token: string | null;
  userInfo: userType | null;
  setToken: () => void;
  deleteToken: () => void;
  setUserInfo: () => void;
};

export const useTokenStore = create<TokenStore>((set) => ({
  token:
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null,

  userInfo:
    typeof window !== "undefined"
      ? (() => {
          const userInfoString = localStorage.getItem("userInfo");
          if (userInfoString) {
            try {
              return JSON.parse(userInfoString);
            } catch (error) {
              console.error("Error parsing userInfo from localStorage:", error);
              return { id: null, name: null, image: null };
            }
          } else {
            return { id: null, name: null, image: null };
          }
        })()
      : { id: null, name: null, image: null },
  setToken: () => {
    const newToken = localStorage.getItem("accessToken") as string;
    set({ token: newToken });
  },

  deleteToken: () => {
    set({ token: null, userInfo: { id: null, name: null, image: null } });
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
    }
  },
  setUserInfo: () => {
    const userInfoString =
      typeof window !== "undefined" ? localStorage.getItem("userInfo") : null;
    const userInfo = userInfoString
      ? JSON.parse(userInfoString)
      : { id: null, name: null, image: null };
    set({ userInfo });
  },
}));
