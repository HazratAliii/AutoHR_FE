import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[50px] border">
        <div className="w-[90%] flex justify-between mx-auto">
          <div className="my-auto font-bold">
            <h1>Auto HR</h1>
          </div>
          <div>
            <div className="h-[40px] w-[120px] bg-[#6D31ED] flex items-center rounded-md mt-1">
              {/* <p className="mx-auto text-white">Signup/Signin</p> */}
              <Button>Signup/Signin</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
