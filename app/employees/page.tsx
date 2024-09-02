"use client";
import React from "react";
import { useTokenStore } from "../stores/auth.store";
import { useQuery } from "@tanstack/react-query";
import UserService from "@/services/user.service";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import ProfileCard from "../components/profileCard/ProfileCard";
import Sidebar from "../components/sidebar/Sidebar";

const Employees = () => {
  const token = useTokenStore((state) => state.token);
  const { data, isLoading, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => UserService.fetchAllUsers(token as string),
  });
  const router = useRouter();

  const handleClick = (e: any) => {
    const id = e.currentTarget.getAttribute("data-id");
    router.push(`profile/${id}`);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <BeatLoader className="" />
      </div>
    );
  if (error) return <div>Error...</div>;
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex mt-5 mx-5 gap-5 flex-wrap cursor-pointer">
          {data.map((item: any) => (
            <div onClick={handleClick} key={item.id} data-id={item.id}>
              <ProfileCard
                // @ts-ignore
                prop={{
                  name: item.first_name + " " + item.last_name,
                  designation: "Jr. software engineer",
                  image: item.image,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Employees;
