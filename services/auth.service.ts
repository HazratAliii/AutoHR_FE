import { UserSignIn, UserSignUp } from "@/types";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

class AuthService {
  static useSignUp = (): any => {
    return useMutation({
      mutationFn: async (userSignUp: UserSignUp) => {
        return await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
          userSignUp
        );
      },
    });
  };

  static useSignIn = (): any => {
    return useMutation({
      mutationFn: async (userSignIn: UserSignIn) => {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
          userSignIn,
          { withCredentials: true }
        );
        return response.data;
      },

      onSuccess: (data) => {
        localStorage.setItem("accessToken", data.access_token);
        const tempObj = {
          id: data.id,
          name: data.first_name + " " + data.last_name,
          image: data.image,
        };
        localStorage.setItem("userInfo", JSON.stringify(tempObj));
      },
      onError: (error) => {
        console.log("Sign in error ", error);
      },
    });
  };

  static useGoogleLogin = async () => {
    try {
      console.log("Inside useGoogle login");
      const response = await axios.get(
        // `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/callback`
        `http://localhost:5000/auth/google/callback`
      );
      return response.data;
    } catch (e) {
      console.log("Inside google catch");
      throw new Error("Failed to login");
    }
  };
  static getNewToken = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/newtoken`
    );
    return response.data;
  };
}

export default AuthService;
