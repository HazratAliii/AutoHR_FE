"use client";
import React from "react";
import { FaPeopleGroup, FaUsersLine } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHome } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PopOverContent from "../popoverContent/PopOverContent";
import { useSidebarStore } from "@/app/stores/sidebar.store";
import Link from "next/link";
import { useTokenStore } from "@/app/stores/auth.store";

const Sidebar = () => {
  const setActiveComponent = useSidebarStore(
    (state) => state.setActiveComponent
  );
  const activeComponent = useSidebarStore((state) => state.activeComponent);
  const userInfo = useTokenStore((state) => state.userInfo);
  const menuItems = [
    { id: "", label: "Home page", icon: FaHome },
    { id: "teams", label: "Your teams", icon: FaPeopleGroup },
    { id: "createteams", label: "Create team", icon: IoAddCircleSharp },
    { id: "employees", label: "Employees", icon: FaUsersLine },
  ];
  return (
    <div className="w-[200px] border md:h-[calc(100vh-50px)]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-start items-center mt-4 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeComponent === item.id;
            return (
              <Link
                href={`/${item.id}`}
                className={`flex justify-start gap-2 items-center cursor-pointer p-2 rounded-md ${
                  isActive ? "bg-[#262E3F] text-white" : ""
                }`}
                key={item.id}
              >
                <div
                  className={`flex justify-start gap-2 items-center cursor-pointer p-2 rounded-md ${
                    isActive ? "bg-[#262E3F] text-white" : ""
                  }`}
                  onClick={() => setActiveComponent(item.id)}
                >
                  <span>
                    <Icon size={22} />
                  </span>
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center mb-7">
          <Popover>
            <PopoverTrigger>
              <div className="flex justify-start gap-4 items-center cursor-pointer">
                <span>
                  <Avatar>
                    <AvatarImage
                      src={`${userInfo?.image} ? ${userInfo?.image} : https://github.com/shadcn.png`}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </span>
                <span className="font-bold">
                  {userInfo ? userInfo.name : ""}
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopOverContent />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
