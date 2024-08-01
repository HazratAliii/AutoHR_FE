import { UserSignUp } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSignUp = () => {
  mutationFn: async (userSignUp: UserSignUp) => {
    return await axios.post("http://localhost:5000/auth/signup", userSignUp);
  };
};
