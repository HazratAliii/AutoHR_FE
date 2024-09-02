"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthService from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useTokenStore } from "@/app/stores/auth.store";

type formFields = {
  gmail: string;
  password: string;
};

const Login = () => {
  const { mutate } = AuthService.useSignIn();
  const router = useRouter();
  const setToken = useTokenStore((state) => state.setToken);
  const token = useTokenStore((state) => state.token);
  const setUserInfo = useTokenStore((state) => state.setUserInfo);
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["googleLogin"],
  //   queryFn: () => AuthService.useGoogleLogin(),
  //   enabled,
  // });
  // console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formFields>();

  const onSubmit: SubmitHandler<formFields> = async (data: formFields) => {
    await mutate(data, {
      onSuccess: (res: any) => {
        setToken();
        setUserInfo();
        router.push("/");
      },
      onError: () => {
        console.log("Failed");
      },
    });
  };

  const handleGoogleLogin = () => {
    // console.log("Inside handle function");
    // setEnabled(true);
    console.log(
      "first ",
      (window.location.href = "http://localhost:5000/auth/google/callback")
    );
  };
  useEffect(() => {
    // Debugging: Log the token value
    // Redirect based on token presence
    token ? router.push("/") : router.push("/login");
  }, [token, router]);

  return (
    <>
      <div className="h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="h-[600px] w-[500px] border flex flex-col items-center">
          <div className="mt-5">
            <h1 className="font-bold">Auto HR</h1>
            <h4>Register</h4>
          </div>
          <div className="flex flex-col gap-1 w-[90%] mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-1">
                <Input
                  type="email"
                  placeholder="Gmail"
                  {...register("gmail", {
                    required: true,
                    pattern: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                  })}
                />
                {errors.gmail && (
                  <span className="text-red-500">Invalid email address</span>
                )}

                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}

                <Button
                  className="mt-3 w-full"
                  type="submit"
                  // disabled={isLoading}
                >
                  Sign in
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <Button className="mt-4" onClick={handleGoogleLogin}>
              Sign in with Google
            </Button>
            <div className="flex justify-center">
              <p>
                New here?{" "}
                <Link href="/register" className="text-blue-600">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
