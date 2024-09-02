"use client";
import Profile from "@/app/components/profile/Profile";
import Sidebar from "@/app/components/sidebar/Sidebar";
import { useTokenStore } from "@/app/stores/auth.store";
import UserService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const token = useTokenStore((state) => state.token);
  const pathname = usePathname();
  const temp = pathname.split("/");
  const router = useRouter();

  if (!token) router.push("/login");

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleUser"],
    queryFn: () =>
      UserService.fetchUserInfo(token as string, temp[temp.length - 1]),
  });
  console.log(data);
  if (isLoading)
    <div className="h-full flex justify-center items-center min-h-screen bg-gray-300">
      <BeatLoader />
    </div>;
  if (error)
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 h-[calc(100vh-50px)] overflow-auto">
          {/* {renderComponent} */}
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 h-[calc(100vh-50px)] overflow-auto">
          <h1>Not found</h1>
        </div>
      </div>
    );
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-50px)] overflow-auto">
        <Profile data={data} />
      </div>
    </div>
  );
};

export default Home;
