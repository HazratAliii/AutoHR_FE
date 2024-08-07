import { UserSignIn, UserSignUp } from "@/types";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = "http://localhost:5000";
class AuthService {
  static useSignUp = (): any => {
    return useMutation({
      mutationFn: async (userSignUp: UserSignUp) => {
        return await axios.post(`${BASE_URL}/auth/signup`, userSignUp);
      },
    });
  };

  static useSignIn = (): any => {
    return useMutation({
      mutationFn: async (userSignIn: UserSignIn) => {
        const response = await axios.post(
          `${BASE_URL}/auth/signin`,
          userSignIn
        );
        return response.data;
      },
      onSuccess: (data) => {
        localStorage.setItem("accessToken", data.access_token);
      },
      onError: (error) => {
        console.log("Sign in error ", error);
      },
    });
  };
}

export default AuthService;
