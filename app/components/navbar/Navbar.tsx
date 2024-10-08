"use client";
import { useTokenStore } from "@/app/stores/auth.store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const token = useTokenStore((state) => state.token);
  const deleteToken = useTokenStore((state) => state.deleteToken);
  const [isClient, setIsClient] = useState(false);
  const handleLogout = () => {
    deleteToken();
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="w-full h-[50px] border">
        <div className="w-[90%] flex justify-between mx-auto">
          <div className="my-auto font-bold">
            <h1>Auto HR</h1>
          </div>
          <div>
            <div className="h-[40px] w-[120px] flex items-center rounded-md mt-1">
              <Button onClick={handleLogout}>
                {isClient && (
                  <Link href={token ? "/login" : "/register"}>
                    {token ? "Logout" : "Signup"}
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
