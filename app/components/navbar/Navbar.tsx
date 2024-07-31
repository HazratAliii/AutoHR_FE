"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-[50px] border">
        <div className="w-[90%] flex justify-between mx-auto">
          <div className="my-auto font-bold">
            <h1>Auto HR</h1>
          </div>
          <div>
            <div className="h-[40px] w-[120px]  flex items-center rounded-md mt-1">
              <Button>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
