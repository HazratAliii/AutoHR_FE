"use client";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useTokenStore } from "../stores/auth.store";
import TeamService from "@/services/team.service";
import { useQuery } from "@tanstack/react-query";
import TeamCard from "../components/teamCard/TeamCard";
import ProfileCard from "../components/profileCard/ProfileCard";
import { BeatLoader } from "react-spinners";
import { Dialogg } from "../components/dialog/Dialog";
import { IoMdAdd } from "react-icons/io";

const Teams = () => {
  const token = useTokenStore((state) => state.token);
  const { data, isLoading, error } = useQuery({
    queryKey: ["yourTeams"],
    queryFn: () => TeamService.fetchYourTeams(token as string),
  });
  if (error)
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div>This is your teams page</div>
      </div>
    );
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <BeatLoader className="" />
      </div>
    );
  function handleClick(e: any): void {}

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex mt-5 mx-5 gap-5 flex-wrap cursor-pointer flex-col">
          <div className="flex items-center gap-2">
            <span>
              <IoMdAdd size={22} />
            </span>
            <Dialogg />
          </div>
          <br />
          {data.map((item: any) => (
            <div onClick={handleClick} key={item.id} data-id={item.id}>
              <ProfileCard
                // @ts-ignore
                prop={{
                  name: item.name,
                  designation: item?.bio ? item.bio : "",
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

export default Teams;
