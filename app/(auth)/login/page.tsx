import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="h-[600px] w-[500px] border flex flex-col items-center">
          <div className="mt-5">
            <h1>Auto HR</h1>
            <h4>Login</h4>
          </div>
          <div className="flex flex-col gap-1 w-[90%] mt-4">
            <Input type="email" placeholder="Gmail" />
            <Input type="password" placeholder="Password" />
            <Button className="mt-3">Sign in</Button>
            <div className="flex items-center justify-center mt-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <Button className="mt-4">Sign in with Google</Button>
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
