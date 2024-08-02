import { UserSignUp } from "@/types";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = (): any => {
  return useMutation({
    mutationFn: async (userSignUp: UserSignUp) => {
      return await axios.post("http://localhost:5000/auth/signup", userSignUp);
    },
  });
};
