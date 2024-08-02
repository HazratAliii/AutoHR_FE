"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUp } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type formFields = {
  firstName: string;
  lastName: string;
  gmail: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { mutate } = useSignUp();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formFields>();

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    console.log(data);
    const obj = {
      first_name: data.firstName,
      last_name: data.lastName,
      gmail: data.gmail,
      password: data.password,
    };
    await mutate(obj, {
      onSuccess: () => {
        router.push("/login");
      },
      onError: () => {
        console.log("Error");
      },
    });
  };

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
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-red-500">This field is required</span>
                )}

                <Input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-red-500">This field is required</span>
                )}

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

                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}

                <Button
                  className="mt-3 w-full"
                  type="submit"
                  // disabled={isLoading}
                >
                  Sign up
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <Button className="mt-4">Sign up with Google</Button>
            <div className="flex justify-center">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
