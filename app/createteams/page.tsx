"use client";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useTokenStore } from "../stores/auth.store";
import UserService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

const CreateTeams = () => {
  const router = useRouter();
  const token = useTokenStore((state) => state.token);
  const { data, isLoading, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => UserService.fetchAllUsers(token as string),
  });
  const handleSubmit = (e: any) => {
    e.prevetDefault();
    console.log("first ", e);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div>
          <div className="flex-1 h-[calc(100vh-50px)] overflow-auto">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter team name" />
              {/* <div className="flex justify-between">
                <div className="flex justify-between">
                  <div>img</div>
                  <div>name</div>
                </div>
                <div>
                  <button type="submit"> Add </button>
                </div>
              </div> */}
              <button type="submit"> add </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTeams;
