import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="h-[600px] w-[500px] border flex flex-col items-center">
          <div className="mt-5">
            <h1>Auto HR</h1>
            <h4>Register</h4>
          </div>
          <div className="flex flex-col gap-1 w-[90%] mt-4">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Gmail" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm password" />
            <Button className="mt-3">Sign up</Button>
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
